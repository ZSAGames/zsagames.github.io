/* =========================================================================
   ZSAGames — Aplikacja "Kalkulator Ocen" (Native PS4 Orbis OS)
   - Średnia ważona + import przedmiotów z Szybkiego Librusa
   - Symulator wyciągania średniej (na zdaną / pasek / dowolny cel)
   - Przelicznik punktów (%) na ocenę wg dokładnej skali 15-stopniowej
   ========================================================================= */
(function () {
  "use strict";

  const POINTS_GRADE_SCALE = [
    { min: 99, max: 100, range: "100–99%", label: "celująca", short: "6", num: 6.0 },
    { min: 97, max: 98,  range: "98–97%",  label: "bardzo dobra +", short: "5+", num: 5.5 },
    { min: 94, max: 96,  range: "96–94%",  label: "bardzo dobra", short: "5", num: 5.0 },
    { min: 91, max: 93,  range: "93–91%",  label: "bardzo dobra −", short: "5-", num: 4.8 },
    { min: 86, max: 90,  range: "90–86%",  label: "dobra +", short: "4+", num: 4.5 },
    { min: 74, max: 85,  range: "85–74%",  label: "dobra", short: "4", num: 4.0 },
    { min: 71, max: 73,  range: "73–71%",  label: "dobra −", short: "4-", num: 3.8 },
    { min: 68, max: 70,  range: "70–68%",  label: "dostateczna +", short: "3+", num: 3.5 },
    { min: 54, max: 67,  range: "67–54%",  label: "dostateczna", short: "3", num: 3.0 },
    { min: 51, max: 53,  range: "53–51%",  label: "dostateczna −", short: "3-", num: 2.8 },
    { min: 46, max: 50,  range: "50–46%",  label: "dopuszczająca +", short: "2+", num: 2.5 },
    { min: 38, max: 45,  range: "45–38%",  label: "dopuszczająca", short: "2", num: 2.0 },
    { min: 34, max: 37,  range: "37–34%",  label: "dopuszczająca −", short: "2-", num: 1.8 },
    { min: 33, max: 33,  range: "33%",     label: "niedostateczna +", short: "1+", num: 1.5 },
    { min: 0,  max: 32,  range: "32–0%",   label: "niedostateczna", short: "1", num: 1.0 }
  ];

  const QUICK_GRADES = ["6", "5+", "5", "5-", "4+", "4", "4-", "3+", "3", "3-", "2+", "2", "2-", "1+", "1"];
  const WEIGHT_OPTIONS = [1, 2, 3, 4, 5, 6];

  let activeTab = "avg";        // "avg" | "points" | "attendance" | "behavior"
  let plusMinusRule = "zsa";    // "zsa" (+0.50 / -0.20) | "classic" (+0.50 / -0.25)

  // Stan zakładki 3: Bezpieczna Frekwencja
  let attPresent = 85;
  let attAbsent = 15;
  let attSelectedKey = "OVERALL"; // "OVERALL" lub lessonId z Librusa

  // Stan zakładki 4: Punkty Zachowania wg Statutu ZSA (§59 i §39)
  const ZSA_BEHAVIOR_START_PTS = 35;
  const BEHAVIOR_ITEMS = [
    // Dodatnie
    { id: "perf_month", group: "plus", label: "100% frekwencji w miesiącu", pts: 10 },
    { id: "class_work", group: "plus", label: "Praca na rzecz klasy (śr. +3 pkt)", pts: 3 },
    { id: "school_life", group: "plus", label: "Udział w życiu szkoły", pts: 5 },
    { id: "samorzad", group: "plus", label: "Samorząd uczniowski / aktywność", pts: 10 },
    { id: "events", group: "plus", label: "Organizacja imprez szkolnych", pts: 12 },
    { id: "competitions", group: "plus", label: "Konkursy / zawody / sztandar / wolontariat", pts: 10 },
    // Ujemne
    { id: "nb_hour", group: "minus", label: "Godzina nieusprawiedliwiona (nb)", pts: -5, tracksNb: true },
    { id: "late", group: "minus", label: "Spóźnienie na lekcję (s)", pts: -2 },
    { id: "dress", group: "minus", label: "Brak stroju galowego / munduru", pts: -5 },
    { id: "phone", group: "minus", label: "Telefon / jedzenie na lekcji", pts: -5 },
    { id: "elevator", group: "minus", label: "Jazda windą bez zgody", pts: -5 },
    { id: "smoking", group: "minus", label: "Palenie papierosów / e-papierosów", pts: -10 },
    { id: "cheating", group: "minus", label: "Oszustwo / ściąganie", pts: -10 },
    { id: "vehicle", group: "minus", label: "Poruszanie się pojazdami między lekcjami", pts: -10 },
    { id: "vandalism", group: "minus", label: "Wandalizm / niszczenie mienia", pts: -20 },
    { id: "warn_tutor", group: "minus", label: "Upomnienie wychowawcy", pts: -15 },
    { id: "reprimand_tutor", group: "minus", label: "Nagana wychowawcy", pts: -20 },
    { id: "warn_dir", group: "minus", label: "Upomnienie Dyrektora", pts: -30 }
  ];
  let behaviorCounts = {};
  let behaviorCustomPlus = 0;
  let behaviorCustomMinus = 0;
  BEHAVIOR_ITEMS.forEach((it) => { behaviorCounts[it.id] = 0; });
  let selectedQuickGrade = "5";
  let selectedQuickWeight = 3;
  let goalWeight = 3;
  let goalTarget = 4.75;
  let gradesList = [];          // [{ id, label, weight, note, fromLibrus }]
  let activeSubjectName = "";
  let lastPointsGrade = null;

  const $ = (id) => document.getElementById(id);

  function sfx(type) {
    if (typeof playCustomWav === "function") {
      try { playCustomWav(type); } catch (_) {}
    }
  }

  function esc(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function gradeToNumeric(rawGrade) {
    const clean = String(rawGrade || "")
      .trim()
      .replace("−", "-")
      .replace(/\s+/g, "");
    const m = clean.match(/^([1-6])([+-])?$/);
    if (!m) return null;

    const base = parseInt(m[1], 10);
    const mod = m[2] || "";
    const plusVal = 0.5;
    const minusVal = plusMinusRule === "zsa" ? 0.2 : 0.25;

    if (mod === "+") return Math.min(6, base + plusVal);
    if (mod === "-") return Math.max(1, base - minusVal);
    return base;
  }

  function numericToClosestSchoolGrade(val) {
    // Zwraca najniższą ocenę szkolną >= val
    const ordered = QUICK_GRADES.slice().reverse(); // od 1 do 6
    for (const g of ordered) {
      const n = gradeToNumeric(g);
      if (n !== null && n >= val - 1e-9) {
        return { label: g, num: n };
      }
    }
    return null;
  }

  function gradeToneClass(rawGrade) {
    const num = gradeToNumeric(rawGrade);
    if (num === null) return "lib-g-neutral";
    if (num >= 5) return "lib-g-high";
    if (num >= 4) return "lib-g-good";
    if (num >= 2) return "lib-g-mid";
    return "lib-g-low";
  }

  function estimateFinalGrade(avg) {
    if (avg >= 5.5) return "6 (celująca)";
    if (avg >= 4.75) return "5 (bardzo dobra)";
    if (avg >= 3.75) return "4 (dobra)";
    if (avg >= 2.75) return "3 (dostateczna)";
    if (avg >= 1.75) return "2 (dopuszczająca)";
    return "1 (niedostateczna)";
  }

  /* ==================== INTEGRACJA Z SZYBKIM LIBRUSEM ==================== */
  function syncLibrusSourceBar() {
    const barEl = $("calc-librus-bar");
    if (!barEl) return;

    const store = window.ZSA_LIBRUS_STORE;
    const loggedIn = Boolean(store && store.isLoggedIn());

    if (!loggedIn) {
      barEl.innerHTML = `
        <div class="calc-lib-offline">
          <div class="calc-lib-info">
            <span class="calc-lib-tag">Szybki Librus</span>
            <span>Zaloguj się w Szybkim Librusie, aby wczytywać oceny z przedmiotu jednym kliknięciem — albo wpisz je ręcznie poniżej.</span>
          </div>
          <button type="button" class="zsa-refresh-btn lib-compact-btn" id="calc-goto-librus-btn">
            Otwórz Szybki Librus
          </button>
        </div>
      `;
      $("calc-goto-librus-btn")?.addEventListener("click", () => {
        if (typeof window.openZsaAppById === "function") {
          window.openZsaAppById("librus-app");
        }
      });
      return;
    }

    const subjects = store.getSubjects();
    barEl.innerHTML = `
      <div class="calc-lib-online">
        <div class="calc-lib-connected">
          <i class="calc-online-dot"></i>
          <span>Połączono z Szybkim Librusem</span>
        </div>
        <div class="calc-lib-controls">
          <select id="calc-librus-subj-select" class="lib-select calc-lib-select">
            <option value="">— Wybierz przedmiot z Librusa (${subjects.length}) —</option>
            ${subjects
              .map(
                (s) =>
                  `<option value="${esc(s.name)}" ${s.name === activeSubjectName ? "selected" : ""}>${esc(s.name)} (${s.grades.length} oc.)</option>`
              )
              .join("")}
          </select>
          <button type="button" class="dir-open-original-btn lib-compact-btn" id="calc-import-librus-btn">
            Wczytaj oceny
          </button>
        </div>
      </div>
    `;

    const sel = $("calc-librus-subj-select");
    const doImport = () => {
      const subjName = sel?.value || "";
      if (!subjName) return;
      importGradesFromLibrusSubject(subjName);
    };

    sel?.addEventListener("change", doImport);
    $("calc-import-librus-btn")?.addEventListener("click", doImport);
  }

  function importGradesFromLibrusSubject(subjName) {
    const store = window.ZSA_LIBRUS_STORE;
    if (!store || !store.isLoggedIn()) return;

    const subjects = store.getSubjects();
    const subj = subjects.find((s) => s.name === subjName);
    if (!subj) return;

    activeSubjectName = subj.name;
    const imported = [];
    let skippedCount = 0;

    subj.grades.forEach((g, idx) => {
      const raw = String(g.grade ?? g.value ?? "").trim();
      if (gradeToNumeric(raw) === null) {
        skippedCount++;
        return;
      }
      const wNum = parseFloat(String(g.weight || "1").replace(",", "."));
      const weight = !Number.isNaN(wNum) && wNum > 0 ? wNum : 1;
      imported.push({
        id: `lib-${Date.now()}-${idx}`,
        label: raw.replace("−", "-"),
        weight,
        note: g.category || g.semesterLabel || "Librus",
        fromLibrus: true
      });
    });

    gradesList = imported;
    sfx("select");

    const noteEl = $("calc-import-note");
    if (noteEl) {
      noteEl.style.display = "block";
      noteEl.textContent =
        skippedCount > 0
          ? `Wczytano ${imported.length} ocen z przedmiotu „${subj.name}” (pominięto ${skippedCount} niepunktowych wpisów np. +/np/bz).`
          : `Wczytano ${imported.length} ocen z przedmiotu „${subj.name}” z Szybkiego Librusa.`;
    }

    renderAverageTab();
  }

  /* ==================== TAB 1: ŚREDNIA I WYCIĄGANIE OCENY ==================== */
  function renderQuickPickers() {
    const gradeGrid = $("calc-quick-grades");
    if (gradeGrid) {
      gradeGrid.innerHTML = QUICK_GRADES.map(
        (g) => `
          <button type="button" class="calc-q-grade ${gradeToneClass(g)} ${selectedQuickGrade === g ? "active" : ""}" data-qgrade="${g}">
            ${g}
          </button>
        `
      ).join("");
    }

    const weightRow = $("calc-quick-weights");
    if (weightRow) {
      weightRow.innerHTML = WEIGHT_OPTIONS.map(
        (w) => `
          <button type="button" class="calc-w-btn ${selectedQuickWeight === w ? "active" : ""}" data-qweight="${w}">
            ${w}
          </button>
        `
      ).join("");
    }

    const goalWeightRow = $("calc-goal-weights");
    if (goalWeightRow) {
      goalWeightRow.innerHTML = WEIGHT_OPTIONS.map(
        (w) => `
          <button type="button" class="calc-w-btn ${goalWeight === w ? "active" : ""}" data-gweight="${w}">
            Waga ${w}
          </button>
        `
      ).join("");
    }
  }

  function renderAverageTab() {
    renderQuickPickers();

    const listEl = $("calc-grades-items");
    const countEl = $("calc-grades-count");
    if (countEl) countEl.textContent = String(gradesList.length);

    if (listEl) {
      if (gradesList.length === 0) {
        listEl.innerHTML = `
          <div class="calc-empty-mini">
            Brak ocen na liście. Wybierz przedmiot z Librusa lub kliknij ocenę powyżej i dodaj ręcznie.
          </div>
        `;
      } else {
        listEl.innerHTML = gradesList
          .map(
            (item) => `
            <div class="calc-grade-chip">
              <span class="calc-chip-val ${gradeToneClass(item.label)}">${esc(item.label)}</span>
              <div class="calc-chip-meta">
                <strong>Waga ${esc(String(item.weight))}</strong>
                <span>${esc(item.note || "Ocena")}</span>
              </div>
              <button type="button" class="calc-chip-del" data-del-id="${esc(item.id)}" title="Usuń ocenę">×</button>
            </div>
          `
          )
          .join("");
      }
    }

    // Obliczenia średniej
    let weightedSum = 0;
    let totalWeight = 0;
    let simpleSum = 0;
    let validCount = 0;

    gradesList.forEach((item) => {
      const val = gradeToNumeric(item.label);
      if (val === null) return;
      const w = Number(item.weight) || 1;
      weightedSum += val * w;
      totalWeight += w;
      simpleSum += val;
      validCount++;
    });

    const weightedAvg = totalWeight > 0 ? weightedSum / totalWeight : 0;
    const simpleAvg = validCount > 0 ? simpleSum / validCount : 0;

    if ($("calc-weighted-avg")) {
      $("calc-weighted-avg").textContent = validCount > 0 ? weightedAvg.toFixed(2) : "—";
    }
    if ($("calc-simple-avg")) {
      $("calc-simple-avg").textContent = validCount > 0 ? simpleAvg.toFixed(2) : "—";
    }
    if ($("calc-sum-weights")) {
      $("calc-sum-weights").textContent = totalWeight > 0 ? String(Number(totalWeight.toFixed(2))) : "0";
    }
    if ($("calc-est-grade")) {
      $("calc-est-grade").textContent = validCount > 0 ? estimateFinalGrade(weightedAvg) : "Dodaj oceny";
    }

    // Symulator celu (wyciąganie średniej)
    const goalOut = $("calc-goal-output");
    if (!goalOut) return;

    const target = parseFloat(String(goalTarget).replace(",", "."));
    if (Number.isNaN(target) || target < 1 || target > 6) {
      goalOut.innerHTML = `<div class="calc-goal-box warn">Wpisz prawidłową docelową średnią w zakresie od 1.00 do 6.00.</div>`;
      return;
    }

    if (validCount === 0) {
      const needed = numericToClosestSchoolGrade(target);
      goalOut.innerHTML = `
        <div class="calc-goal-box">
          <div class="calc-goal-main">Brak dotychczasowych ocen</div>
          <div class="calc-goal-sub">
            Aby wystartować od średniej <strong>${target.toFixed(2)}</strong>, pierwsza ocena z wagi ${goalWeight} powinna wynosić min. <strong>${needed ? needed.label : "6"}</strong>.
          </div>
        </div>
      `;
      return;
    }

    if (weightedAvg >= target - 1e-9) {
      const margin = weightedAvg - target;
      goalOut.innerHTML = `
        <div class="calc-goal-box ok">
          <div class="calc-goal-main">✓ Cel ${target.toFixed(2)} jest już osiągnięty!</div>
          <div class="calc-goal-sub">
            Twoja średnia ważona to <strong>${weightedAvg.toFixed(2)}</strong> (zapas <strong>+${margin.toFixed(2)}</strong> ponad cel).
          </div>
        </div>
      `;
      return;
    }

    // Wymagana pojedyncza ocena z wybranej wagi: (target * (W + w) - S) / w
    const reqVal = (target * (totalWeight + goalWeight) - weightedSum) / goalWeight;

    // Podgląd symulacji dla 1 nowej oceny (2..6)
    const simGrades = [3, 4, 5, 6];
    const simHtml = simGrades
      .map((g) => {
        const nextAvg = (weightedSum + g * goalWeight) / (totalWeight + goalWeight);
        const hits = nextAvg >= target - 1e-9;
        return `
          <div class="calc-sim-pill ${hits ? "hits" : ""}">
            <span>Jeśli dostaniesz <strong>${g}</strong></span>
            <strong>${nextAvg.toFixed(2)}</strong>
          </div>
        `;
      })
      .join("");

    if (reqVal <= 6 + 1e-9) {
      const match = numericToClosestSchoolGrade(reqVal);
      const afterAvg = match
        ? (weightedSum + match.num * goalWeight) / (totalWeight + goalWeight)
        : target;

      goalOut.innerHTML = `
        <div class="calc-goal-box reach">
          <div class="calc-goal-main">
            Wystarczy ocena <span class="calc-goal-badge ${gradeToneClass(match ? match.label : "6")}">${match ? match.label : "6"}</span> z wagi ${goalWeight}
          </div>
          <div class="calc-goal-sub">
            Minimalna wymagana wartość: <strong>${reqVal.toFixed(2)}</strong>. Po otrzymaniu <strong>${match ? match.label : "6"}</strong> (waga ${goalWeight}) Twoja średnia wzrośnie do <strong>${afterAvg.toFixed(2)}</strong>.
          </div>
          <div class="calc-sim-row">${simHtml}</div>
        </div>
      `;
    } else {
      // Jedna 6 nie wystarczy — policz ile 6 lub 5 potrzeba
      const needSixes = target < 6 ? Math.ceil((target * totalWeight - weightedSum) / ((6 - target) * goalWeight)) : null;
      const needFives = target < 5 ? Math.ceil((target * totalWeight - weightedSum) / ((5 - target) * goalWeight)) : null;

      let multiMsg = "";
      if (needSixes !== null && needSixes > 0) {
        multiMsg += `Potrzebujesz jeszcze <strong>${needSixes} × ocena 6</strong> (z wagi ${goalWeight})`;
        if (needFives !== null && needFives > 0) {
          multiMsg += ` lub <strong>${needFives} × ocena 5</strong> (z wagi ${goalWeight})`;
        }
        multiMsg += ".";
      } else {
        multiMsg = "Przy obecnych ocenach osiągnięcie idealnej średniej 6.00 nie jest już matematycznie możliwe.";
      }

      goalOut.innerHTML = `
        <div class="calc-goal-box warn">
          <div class="calc-goal-main">Jedna ocena z wagi ${goalWeight} nie wystarczy (wymagane ${reqVal.toFixed(2)})</div>
          <div class="calc-goal-sub">${multiMsg}</div>
          <div class="calc-sim-row">${simHtml}</div>
        </div>
      `;
    }
  }

  /* ==================== TAB 2: OCENA Z PUNKTÓW (%) ==================== */
  function findGradeForPercent(exactPct) {
    const rounded = Math.max(0, Math.min(100, Math.round(exactPct)));
    const idx = POINTS_GRADE_SCALE.findIndex((row) => rounded >= row.min && rounded <= row.max);
    return {
      rounded,
      index: idx >= 0 ? idx : POINTS_GRADE_SCALE.length - 1,
      tier: idx >= 0 ? POINTS_GRADE_SCALE[idx] : POINTS_GRADE_SCALE[POINTS_GRADE_SCALE.length - 1]
    };
  }

  function renderPointsTab() {
    const scoredRaw = ($("calc-pts-scored")?.value || "").replace(",", ".");
    const maxRaw = ($("calc-pts-max")?.value || "").replace(",", ".");
    const scored = parseFloat(scoredRaw);
    const maxPts = parseFloat(maxRaw);

    const hasValid = !Number.isNaN(scored) && !Number.isNaN(maxPts) && maxPts > 0 && scored >= 0;
    const resultEl = $("calc-pts-result");
    const tbody = $("calc-pts-scale-tbody");

    let activeTierIdx = -1;

    if (hasValid) {
      const exactPct = (scored / maxPts) * 100;
      const { rounded, index, tier } = findGradeForPercent(exactPct);
      activeTierIdx = index;
      lastPointsGrade = {
        label: tier.short,
        fullLabel: `${tier.label} (${tier.short})`,
        exactPct,
        scored,
        maxPts
      };

      // Ile brakuje do wyższej oceny
      let nextInfoHtml = `<span class="calc-pts-next ok">Najwyższa możliwa ocena — brawo!</span>`;
      if (index > 0) {
        const higher = POINTS_GRADE_SCALE[index - 1];
        // Minimalna liczba punktów, która po zaokrągleniu daje higher.min% (np. >= (higher.min - 0.5)%)
        const minPtsNeeded = Math.ceil(((higher.min - 0.5) / 100) * maxPts * 2) / 2;
        const diffPts = Math.max(0.5, Number((minPtsNeeded - scored).toFixed(2)));
        nextInfoHtml = `<span class="calc-pts-next">Do oceny <strong>${higher.label} (${higher.short})</strong> [${higher.min}%] brakuje ok. <strong>${diffPts} pkt</strong></span>`;
      }

      const barWidth = Math.max(0, Math.min(100, exactPct));

      if (resultEl) {
        resultEl.innerHTML = `
          <div class="calc-pts-hero">
            <div class="calc-pts-big-badge ${gradeToneClass(tier.short)}">${esc(tier.short)}</div>
            <div class="calc-pts-hero-info">
              <div class="calc-pts-grade-name">${esc(tier.label)} (${esc(tier.short)})</div>
              <div class="calc-pts-pct-line">
                Wynik: <strong>${exactPct.toFixed(2)}%</strong>
                <span class="lib-muted">(zaokrąglone: ${rounded}% • przedział ${esc(tier.range)})</span>
              </div>
              <div class="calc-pts-bar-track">
                <div class="calc-pts-bar-fill ${gradeToneClass(tier.short)}" style="width:${barWidth}%"></div>
              </div>
              ${nextInfoHtml}
            </div>
          </div>

          <div class="calc-pts-push-row">
            <span class="lib-muted">Dodaj wynik do kalkulatora średniej:</span>
            <div class="calc-pts-push-btns">
              <button type="button" class="calc-w-btn" data-push-weight="6">+ Sprawdzian (w.6)</button>
              <button type="button" class="calc-w-btn" data-push-weight="3">+ Kartkówka (w.3)</button>
              <button type="button" class="calc-w-btn" data-push-weight="1">+ Waga 1</button>
            </div>
          </div>
          <div id="calc-pts-push-msg" class="calc-push-msg" style="display:none;"></div>
        `;
      }
    } else {
      lastPointsGrade = null;
      if (resultEl) {
        resultEl.innerHTML = `
          <div class="calc-empty-mini">
            Wpisz <strong>zdobyte punkty</strong> oraz <strong>maksymalną liczbę punktów</strong>, aby wyliczyć ocenę według skali procentowej.
          </div>
        `;
      }
    }

    // Tabela progów 15-stopniowych (z automatycznym przeliczeniem na punkty przy podanym maxPts!)
    if (tbody) {
      const showPtsCol = !Number.isNaN(maxPts) && maxPts > 0;
      tbody.innerHTML = POINTS_GRADE_SCALE.map((row, idx) => {
        const isHit = idx === activeTierIdx;
        let ptsRangeText = "—";
        if (showPtsCol) {
          const minP = row.min === 0 ? 0 : Number((((row.min - 0.5) / 100) * maxPts).toFixed(1));
          const maxP = row.max === 100 ? maxPts : Number((((row.max + 0.49) / 100) * maxPts).toFixed(1));
          ptsRangeText = `${Math.max(0, minP)} – ${Math.min(maxPts, maxP)} pkt`;
        }
        return `
          <tr class="${isHit ? "is-hit" : ""}">
            <td><strong>${esc(row.range)}</strong></td>
            <td><span class="calc-scale-badge ${gradeToneClass(row.short)}">${esc(row.short)}</span> ${esc(row.label)}</td>
            <td class="calc-pts-col">${esc(ptsRangeText)}</td>
          </tr>
        `;
      }).join("");
    }
  }


  /* ==================== TAB 3: BEZPIECZNA FREKWENCJA (STATUT ZSA §46 & §47) ==================== */
  function calcThresholdMargin(presences, total, targetRatio) {
    if (!total || total <= 0) return { ok: true, canSkip: 0, mustAttend: 0 };
    const ratio = presences / total;
    if (ratio >= targetRatio - 1e-9) {
      const canSkip = Math.max(0, Math.floor(presences / targetRatio - total + 1e-9));
      return { ok: true, canSkip, mustAttend: 0 };
    }
    const mustAttend = Math.max(1, Math.ceil((targetRatio * total - presences) / (1 - targetRatio)));
    return { ok: false, canSkip: 0, mustAttend };
  }

  function syncAttendanceSourceBar() {
    const barEl = $("calc-att-librus-bar");
    if (!barEl) return;

    const store = window.ZSA_LIBRUS_STORE;
    const summary = store && store.isLoggedIn() ? store.getAttendanceSummary() : null;

    if (!store || !store.isLoggedIn()) {
      barEl.innerHTML = `
        <div class="calc-lib-offline">
          <div class="calc-lib-info">
            <span class="calc-lib-tag">Szybki Librus</span>
            <span>Zaloguj się w Szybkim Librusie, aby pobrać pełny wykaz obecności i nieobecności (metodą LibrusPro) — lub wpisz dane ręcznie poniżej.</span>
          </div>
          <button type="button" class="zsa-refresh-btn lib-compact-btn" id="calc-att-goto-librus">
            Otwórz Szybki Librus
          </button>
        </div>
      `;
      $("calc-att-goto-librus")?.addEventListener("click", () => {
        if (typeof window.openZsaAppById === "function") window.openZsaAppById("librus-app");
      });
      return;
    }

    if (!summary || !summary.available) {
      barEl.innerHTML = `
        <div class="calc-lib-offline">
          <div class="calc-lib-info">
            <span class="calc-lib-tag">Szybki Librus</span>
            <span>Zalogowano, ale API nie zwróciło pełnej liczby obecności (wykryto ${summary?.absencesTotal ?? 0} nieobecności). Wpisz liczbę obecności ręcznie lub zaktualizuj server.js na Renderze.</span>
          </div>
        </div>
      `;
      return;
    }

    const subjOptions = (summary.bySubject || [])
      .map(
        (s) =>
          `<option value="${esc(s.lessonId)}" ${attSelectedKey === s.lessonId ? "selected" : ""}>${esc(s.subject)} — ${s.percent.toFixed(1)}% (${s.presences}/${s.total})</option>`
      )
      .join("");

    barEl.innerHTML = `
      <div class="calc-lib-online">
        <div class="calc-lib-connected">
          <i class="calc-online-dot"></i>
          <span>Połączono z pełną frekwencją Librusa (${summary.overallPercent?.toFixed(2) ?? "—"}%)</span>
        </div>
        <div class="calc-lib-controls">
          <select id="calc-att-subj-select" class="lib-select calc-lib-select">
            <option value="OVERALL" ${attSelectedKey === "OVERALL" ? "selected" : ""}>Cała szkoła — ${summary.overallPercent?.toFixed(2) ?? "—"}% (${summary.presences}/${summary.total})</option>
            ${subjOptions}
          </select>
          <button type="button" class="dir-open-original-btn lib-compact-btn" id="calc-att-import-btn">
            Wczytaj
          </button>
        </div>
      </div>
    `;

    const applyFromSelect = () => {
      const val = $("calc-att-subj-select")?.value || "OVERALL";
      attSelectedKey = val;
      if (val === "OVERALL") {
        attPresent = summary.presences;
        attAbsent = summary.absencesTotal;
      } else {
        const found = (summary.bySubject || []).find((s) => s.lessonId === val);
        if (found) {
          attPresent = found.presences;
          attAbsent = found.absences;
        }
      }
      if ($("calc-att-present")) $("calc-att-present").value = String(attPresent);
      if ($("calc-att-absent")) $("calc-att-absent").value = String(attAbsent);
      sfx("select");
      renderAttendanceCalcTab();
    };

    $("calc-att-subj-select")?.addEventListener("change", applyFromSelect);
    $("calc-att-import-btn")?.addEventListener("click", applyFromSelect);
  }

  function renderAttendanceCalcTab() {
    const presEl = $("calc-att-present");
    const absEl = $("calc-att-absent");
    const outEl = $("calc-att-output");
    const listEl = $("calc-att-subjects-tbody");
    const badgeEl = $("calc-att-badge");

    const pres = Math.max(0, parseInt(presEl?.value ?? attPresent, 10) || 0);
    const abs = Math.max(0, parseInt(absEl?.value ?? attAbsent, 10) || 0);
    attPresent = pres;
    attAbsent = abs;

    const total = pres + abs;
    const pct = total > 0 ? (pres / total) * 100 : 100;

    if (badgeEl) {
      badgeEl.textContent = total > 0 ? `${pct.toFixed(2)}%` : "Brak danych";
    }

    if (outEl) {
      if (total === 0) {
        outEl.innerHTML = `<div class="calc-empty-mini">Wpisz liczbę obecności i nieobecności (lub wczytaj z Szybkiego Librusa), aby sprawdzić progi ze Statutu ZSA.</div>`;
      } else {
        const m50 = calcThresholdMargin(pres, total, 0.5);
        const m80 = calcThresholdMargin(pres, total, 0.8);
        const barW = Math.max(0, Math.min(100, pct));
        const tone = pct >= 80 ? "lib-g-high" : pct >= 55 ? "lib-g-mid" : "lib-g-low";

        outEl.innerHTML = `
          <div class="calc-pts-hero">
            <div class="calc-pts-big-badge ${tone}" style="width:94px;font-size:1.5rem;">${pct.toFixed(1)}%</div>
            <div class="calc-pts-hero-info">
              <div class="calc-pts-grade-name">Obecności: ${pres} z ${total} lekcji</div>
              <div class="calc-pts-pct-line">Nieobecności łącznie: <strong>${abs}</strong> (${(100 - pct).toFixed(2)}%)</div>
              <div class="calc-pts-bar-track">
                <div class="calc-pts-bar-fill ${tone}" style="width:${barW}%"></div>
              </div>
            </div>
          </div>

          <div class="calc-goal-box ${m50.ok ? (m50.canSkip <= 3 ? "reach" : "ok") : "warn"}">
            <div class="calc-goal-main">
              ${m50.ok ? `✓ Klasyfikacja bezpieczna (próg 50% — Statut §47)` : `⚠ ZAGROŻENIE NIEKLASYFIKOWANIEM (< 50% — Statut §47)`}
            </div>
            <div class="calc-goal-sub">
              ${
                m50.ok
                  ? `Możesz jeszcze opuścić maksymalnie <strong>${m50.canSkip} lekcji</strong> pod rząd, zanim spadniesz poniżej 50% (egzamin klasyfikacyjny).`
                  : `Aby wrócić do progu 50%, musisz być obecny na kolejnych <strong>${m50.mustAttend} lekcjach pod rząd</strong> bez żadnej nieobecności.`
              }
            </div>
          </div>

          <div class="calc-goal-box ${m80.ok ? "ok" : "reach"}">
            <div class="calc-goal-main">
              ${m80.ok ? `✓ Warunek podwyższenia oceny rocznej spełniony (≥ 80% — Statut §46)` : `Próg 80% do podwyższenia oceny rocznej (Statut §46)`}
            </div>
            <div class="calc-goal-sub">
              ${
                m80.ok
                  ? `Masz zapas <strong>${m80.canSkip} lekcji</strong> powyżej progu 80% (pamiętaj też o braku godzin nieusprawiedliwionych).`
                  : `Aby przekroczyć 80%, potrzebujesz jeszcze <strong>${m80.mustAttend} obecności pod rząd</strong>.`
              }
            </div>
          </div>
        `;
      }
    }

    // Prawa tabela przedmiotów z Librusa (posortowana od najbardziej zagrożonych)
    if (listEl) {
      const store = window.ZSA_LIBRUS_STORE;
      const summary = store && store.isLoggedIn() ? store.getAttendanceSummary() : null;
      const rows = summary && summary.available ? (summary.bySubject || []).slice().sort((a, b) => a.percent - b.percent) : [];

      if (rows.length === 0) {
        listEl.innerHTML = `<tr><td colspan="4" style="text-align:center;padding:22px;color:rgba(200,224,255,0.72);">Zaloguj się w Szybkim Librusie, aby zobaczyć tutaj listę wszystkich przedmiotów i ich zapas do 50%.</td></tr>`;
      } else {
        listEl.innerHTML = rows
          .map((r) => {
            const m50 = calcThresholdMargin(r.presences, r.total, 0.5);
            const tone = r.percent >= 80 ? "lib-g-high" : r.percent >= 55 ? "lib-g-mid" : "lib-g-low";
            return `
              <tr class="calc-att-pick-row ${r.percent < 50 ? "is-danger-row" : ""}" data-att-lesson="${esc(r.lessonId)}" title="Kliknij, aby wczytać ten przedmiot do symulatora">
                <td><strong>${esc(r.subject)}</strong></td>
                <td>${r.presences}/${r.total}</td>
                <td><span class="calc-scale-badge ${tone}">${r.percent.toFixed(1)}%</span></td>
                <td>${m50.ok ? `<span style="color:#a7f3d0;">+${m50.canSkip} zapasu</span>` : `<span style="color:#ff8e99;font-weight:700;">Brakuje ${m50.mustAttend}</span>`}</td>
              </tr>
            `;
          })
          .join("");
      }
    }
  }

  /* ==================== TAB 4: KALKULATOR PUNKTÓW ZACHOWANIA (STATUT ZSA §59) ==================== */
  function evaluateZsaBehaviorGrade(points, nbHours) {
    if (nbHours > 40) {
      return {
        grade: "Naganne",
        tone: "lib-g-low",
        reason: `Automatycznie naganne wg Statutu ZSA §59: przekroczono 40 godzin nieusprawiedliwionych (${nbHours} nb).`,
        nextInfo: `Usprawiedliw min. ${nbHours - 40} godz., aby zejść z automatycznej blokady (≤ 40 nb).`
      };
    }
    if (points >= 100) {
      return {
        grade: "Wzorowe",
        tone: "lib-g-high",
        reason: "Przedział: +100 pkt i więcej (Statut ZSA §59).",
        nextInfo: "Najwyższa możliwa ocena zachowania — gratulacje!"
      };
    }
    if (points >= 61) {
      return {
        grade: "Bardzo dobre",
        tone: "lib-g-high",
        reason: "Przedział: od +61 do +99 pkt.",
        nextInfo: `Do oceny Wzorowej (+100 pkt) brakuje: ${100 - points} pkt.`
      };
    }
    if (points >= 15) {
      return {
        grade: "Dobre",
        tone: "lib-g-good",
        reason: "Przedział: od +15 do +60 pkt (punktacja startowa: +35 pkt).",
        nextInfo: `Do oceny Bardzo dobrej (+61 pkt) brakuje: ${61 - points} pkt.`
      };
    }
    if (points >= -25) {
      return {
        grade: "Poprawne",
        tone: "lib-g-mid",
        reason: "Przedział: od −25 do +14 pkt.",
        nextInfo: `Do oceny Dobrej (+15 pkt) brakuje: ${15 - points} pkt.`
      };
    }
    if (points >= -249) {
      return {
        grade: "Nieodpowiednie",
        tone: "lib-g-low",
        reason: "Przedział: od −249 do −26 pkt.",
        nextInfo: `Do oceny Poprawnej (−25 pkt) brakuje: ${-25 - points} pkt.`
      };
    }
    return {
      grade: "Naganne",
      tone: "lib-g-low",
      reason: "Przedział: poniżej −250 pkt.",
      nextInfo: `Do oceny Nieodpowiedniej (−249 pkt) brakuje: ${-249 - points} pkt.`
    };
  }

  function syncBehaviorSourceBar() {
    const barEl = $("calc-beh-librus-bar");
    if (!barEl) return;

    const store = window.ZSA_LIBRUS_STORE;
    if (!store || !store.isLoggedIn()) {
      barEl.innerHTML = `
        <div class="calc-lib-offline">
          <div class="calc-lib-info">
            <span class="calc-lib-tag">Statut ZSA §59</span>
            <span>Zaloguj się w Szybkim Librusie, aby jednym kliknięciem wczytać swoje godziny <strong>nb</strong>, <strong>spóźnienia</strong> i <strong>miesiące 100%</strong>.</span>
          </div>
          <button type="button" class="zsa-refresh-btn lib-compact-btn" id="calc-beh-goto-librus">
            Otwórz Szybki Librus
          </button>
        </div>
      `;
      $("calc-beh-goto-librus")?.addEventListener("click", () => {
        if (typeof window.openZsaAppById === "function") window.openZsaAppById("librus-app");
      });
      return;
    }

    const summary = store.getAttendanceSummary();
    const nbCount = summary?.nb ?? 0;
    const sCount = summary?.s ?? 0;
    const perfCount = Array.isArray(summary?.perfectMonths) ? summary.perfectMonths.length : 0;

    barEl.innerHTML = `
      <div class="calc-lib-online">
        <div class="calc-lib-connected">
          <i class="calc-online-dot"></i>
          <span>Librus: <strong>${nbCount} nb</strong> • <strong>${sCount} spóźnień</strong> • <strong>${perfCount} mies. 100%</strong></span>
        </div>
        <button type="button" class="dir-open-original-btn lib-compact-btn" id="calc-beh-import-btn">
          Wczytaj z Librusa
        </button>
      </div>
    `;

    $("calc-beh-import-btn")?.addEventListener("click", () => {
      behaviorCounts.nb_hour = nbCount;
      behaviorCounts.late = sCount;
      behaviorCounts.perf_month = perfCount;
      sfx("select");
      renderBehaviorTab();
    });
  }

  function renderBehaviorTab() {
    const plusListEl = $("calc-beh-plus-list");
    const minusListEl = $("calc-beh-minus-list");
    const summaryEl = $("calc-beh-summary");
    const badgeEl = $("calc-beh-badge");

    const renderGroup = (groupName) =>
      BEHAVIOR_ITEMS.filter((it) => it.group === groupName)
        .map((it) => {
          const cnt = behaviorCounts[it.id] || 0;
          const totalPts = cnt * it.pts;
          return `
            <div class="calc-beh-row ${cnt > 0 ? "has-val" : ""}">
              <div class="calc-beh-info">
                <strong>${esc(it.label)}</strong>
                <span>${it.pts > 0 ? `+${it.pts}` : it.pts} pkt / szt. ${cnt > 0 ? `• Razem: <strong>${totalPts > 0 ? `+${totalPts}` : totalPts} pkt</strong>` : ""}</span>
              </div>
              <div class="calc-beh-stepper">
                <button type="button" class="calc-step-btn" data-beh-dec="${it.id}">−</button>
                <span class="calc-step-val">${cnt}</span>
                <button type="button" class="calc-step-btn" data-beh-inc="${it.id}">+</button>
              </div>
            </div>
          `;
        })
        .join("");

    if (plusListEl) plusListEl.innerHTML = renderGroup("plus");
    if (minusListEl) minusListEl.innerHTML = renderGroup("minus");

    let plusSum = Math.max(0, Number(behaviorCustomPlus) || 0);
    let minusSum = -Math.abs(Number(behaviorCustomMinus) || 0);
    let nbHours = behaviorCounts.nb_hour || 0;

    BEHAVIOR_ITEMS.forEach((it) => {
      const val = (behaviorCounts[it.id] || 0) * it.pts;
      if (val >= 0) plusSum += val;
      else minusSum += val;
    });

    const totalPoints = ZSA_BEHAVIOR_START_PTS + plusSum + minusSum;
    const verdict = evaluateZsaBehaviorGrade(totalPoints, nbHours);

    if (badgeEl) badgeEl.textContent = `${totalPoints >= 0 ? "+" : ""}${totalPoints} pkt • ${verdict.grade}`;

    if (summaryEl) {
      summaryEl.innerHTML = `
        <div class="calc-hero-stats">
          <div class="calc-hero-box main">
            <span class="calc-sub-label">Twoje punkty (start +35)</span>
            <strong class="calc-big-avg">${totalPoints >= 0 ? "+" : ""}${totalPoints} pkt</strong>
          </div>
          <div class="calc-hero-box">
            <span class="calc-sub-label">Dodatnie</span>
            <strong class="calc-mid-val" style="color:#4ef2a8;">+${plusSum}</strong>
          </div>
          <div class="calc-hero-box">
            <span class="calc-sub-label">Ujemne</span>
            <strong class="calc-mid-val" style="color:#ff8e99;">${minusSum}</strong>
          </div>
        </div>

        <div class="calc-goal-box ${verdict.tone === "lib-g-high" ? "ok" : verdict.tone === "lib-g-low" ? "warn" : "reach"}">
          <div class="calc-goal-main">
            Przewidywana ocena: <span class="calc-goal-badge ${verdict.tone}">${esc(verdict.grade)}</span>
          </div>
          <div class="calc-goal-sub">
            ${esc(verdict.reason)}<br/>
            <strong>${esc(verdict.nextInfo)}</strong>
          </div>
        </div>
      `;
    }
  }

  function switchCalcTab(tabName, withSound = true) {
    activeTab = tabName;
    if (withSound) sfx("move");
    document.querySelectorAll("#zsa-calculator-view .calc-tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-calc-tab") === tabName);
    });
    document.querySelectorAll("#zsa-calculator-view .calc-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === `calc-panel-${tabName}`);
    });
  }

  /* ==================== START I ZDARZENIA ==================== */
  window.onOpenZsaCalculator = function () {
    syncLibrusSourceBar();
    syncAttendanceSourceBar();
    syncBehaviorSourceBar();
    renderAverageTab();
    renderPointsTab();
    renderAttendanceCalcTab();
    renderBehaviorTab();
  };

  window.openZsaCalculatorTab = function (tabName) {
    if (typeof window.openZsaAppById === "function") {
      window.openZsaAppById("calculator-app");
    }
    switchCalcTab(tabName || "avg", false);
    if (typeof window.onOpenZsaCalculator === "function") {
      window.onOpenZsaCalculator();
    }
  };

  function initCalculatorEvents() {
    document.querySelectorAll("#zsa-calculator-view .calc-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchCalcTab(btn.getAttribute("data-calc-tab"), true));
    });

    // Kliknięcie oceny w szybkim pickerze
    $("calc-quick-grades")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-qgrade]");
      if (!btn) return;
      selectedQuickGrade = btn.getAttribute("data-qgrade");
      sfx("move");
      renderQuickPickers();
    });

    // Kliknięcie wagi w szybkim pickerze
    $("calc-quick-weights")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-qweight]");
      if (!btn) return;
      selectedQuickWeight = Number(btn.getAttribute("data-qweight")) || 1;
      sfx("move");
      renderQuickPickers();
    });

    // Dodanie oceny ręcznie
    $("calc-add-grade-btn")?.addEventListener("click", () => {
      const note = ($("calc-note-input")?.value || "").trim() || `Wpis ręczny (waga ${selectedQuickWeight})`;
      gradesList.push({
        id: `man-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        label: selectedQuickGrade,
        weight: selectedQuickWeight,
        note,
        fromLibrus: false
      });
      if ($("calc-note-input")) $("calc-note-input").value = "";
      sfx("select");
      renderAverageTab();
    });

    // Wyczyść wszystkie oceny
    $("calc-clear-grades-btn")?.addEventListener("click", () => {
      gradesList = [];
      activeSubjectName = "";
      const noteEl = $("calc-import-note");
      if (noteEl) noteEl.style.display = "none";
      sfx("back");
      syncLibrusSourceBar();
      renderAverageTab();
    });

    // Usuwanie pojedynczej oceny z listy
    $("calc-grades-items")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-del-id]");
      if (!btn) return;
      const id = btn.getAttribute("data-del-id");
      gradesList = gradesList.filter((x) => x.id !== id);
      sfx("back");
      renderAverageTab();
    });

    // Przełącznik reguły +/- (Statut ZSA vs Klasyczna)
    $("calc-pm-rule")?.addEventListener("change", (e) => {
      plusMinusRule = e.target.value || "zsa";
      sfx("move");
      renderAverageTab();
    });

    // Presety celu średniej (Zdana / Pasek itd.)
    $("calc-goal-presets")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-goal]");
      if (!btn) return;
      goalTarget = parseFloat(btn.getAttribute("data-goal")) || 4.75;
      if ($("calc-goal-input")) $("calc-goal-input").value = goalTarget.toFixed(2);
      document.querySelectorAll("#calc-goal-presets .calc-preset-btn").forEach((b) => {
        b.classList.toggle("active", b === btn);
      });
      sfx("move");
      renderAverageTab();
    });

    $("calc-goal-input")?.addEventListener("input", (e) => {
      const v = parseFloat(String(e.target.value || "").replace(",", "."));
      if (!Number.isNaN(v)) {
        goalTarget = v;
        document.querySelectorAll("#calc-goal-presets .calc-preset-btn").forEach((b) => b.classList.remove("active"));
        renderAverageTab();
      }
    });

    $("calc-goal-weights")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-gweight]");
      if (!btn) return;
      goalWeight = Number(btn.getAttribute("data-gweight")) || 3;
      sfx("move");
      renderAverageTab();
    });

    // Kalkulator punktów (%)
    $("calc-pts-scored")?.addEventListener("input", renderPointsTab);
    $("calc-pts-max")?.addEventListener("input", renderPointsTab);

    // Dodanie oceny wyliczonej z punktów do listy średniej
    $("calc-pts-result")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-push-weight]");
      if (!btn || !lastPointsGrade) return;
      const w = Number(btn.getAttribute("data-push-weight")) || 3;
      gradesList.push({
        id: `pts-${Date.now()}`,
        label: lastPointsGrade.label,
        weight: w,
        note: `Z punktów (${lastPointsGrade.scored}/${lastPointsGrade.maxPts} = ${lastPointsGrade.exactPct.toFixed(1)}%)`,
        fromLibrus: false
      });
      sfx("select");
      renderAverageTab();
      const msg = $("calc-pts-push-msg");
      if (msg) {
        msg.style.display = "block";
        msg.textContent = `✓ Dodano ocenę ${lastPointsGrade.label} (waga ${w}) do Kalkulatora Średniej!`;
      }
    });

    // Automatyczne odświeżenie paska Librusa po zalogowaniu / wylogowaniu w Szybkim Librusie
    // Zakładka 3: Bezpieczna Frekwencja
    $("calc-att-present")?.addEventListener("input", renderAttendanceCalcTab);
    $("calc-att-absent")?.addEventListener("input", renderAttendanceCalcTab);
    $("calc-att-subjects-tbody")?.addEventListener("click", (e) => {
      const row = e.target.closest("tr[data-att-lesson]");
      if (!row) return;
      const lessonId = row.getAttribute("data-att-lesson");
      const summary = window.ZSA_LIBRUS_STORE?.getAttendanceSummary();
      const found = (summary?.bySubject || []).find((s) => s.lessonId === lessonId);
      if (!found) return;
      attSelectedKey = lessonId;
      attPresent = found.presences;
      attAbsent = found.absences;
      if ($("calc-att-present")) $("calc-att-present").value = String(attPresent);
      if ($("calc-att-absent")) $("calc-att-absent").value = String(attAbsent);
      if ($("calc-att-subj-select")) $("calc-att-subj-select").value = lessonId;
      sfx("move");
      renderAttendanceCalcTab();
    });

    // Zakładka 4: Zachowanie ZSA
    const handleBehaviorStep = (e) => {
      const incBtn = e.target.closest("[data-beh-inc]");
      const decBtn = e.target.closest("[data-beh-dec]");
      if (incBtn) {
        const id = incBtn.getAttribute("data-beh-inc");
        behaviorCounts[id] = (behaviorCounts[id] || 0) + 1;
        sfx("move");
        renderBehaviorTab();
      } else if (decBtn) {
        const id = decBtn.getAttribute("data-beh-dec");
        behaviorCounts[id] = Math.max(0, (behaviorCounts[id] || 0) - 1);
        sfx("move");
        renderBehaviorTab();
      }
    };
    $("calc-beh-plus-list")?.addEventListener("click", handleBehaviorStep);
    $("calc-beh-minus-list")?.addEventListener("click", handleBehaviorStep);
    $("calc-beh-custom-plus")?.addEventListener("input", (e) => {
      behaviorCustomPlus = Math.max(0, parseInt(e.target.value, 10) || 0);
      renderBehaviorTab();
    });
    $("calc-beh-custom-minus")?.addEventListener("input", (e) => {
      behaviorCustomMinus = Math.max(0, parseInt(e.target.value, 10) || 0);
      renderBehaviorTab();
    });
    $("calc-beh-reset-btn")?.addEventListener("click", () => {
      BEHAVIOR_ITEMS.forEach((it) => { behaviorCounts[it.id] = 0; });
      behaviorCustomPlus = 0;
      behaviorCustomMinus = 0;
      if ($("calc-beh-custom-plus")) $("calc-beh-custom-plus").value = "0";
      if ($("calc-beh-custom-minus")) $("calc-beh-custom-minus").value = "0";
      sfx("back");
      renderBehaviorTab();
    });

    window.addEventListener("zsa-librus-updated", () => {
      const store = window.ZSA_LIBRUS_STORE;
      const summary = store && store.isLoggedIn() ? store.getAttendanceSummary() : null;
      if (summary && summary.available) {
        attSelectedKey = "OVERALL";
        attPresent = summary.presences;
        attAbsent = summary.absencesTotal;
        if ($("calc-att-present")) $("calc-att-present").value = String(attPresent);
        if ($("calc-att-absent")) $("calc-att-absent").value = String(attAbsent);
      }
      syncLibrusSourceBar();
      syncAttendanceSourceBar();
      syncBehaviorSourceBar();
      renderAttendanceCalcTab();
      renderBehaviorTab();
    });

    syncLibrusSourceBar();
    syncAttendanceSourceBar();
    syncBehaviorSourceBar();
    renderAverageTab();
    renderPointsTab();
    renderAttendanceCalcTab();
    renderBehaviorTab();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCalculatorEvents);
  } else {
    initCalculatorEvents();
  }
})();
