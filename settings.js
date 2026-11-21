/* =========================================================================
   ZSAGames — Moduł "Ustawienia" (Motywy, Tło, 3D, Audio i Preferencje PS4)
   ========================================================================= */
(function () {
  "use strict";

  const STORAGE_KEY = "zsa_system_settings_v1";

  const DEFAULT_SETTINGS = {
    theme: "ps4-blue",
    customBg: "#0039a6",
    customWave: "#3aa6ff",
    wavesEnabled: true,
    sparklesEnabled: true,
    school3dEnabled: true,
    school3dMode: "wireframe",
    sfxEnabled: true,
    sfxVolume: 0.75,
    musicEnabled: true,
    musicVolume: 1.0,
    showBellInTopBar: true,
    openInNewTab: true,
    reducedMotion: false,
    cleanSchoolMode: false,
    pinnedClass: ""
  };

  const THEME_PRESETS = {
    "ps4-blue": {
      id: "ps4-blue",
      name: "Klasyczny PS4 (Orbis Blue)",
      desc: "Oryginalny kobaltowy błękit PlayStation 4 i jedwabiste fale XMB.",
      preview: "linear-gradient(135deg, #0039a6 0%, #0046bf 50%, #001852 100%)",
      bodyBg: "#001c52",
      bgStops: ["#0039a6", "#0046bf", "#002b82", "#001852"],
      glow: ["rgba(110, 195, 255, 0.34)", "rgba(38, 124, 240, 0.16)", "rgba(0, 32, 96, 0)"],
      waves: [
        ["rgba(0, 26, 94, 0.52)", "rgba(24, 102, 224, 0.42)", "rgba(96, 185, 255, 0.14)"],
        ["rgba(8, 52, 146, 0.46)", "rgba(56, 146, 255, 0.36)", "rgba(175, 225, 255, 0.16)"],
        ["rgba(18, 80, 190, 0.34)", "rgba(115, 196, 255, 0.24)", "rgba(235, 248, 255, 0.08)"]
      ],
      crests: ["rgba(195, 232, 255, 0.56)", "rgba(240, 250, 255, 0.72)", "rgba(155, 215, 255, 0.38)"],
      sparkle: "rgba(230, 246, 255, 0.52)",
      accent: "#3aa6ff",
      focusCyan: "#7ec8ff",
      wireframeColor: 0x7ec8ff,
      fogColor: 0x002d85,
      fillColor: 0x062364
    },
    "dark-oled": {
      id: "dark-oled",
      name: "Ciemny Motyw (Midnight OLED)",
      desc: "Głęboka czerń i grafit z delikatnym srebrno-niebieskim światłem — idealny na wieczór.",
      preview: "linear-gradient(135deg, #121826 0%, #090d16 55%, #020306 100%)",
      bodyBg: "#04060a",
      bgStops: ["#0d1320", "#121a2b", "#070a12", "#020306"],
      glow: ["rgba(120, 165, 235, 0.18)", "rgba(45, 70, 120, 0.09)", "rgba(2, 3, 6, 0)"],
      waves: [
        ["rgba(12, 18, 32, 0.56)", "rgba(38, 56, 92, 0.40)", "rgba(120, 155, 215, 0.14)"],
        ["rgba(18, 26, 44, 0.48)", "rgba(62, 88, 138, 0.34)", "rgba(165, 195, 245, 0.14)"],
        ["rgba(28, 38, 62, 0.34)", "rgba(95, 125, 180, 0.22)", "rgba(215, 230, 255, 0.08)"]
      ],
      crests: ["rgba(165, 195, 240, 0.42)", "rgba(220, 235, 255, 0.56)", "rgba(120, 150, 200, 0.28)"],
      sparkle: "rgba(205, 222, 250, 0.42)",
      accent: "#60a5fa",
      focusCyan: "#93c5fd",
      wireframeColor: 0x7b98c9,
      fogColor: 0x070a12,
      fillColor: 0x0a0f1a
    },
    "zsa-gold": {
      id: "zsa-gold",
      name: "ZSA Akademicki (Granat & Złoto)",
      desc: "Barwy Zespołu Szkół Akademickich: królewski granat połączony ze złotym połyskiem.",
      preview: "linear-gradient(135deg, #0b245c 0%, #143678 52%, #7a5d0c 100%)",
      bodyBg: "#04112e",
      bgStops: ["#071b47", "#0f2f73", "#061538", "#02091c"],
      glow: ["rgba(245, 196, 24, 0.28)", "rgba(195, 145, 20, 0.13)", "rgba(2, 9, 28, 0)"],
      waves: [
        ["rgba(8, 22, 66, 0.54)", "rgba(120, 92, 18, 0.34)", "rgba(245, 196, 24, 0.16)"],
        ["rgba(14, 38, 96, 0.48)", "rgba(180, 140, 24, 0.30)", "rgba(255, 228, 120, 0.18)"],
        ["rgba(22, 54, 128, 0.36)", "rgba(220, 178, 42, 0.22)", "rgba(255, 245, 195, 0.09)"]
      ],
      crests: ["rgba(255, 220, 105, 0.55)", "rgba(255, 244, 195, 0.72)", "rgba(245, 196, 24, 0.38)"],
      sparkle: "rgba(255, 232, 145, 0.58)",
      accent: "#f5c418",
      focusCyan: "#fde068",
      wireframeColor: 0xf5c418,
      fogColor: 0x061538,
      fillColor: 0x0a1c42
    },
    "crimson": {
      id: "crimson",
      name: "Karmazynowy (PS4 Flow Red)",
      desc: "Dynamiczna głęboka czerwień inspirowana motywem PlayStation Flow Red.",
      preview: "linear-gradient(135deg, #8a0c29 0%, #5c061b 55%, #1f0209 100%)",
      bodyBg: "#24030c",
      bgStops: ["#7d0a24", "#a31234", "#4f0618", "#1f0209"],
      glow: ["rgba(255, 120, 150, 0.30)", "rgba(205, 36, 74, 0.15)", "rgba(31, 2, 9, 0)"],
      waves: [
        ["rgba(72, 4, 22, 0.54)", "rgba(182, 24, 62, 0.40)", "rgba(255, 120, 150, 0.15)"],
        ["rgba(104, 10, 34, 0.48)", "rgba(220, 48, 88, 0.34)", "rgba(255, 175, 195, 0.16)"],
        ["rgba(138, 18, 48, 0.34)", "rgba(255, 95, 130, 0.22)", "rgba(255, 230, 238, 0.08)"]
      ],
      crests: ["rgba(255, 195, 210, 0.52)", "rgba(255, 235, 240, 0.68)", "rgba(255, 140, 168, 0.36)"],
      sparkle: "rgba(255, 222, 232, 0.50)",
      accent: "#ff5c7c",
      focusCyan: "#ff9db2",
      wireframeColor: 0xff859f,
      fogColor: 0x450514,
      fillColor: 0x2b040e
    },
    "emerald": {
      id: "emerald",
      name: "Szmaragdowy (Emerald Flow)",
      desc: "Spokojny, głęboki szmaragd z miętowymi falami i czystym kontrastem.",
      preview: "linear-gradient(135deg, #066b52 0%, #044535 55%, #011a14 100%)",
      bodyBg: "#021e17",
      bgStops: ["#044e3c", "#067056", "#03362a", "#011a14"],
      glow: ["rgba(78, 242, 168, 0.28)", "rgba(16, 165, 114, 0.14)", "rgba(1, 26, 20, 0)"],
      waves: [
        ["rgba(2, 46, 35, 0.54)", "rgba(14, 138, 98, 0.40)", "rgba(78, 242, 168, 0.15)"],
        ["rgba(6, 74, 56, 0.46)", "rgba(28, 178, 128, 0.34)", "rgba(167, 243, 208, 0.16)"],
        ["rgba(12, 102, 76, 0.34)", "rgba(78, 220, 168, 0.22)", "rgba(225, 255, 242, 0.08)"]
      ],
      crests: ["rgba(167, 243, 208, 0.54)", "rgba(225, 255, 242, 0.70)", "rgba(78, 242, 168, 0.36)"],
      sparkle: "rgba(204, 255, 232, 0.50)",
      accent: "#10b981",
      focusCyan: "#6ee7b7",
      wireframeColor: 0x6ee7b7,
      fogColor: 0x033025,
      fillColor: 0x04261d
    },
    "cyberpunk": {
      id: "cyberpunk",
      name: "Aksamitna Otchłań (Neon Violet)",
      desc: "Neonowy fiolet z poświatą magenta i cyjan — w klimacie Aksamitnej Otchłani.",
      preview: "linear-gradient(135deg, #4c1d95 0%, #2a0a5e 55%, #09031a 100%)",
      bodyBg: "#0d0424",
      bgStops: ["#2d0d68", "#48169c", "#1a0742", "#09031a"],
      glow: ["rgba(220, 105, 255, 0.32)", "rgba(105, 48, 220, 0.16)", "rgba(9, 3, 26, 0)"],
      waves: [
        ["rgba(30, 8, 72, 0.54)", "rgba(124, 45, 212, 0.42)", "rgba(192, 132, 252, 0.16)"],
        ["rgba(52, 14, 112, 0.46)", "rgba(168, 65, 240, 0.34)", "rgba(126, 228, 255, 0.16)"],
        ["rgba(74, 22, 148, 0.34)", "rgba(216, 115, 255, 0.24)", "rgba(245, 225, 255, 0.08)"]
      ],
      crests: ["rgba(232, 180, 255, 0.56)", "rgba(185, 242, 255, 0.72)", "rgba(216, 115, 255, 0.38)"],
      sparkle: "rgba(240, 212, 255, 0.55)",
      accent: "#c084fc",
      focusCyan: "#e879f9",
      wireframeColor: 0xd8b4fe,
      fogColor: 0x1a0742,
      fillColor: 0x140633
    }
  };

  let currentSettings = loadSettings();
  let activeCategory = "themes"; // "themes" | "display" | "audio" | "system"
  let clearCacheArmed = false;
  let clearCacheTimer = null;

  const $ = (id) => document.getElementById(id);

  function sfx(type) {
    if (typeof playCustomWav === "function") {
      try { playCustomWav(type); } catch (_) {}
    }
  }

  function hexToRgb(hex) {
    const clean = String(hex || "#0039a6").replace("#", "").trim();
    const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean.padEnd(6, "0").slice(0, 6);
    const num = parseInt(full, 16);
    if (Number.isNaN(num)) return { r: 0, g: 57, b: 166 };
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  }

  function scaleRgb(rgb, factor) {
    return {
      r: Math.max(0, Math.min(255, Math.round(rgb.r * factor))),
      g: Math.max(0, Math.min(255, Math.round(rgb.g * factor))),
      b: Math.max(0, Math.min(255, Math.round(rgb.b * factor)))
    };
  }

  function mixRgb(a, b, t) {
    return {
      r: Math.round(a.r + (b.r - a.r) * t),
      g: Math.round(a.g + (b.g - a.g) * t),
      b: Math.round(a.b + (b.b - a.b) * t)
    };
  }

  function rgbToHex({ r, g, b }) {
    return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
  }

  function rgbToInt({ r, g, b }) {
    return (r << 16) | (g << 8) | b;
  }

  function rgba({ r, g, b }, a) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  function buildCustomTheme(bgHex, waveHex) {
    const bg = hexToRgb(bgHex);
    const wv = hexToRgb(waveHex);
    const white = { r: 255, g: 255, b: 255 };

    const stop0 = rgbToHex(scaleRgb(bg, 0.92));
    const stop1 = rgbToHex(scaleRgb(bg, 1.15));
    const stop2 = rgbToHex(scaleRgb(bg, 0.62));
    const stop3 = rgbToHex(scaleRgb(bg, 0.34));
    const lightWv = mixRgb(wv, white, 0.45);
    const brightWv = mixRgb(wv, white, 0.78);

    return {
      id: "custom",
      name: "Własny Motyw",
      desc: "Twoja własna kombinacja koloru tła i fal.",
      preview: `linear-gradient(135deg, ${stop1} 0%, ${stop2} 60%, ${rgbToHex(wv)} 100%)`,
      bodyBg: stop3,
      bgStops: [stop0, stop1, stop2, stop3],
      glow: [rgba(lightWv, 0.32), rgba(wv, 0.15), rgba(scaleRgb(bg, 0.3), 0)],
      waves: [
        [rgba(scaleRgb(bg, 0.45), 0.54), rgba(wv, 0.42), rgba(lightWv, 0.15)],
        [rgba(scaleRgb(bg, 0.65), 0.46), rgba(mixRgb(wv, white, 0.18), 0.35), rgba(brightWv, 0.16)],
        [rgba(scaleRgb(bg, 0.85), 0.34), rgba(lightWv, 0.24), rgba(brightWv, 0.08)]
      ],
      crests: [rgba(lightWv, 0.55), rgba(brightWv, 0.72), rgba(wv, 0.38)],
      sparkle: rgba(brightWv, 0.52),
      accent: rgbToHex(wv),
      focusCyan: rgbToHex(lightWv),
      wireframeColor: rgbToInt(lightWv),
      fogColor: rgbToInt(scaleRgb(bg, 0.55)),
      fillColor: rgbToInt(scaleRgb(bg, 0.35))
    };
  }

  function getActiveThemeConfig() {
    if (currentSettings.theme === "custom") {
      return buildCustomTheme(currentSettings.customBg, currentSettings.customWave);
    }
    return THEME_PRESETS[currentSettings.theme] || THEME_PRESETS["ps4-blue"];
  }

  function loadSettings() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      const forcedSchool = new URLSearchParams(window.location.search).get("mode") === "school";
      return {
        ...DEFAULT_SETTINGS,
        ...parsed,
        school3dMode: "wireframe",
        cleanSchoolMode: forcedSchool ? true : Boolean(parsed.cleanSchoolMode)
      };
    } catch (_) {
      return { ...DEFAULT_SETTINGS };
    }
  }

  function saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentSettings));
    } catch (_) {}
  }

  function applySettingsToSystem() {
    const theme = getActiveThemeConfig();
    const root = document.documentElement;

    root.style.setProperty("--ps4-accent", theme.accent);
    root.style.setProperty("--ps4-focus-cyan", theme.focusCyan);
    root.style.setProperty("--theme-bg-0", theme.bgStops[0]);
    root.style.setProperty("--theme-bg-1", theme.bgStops[1]);
    root.style.setProperty("--theme-bg-2", theme.bgStops[2]);
    root.style.setProperty("--theme-bg-3", theme.bgStops[3]);
    root.style.setProperty("--theme-glow-0", theme.glow[0]);
    root.style.setProperty("--theme-glow-1", theme.glow[1]);
    root.style.setProperty("--theme-glow-2", theme.glow[2]);
    document.body.style.backgroundColor = theme.bodyBg;

    document.body.classList.toggle("zsa-reduced-motion", Boolean(currentSettings.reducedMotion));
    document.body.classList.toggle("zsa-theme-oled", currentSettings.theme === "dark-oled");

    // Powiadom base.js (fale, audio, dzwonek, tryb otwierania, Czysta Szkoła, Moja Klasa)
    if (typeof window.applyZsaSystemSettings === "function") {
      window.applyZsaSystemSettings(currentSettings, theme);
    }

    // Powiadom tło 3D szkoły (.glb) — zawsze w trybie wireframe
    if (window.ZSA_SCHOOL_3D) {
      if (typeof window.ZSA_SCHOOL_3D.setEnabled === "function") {
        window.ZSA_SCHOOL_3D.setEnabled(Boolean(currentSettings.school3dEnabled));
      }
      if (typeof window.ZSA_SCHOOL_3D.applyTheme === "function") {
        window.ZSA_SCHOOL_3D.applyTheme(theme, "wireframe");
      }
    }
  }

  function updateSetting(key, value) {
    currentSettings[key] = value;
    saveSettings();
    applySettingsToSystem();
    renderSettingsPanel();
  }

  /* ==================== RENDEROWANIE UI USTAWIEŃ (STYL PS4 ORBIS OS) ==================== */
  function switchCategory(cat, withSound = true) {
    activeCategory = cat;
    if (withSound) sfx("move");
    document.querySelectorAll("#zsa-settings-view .set-cat-item").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-set-cat") === cat);
    });
    renderSettingsPanel();
  }

  function renderToggleRow(key, title, desc, checked, disabled = false) {
    return `
      <label class="set-row ${disabled ? "is-disabled" : ""}">
        <div class="set-row-info">
          <strong>${title}</strong>
          <span>${desc}</span>
        </div>
        <div class="set-switch">
          <input type="checkbox" data-set-toggle="${key}" ${checked ? "checked" : ""} ${disabled ? "disabled" : ""} />
          <span class="set-slider"></span>
        </div>
      </label>
    `;
  }

  function renderSettingsPanel() {
    const bodyEl = $("set-detail-body");
    const headTitleEl = $("set-detail-title");
    const headBadgeEl = $("set-detail-badge");
    if (!bodyEl) return;

    if (activeCategory === "themes") {
      if (headTitleEl) headTitleEl.textContent = "Motywy i Kolory Systemu";
      if (headBadgeEl) headBadgeEl.textContent = getActiveThemeConfig().name;

      const presetCards = Object.values(THEME_PRESETS)
        .map((t) => {
          const isActive = currentSettings.theme === t.id;
          return `
            <button type="button" class="set-theme-card ${isActive ? "active" : ""}" data-theme-id="${t.id}">
              <div class="set-theme-swatch" style="background:${t.preview};">
                <span class="set-theme-wave-line" style="background:${t.focusCyan};"></span>
                ${isActive ? `<span class="set-theme-check">✓ Aktywny</span>` : ""}
              </div>
              <div class="set-theme-meta">
                <strong>${t.name}</strong>
                <span>${t.desc}</span>
              </div>
            </button>
          `;
        })
        .join("");

      const isCustom = currentSettings.theme === "custom";

      bodyEl.innerHTML = `
        <div class="set-section-lead">
          Wybierz motyw wizualny — zmiany koloru tła, fal XMB i siatki 3D budynku zobaczysz od razu na żywo za oknem ustawień.
        </div>

        <div class="set-theme-grid">
          ${presetCards}
        </div>

        <div class="set-custom-card ${isCustom ? "active" : ""}">
          <div class="set-custom-head">
            <div>
              <strong>Własny motyw kolorystyczny</strong>
              <span>Dobierz dowolny kolor tła oraz kolor fal i podświetleń.</span>
            </div>
            <button type="button" class="zsa-refresh-btn lib-compact-btn" id="set-use-custom-btn">
              ${isCustom ? "✓ Używany" : "Aktywuj własny"}
            </button>
          </div>
          <div class="set-color-pickers">
            <label class="set-color-field">
              <span>Kolor tła</span>
              <input type="color" id="set-custom-bg" value="${currentSettings.customBg}" />
            </label>
            <label class="set-color-field">
              <span>Kolor fal i akcentu</span>
              <input type="color" id="set-custom-wave" value="${currentSettings.customWave}" />
            </label>
          </div>
        </div>
      `;

      bodyEl.querySelectorAll("[data-theme-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
          sfx("select");
          updateSetting("theme", btn.getAttribute("data-theme-id"));
        });
      });

      $("set-use-custom-btn")?.addEventListener("click", () => {
        sfx("select");
        updateSetting("theme", "custom");
      });

      $("set-custom-bg")?.addEventListener("input", (e) => {
        currentSettings.customBg = e.target.value;
        currentSettings.theme = "custom";
        saveSettings();
        applySettingsToSystem();
        if (headBadgeEl) headBadgeEl.textContent = "Własny Motyw";
      });

      $("set-custom-wave")?.addEventListener("input", (e) => {
        currentSettings.customWave = e.target.value;
        currentSettings.theme = "custom";
        saveSettings();
        applySettingsToSystem();
        if (headBadgeEl) headBadgeEl.textContent = "Własny Motyw";
      });
    } else if (activeCategory === "display") {
      if (headTitleEl) headTitleEl.textContent = "Tło, Fale PS4 i Model 3D";
      const has3dCapable = Boolean(window.ZSA_SCHOOL_3D && typeof window.ZSA_SCHOOL_3D.isSupported === "function" && window.ZSA_SCHOOL_3D.isSupported());
      if (headBadgeEl) headBadgeEl.textContent = has3dCapable ? "PC • 3D Wireframe" : "Tryb 2D";

      bodyEl.innerHTML = `
        <div class="set-rows-stack">
          ${renderToggleRow(
            "wavesEnabled",
            "Animowane fale PS4 w tle",
            "Wyświetla klasyczne, płynące wstęgi XMB reagujące na ruch menu.",
            currentSettings.wavesEnabled
          )}
          ${renderToggleRow(
            "sparklesEnabled",
            "Cząsteczki i iskierki tła",
            "Delikatne świetlne punkty unoszące się nad falami w menu głównym.",
            currentSettings.sparklesEnabled,
            !currentSettings.wavesEnabled
          )}
          ${renderToggleRow(
            "school3dEnabled",
            "Budynek szkoły 3D w tle (Wireframe)",
            has3dCapable
              ? "Renderuje siatkę 3D (wireframe) budynku ZSA za falami PS4 z płynną paralaksą (automatycznie pauzowany w Sleep Mode)."
              : "Automatycznie wyłączone na telefonach, tabletach i słabszych komputerach (Low-End PC) dla maksymalnej płynności.",
            has3dCapable && currentSettings.school3dEnabled,
            !has3dCapable
          )}
          ${renderToggleRow(
            "reducedMotion",
            "Tryb oszczędny / Mniej animacji",
            "Wyłącza pulsowanie poświat i zmniejsza obciążenie karty graficznej (dobre na laptopy na baterii).",
            currentSettings.reducedMotion
          )}
        </div>
      `;

      bindToggles(bodyEl);
    } else if (activeCategory === "audio") {
      if (headTitleEl) headTitleEl.textContent = "Dźwięk Menu i Muzyka";
      if (headBadgeEl) {
        headBadgeEl.textContent = currentSettings.musicEnabled || currentSettings.sfxEnabled ? "Audio Aktywne" : "Wyciszone";
      }

      const sfxPct = Math.round((currentSettings.sfxVolume ?? 0.75) * 100);
      const musPct = Math.round((currentSettings.musicVolume ?? 1.0) * 100);

      bodyEl.innerHTML = `
        <div class="set-rows-stack">
          ${renderToggleRow(
            "sfxEnabled",
            "Dźwięki nawigacji menu (.wav)",
            "Odtwarza charakterystyczne dźwięki przesuwania kafelków, zatwierdzania i powrotu.",
            currentSettings.sfxEnabled
          )}

          <div class="set-row ${!currentSettings.sfxEnabled ? "is-disabled" : ""}">
            <div class="set-row-info">
              <strong>Głośność dźwięków menu</strong>
              <span>Aktualny poziom: <strong id="set-sfx-vol-label">${sfxPct}%</strong></span>
            </div>
            <div class="set-range-wrap">
              <input type="range" id="set-sfx-vol" min="0" max="100" step="5" value="${sfxPct}" ${!currentSettings.sfxEnabled ? "disabled" : ""} />
              <button type="button" class="tt-back-step-btn lib-compact-btn" id="set-test-sfx-btn" ${!currentSettings.sfxEnabled ? "disabled" : ""}>Test</button>
            </div>
          </div>

          ${renderToggleRow(
            "musicEnabled",
            "Muzyka tła systemu i gier (.mp3)",
            "Płynnie odtwarza muzykę systemową PS4 oraz motywy muzyczne w podglądzie gier.",
            currentSettings.musicEnabled
          )}

          <div class="set-row ${!currentSettings.musicEnabled ? "is-disabled" : ""}">
            <div class="set-row-info">
              <strong>Głośność muzyki w tle</strong>
              <span>Aktualny poziom: <strong id="set-mus-vol-label">${musPct}%</strong></span>
            </div>
            <div class="set-range-wrap">
              <input type="range" id="set-mus-vol" min="0" max="100" step="5" value="${musPct}" ${!currentSettings.musicEnabled ? "disabled" : ""} />
            </div>
          </div>
        </div>
      `;

      bindToggles(bodyEl);

      $("set-sfx-vol")?.addEventListener("input", (e) => {
        const pct = Number(e.target.value);
        currentSettings.sfxVolume = pct / 100;
        if ($("set-sfx-vol-label")) $("set-sfx-vol-label").textContent = `${pct}%`;
        saveSettings();
        applySettingsToSystem();
      });

      $("set-test-sfx-btn")?.addEventListener("click", () => {
        sfx("select");
      });

      $("set-mus-vol")?.addEventListener("input", (e) => {
        const pct = Number(e.target.value);
        currentSettings.musicVolume = pct / 100;
        if ($("set-mus-vol-label")) $("set-mus-vol-label").textContent = `${pct}%`;
        saveSettings();
        applySettingsToSystem();
      });
    } else if (activeCategory === "system") {
      if (headTitleEl) headTitleEl.textContent = "Interfejs, Szkoła i System";
      if (headBadgeEl) headBadgeEl.textContent = currentSettings.cleanSchoolMode ? "Czysta Szkoła" : "ZSAGames OS";

      const allClasses = typeof window.getZsaAllClassIds === "function"
        ? window.getZsaAllClassIds()
        : ["1A ALO","1B ALO","2A ALO","2B ALO","3A ALO","4A ALO","4B ALO","4C ALO","1A AT","1B AT","2A AT","2BC AT","3A AT","3B AT","4A AT","4BC AT","4D AT","5A AT","5B AT","5C AT"];
      const classOpts = allClasses
        .map((c) => `<option value="${c}" ${currentSettings.pinnedClass === c ? "selected" : ""}>${c}</option>`)
        .join("");

      bodyEl.innerHTML = `
        <div class="set-rows-stack">
          ${renderToggleRow(
            "cleanSchoolMode",
            "Tryb „Czysta Szkoła” (ukryj Gry i Rankingi)",
            "Chowa folder Gry i Rankingi z menu głównego — zostają same narzędzia szkolne (działa też przez link ?mode=school).",
            currentSettings.cleanSchoolMode
          )}

          <div class="set-row">
            <div class="set-row-info">
              <strong>Moja klasa (opcjonalnie — tylko na własny PC / telefon)</strong>
              <span>Na szkolnych komputerach zostaw <strong>Brak (komputer szkolny)</strong>. Po wybraniu na swoim urządzeniu pasek górny pokaże Twoją bieżącą lekcję i salę.</span>
            </div>
            <select id="set-pinned-class" class="lib-select" style="min-width:210px;">
              <option value="" ${!currentSettings.pinnedClass ? "selected" : ""}>Brak (komputer szkolny)</option>
              ${classOpts}
            </select>
          </div>

          ${renderToggleRow(
            "showBellInTopBar",
            "Licznik czasu do dzwonka w pasku górnym",
            "Wyświetla obok zegara aktualną lekcję lub przerwę oraz ile minut zostało do dzwonka (Pn–Pt).",
            currentSettings.showBellInTopBar
          )}
          ${renderToggleRow(
            "openInNewTab",
            "Otwieraj gry i linki w nowej karcie",
            "Po wyłączeniu gry i zewnętrzne strony ZSA będą otwierać się w tej samej karcie przeglądarki.",
            currentSettings.openInNewTab
          )}

          <div class="set-row">
            <div class="set-row-info">
              <strong>Przywróć ustawienia domyślne</strong>
              <span>Resetuje motyw do klasycznego niebieskiego PS4, włącza fale, odczepia klasę oraz przywraca domyślne audio.</span>
            </div>
            <button type="button" class="tt-back-step-btn lib-compact-btn" id="set-reset-defaults-btn">
              Przywróć domyślne
            </button>
          </div>

          <div class="set-row">
            <div class="set-row-info">
              <strong>Wyczyść zapisane dane przeglądarki</strong>
              <span>Usuwa zapamiętany login Szybkiego Librusa, odblokowane klucze płyt oraz lokalny cache.</span>
            </div>
            <button type="button" class="gh-mini-btn danger lib-compact-btn ${clearCacheArmed ? "confirming" : ""}" id="set-clear-cache-btn">
              ${clearCacheArmed ? "Kliknij ponownie, aby wyczyścić" : "Wyczyść dane"}
            </button>
          </div>
        </div>
      `;

      bindToggles(bodyEl);

      $("set-pinned-class")?.addEventListener("change", (e) => {
        sfx("select");
        updateSetting("pinnedClass", e.target.value || "");
      });

      $("set-reset-defaults-btn")?.addEventListener("click", () => {
        currentSettings = { ...DEFAULT_SETTINGS };
        saveSettings();
        applySettingsToSystem();
        sfx("select");
        renderSettingsPanel();
      });

      $("set-clear-cache-btn")?.addEventListener("click", () => {
        if (!clearCacheArmed) {
          clearCacheArmed = true;
          clearTimeout(clearCacheTimer);
          clearCacheTimer = setTimeout(() => {
            clearCacheArmed = false;
            renderSettingsPanel();
          }, 3500);
          sfx("move");
          renderSettingsPanel();
          return;
        }

        clearCacheArmed = false;
        clearTimeout(clearCacheTimer);
        try {
          localStorage.removeItem("zsa_librus_last_login");
          localStorage.removeItem("zsa_unlocked_discs");
          localStorage.removeItem("zsa_days_off");
          localStorage.removeItem("zsa_teacher_absences");
        } catch (_) {}
        sfx("back");
        renderSettingsPanel();
      });
    }
  }

  function bindToggles(container) {
    container.querySelectorAll("[data-set-toggle]").forEach((input) => {
      input.addEventListener("change", (e) => {
        const key = input.getAttribute("data-set-toggle");
        const checked = Boolean(e.target.checked);
        updateSetting(key, checked);
        if (key !== "sfxEnabled" || checked) sfx("select");
      });
    });
  }

  /* ==================== PUBLICZNE API ==================== */
  window.ZSA_SETTINGS_MANAGER = {
    get: () => ({ ...currentSettings }),
    getTheme: getActiveThemeConfig,
    resetDefaults: () => {
      currentSettings = { ...DEFAULT_SETTINGS };
      saveSettings();
      applySettingsToSystem();
      renderSettingsPanel();
    },
    reapply: applySettingsToSystem
  };

  window.onOpenZsaSettings = function () {
    renderSettingsPanel();
  };

  function initSettingsModule() {
    document.querySelectorAll("#zsa-settings-view .set-cat-item").forEach((btn) => {
      btn.addEventListener("click", () => switchCategory(btn.getAttribute("data-set-cat"), true));
    });

    applySettingsToSystem();
    renderSettingsPanel();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSettingsModule);
  } else {
    initSettingsModule();
  }
})();