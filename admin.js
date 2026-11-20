/* ============================================================================
   GOLDHEN ADMIN v2 — ZINTEGROWANY TERMINARZ (STYL LIBRUS) + LEPSZY WYBÓR NAUCZYCIELI
   Korzysta ze wspólnych danych i funkcji z base.js:
   CLOUD_SCHEDULE_CONFIG, TEACHERS_PDF_DB, MONTHS_PL_NOM,
   cloudDaysOff, cloudTeacherAbsences, fetchCloudScheduleData,
   getHolidaysForDate, getAbsencesForDate, formatIsoLocal, snapDateToWeekday,
   playCustomWav, navigateUp
   ============================================================================ */
(() => {
  let ghAccessToken = "";
  let ghLoggedEmail = "";
  let ghUseLocalMode = false;

  const initDay = snapDateToWeekday(new Date(), 1);
  let ghYear = initDay.getFullYear();
  let ghMonth = initDay.getMonth();
  let ghSelectedIso = formatIsoLocal(initDay);
  let ghListScope = "DAY";       // "DAY" (wybrany dzień) | "ALL" (wszystkie wpisy)
  let ghEditorType = null;       // null | "holiday" | "absence"
  let ghEditingId = null;        // null (dodawanie) | id wpisu (edycja PATCH)
  let ghPendingDeleteKey = null; // "days_off:123" dla 2-klikowego potwierdzenia
  let ghDeleteResetTimer = null;

  /* Stan nowego wyboru nauczycieli */
  let ghSelectedTeachers = [];   // tablica kodów nauczycieli (np. ["ŁPolkowski"])
  let ghMultiTeacherMode = false;
  let ghTeacherQuery = "";
  let ghTeacherCategory = "all"; // all | it | lang | stem | tech | wf | tutor
  let ghTeacherHighlightIdx = 0;

  /* Referencje DOM */
  const loginStepEl = document.getElementById("gh-login-step");
  const workspaceStepEl = document.getElementById("gh-workspace-step");
  const loginStatusEl = document.getElementById("gh-status-msg");
  const actionStatusEl = document.getElementById("gh-action-msg");
  const userEmailEl = document.getElementById("gh-user-email");
  const monthTitleEl = document.getElementById("gh-month-title");
  const calGridEl = document.getElementById("gh-cal-grid");
  const dayLabelEl = document.getElementById("gh-selected-day-label");
  const entriesListEl = document.getElementById("gh-entries-list");
  const tabDayBtn = document.getElementById("gh-tab-day");
  const tabAllBtn = document.getElementById("gh-tab-all");

  /* Formularz dodawania / edycji */
  const editorPanelEl = document.getElementById("gh-editor-panel");
  const editorTitleEl = document.getElementById("gh-editor-title");
  const entryFormEl = document.getElementById("gh-entry-form");
  const fieldsHolidayEl = document.getElementById("gh-fields-holiday");
  const fieldsAbsenceEl = document.getElementById("gh-fields-absence");
  const holTitleInput = document.getElementById("gh-hol-title");
  const legacyTeacherSelect = document.getElementById("gh-abs-teacher"); // fallback jeśli stary HTML
  const absAllDayCheck = document.getElementById("gh-abs-all-day");
  const absHoursRowEl = document.getElementById("gh-abs-hours-row");
  const absTimeFromInput = document.getElementById("gh-abs-time-from");
  const absTimeToInput = document.getElementById("gh-abs-time-to");
  const absNoteInput = document.getElementById("gh-abs-note");
  const rangeToggleCheck = document.getElementById("gh-range-toggle");
  const dateFromInput = document.getElementById("gh-date-from");
  const dateToWrapEl = document.getElementById("gh-date-to-wrap");
  const dateToInput = document.getElementById("gh-date-to");
  const saveEntryBtn = document.getElementById("gh-save-entry-btn");

  /* Referencje nowego selektora nauczycieli */
  const teacherPickerWrapEl = document.getElementById("gh-teacher-picker");
  const teacherChipsEl = document.getElementById("gh-teacher-chips");
  const teacherSearchInput = document.getElementById("gh-teacher-search");
  const teacherClearBtn = document.getElementById("gh-teacher-search-clear");
  const teacherMultiBtn = document.getElementById("gh-teacher-multi-toggle");
  const teacherCatBarEl = document.getElementById("gh-teacher-cats");
  const teacherListEl = document.getElementById("gh-teacher-list");

  const WEEKDAYS_PL_FULL = [
    "Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"
  ];

  function escHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Normalizacja polskich znaków dla błyskawicznego szukania (np. zebrowski -> Żebrowski) */
  function normalizePl(str) {
    return String(str || "")
      .toLowerCase()
      .replace(/ł/g, "l")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function getSortedTeachers() {
    if (typeof TEACHERS_PDF_DB === "undefined") return [];
    return TEACHERS_PDF_DB.slice().sort((a, b) => a.name.localeCompare(b.name, "pl"));
  }

  function matchTeacherCategory(teacher, cat) {
    if (cat === "all") return true;
    const r = (teacher.role || "").toLowerCase();
    if (cat === "tutor") return r.includes("wychowawca");
    if (cat === "it") return /(it|programist|bazy|informatyk|sieciow)/.test(r);
    if (cat === "lang") return /(język|angielski|niemiecki|hiszpański)/.test(r);
    if (cat === "stem") return /(matematyka|fizyka|chemia|biologia|geografia)/.test(r);
    if (cat === "tech") return /(mechanicz|logistycz|biznes)/.test(r);
    if (cat === "wf") return /(wychowanie fizyczne|bezpieczeństwo|bhp)/.test(r);
    return true;
  }

  function getFilteredTeachersForPicker() {
    const q = normalizePl(ghTeacherQuery.trim());
    return getSortedTeachers().filter((t) => {
      if (!matchTeacherCategory(t, ghTeacherCategory)) return false;
      if (!q) return true;
      const hay = normalizePl(`${t.name} ${t.code} ${t.role}`);
      return q.split(/\s+/).every((word) => hay.includes(word));
    });
  }

  function isTeacherAbsentOnDate(code, isoDate) {
    return (cloudTeacherAbsences || []).some(
      (a) => a.teacher_code === code && isoDate >= a.date_from && isoDate <= (a.date_to || a.date_from)
    );
  }

  /* Fallback dla starego <select> jeśli istnieje w DOM */
  function populateLegacySelect() {
    if (!legacyTeacherSelect || typeof TEACHERS_PDF_DB === "undefined") return;
    legacyTeacherSelect.innerHTML = getSortedTeachers()
      .map((t) => `<option value="${escHtml(t.code)}">${escHtml(t.name)} (${escHtml(t.code)})</option>`)
      .join("");
  }
  populateLegacySelect();

  function renderSelectedTeacherChips() {
    if (!teacherChipsEl) return;
    if (ghSelectedTeachers.length === 0) {
      teacherChipsEl.innerHTML = `<span class="gh-tp-placeholder">Wybierz nauczyciela z listy poniżej...</span>`;
      return;
    }
    const all = getSortedTeachers();
    teacherChipsEl.innerHTML = ghSelectedTeachers.map((code) => {
      const t = all.find((x) => x.code === code);
      const label = t ? `${t.name} (${t.code})` : code;
      return `
        <span class="gh-tp-chip">
          <span>${escHtml(label)}</span>
          <button type="button" class="gh-tp-chip-x" data-remove-code="${escHtml(code)}" title="Usuń z wyboru">×</button>
        </span>
      `;
    }).join("");
  }

  function renderTeacherPickerList() {
    if (!teacherPickerWrapEl || !teacherListEl) return;

    const list = getFilteredTeachersForPicker();
    const checkDate = (dateFromInput && dateFromInput.value) || ghSelectedIso;

    if (ghTeacherHighlightIdx >= list.length) {
      ghTeacherHighlightIdx = Math.max(0, list.length - 1);
    }

    if (teacherClearBtn) {
      teacherClearBtn.style.display = ghTeacherQuery ? "inline-flex" : "none";
    }

    if (teacherMultiBtn) {
      const canMulti = ghEditingId === null;
      teacherMultiBtn.style.display = canMulti ? "inline-flex" : "none";
      teacherMultiBtn.classList.toggle("active", ghMultiTeacherMode && canMulti);
      teacherMultiBtn.textContent = ghMultiTeacherMode ? `✓ Wielu (${ghSelectedTeachers.length})` : "+ Wielu";
    }

    if (teacherCatBarEl) {
      teacherCatBarEl.querySelectorAll(".gh-tp-cat").forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-cat") === ghTeacherCategory);
      });
    }

    renderSelectedTeacherChips();

    if (list.length === 0) {
      teacherListEl.innerHTML = `<div class="gh-tp-empty">Brak nauczycieli dla „${escHtml(ghTeacherQuery)}”.</div>`;
      return;
    }

    teacherListEl.innerHTML = list.map((t, idx) => {
      const isSelected = ghSelectedTeachers.includes(t.code);
      const isHi = idx === ghTeacherHighlightIdx;
      const absentThen = isTeacherAbsentOnDate(t.code, checkDate);

      return `
        <button type="button" class="gh-tp-item ${isSelected ? "selected" : ""} ${isHi ? "hi" : ""}" data-tcode="${escHtml(t.code)}" data-tidx="${idx}">
          <div class="gh-tp-item-top">
            <span class="gh-tp-name">${isSelected ? "✓ " : ""}${escHtml(t.name)}</span>
            <span class="gh-tp-code">${escHtml(t.code)}</span>
          </div>
          <div class="gh-tp-role">
            <span>${escHtml(t.role)}</span>
            ${absentThen ? `<span class="gh-tp-absent-tag">Już nieobecny</span>` : ""}
          </div>
        </button>
      `;
    }).join("");

    const hiEl = teacherListEl.querySelector(".gh-tp-item.hi");
    if (hiEl && document.activeElement === teacherSearchInput) {
      hiEl.scrollIntoView({ block: "nearest" });
    }
  }

  function selectTeacherCode(code) {
    if (!code) return;
    if (ghMultiTeacherMode && ghEditingId === null) {
      if (ghSelectedTeachers.includes(code)) {
        ghSelectedTeachers = ghSelectedTeachers.filter((c) => c !== code);
      } else {
        ghSelectedTeachers.push(code);
      }
    } else {
      ghSelectedTeachers = [code];
    }
    if (legacyTeacherSelect) legacyTeacherSelect.value = ghSelectedTeachers[0] || "";
    playCustomWav("move");
    renderTeacherPickerList();
  }

  function showActionMsg(text, isOk = true) {
    if (!actionStatusEl) return;
    actionStatusEl.textContent = text;
    actionStatusEl.classList.toggle("ok", isOk);
    if (text) {
      clearTimeout(actionStatusEl._timer);
      actionStatusEl._timer = setTimeout(() => {
        actionStatusEl.textContent = "";
      }, 3600);
    }
  }

  function getAuthHeaders() {
    const headers = {
      "apikey": CLOUD_SCHEDULE_CONFIG.supabaseAnonKey,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    };
    if (ghAccessToken) {
      headers["Authorization"] = `Bearer ${ghAccessToken}`;
    } else if (CLOUD_SCHEDULE_CONFIG.supabaseAnonKey.startsWith("eyJ")) {
      headers["Authorization"] = `Bearer ${CLOUD_SCHEDULE_CONFIG.supabaseAnonKey}`;
    }
    return headers;
  }

  /* Synchronizacja pamięci (chmura lub tryb lokalny) z całym systemem ZSAGames */
  async function syncScheduleEverywhere() {
    if (ghUseLocalMode) {
      try {
        cloudDaysOff = JSON.parse(localStorage.getItem("zsa_days_off") || "[]");
        cloudTeacherAbsences = JSON.parse(localStorage.getItem("zsa_teacher_absences") || "[]");
      } catch (_) {}
      if (typeof renderCalendarUI === "function") renderCalendarUI();
      if (typeof renderTeachersUI === "function") renderTeachersUI();
      renderGoldHenUI();
      return;
    }

    await fetchCloudScheduleData();
    if (typeof renderCalendarUI === "function") renderCalendarUI();
    if (typeof renderTeachersUI === "function") renderTeachersUI();
    renderGoldHenUI();
  }

  /* ================= EDYTOR: DODAWANIE I EDYCJA WPISÓW ================= */
  function openEditor(type, entry = null) {
    ghEditorType = type;
    ghEditingId = entry ? entry.id : null;

    if (editorPanelEl) editorPanelEl.style.display = "flex";
    if (fieldsHolidayEl) fieldsHolidayEl.style.display = type === "holiday" ? "flex" : "none";
    if (fieldsAbsenceEl) fieldsAbsenceEl.style.display = type === "absence" ? "flex" : "none";

    const isEdit = Boolean(entry);
    if (editorTitleEl) {
      editorTitleEl.textContent = type === "holiday"
        ? (isEdit ? "Edytuj Dzień Wolny" : "Dodaj Dzień Wolny")
        : (isEdit ? "Edytuj Nieobecność Nauczyciela" : "Dodaj Nieobecność Nauczyciela");
    }
    if (saveEntryBtn) {
      saveEntryBtn.textContent = isEdit ? "Zapisz zmiany" : "Dodaj wpis";
    }

    const fromDate = entry ? entry.date_from : ghSelectedIso;
    const toDate = entry ? (entry.date_to || entry.date_from) : ghSelectedIso;
    const isRange = toDate > fromDate;

    dateFromInput.value = fromDate;
    dateToInput.value = toDate;
    rangeToggleCheck.checked = isRange;
    dateToWrapEl.style.display = isRange ? "flex" : "none";

    if (type === "holiday") {
      holTitleInput.value = entry ? (entry.title || "") : "";
      holTitleInput.required = true;
      setTimeout(() => holTitleInput.focus(), 40);
    } else {
      holTitleInput.required = false;
      ghMultiTeacherMode = false;
      ghTeacherQuery = "";
      ghTeacherCategory = "all";
      ghTeacherHighlightIdx = 0;
      if (teacherSearchInput) teacherSearchInput.value = "";

      if (entry && entry.teacher_code) {
        ghSelectedTeachers = [entry.teacher_code];
        if (legacyTeacherSelect) legacyTeacherSelect.value = entry.teacher_code;
      } else {
        ghSelectedTeachers = [];
      }

      const allDay = entry ? Boolean(entry.all_day) : true;
      absAllDayCheck.checked = allDay;
      absHoursRowEl.style.display = allDay ? "none" : "grid";
      absTimeFromInput.value = (entry && entry.time_from) ? entry.time_from : "08:00";
      absTimeToInput.value = (entry && entry.time_to) ? entry.time_to : "12:35";
      absNoteInput.value = (entry && entry.note) ? entry.note : "";

      renderTeacherPickerList();
      if (teacherSearchInput) setTimeout(() => teacherSearchInput.focus(), 40);
    }

    const detailsPanel = document.getElementById("gh-details-panel");
    if (detailsPanel) detailsPanel.scrollTo({ top: 0, behavior: "smooth" });
    playCustomWav("select");
  }

  function closeEditor(silent = false) {
    ghEditorType = null;
    ghEditingId = null;
    if (editorPanelEl) editorPanelEl.style.display = "none";
    if (document.activeElement && document.activeElement.closest("#gh-editor-panel")) {
      document.activeElement.blur();
    }
    if (!silent) playCustomWav("back");
  }

  /* ================= RENDEROWANIE KALENDARZA I LISTY (STYL LIBRUS) ================= */
  function renderGoldHenCalendar() {
    if (!calGridEl || !monthTitleEl) return;
    monthTitleEl.textContent = `${MONTHS_PL_NOM[ghMonth]} ${ghYear}`;

    const daysInMonth = new Date(ghYear, ghMonth + 1, 0).getDate();
    const todayIso = formatIsoLocal(new Date());

    let firstWeekdayOffset = 0;
    for (let d = 1; d <= daysInMonth; d++) {
      const dow = new Date(ghYear, ghMonth, d).getDay();
      if (dow >= 1 && dow <= 5) {
        firstWeekdayOffset = dow - 1;
        break;
      }
    }

    let html = "";
    for (let i = 0; i < firstWeekdayOffset; i++) {
      html += `<div class="cal-day-cell empty"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dow = new Date(ghYear, ghMonth, day).getDay();
      if (dow === 0 || dow === 6) continue;

      const iso = `${ghYear}-${String(ghMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const holidays = getHolidaysForDate(iso);
      const absences = getAbsencesForDate(iso);

      const classes = ["cal-day-cell"];
      if (iso === todayIso) classes.push("is-today");
      if (holidays.length) classes.push("has-holiday");
      if (absences.length) classes.push("has-absence");
      if (iso === ghSelectedIso) classes.push("selected");

      html += `
        <div class="${classes.join(" ")}" data-gh-iso="${iso}">
          <span class="cal-day-num">${day}</span>
          <div class="cal-day-dots">
            ${holidays.length ? `<i class="cal-dot holiday" title="Dzień wolny"></i>` : ""}
            ${absences.length ? `<i class="cal-dot absence" title="Nieobecności"></i><span class="cal-abs-count">${absences.length}</span>` : ""}
          </div>
        </div>
      `;
    }

    calGridEl.innerHTML = html;

    Array.from(calGridEl.querySelectorAll(".cal-day-cell[data-gh-iso]")).forEach((cell) => {
      cell.addEventListener("click", () => {
        ghSelectedIso = cell.getAttribute("data-gh-iso");
        ghListScope = "DAY";
        if (ghEditorType && !ghEditingId) {
          dateFromInput.value = ghSelectedIso;
          if (!rangeToggleCheck.checked || dateToInput.value < ghSelectedIso) {
            dateToInput.value = ghSelectedIso;
          }
          if (ghEditorType === "absence") renderTeacherPickerList();
        }
        playCustomWav("move");
        renderGoldHenCalendar();
        renderGoldHenEntries();
      });
    });
  }

  function renderGoldHenEntries() {
    if (!entriesListEl || !dayLabelEl) return;

    const [y, m, d] = ghSelectedIso.split("-").map(Number);
    const weekdayName = WEEKDAYS_PL_FULL[new Date(y, m - 1, d).getDay()] || "";
    dayLabelEl.textContent = ghListScope === "ALL"
      ? `Wszystkie zapisane wpisy (${cloudDaysOff.length + cloudTeacherAbsences.length})`
      : `${weekdayName}, ${String(d).padStart(2, "0")}.${String(m).padStart(2, "0")}.${y}`;

    tabDayBtn?.classList.toggle("active", ghListScope === "DAY");
    tabAllBtn?.classList.toggle("active", ghListScope === "ALL");

    const holidays = ghListScope === "ALL"
      ? cloudDaysOff.slice().sort((a, b) => a.date_from.localeCompare(b.date_from))
      : getHolidaysForDate(ghSelectedIso);

    const absences = ghListScope === "ALL"
      ? cloudTeacherAbsences.slice().sort((a, b) => a.date_from.localeCompare(b.date_from))
      : getAbsencesForDate(ghSelectedIso);

    if (holidays.length === 0 && absences.length === 0) {
      entriesListEl.innerHTML = `
        <div class="cal-event-card">
          <div class="cal-event-tag" style="color:#7ec8ff;">Brak wpisów</div>
          <div class="cal-event-title">${ghListScope === "ALL" ? "Terminarz jest pusty" : "Normalny dzień zajęć"}</div>
          <div class="cal-event-meta">Użyj przycisków <strong>+ Dzień wolny</strong> lub <strong>+ Nieobecność</strong> powyżej, aby dodać wpis.</div>
        </div>
      `;
      return;
    }

    const holHtml = holidays.map((h) => {
      const delKey = `days_off:${h.id}`;
      const isConfirming = ghPendingDeleteKey === delKey;
      const dateStr = h.date_from === h.date_to ? h.date_from : `${h.date_from} → ${h.date_to}`;
      return `
        <div class="cal-event-card holiday gh-entry-card">
          <div class="gh-entry-main">
            <div class="cal-event-tag">Dzień wolny</div>
            <div class="cal-event-title">${escHtml(h.title)}</div>
            <div class="cal-event-meta">Termin: ${escHtml(dateStr)}</div>
          </div>
          <div class="gh-entry-actions">
            <button type="button" class="gh-mini-btn edit" data-action="edit" data-type="holiday" data-id="${escHtml(h.id)}">Edytuj</button>
            <button type="button" class="gh-mini-btn danger ${isConfirming ? "confirming" : ""}" data-action="delete" data-table="days_off" data-id="${escHtml(h.id)}">${isConfirming ? "Potwierdź?" : "Usuń"}</button>
          </div>
        </div>
      `;
    }).join("");

    const absHtml = absences.map((a) => {
      const delKey = `teacher_absences:${a.id}`;
      const isConfirming = ghPendingDeleteKey === delKey;
      const dateStr = a.date_from === a.date_to ? a.date_from : `${a.date_from} → ${a.date_to}`;
      const timeStr = a.all_day ? "Cały dzień" : `${a.time_from} – ${a.time_to}`;
      return `
        <div class="cal-event-card absence gh-entry-card">
          <div class="gh-entry-main">
            <div class="cal-event-tag">Nieobecność nauczyciela</div>
            <div class="cal-event-title">${escHtml(a.teacher_name)} <span style="opacity:0.7;font-size:0.82rem;">(${escHtml(a.teacher_code)})</span></div>
            <div class="cal-event-meta">
              <strong>${escHtml(timeStr)}</strong> • ${escHtml(dateStr)}
              ${a.note ? `<br/>Uwaga: ${escHtml(a.note)}` : ""}
            </div>
          </div>
          <div class="gh-entry-actions">
            <button type="button" class="gh-mini-btn edit" data-action="edit" data-type="absence" data-id="${escHtml(a.id)}">Edytuj</button>
            <button type="button" class="gh-mini-btn danger ${isConfirming ? "confirming" : ""}" data-action="delete" data-table="teacher_absences" data-id="${escHtml(a.id)}">${isConfirming ? "Potwierdź?" : "Usuń"}</button>
          </div>
        </div>
      `;
    }).join("");

    entriesListEl.innerHTML = holHtml + absHtml;
  }

  /* Główna funkcja renderująca GoldHEN (eksportowana do window dla base.js) */
  function renderGoldHenUI() {
    if (!loginStepEl || !workspaceStepEl) return;
    const loggedIn = Boolean(ghAccessToken || ghUseLocalMode);
    loginStepEl.style.display = loggedIn ? "none" : "flex";
    workspaceStepEl.style.display = loggedIn ? "flex" : "none";

    if (loggedIn) {
      if (userEmailEl) {
        userEmailEl.textContent = ghUseLocalMode ? "Tryb lokalny" : (ghLoggedEmail || "Administrator");
      }
      renderGoldHenCalendar();
      renderGoldHenEntries();
      if (ghEditorType === "absence") renderTeacherPickerList();
    }
  }
  window.renderGoldHenUI = renderGoldHenUI;
  window.isGoldHenEditorOpen = () => Boolean(ghEditorType);
  window.closeGoldHenEditor = () => closeEditor(false);

  /* ================= OPERACJE CRUD: ZAPIS (POST / PATCH) I USUWANIE (DELETE) ================= */
  async function saveEntry(e) {
    e.preventDefault();
    if (!ghEditorType) return;

    const dateFrom = dateFromInput.value || ghSelectedIso;
    const dateTo = rangeToggleCheck.checked
      ? (dateToInput.value && dateToInput.value >= dateFrom ? dateToInput.value : dateFrom)
      : dateFrom;

    const isEdit = ghEditingId !== null;
    let table = "";
    let bodyPayload = null;

    if (ghEditorType === "holiday") {
      const title = holTitleInput.value.trim();
      if (!title) return showActionMsg("Podaj nazwę dnia wolnego.", false);
      table = "days_off";
      bodyPayload = { title, date_from: dateFrom, date_to: dateTo };
    } else {
      let codes = teacherPickerWrapEl ? ghSelectedTeachers.slice() : [legacyTeacherSelect?.value].filter(Boolean);
      if (codes.length === 0) {
        playCustomWav("back");
        return showActionMsg("Wybierz przynajmniej jednego nauczyciela z listy.", false);
      }
      if (isEdit) codes = [codes[0]];

      const allDay = absAllDayCheck.checked;
      const timeFrom = allDay ? null : (absTimeFromInput.value || "08:00");
      const timeTo = allDay ? null : (absTimeToInput.value || "12:35");
      const note = absNoteInput.value.trim() || null;

      table = "teacher_absences";
      const rows = codes.map((code) => {
        const tObj = (typeof TEACHERS_PDF_DB !== "undefined")
          ? TEACHERS_PDF_DB.find((t) => t.code === code)
          : null;
        return {
          teacher_code: code,
          teacher_name: tObj ? tObj.name : code,
          all_day: allDay,
          time_from: timeFrom,
          time_to: timeTo,
          date_from: dateFrom,
          date_to: dateTo,
          note
        };
      });
      bodyPayload = isEdit ? rows[0] : (rows.length === 1 ? rows[0] : rows);
    }

    if (ghUseLocalMode) {
      const lsKey = table === "days_off" ? "zsa_days_off" : "zsa_teacher_absences";
      let list = [];
      try { list = JSON.parse(localStorage.getItem(lsKey) || "[]"); } catch (_) {}

      if (isEdit) {
        list = list.map((item) => String(item.id) === String(ghEditingId) ? { ...item, ...bodyPayload } : item);
      } else {
        const toInsert = Array.isArray(bodyPayload) ? bodyPayload : [bodyPayload];
        toInsert.forEach((row, idx) => list.push({ id: Date.now() + idx, ...row }));
      }
      localStorage.setItem(lsKey, JSON.stringify(list));
      playCustomWav("select");
      showActionMsg(isEdit ? "Zaktualizowano wpis (lokalnie)." : "Dodano wpis (lokalnie).", true);
      ghSelectedIso = dateFrom;
      closeEditor(true);
      await syncScheduleEverywhere();
      return;
    }

    const endpoint = isEdit
      ? `${CLOUD_SCHEDULE_CONFIG.supabaseUrl}/rest/v1/${table}?id=eq.${encodeURIComponent(ghEditingId)}`
      : `${CLOUD_SCHEDULE_CONFIG.supabaseUrl}/rest/v1/${table}`;

    showActionMsg(isEdit ? "Zapisywanie zmian..." : "Wysyłanie na serwer...", true);

    try {
      const res = await fetch(endpoint, {
        method: isEdit ? "PATCH" : "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(bodyPayload)
      });
      if (!res.ok) {
        playCustomWav("back");
        return showActionMsg(`Błąd zapisu (${res.status}) — sprawdź sesję lub uprawnienia RLS.`, false);
      }
      playCustomWav("select");
      const addedCount = Array.isArray(bodyPayload) ? bodyPayload.length : 1;
      showActionMsg(
        isEdit
          ? "Zapisano zmiany w chmurze!"
          : (addedCount > 1 ? `Dodano ${addedCount} nieobecności do chmury!` : "Dodano wpis do chmury!"),
        true
      );
      ghSelectedIso = dateFrom;
      const [yy, mm] = dateFrom.split("-").map(Number);
      ghYear = yy;
      ghMonth = mm - 1;
      closeEditor(true);
      await syncScheduleEverywhere();
    } catch (_) {
      playCustomWav("back");
      showActionMsg("Brak połączenia z serwerem Supabase.", false);
    }
  }

  async function deleteEntry(table, id) {
    const key = `${table}:${id}`;
    if (ghPendingDeleteKey !== key) {
      ghPendingDeleteKey = key;
      clearTimeout(ghDeleteResetTimer);
      ghDeleteResetTimer = setTimeout(() => {
        ghPendingDeleteKey = null;
        renderGoldHenEntries();
      }, 3200);
      playCustomWav("move");
      renderGoldHenEntries();
      return;
    }

    ghPendingDeleteKey = null;
    clearTimeout(ghDeleteResetTimer);

    if (ghUseLocalMode) {
      const lsKey = table === "days_off" ? "zsa_days_off" : "zsa_teacher_absences";
      let list = [];
      try { list = JSON.parse(localStorage.getItem(lsKey) || "[]"); } catch (_) {}
      list = list.filter((x) => String(x.id) !== String(id));
      localStorage.setItem(lsKey, JSON.stringify(list));
      playCustomWav("back");
      showActionMsg("Usunięto wpis (lokalnie).", true);
      await syncScheduleEverywhere();
      return;
    }

    try {
      const res = await fetch(
        `${CLOUD_SCHEDULE_CONFIG.supabaseUrl}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`,
        { method: "DELETE", headers: getAuthHeaders() }
      );
      if (!res.ok) {
        playCustomWav("back");
        return showActionMsg(`Błąd usuwania (${res.status}).`, false);
      }
      playCustomWav("back");
      showActionMsg("Usunięto wpis z chmury.", true);
      if (String(ghEditingId) === String(id)) closeEditor(true);
      await syncScheduleEverywhere();
    } catch (_) {
      playCustomWav("back");
      showActionMsg("Brak połączenia z serwerem Supabase.", false);
    }
  }

  /* ================= ZDARZENIA SELEKTORA NAUCZYCIELI ================= */
  teacherSearchInput?.addEventListener("input", (e) => {
    ghTeacherQuery = e.target.value || "";
    ghTeacherHighlightIdx = 0;
    renderTeacherPickerList();
  });

  teacherSearchInput?.addEventListener("keydown", (e) => {
    const list = getFilteredTeachersForPicker();
    if (e.key === "ArrowDown") {
      e.preventDefault();
      e.stopPropagation();
      if (list.length > 0) {
        ghTeacherHighlightIdx = (ghTeacherHighlightIdx + 1) % list.length;
        renderTeacherPickerList();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      e.stopPropagation();
      if (list.length > 0) {
        ghTeacherHighlightIdx = (ghTeacherHighlightIdx - 1 + list.length) % list.length;
        renderTeacherPickerList();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      const target = list[ghTeacherHighlightIdx];
      if (target) selectTeacherCode(target.code);
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      if (ghTeacherQuery) {
        ghTeacherQuery = "";
        teacherSearchInput.value = "";
        ghTeacherHighlightIdx = 0;
        renderTeacherPickerList();
      } else {
        teacherSearchInput.blur();
      }
    }
  });

  teacherClearBtn?.addEventListener("click", () => {
    ghTeacherQuery = "";
    ghTeacherHighlightIdx = 0;
    if (teacherSearchInput) {
      teacherSearchInput.value = "";
      teacherSearchInput.focus();
    }
    renderTeacherPickerList();
  });

  teacherMultiBtn?.addEventListener("click", () => {
    if (ghEditingId !== null) return;
    ghMultiTeacherMode = !ghMultiTeacherMode;
    if (!ghMultiTeacherMode && ghSelectedTeachers.length > 1) {
      ghSelectedTeachers = [ghSelectedTeachers[0]];
    }
    playCustomWav("move");
    renderTeacherPickerList();
  });

  teacherCatBarEl?.addEventListener("click", (e) => {
    const btn = e.target.closest(".gh-tp-cat");
    if (!btn) return;
    ghTeacherCategory = btn.getAttribute("data-cat") || "all";
    ghTeacherHighlightIdx = 0;
    playCustomWav("move");
    renderTeacherPickerList();
  });

  teacherListEl?.addEventListener("click", (e) => {
    const btn = e.target.closest(".gh-tp-item");
    if (!btn) return;
    ghTeacherHighlightIdx = Number(btn.getAttribute("data-tidx")) || 0;
    selectTeacherCode(btn.getAttribute("data-tcode"));
  });

  teacherChipsEl?.addEventListener("click", (e) => {
    const xBtn = e.target.closest("[data-remove-code]");
    if (!xBtn) return;
    const code = xBtn.getAttribute("data-remove-code");
    ghSelectedTeachers = ghSelectedTeachers.filter((c) => c !== code);
    playCustomWav("back");
    renderTeacherPickerList();
  });

  dateFromInput?.addEventListener("change", () => {
    if (ghEditorType === "absence") renderTeacherPickerList();
  });

  /* ================= ZDARZENIA UI (LOGOWANIE, KALENDARZ, PRZYCISKI) ================= */
  document.getElementById("gh-login-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("gh-email").value.trim();
    const password = document.getElementById("gh-password").value;
    if (!email || !password) return;

    loginStatusEl.classList.remove("ok");
    loginStatusEl.textContent = "Logowanie do serwera...";

    try {
      const res = await fetch(`${CLOUD_SCHEDULE_CONFIG.supabaseUrl}/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers: {
          "apikey": CLOUD_SCHEDULE_CONFIG.supabaseAnonKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok || !data.access_token) {
        loginStatusEl.textContent = "Błąd logowania — sprawdź email i hasło.";
        playCustomWav("back");
        return;
      }
      ghAccessToken = data.access_token;
      ghLoggedEmail = email;
      ghUseLocalMode = false;
      document.getElementById("gh-password").value = "";
      loginStatusEl.textContent = "";
      playCustomWav("select");
      await syncScheduleEverywhere();
    } catch (_) {
      loginStatusEl.textContent = "Brak połączenia z serwerem uwierzytelniania.";
      playCustomWav("back");
    }
  });

  document.getElementById("gh-local-mode-btn")?.addEventListener("click", async () => {
    ghUseLocalMode = true;
    ghAccessToken = "";
    ghLoggedEmail = "Tryb lokalny";
    loginStatusEl.textContent = "";
    playCustomWav("select");
    await syncScheduleEverywhere();
  });

  document.getElementById("gh-logout-btn")?.addEventListener("click", () => {
    ghAccessToken = "";
    ghLoggedEmail = "";
    ghUseLocalMode = false;
    closeEditor(true);
    playCustomWav("back");
    renderGoldHenUI();
  });

  document.getElementById("gh-prev-month")?.addEventListener("click", () => {
    ghMonth--;
    if (ghMonth < 0) { ghMonth = 11; ghYear--; }
    ghSelectedIso = formatIsoLocal(snapDateToWeekday(new Date(ghYear, ghMonth, 1), 1));
    playCustomWav("move");
    renderGoldHenCalendar();
    renderGoldHenEntries();
  });

  document.getElementById("gh-next-month")?.addEventListener("click", () => {
    ghMonth++;
    if (ghMonth > 11) { ghMonth = 0; ghYear++; }
    ghSelectedIso = formatIsoLocal(snapDateToWeekday(new Date(ghYear, ghMonth, 1), 1));
    playCustomWav("move");
    renderGoldHenCalendar();
    renderGoldHenEntries();
  });

  document.getElementById("gh-today-btn")?.addEventListener("click", () => {
    const now = snapDateToWeekday(new Date(), 1);
    ghYear = now.getFullYear();
    ghMonth = now.getMonth();
    ghSelectedIso = formatIsoLocal(now);
    ghListScope = "DAY";
    playCustomWav("select");
    renderGoldHenCalendar();
    renderGoldHenEntries();
  });

  document.getElementById("gh-refresh-btn")?.addEventListener("click", async () => {
    playCustomWav("select");
    showActionMsg("Odświeżanie danych...", true);
    await syncScheduleEverywhere();
    showActionMsg("Zsynchronizowano z serwerem.", true);
  });

  tabDayBtn?.addEventListener("click", () => {
    ghListScope = "DAY";
    playCustomWav("move");
    renderGoldHenEntries();
  });

  tabAllBtn?.addEventListener("click", () => {
    ghListScope = "ALL";
    playCustomWav("move");
    renderGoldHenEntries();
  });

  document.getElementById("gh-add-holiday-btn")?.addEventListener("click", () => openEditor("holiday", null));
  document.getElementById("gh-add-absence-btn")?.addEventListener("click", () => openEditor("absence", null));
  document.getElementById("gh-cancel-entry-btn")?.addEventListener("click", () => closeEditor(false));

  absAllDayCheck?.addEventListener("change", (e) => {
    absHoursRowEl.style.display = e.target.checked ? "none" : "grid";
  });

  rangeToggleCheck?.addEventListener("change", (e) => {
    dateToWrapEl.style.display = e.target.checked ? "flex" : "none";
    if (e.target.checked && (!dateToInput.value || dateToInput.value < dateFromInput.value)) {
      dateToInput.value = dateFromInput.value;
    }
  });

  /* Szybkie presety godzin lekcyjnych w formularzu nieobecności */
  document.querySelectorAll(".gh-hour-preset").forEach((btn) => {
    btn.addEventListener("click", () => {
      absAllDayCheck.checked = false;
      absHoursRowEl.style.display = "grid";
      absTimeFromInput.value = btn.getAttribute("data-from") || "08:00";
      absTimeToInput.value = btn.getAttribute("data-to") || "12:35";
      playCustomWav("move");
    });
  });

  entryFormEl?.addEventListener("submit", saveEntry);

  /* Delegacja kliknięć Edytuj / Usuń na liście wpisów */
  entriesListEl?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const action = btn.getAttribute("data-action");
    const id = btn.getAttribute("data-id");

    if (action === "edit") {
      const type = btn.getAttribute("data-type");
      const source = type === "holiday" ? cloudDaysOff : cloudTeacherAbsences;
      const found = source.find((item) => String(item.id) === String(id));
      if (found) openEditor(type, found);
    } else if (action === "delete") {
      const table = btn.getAttribute("data-table");
      deleteEntry(table, id);
    }
  });
})();
