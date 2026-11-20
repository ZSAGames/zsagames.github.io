/* =========================================================================
   ZSAGames — Aplikacja "Szybki Librus" (Native PS4 Orbis OS + Render API)
   ========================================================================= */
(function () {
  "use strict";

  const LIBRUS_RENDER_API_URL = "https://zsagames-librusapi.onrender.com";
  const HEALTH_TIMEOUT_MS = 65000;
  const HEALTH_POLL_MS = 35000;

  let librusData = null;
  let librusActiveTab = "grades";
  let sessionCreds = null;

  // Stany selekcji Master-Detail
  let selectedGradeSubject = "";
  let selectedAbsenceId = "";
  let selectedTopicSubject = "ALL";
  let quickStatFilter = "ALL"; // ALL | nb | u | s | zw | topic

  let serverCheckController = null;
  let serverWakeTimer = null;
  let serverPollTimer = null;
  let serverRetryTimer = null;

  const $ = (id) => document.getElementById(id);

  function sfx(type) {
    if (typeof playCustomWav === "function") {
      try {
        playCustomWav(type);
      } catch (_) {}
    }
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function classifyAbsence(item) {
    const rawType = String(item.type || "").toLowerCase().trim();
    if (rawType === "u" || rawType.includes("uspr")) return "u";
    if (rawType === "nb" || rawType.includes("nieobec")) return "nb";
    if (rawType === "s" || rawType === "su" || rawType.includes("spóźn") || rawType.includes("spozn")) return "s";
    if (rawType === "zw" || rawType.includes("zwoln")) return "zw";
    return "other";
  }

  function gradeColorClass(val) {
    const clean = String(val).trim();
    if (clean === "+" || clean === "np" || clean === "bz" || clean === "-") return "lib-g-neutral";
    const num = parseFloat(clean.replace("+", ".5").replace("-", ""));
    if (Number.isNaN(num)) return "lib-g-neutral";
    if (num >= 5) return "lib-g-high";
    if (num >= 4) return "lib-g-good";
    if (num >= 2) return "lib-g-mid";
    return "lib-g-low";
  }

  function extractNormalizedSubjects(rawGrades) {
    if (!Array.isArray(rawGrades)) return [];

    return rawGrades
      .map((subj) => {
        const collected = [];
        if (Array.isArray(subj.grades)) {
          subj.grades.forEach((g) => {
            if (g && (g.grade || g.value)) {
              collected.push({ ...g, semesterLabel: g.semester || "" });
            }
          });
        }
        if (Array.isArray(subj.semester)) {
          subj.semester.forEach((sem, idx) => {
            if (sem && Array.isArray(sem.grades)) {
              sem.grades.forEach((g) => {
                if (g && (g.grade || g.value)) {
                  collected.push({ ...g, semesterLabel: `Semestr ${idx + 1}` });
                }
              });
            }
          });
        }

        const averages = subj.semester
          ? subj.semester
              .map((s, i) =>
                s && (s.tempAverage || s.average)
                  ? `Sem. ${i + 1}: ${s.tempAverage || s.average}`
                  : ""
              )
              .filter(Boolean)
              .join(" • ")
          : subj.average
          ? `Śr. ${subj.average}`
          : "";

        return {
          name: subj.name || "Przedmiot",
          averages,
          grades: collected,
        };
      })
      .filter((s) => s.grades.length > 0)
      .sort((a, b) => a.name.localeCompare(b.name, "pl"));
  }

  /* ==================== STATUS SERWERA RENDER + PRZERWA TECHNICZNA LIBRUSA ==================== */
  function isLibrusViewVisible() {
    const view = $("zsa-librus-view");
    if (!view) return false;
    return window.getComputedStyle(view).display !== "none";
  }

  function setPill(pillId, textId, state, text) {
    const pill = $(pillId);
    const txt = $(textId);
    if (!pill || !txt) return;
    pill.className = `lib-server-pill ${state}`;
    txt.textContent = text;
  }

  function renderMaintenanceBanner(maintenance) {
    const banner = $("lib-maint-banner");
    const titleEl = $("lib-maint-title");
    const textEl = $("lib-maint-text");
    if (!banner || !titleEl || !textEl) return;

    if (maintenance && maintenance.active) {
      titleEl.textContent = maintenance.title || "Przerwa techniczna w systemie Librus";
      textEl.textContent =
        maintenance.message ||
        "Wykryto informację o przerwie technicznej na stronie portal.librus.pl/rodzina/synergia/loguj. Logowanie może być chwilowo niemożliwe.";
      banner.style.display = "flex";
      setPill("lib-portal-pill", "lib-portal-text", "warn", "Librus: Przerwa techniczna");
    } else {
      banner.style.display = "none";
    }
  }

  function stopServerTimers() {
    if (serverWakeTimer) {
      clearInterval(serverWakeTimer);
      serverWakeTimer = null;
    }
    if (serverRetryTimer) {
      clearTimeout(serverRetryTimer);
      serverRetryTimer = null;
    }
  }

  function stopServerPolling() {
    stopServerTimers();
    if (serverPollTimer) {
      clearInterval(serverPollTimer);
      serverPollTimer = null;
    }
    if (serverCheckController) {
      serverCheckController.abort();
      serverCheckController = null;
    }
  }

  async function pingRenderServer(force = false) {
    if (serverCheckController && !force) return;

    if (serverCheckController) {
      serverCheckController.abort();
      serverCheckController = null;
    }
    stopServerTimers();

    const controller = new AbortController();
    serverCheckController = controller;

    const startedAt = performance.now();
    setPill("lib-server-pill", "lib-server-text", "waking", "Sprawdzanie API...");
    setPill("lib-portal-pill", "lib-portal-text", "waking", "Librus: sprawdzam...");

    serverWakeTimer = setInterval(() => {
      const elapsedSec = Math.floor((performance.now() - startedAt) / 1000);
      if (elapsedSec >= 2) {
        setPill("lib-server-pill", "lib-server-text", "waking", `Wybudzanie (${elapsedSec}s)...`);
      }
    }, 1000);

    const timeoutId = setTimeout(() => controller.abort(), HEALTH_TIMEOUT_MS);

    try {
      const qs = force ? `force=1&_t=${Date.now()}` : `_t=${Date.now()}`;
      const res = await fetch(`${LIBRUS_RENDER_API_URL}/health?${qs}`, {
        method: "GET",
        cache: "no-store",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      stopServerTimers();

      if (!res.ok) {
        setPill("lib-server-pill", "lib-server-text", "waking", `Start Render (HTTP ${res.status})`);
        if (isLibrusViewVisible() && !librusData) {
          serverRetryTimer = setTimeout(() => pingRenderServer(true), 4000);
        }
        return;
      }

      const payload = await res.json().catch(() => null);
      if (payload && payload.ok === true) {
        const ms = Math.max(1, Math.round(performance.now() - startedAt));
        setPill("lib-server-pill", "lib-server-text", "online", `API Online • ${ms} ms`);

        if (payload.maintenance?.active) {
          renderMaintenanceBanner(payload.maintenance);
        } else {
          renderMaintenanceBanner(null);
          setPill("lib-portal-pill", "lib-portal-text", "online", "Librus: Dostępny");
        }
      } else {
        setPill("lib-server-pill", "lib-server-text", "offline", "Błąd odpowiedzi API");
      }
    } catch (err) {
      clearTimeout(timeoutId);
      stopServerTimers();
      if (err && err.name === "AbortError" && serverCheckController !== controller) return;
      setPill(
        "lib-server-pill",
        "lib-server-text",
        "offline",
        err?.name === "AbortError" ? "Timeout (kliknij)" : "API Offline"
      );
      setPill("lib-portal-pill", "lib-portal-text", "offline", "Librus: brak testu");
    } finally {
      if (serverCheckController === controller) {
        serverCheckController = null;
      }
    }
  }

  function syncServerWatcher() {
    const visible = isLibrusViewVisible();
    if (visible && !librusData) {
      pingRenderServer(false);
      if (!serverPollTimer) {
        serverPollTimer = setInterval(() => {
          if (isLibrusViewVisible() && !librusData && !document.hidden) {
            pingRenderServer(false);
          } else {
            stopServerPolling();
          }
        }, HEALTH_POLL_MS);
      }
    } else {
      stopServerPolling();
    }
  }

  function setLibrusStatus(msg, isError = false, loading = false) {
    const el = $("lib-status-msg");
    const loader = $("lib-loader-bar");
    if (loader) loader.style.display = loading ? "block" : "none";
    if (!el) return;
    if (!msg) {
      el.style.display = "none";
      el.textContent = "";
      return;
    }
    el.style.display = "block";
    el.className = isError ? "lib-status-msg lib-status-err" : "lib-status-msg lib-status-info";
    el.textContent = msg;
  }

  function switchLibrusTab(tabName, withSound = true) {
    librusActiveTab = tabName;
    if (withSound) sfx("move");
    document.querySelectorAll("#zsa-librus-view .lib-tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lib-tab") === tabName);
    });
    document.querySelectorAll("#zsa-librus-view .lib-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === `lib-panel-${tabName}`);
    });
  }

  /* ==================== ZAKŁADKA 1: OCENY (NATIVE PS4 TROPHIES SPLIT-PANE) ==================== */
  function renderGradeTile(g, showCat) {
    const val = g.grade ?? g.value ?? "—";
    const cat = g.category || "Inne / Brak kategorii";
    return `
      <div class="lib-grade-tile">
        <div class="lib-grade-score ${gradeColorClass(val)}">${escapeHtml(String(val))}</div>
        <div class="lib-grade-info">
          <div class="lib-grade-row-top">
            ${showCat ? `<span class="lib-grade-cat">${escapeHtml(cat)}</span>` : `<span class="lib-grade-date">${escapeHtml(g.date || "Brak daty")}</span>`}
            <div class="lib-grade-tags">
              ${g.weight ? `<span class="lib-w-pill">Waga ${escapeHtml(String(g.weight))}</span>` : ""}
              ${g.semesterLabel ? `<span class="lib-sem-tag">${escapeHtml(g.semesterLabel.replace("Semestr ", "S"))}</span>` : ""}
            </div>
          </div>
          <div class="lib-grade-meta">
            ${showCat && g.date ? `<span>${escapeHtml(g.date)}</span>` : ""}
            ${g.teacher ? `<span>${escapeHtml(g.teacher)}</span>` : ""}
          </div>
          ${g.comment ? `<div class="lib-grade-comment">${escapeHtml(g.comment)}</div>` : ""}
        </div>
      </div>
    `;
  }

  function renderGradesView() {
    const subjects = extractNormalizedSubjects(librusData?.grades || []);
    const listEl = $("lib-grade-subjects-list");
    const detailEl = $("lib-grades-detail-body");
    const stripEl = $("lib-grade-quick-strip");
    const countEl = $("lib-grade-subj-count");

    if (countEl) countEl.textContent = String(subjects.length);

    if (!listEl || !detailEl) return;

    if (subjects.length === 0) {
      listEl.innerHTML = `<div class="lib-empty-mini">Brak ocen</div>`;
      detailEl.innerHTML = `<div class="lib-empty-box"><strong>Brak ocen w dzienniku</strong></div>`;
      if (stripEl) stripEl.innerHTML = "";
      return;
    }

    if (!subjects.some((s) => s.name === selectedGradeSubject)) {
      selectedGradeSubject = subjects[0].name;
    }

    // 1. Lewa lista przedmiotów (zwarta, z podglądem średniej i licznika)
    listEl.innerHTML = subjects
      .map((s) => {
        const isActive = s.name === selectedGradeSubject;
        const previewGrades = s.grades
          .slice(0, 5)
          .map((g) => {
            const v = g.grade ?? g.value ?? "";
            return `<span class="lib-mini-dot ${gradeColorClass(v)}">${escapeHtml(String(v))}</span>`;
          })
          .join("");
        const more = s.grades.length > 5 ? `<span class="lib-mini-more">+${s.grades.length - 5}</span>` : "";

        return `
          <button type="button" class="lib-master-item ${isActive ? "active" : ""}" data-grade-subj="${escapeHtml(s.name)}">
            <div class="lib-master-top">
              <span class="lib-master-name">${escapeHtml(s.name)}</span>
              <span class="lib-master-avg">${escapeHtml(s.averages || `${s.grades.length} oc.`)}</span>
            </div>
            <div class="lib-master-sub">
              <div class="lib-mini-grades">${previewGrades}${more}</div>
              <span class="lib-master-count">${s.grades.length}</span>
            </div>
          </button>
        `;
      })
      .join("");

    const activeSubj = subjects.find((s) => s.name === selectedGradeSubject) || subjects[0];

    if ($("lib-grade-active-subject")) $("lib-grade-active-subject").textContent = activeSubj.name;
    if ($("lib-grade-active-avg")) $("lib-grade-active-avg").textContent = activeSubj.averages || `Ocen: ${activeSubj.grades.length}`;

    // Kategorie dla aktualnie wybranego przedmiotu
    const catSelect = $("lib-grade-cat-filter");
    const prevCat = catSelect?.value || "ALL";
    const subjectCats = [...new Set(activeSubj.grades.map((g) => g.category || "Inne / Brak kategorii"))].sort((a, b) =>
      a.localeCompare(b, "pl")
    );
    if (catSelect) {
      catSelect.innerHTML =
        `<option value="ALL">Wszystkie kategorie (${subjectCats.length})</option>` +
        subjectCats.map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
      catSelect.value = subjectCats.includes(prevCat) ? prevCat : "ALL";
    }

    const catFilter = catSelect?.value || "ALL";
    const sortMode = $("lib-grade-sort")?.value || "category";
    const visibleGrades = activeSubj.grades.filter((g) => {
      const c = g.category || "Inne / Brak kategorii";
      return catFilter === "ALL" || c === catFilter;
    });

    // 2. Pasek szybkiego podglądu wszystkich ocen w 1 rzędzie
    if (stripEl) {
      stripEl.innerHTML = visibleGrades
        .map((g) => {
          const val = g.grade ?? g.value ?? "—";
          const tip = `${g.category || "Ocena"}${g.weight ? ` • Waga ${g.weight}` : ""}${g.date ? ` • ${g.date}` : ""}`;
          return `<span class="lib-strip-chip ${gradeColorClass(val)}" title="${escapeHtml(tip)}">${escapeHtml(String(val))}</span>`;
        })
        .join("");
    }

    // 3. Prawy panel posegregowanych ocen
    if (visibleGrades.length === 0) {
      detailEl.innerHTML = `<div class="lib-empty-box"><strong>Brak ocen w wybranej kategorii</strong></div>`;
      return;
    }

    if (sortMode === "category") {
      const byCat = {};
      visibleGrades.forEach((g) => {
        const cat = g.category || "Inne / Brak kategorii";
        if (!byCat[cat]) byCat[cat] = [];
        byCat[cat].push(g);
      });

      detailEl.innerHTML = Object.entries(byCat)
        .sort(([a], [b]) => a.localeCompare(b, "pl"))
        .map(([cat, list]) => {
          const sorted = [...list].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
          return `
            <div class="lib-cat-section">
              <div class="lib-cat-header">
                <span>${escapeHtml(cat)}</span>
                <span class="lib-cat-count">${sorted.length}</span>
              </div>
              <div class="lib-grades-grid">
                ${sorted.map((g) => renderGradeTile(g, false)).join("")}
              </div>
            </div>
          `;
        })
        .join("");
    } else {
      const sorted = [...visibleGrades].sort((a, b) => {
        if (sortMode === "weight") {
          const diff = Number(b.weight || 0) - Number(a.weight || 0);
          if (diff !== 0) return diff;
        }
        return String(b.date || "").localeCompare(String(a.date || ""));
      });

      detailEl.innerHTML = `
        <div class="lib-grades-grid">
          ${sorted.map((g) => renderGradeTile(g, true)).join("")}
        </div>
      `;
    }
  }

  /* ==================== ZAKŁADKA 2: FREKWENCJA (MASTER-DETAIL INSPEKTOR) ==================== */
  function renderAttendanceInspector(item) {
    const panel = $("lib-att-inspector");
    if (!panel) return;

    if (!item) {
      panel.innerHTML = `
        <div class="lib-empty-box" style="margin:auto;">
          <strong>Wybierz wpis z listy po lewej</strong>
          <span>Tutaj wyświetli się pełny temat lekcji oraz szczegóły z dziennika.</span>
        </div>
      `;
      return;
    }

    const cls = classifyAbsence(item);
    const badgeClass =
      cls === "nb" ? "lib-b-nb" : cls === "u" ? "lib-b-u" : cls === "s" ? "lib-b-s" : cls === "zw" ? "lib-b-zw" : "";
    const detailUrl = item.url || `https://synergia.librus.pl/przegladaj_nb/szczegoly/${item.id}`;

    panel.innerHTML = `
      <div class="lib-insp-top">
        <div class="lib-insp-badges">
          <span class="lib-badge ${badgeClass}">${escapeHtml(item.type || "Wpis")}</span>
          <span class="lib-pill-cyan">Lekcja ${escapeHtml(String(item.lesson || "—"))}</span>
          <span class="lib-insp-date">${escapeHtml(item.date || "—")}</span>
        </div>
        <h3 class="lib-insp-subject">${escapeHtml(item.subject || "Przedmiot")}</h3>
      </div>

      <div class="lib-insp-topic-card">
        <span class="lib-insp-label">Zrealizowany temat zajęć</span>
        <div class="lib-insp-topic-text">
          ${
            item.extractedTopic
              ? escapeHtml(item.extractedTopic)
              : `<span class="lib-topic-empty">Nauczyciel nie wpisał tematu zajęć w dzienniku.</span>`
          }
        </div>
      </div>

      <div class="lib-insp-meta-grid">
        <div class="lib-insp-meta-item">
          <span class="lib-insp-label">Nauczyciel</span>
          <strong>${escapeHtml(item.teacher || "—")}</strong>
        </div>
        <div class="lib-insp-meta-item">
          <span class="lib-insp-label">Data dodania</span>
          <strong>${escapeHtml(item.addedAt || "—")}</strong>
        </div>
        <div class="lib-insp-meta-item">
          <span class="lib-insp-label">Dodał</span>
          <strong>${escapeHtml(item.addedBy || "—")}</strong>
        </div>
        <div class="lib-insp-meta-item">
          <span class="lib-insp-label">Wycieczka</span>
          <strong>${escapeHtml(item.trip || "Nie")}</strong>
        </div>
      </div>

      ${
        item.extractedComment
          ? `<div class="lib-insp-comment"><span class="lib-insp-label">Komentarz / Uwaga</span><div>${escapeHtml(item.extractedComment)}</div></div>`
          : ""
      }

      <div class="lib-insp-footer">
        <span class="lib-muted">ID wpisu: #${escapeHtml(String(item.id))}</span>
        <a class="dir-open-original-btn lib-compact-btn" href="${escapeHtml(detailUrl)}" target="_blank" rel="noopener noreferrer">
          Otwórz w Synergii ↗
        </a>
      </div>
    `;
  }

  function renderAttendanceView() {
    const allAbsences = librusData?.absences || [];
    const query = ($("lib-att-search")?.value || "").toLowerCase().trim();

    let nbTotal = 0, uTotal = 0, sTotal = 0, zwTotal = 0, topicsTotal = 0;
    allAbsences.forEach((item) => {
      const cls = classifyAbsence(item);
      if (cls === "nb") nbTotal++;
      else if (cls === "u") uTotal++;
      else if (cls === "s") sTotal++;
      else if (cls === "zw") zwTotal++;
      if (item.extractedTopic) topicsTotal++;
    });

    const statsEl = $("lib-att-stats");
    if (statsEl) {
      const pills = [
        { key: "ALL", label: "Wszystkie", val: allAbsences.length, tone: "" },
        { key: "nb", label: "nb", val: nbTotal, tone: "tone-red" },
        { key: "u", label: "uspr.", val: uTotal, tone: "tone-green" },
        { key: "s", label: "Spóźn.", val: sTotal, tone: "tone-gold" },
        { key: "zw", label: "Zwoln.", val: zwTotal, tone: "tone-blue" },
        { key: "topic", label: "Z tematem", val: topicsTotal, tone: "tone-cyan" },
      ];
      statsEl.innerHTML = pills
        .map(
          (p) => `
          <button type="button" class="lib-stat-pill ${p.tone} ${quickStatFilter === p.key ? "active" : ""}" data-stat-filter="${p.key}">
            <span>${p.label}</span>
            <strong>${p.val}</strong>
          </button>
        `
        )
        .join("");
    }

    const filtered = allAbsences.filter((item) => {
      const cls = classifyAbsence(item);
      if (quickStatFilter === "topic" && !item.extractedTopic) return false;
      if (["nb", "u", "s", "zw"].includes(quickStatFilter) && cls !== quickStatFilter) return false;
      if (query && !JSON.stringify(item).toLowerCase().includes(query)) return false;
      return true;
    });

    const listEl = $("lib-att-list");
    if (!listEl) return;

    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="lib-empty-mini">Brak wpisów dla wybranego filtra.</div>`;
      renderAttendanceInspector(null);
      return;
    }

    if (!filtered.some((x) => String(x.id) === String(selectedAbsenceId))) {
      selectedAbsenceId = String(filtered[0].id);
    }

    listEl.innerHTML = filtered
      .map((item) => {
        const cls = classifyAbsence(item);
        const isActive = String(item.id) === String(selectedAbsenceId);
        const tone = cls === "nb" ? "is-nb" : cls === "u" ? "is-u" : cls === "s" ? "is-s" : cls === "zw" ? "is-zw" : "";
        const badgeClass =
          cls === "nb" ? "lib-b-nb" : cls === "u" ? "lib-b-u" : cls === "s" ? "lib-b-s" : cls === "zw" ? "lib-b-zw" : "";

        return `
          <button type="button" class="lib-att-row ${tone} ${isActive ? "active" : ""}" data-abs-id="${escapeHtml(String(item.id))}">
            <div class="lib-att-row-top">
              <span class="lib-att-row-subj">${escapeHtml(item.subject || "Przedmiot")}</span>
              <span class="lib-badge ${badgeClass}">${escapeHtml(item.type || "Wpis")}</span>
            </div>
            <div class="lib-att-row-mid">
              <span>${escapeHtml(item.date || "—")}</span>
              <span>• Lek. ${escapeHtml(String(item.lesson || "—"))}</span>
            </div>
            <div class="lib-att-row-topic">
              ${item.extractedTopic ? escapeHtml(item.extractedTopic) : "<em>Brak tematu</em>"}
            </div>
          </button>
        `;
      })
      .join("");

    const activeItem = filtered.find((x) => String(x.id) === String(selectedAbsenceId)) || filtered[0];
    renderAttendanceInspector(activeItem);
  }

  /* ==================== ZAKŁADKA 3: TEMATY WG PRZEDMIOTÓW (SPLIT-PANE) ==================== */
  function renderTopicsView() {
    const absences = (librusData?.absences || []).filter((item) => Boolean(item.extractedTopic));
    const query = ($("lib-topics-search")?.value || "").toLowerCase().trim();
    const subjListEl = $("lib-topic-subjects-list");
    const detailEl = $("lib-topics-detail-body");

    if (!subjListEl || !detailEl) return;

    const countsBySubj = {};
    absences.forEach((item) => {
      const s = item.subject || "Inny przedmiot";
      countsBySubj[s] = (countsBySubj[s] || 0) + 1;
    });

    const subjects = Object.keys(countsBySubj).sort((a, b) => a.localeCompare(b, "pl"));
    if ($("lib-topic-subj-count")) $("lib-topic-subj-count").textContent = String(subjects.length);

    if (selectedTopicSubject !== "ALL" && !countsBySubj[selectedTopicSubject]) {
      selectedTopicSubject = "ALL";
    }

    subjListEl.innerHTML =
      `
        <button type="button" class="lib-master-item ${selectedTopicSubject === "ALL" ? "active" : ""}" data-topic-subj="ALL">
          <div class="lib-master-top">
            <span class="lib-master-name">Wszystkie przedmioty</span>
            <span class="lib-master-count">${absences.length}</span>
          </div>
        </button>
      ` +
      subjects
        .map(
          (s) => `
          <button type="button" class="lib-master-item ${selectedTopicSubject === s ? "active" : ""}" data-topic-subj="${escapeHtml(s)}">
            <div class="lib-master-top">
              <span class="lib-master-name">${escapeHtml(s)}</span>
              <span class="lib-master-count">${countsBySubj[s]}</span>
            </div>
          </button>
        `
        )
        .join("");

    const visible = absences.filter((item) => {
      if (selectedTopicSubject !== "ALL" && (item.subject || "Inny przedmiot") !== selectedTopicSubject) return false;
      if (
        query &&
        !`${item.subject || ""} ${item.extractedTopic || ""} ${item.date || ""} ${item.teacher || ""}`
          .toLowerCase()
          .includes(query)
      ) {
        return false;
      }
      return true;
    });

    if ($("lib-topic-active-subject")) {
      $("lib-topic-active-subject").textContent =
        selectedTopicSubject === "ALL" ? "Wszystkie odczytane tematy" : selectedTopicSubject;
    }
    if ($("lib-topic-active-count")) $("lib-topic-active-count").textContent = String(visible.length);

    if (visible.length === 0) {
      detailEl.innerHTML = `<div class="lib-empty-box"><strong>Brak tematów dla wybranych filtrów</strong></div>`;
      return;
    }

    detailEl.innerHTML = visible
      .map((it) => {
        const cls = classifyAbsence(it);
        const badgeClass =
          cls === "nb" ? "lib-b-nb" : cls === "u" ? "lib-b-u" : cls === "s" ? "lib-b-s" : cls === "zw" ? "lib-b-zw" : "";
        const detailUrl = it.url || `https://synergia.librus.pl/przegladaj_nb/szczegoly/${it.id}`;

        return `
          <div class="lib-topic-row">
            <div class="lib-topic-row-top">
              <span>
                <strong class="lib-topic-date">${escapeHtml(it.date || "—")}</strong>
                • Lek. ${escapeHtml(String(it.lesson || "—"))}
                ${selectedTopicSubject === "ALL" ? `• <strong style="color:#fff;">${escapeHtml(it.subject || "")}</strong>` : ""}
                • ${escapeHtml(it.teacher || "—")}
              </span>
              <span class="lib-topic-row-actions">
                <span class="lib-badge ${badgeClass}">${escapeHtml(it.type || "Wpis")}</span>
                <a class="lib-synergia-btn" href="${escapeHtml(detailUrl)}" target="_blank" rel="noopener noreferrer">↗</a>
              </span>
            </div>
            <div class="lib-topic-val">${escapeHtml(it.extractedTopic)}</div>
          </div>
        `;
      })
      .join("");
  }

  /* ==================== WYPEŁNIENIE PANELU PO ZALOGOWANIU ==================== */
  function populateDashboard() {
    const absences = librusData?.absences || [];
    const subjects = extractNormalizedSubjects(librusData?.grades || []);
    const totalGrades = subjects.reduce((sum, s) => sum + s.grades.length, 0);
    const totalTopics = absences.filter((a) => Boolean(a.extractedTopic)).length;

    const acc = librusData?.accountInfo;
    const st = acc?.student || acc || {};
    const fullName = st.nameSurname || [st.name, st.surname].filter(Boolean).join(" ") || "Uczeń ZSA";
    const initials = fullName
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");

    if ($("lib-user-initials")) $("lib-user-initials").textContent = initials || "ZSA";
    if ($("lib-user-name")) $("lib-user-name").textContent = fullName;
    if ($("lib-user-meta")) {
      const meta = [st.class ? `Klasa ${st.class}` : "", st.educator ? `Wych. ${st.educator}` : ""]
        .filter(Boolean)
        .join(" • ");
      $("lib-user-meta").textContent = meta || "Librus Synergia";
    }

    const luckyVal = librusData?.luckyNumber?.luckyNumber ?? librusData?.luckyNumber;
    const luckyPill = $("lib-lucky-pill");
    const luckyNum = $("lib-lucky-num");
    if (luckyPill && luckyNum) {
      if (luckyVal !== null && luckyVal !== undefined && String(luckyVal).trim() !== "") {
        luckyNum.textContent = String(luckyVal);
        luckyPill.style.display = "inline-flex";
      } else {
        luckyPill.style.display = "none";
      }
    }

    if ($("lib-count-grades")) $("lib-count-grades").textContent = String(totalGrades);
    if ($("lib-count-att")) $("lib-count-att").textContent = String(absences.length);
    if ($("lib-count-topics")) $("lib-count-topics").textContent = String(totalTopics);

    quickStatFilter = "ALL";
    selectedGradeSubject = subjects[0]?.name || "";
    selectedAbsenceId = absences[0] ? String(absences[0].id) : "";
    selectedTopicSubject = "ALL";

    stopServerPolling();
    if ($("lib-login-step")) $("lib-login-step").style.display = "none";
    if ($("lib-data-step")) $("lib-data-step").style.display = "flex";

    switchLibrusTab(librusActiveTab, false);
    renderGradesView();
    renderAttendanceView();
    renderTopicsView();
  }

  /* ==================== LOGOWANIE I OBSŁUGA BŁĘDÓW / PRZERWY TECHNICZNEJ ==================== */
  async function requestLibrusData(login, password, isRefresh = false) {
    const submitBtn = $("lib-submit-btn");
    const refreshBtn = $("lib-refresh-btn");

    if (isRefresh && refreshBtn) {
      refreshBtn.disabled = true;
      refreshBtn.textContent = "Odświeżanie...";
    } else if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Łączenie z Synergią...";
      setLibrusStatus(
        "Autoryzacja w Librus Synergia i pobieranie ocen oraz tematów lekcji (pierwsze wybudzenie serwera Render może potrwać do ok. 40 s)...",
        false,
        true
      );
    }

    try {
      const res = await fetch(`${LIBRUS_RENDER_API_URL}/api/librus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login, password }),
      });

      const data = await res.json().catch(() => ({ ok: false, status: res.status, message: `Błąd HTTP ${res.status}` }));

      if (!res.ok || !data.ok) {
        const rawErr = String(data.rawError || data.message || "");
        const looksLikeMaintenance =
          Boolean(data.isMaintenance) ||
          /no redirect location|Unexpected Librus authorization URL|przerw/i.test(rawErr);

        if (looksLikeMaintenance) {
          renderMaintenanceBanner(
            data.maintenance?.active
              ? data.maintenance
              : {
                  active: true,
                  title: "Wykryto przerwę techniczną lub awarię logowania Librusa",
                  message:
                    data.message ||
                    "Librus Synergia nie zwrócił poprawnego przekierowania autoryzacji. Najprawdopodobniej trwa przerwa techniczna — spróbuj ponownie później.",
                }
          );
          throw new Error(data.message || "Trwa przerwa techniczna w systemie Librus.");
        }

        const extra =
          data.status === 403
            ? " (sprawdź login i hasło z Synergii lub zaloguj się raz w przeglądarce na portal.librus.pl)"
            : "";
        throw new Error((data.message || `Błąd HTTP ${res.status}`) + extra);
      }

      sessionCreds = { login, password };
      try {
        localStorage.setItem("zsa_librus_last_login", login);
      } catch (_) {}

      librusData = data;
      renderMaintenanceBanner(null);
      setLibrusStatus("", false, false);
      sfx("select");
      populateDashboard();
    } catch (err) {
      sfx("back");
      if (isRefresh) {
        alert(`Nie udało się odświeżyć danych: ${err.message}`);
      } else {
        setLibrusStatus(err.message, true, false);
        pingRenderServer(true);
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Zaloguj do Synergii";
      }
      if (refreshBtn) {
        refreshBtn.disabled = false;
        refreshBtn.textContent = "Odśwież";
      }
    }
  }

  async function handleLibrusLogin(e) {
    if (e) e.preventDefault();
    const login = ($("lib-login-input")?.value || "").trim();
    const password = $("lib-pass-input")?.value || "";

    if (!login || !password) {
      setLibrusStatus("Podaj login i hasło do Librus Synergia.", true, false);
      sfx("back");
      return;
    }

    await requestLibrusData(login, password, false);
  }

  function restoreSavedLogin() {
    const loginInput = $("lib-login-input");
    if (loginInput && !loginInput.value) {
      try {
        const savedLogin = localStorage.getItem("zsa_librus_last_login");
        if (savedLogin) loginInput.value = savedLogin;
      } catch (_) {}
    }
  }

  window.onOpenSzybkiLibrus = function () {
    restoreSavedLogin();
    syncServerWatcher();
  };

  window.resetSzybkiLibrusSession = function () {
    librusData = null;
    sessionCreds = null;
    quickStatFilter = "ALL";
    if ($("lib-pass-input")) $("lib-pass-input").value = "";
    if ($("lib-login-step")) $("lib-login-step").style.display = "flex";
    if ($("lib-data-step")) $("lib-data-step").style.display = "none";
    setLibrusStatus("", false, false);
    sfx("back");
    syncServerWatcher();
  };

  function initLibrusEvents() {
    $("lib-login-form")?.addEventListener("submit", handleLibrusLogin);
    $("lib-logout-btn")?.addEventListener("click", window.resetSzybkiLibrusSession);

    $("lib-refresh-btn")?.addEventListener("click", () => {
      if (sessionCreds) {
        sfx("select");
        requestLibrusData(sessionCreds.login, sessionCreds.password, true);
      }
    });

    [$("lib-server-pill"), $("lib-portal-pill")].forEach((pill) => {
      if (!pill) return;
      pill.style.cursor = "pointer";
      pill.addEventListener("click", () => {
        sfx("move");
        pingRenderServer(true);
      });
    });

    document.querySelectorAll("#zsa-librus-view .lib-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchLibrusTab(btn.getAttribute("data-lib-tab"), true));
    });

    // Oceny: kliknięcie przedmiotu po lewej
    $("lib-grade-subjects-list")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".lib-master-item[data-grade-subj]");
      if (!btn) return;
      selectedGradeSubject = btn.getAttribute("data-grade-subj");
      sfx("move");
      renderGradesView();
    });

    $("lib-grade-cat-filter")?.addEventListener("change", renderGradesView);
    $("lib-grade-sort")?.addEventListener("change", renderGradesView);

    // Frekwencja: szybkie filtry i wybór wpisu na liście
    $("lib-att-stats")?.addEventListener("click", (e) => {
      const pill = e.target.closest(".lib-stat-pill[data-stat-filter]");
      if (!pill) return;
      const target = pill.getAttribute("data-stat-filter");
      quickStatFilter = quickStatFilter === target ? "ALL" : target;
      sfx("move");
      renderAttendanceView();
    });

    $("lib-att-list")?.addEventListener("click", (e) => {
      const row = e.target.closest(".lib-att-row[data-abs-id]");
      if (!row) return;
      selectedAbsenceId = row.getAttribute("data-abs-id");
      sfx("move");
      renderAttendanceView();
    });

    $("lib-att-search")?.addEventListener("input", renderAttendanceView);

    // Tematy: wybór przedmiotu po lewej
    $("lib-topic-subjects-list")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".lib-master-item[data-topic-subj]");
      if (!btn) return;
      selectedTopicSubject = btn.getAttribute("data-topic-subj");
      sfx("move");
      renderTopicsView();
    });

    $("lib-topics-search")?.addEventListener("input", renderTopicsView);

    // Automatyczne sprawdzanie statusu po wyświetleniu widoku
    const viewEl = $("zsa-librus-view");
    if (viewEl && typeof MutationObserver !== "undefined") {
      const observer = new MutationObserver(() => {
        if (isLibrusViewVisible()) restoreSavedLogin();
        syncServerWatcher();
      });
      observer.observe(viewEl, { attributes: true, attributeFilter: ["style", "class"] });
    }

    restoreSavedLogin();
    syncServerWatcher();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLibrusEvents);
  } else {
    initLibrusEvents();
  }
})();