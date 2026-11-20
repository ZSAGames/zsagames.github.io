 /* ============================================================================
       0. USTAWIENIA OTWIERANIA APLIKACJI (_blank vs _self), SLEEP DELAY I AUDIO
       ============================================================================ */
    const OPEN_APPS_IN_NEW_TAB = true;
    const SLEEP_BEFORE_LAUNCH_DELAY_MS = 300; // Zmniejszony delay po wejściu w Sleep Mode przed otwarciem karty
    const NEWS_IMAGE_DWELL_MS = 380;          // Czas zatrzymania się na wpisie ZSA (w ms), po którym płynnie rozwija się zdjęcie

    const IS_LOW_END_PC = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
                          (navigator.deviceMemory && navigator.deviceMemory <= 4);

    const AUDIO_FADE_SETTINGS = {
      fadeDurationMs: 280,
      loopCrossfadeSec: 0.115,
      systemBaseVolume: 0.62,
      gameBaseVolume: 0.50
    };

    /* ============================================================================
       1. KONFIGURACJA WŁASNYCH DŹWIĘKÓW (.WAV) I MUZYKI SYSTEMOWEJ
       ============================================================================ */
    const SOUND_CONFIG = {
      move: "move.wav",
      select: "select.wav",
      back: "back.wav",
      systemMusic: "system_menu.mp3"
    };

    /* ============================================================================
       2. KONFIGURACJA GIER
       ============================================================================ */
    const CUSTOM_GAMES_DATA = [
      {
        id: "gtavi",
        title: "Grand Theft Auto VI",
        subtitle: "Vice City, USA",
        url: "https://www.rockstargames.com/VI",
        cover: "GTAVICover.png",
        background: "GTAVIBackground.png",
        music: "GTAVITheme.mp3",
        fallbackBg: "linear-gradient(135deg, #2b2d83, #8b3dff, #ff4f7a, #ff8a5b)",
        author: "Rockstar Games",
        platform: "PS5 / XBOX Series",
        description: "Jason i Lucia zawsze czuli, że los im nie sprzyja. Jednak gdy łatwy skok kończy się katastrofą, poznają najmroczniejsze oblicze najbardziej słonecznego miasta w Ameryce i trafiają w sam środek przestępczego spisku, który swoimi mackami oplata cały stan Leonida. Jeśli chcą wyjść z tego cało, muszą na sobie polegać tak, jak jeszcze nigdy wcześniej.",
        isDisc: true,
        buyUrl: "https://www.rockstargames.com/VI",
        discKeys: ["ZSA-GTAVI-2026", "ZSA777"],
      },
      {
        id: "przygoda-davea",
        title: "Przygoda Dave'a",
        subtitle: "PROJEKT #1 • ZSAGAMES",
        url: "https://zsagames.github.io/platformer",
        cover: "PDCover.png",
        background: "PDBackground.png",
        music: "PDTheme.mp3",
        fallbackBg: "linear-gradient(135deg, #8b2cf5, #0c121e)",
        author: "ZSAGames — ZSA Łomża",
        platform: "Platformówka 2D (Klawiatura / Pad / Dotyk)",
        description: "Rozdział 1, 2 & 3: Pokonaj Fortecę Evada, zdobądź Ostrze Rdzeniowe w Dżungli, zinfiltruj Bazę Johna i przebij się z Raygunem przez Saharę oraz Góry Johna w 125 poziomach!"
      },
      {
        id: "aksamitna-otchlan",
        title: "AKSAMITNA OTCHŁAŃ",
        subtitle: "PROJEKT #2 • ZSAGAMES",
        url: "https://zsagames.github.io/velvet",
        cover: "VPCover.png",
        background: "VPBackground.mp4",
        music: "VPTheme.mp3",
        fallbackBg: "linear-gradient(135deg, #21c438, #115c26, #1c0436)",
        author: "ZSAGames — ZSA Łomża",
        platform: "Top-Down Indie (Klawiatura / Pad / Dotyk)",
        description: "Obudź się w kryjówce. Sprawdź swoją dzienną Kwotę i Nocny Modyfikator. Idź ulicą Blackwater do kasyna, poznaj zasady z wbudowanym Trenerem i wróć do łóżka, zanim upłynie 6:00 na zegarze zmiany."
      },
      {
        id: "ravenfield-pl",
        title: "RavenField Polska Edition",
        subtitle: "PROJEKT #3 • ZSAGAMES",
        url: "https://zsagames.github.io/ravenfield",
        cover: "RFCover.png",
        background: "RFBackground.png",
        music: "RFTheme.mp3",
        fallbackBg: "linear-gradient(135deg, #2b4c7e, #0c172b)",
        author: "ZSAGames — ZSA Łomża",
        platform: "Singleplayer FPS (PC / Przeglądarka)",
        description: "Ravenfield to jednoosobowa, stylizowana strzelanka pierwszoosobowa (FPS), w której gracz wraz z drużyną sterowanych przez sztuczną inteligencję botów (Niebieskimi) walczy na różnorodnych mapach przeciwko drużynie przeciwnej (Czerwonym)."
      }
    ];

    /* ============================================================================
       3. KONFIGURACJA GŁÓWNEJ WSTĘGI PS4
       ============================================================================ */
    const MAIN_RIBBON_ITEMS = [
      {
        id: "whats-new",
        type: "system",
        isWhatsNew: true,
        title: "Co nowego",
        subtitle: "AKTUALNOŚCI ZSA ŁOMŻA",
        url: "https://zsa.mans.edu.pl/2026/",
        cover: "ZSACover.png",
        background: "https://zsa.mans.edu.pl/wp-content/uploads/2025/04/720-ZSA-w-Lomzy-film-promocyjny-2025-STRONA.mov",
        music: "",
        fallbackBg: "linear-gradient(135deg, #0b4ec2, #041d52)",
        author: "Zespół Szkół Akademickich w Łomży",
        platform: "Portal Informacyjny ZSA (zsa.mans.edu.pl/2026/)",
        description: "Najnowsze wiadomości i wydarzenia z życia Zespołu Szkół Akademickich w Łomży pobierane na bieżąco z archiwum 2026.",
        svg: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M32 11c12.7 0 23 8.1 23 18s-10.3 18-23 18c-3.4 0-6.7-.6-9.6-1.7L12 52l2.8-9.8C11.2 38.9 9 33.7 9 29c0-9.9 10.3-18 23-18z" fill="rgba(255,255,255,0.14)"/>
                <circle cx="32" cy="22" r="2.2" fill="#ffffff" stroke="none"/>
                <line x1="32" y1="28" x2="32" y2="37" stroke-width="3.5"/>
              </svg>`
      },
      {
        id: "librus-app",
        type: "system",
        isLibrus: true,
        title: "Szybki Librus",
        subtitle: "FREKWENCJA, TEMATY LEKCJI I OCENY",
        url: "https://portal.librus.pl/",
        cover: "LibrusCover.png",
        background: "ZSABackground.png",
        music: "",
        fallbackBg: "linear-gradient(135deg, #1b5e20, #05213a)",
        author: "ZSAGames • Librus Synergia API",
        platform: "Dziennik Elektroniczny Online (Render API)",
        description: "Szybki podgląd nieobecności (w tym usprawiedliwionych), tematów zrealizowanych na opuszczonych lekcjach oraz ocen pogrupowanych według kategorii.",
        svg: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <rect x="12" y="10" width="40" height="44" rx="4" fill="rgba(255,255,255,0.14)"/>
                <line x1="20" y1="22" x2="44" y2="22"/>
                <line x1="20" y1="32" x2="44" y2="32"/>
                <line x1="20" y1="42" x2="34" y2="42"/>
                <circle cx="44" cy="44" r="8" fill="#10b981" stroke="#ffffff" stroke-width="2.5"/>
                <polyline points="41 44 43.2 46.2 47.5 41.8" stroke="#ffffff" stroke-width="2.2"/>
              </svg>`
      },
      {
        id: "timetable-app",
        type: "system",
        isTimetable: true,
        title: "Plan Lekcji",
        subtitle: "ROZKŁAD ZAJĘĆ ZSA (ALO / AT)",
        url: "https://zsa.mans.edu.pl/wp-content/uploads/2026/09/PL_UC_21092026_v2.pdf",
        cover: "ZSACover.png",
        background: "ZSABackground.png",
        music: "",
        fallbackBg: "linear-gradient(135deg, #0e4a8a, #051938)",
        author: "Zespół Szkół Akademickich w Łomży",
        platform: "Plan Lekcji 2026 (Liceum ALO / Technikum AT)",
        description: "Oficjalny wykaz lekcji Zespołu Szkół Akademickich w Łomży (ul. Studencka 19). Wybierz szkołę (Liceum lub Technikum) oraz klasę.",
        svg: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3">
                <rect x="10" y="12" width="44" height="42" rx="3" fill="rgba(255,255,255,0.12)"/>
                <line x1="10" y1="24" x2="54" y2="24" />
                <line x1="22" y1="8" x2="22" y2="16" stroke-width="4"/>
                <line x1="42" y1="8" x2="42" y2="16" stroke-width="4"/>
                <line x1="24" y1="24" x2="24" y2="54" />
                <line x1="39" y1="24" x2="39" y2="54" />
                <line x1="10" y1="34" x2="54" y2="34" />
                <line x1="10" y1="44" x2="54" y2="44" />
              </svg>`
      },
      {
        id: "teachers-app",
        type: "system",
        isTeachers: true,
        title: "Plan Nauczycieli",
        subtitle: "GODZINY LEKCYJNE I SALE (PDF)",
        url: "https://zsa.mans.edu.pl/wp-content/uploads/2026/09/PL_UC_21092026_v2.pdf",
        cover: "ZSACover.png",
        background: "ZSABackground.png",
        music: "",
        fallbackBg: "linear-gradient(135deg, #0b508c, #041936)",
        author: "Zespół Szkół Akademickich w Łomży",
        platform: "Wykaz Nauczycieli, Godzin i Sal 2026",
        description: "Pełna lista 53 nauczycieli ZSA w Łomży z oficjalnego planu PDF. Sprawdź, na jakich godzinach lekcyjnych, z jaką klasą i w jakiej sali dany nauczyciel prowadzi zajęcia.",
        svg: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3">
                <circle cx="24" cy="20" r="8" fill="rgba(255,255,255,0.14)"/>
                <path d="M10 46c0-7.5 6.3-13 14-13s14 5.5 14 13" fill="rgba(255,255,255,0.12)"/>
                <rect x="38" y="14" width="18" height="24" rx="2" fill="rgba(255,255,255,0.12)"/>
                <line x1="42" y1="21" x2="52" y2="21"/>
                <line x1="42" y1="27" x2="52" y2="27"/>
                <line x1="42" y1="33" x2="49" y2="33"/>
              </svg>`
      },
      {
        id: "calendar-app",
        type: "system",
        isCalendar: true,
        title: "Terminarz",
        subtitle: "DNI WOLNE I NIEOBECNOŚCI NAUCZYCIELI",
        url: "https://zsa.mans.edu.pl/",
        cover: "ZSACover.png",
        background: "ZSABackground.png",
        music: "",
        fallbackBg: "linear-gradient(135deg, #164b9c, #041534)",
        author: "Zespół Szkół Akademickich w Łomży",
        platform: "Globalny Terminarz Online (Cloud Sync)",
        description: "Sprawdź nadchodzące dni wolne od zajęć dydaktycznych oraz aktualną niedostępność nauczycieli (cały dzień lub konkretne godziny).",
        svg: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <rect x="10" y="14" width="44" height="40" rx="4" fill="rgba(255,255,255,0.14)"/>
                <line x1="10" y1="26" x2="54" y2="26"/>
                <line x1="22" y1="8" x2="22" y2="18" stroke-width="3.5"/>
                <line x1="42" y1="8" x2="42" y2="18" stroke-width="3.5"/>
                <circle cx="22" cy="36" r="2.5" fill="#f5c418" stroke="none"/>
                <circle cx="32" cy="36" r="2.5" fill="#ff6b7a" stroke="none"/>
                <circle cx="42" cy="36" r="2.5" fill="#ffffff" stroke="none"/>
                <circle cx="22" cy="45" r="2.5" fill="#ffffff" stroke="none"/>
                <circle cx="32" cy="45" r="2.5" fill="#f5c418" stroke="none"/>
              </svg>`
      },
      {
        id: "folder-games",
        type: "folder",
        title: "Gry",
        subtitle: "KOLEKCJA GIER ZSAGAMES",
        items: CUSTOM_GAMES_DATA
      },
      {
        id: "directions-app",
        type: "system",
        isDirections: true,
        title: "Kierunki Kształcenia",
        subtitle: "TECHNIKUM & LICEUM ZSA",
        url: "https://zsa.mans.edu.pl/technikum/",
        cover: "ZSACover.png",
        background: "ZSABackground.png",
        music: "",
        fallbackBg: "linear-gradient(135deg, #105a9e, #041a3a)",
        author: "Zespół Szkół Akademickich w Łomży",
        platform: "Oferta Edukacyjna ZSA (Technikum / Liceum)",
        description: "Sprawdź kierunki kształcenia w Akademickim Technikum oraz profile w Akademickim Liceum Ogólnokształcącym.",
        svg: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3">
                <path d="M32 12L8 24l24 12 24-12-24-12z" fill="rgba(255,255,255,0.14)"/>
                <path d="M16 30v14c0 4 7 8 16 8s16-4 16-8V30"/>
                <line x1="56" y1="24" x2="56" y2="44"/>
              </svg>`
      },
      {
        id: "docs-app",
        type: "system",
        isDocs: true,
        title: "Dokumentacja",
        subtitle: "STATUTY, REGULAMINY I PROGRAMY (DOCX / PDF)",
        url: "REGULMIN-KLAS-MUNDUROWYCH-IX.2024-akt.pdf",
        cover: "ZSACover.png",
        background: "ZSABackground.png",
        music: "",
        fallbackBg: "linear-gradient(135deg, #124d88, #041733)",
        author: "Zespół Szkół Akademickich MANS w Łomży",
        platform: "Czytnik Dokumentów PS4 (Wyszukiwarka + Scroll)",
        description: "Oficjalna dokumentacja ZSA w Łomży: Statuty Technikum (AT) i Liceum (ALO), Regulamin Klas Mundurowych, Regulamin Wycieczek oraz Program Wychowawczo-Profilaktyczny.",
        svg: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3">
                <path d="M16 10h22l12 12v32a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" fill="rgba(255,255,255,0.14)"/>
                <polyline points="38 10 38 22 50 22"/>
                <line x1="22" y1="30" x2="42" y2="30"/>
                <line x1="22" y1="38" x2="42" y2="38"/>
                <line x1="22" y1="46" x2="34" y2="46"/>
              </svg>`
      },
      {
        id: "leaderboards-tv",
        type: "system",
        title: "Leaderboards & Rankingi",
        subtitle: "SIECIOWA TABLICA WYNIKÓW",
        url: "https://zsagames.github.io/leaderboards",
        cover: "LCoverNew.png",
        background: "LBackground.png",
        music: "",
        fallbackBg: "linear-gradient(135deg, #0c3b94, #04163d)",
        author: "ZSAGames • API LootLocker",
        platform: "Globalny System Rankingowy Online",
        description: "Globalny ranking naszych gier zintegrowany z API LootLocker. Porównaj swoje wyniki Speedrun WR oraz OHKO z innymi graczami ZSA!",
        svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#ffffff" stroke-width="5">
                <rect x="14" y="22" width="72" height="46" />
                <line x1="28" y1="76" x2="72" y2="76" stroke-width="5.5"/>
              </svg>`
      },
      {
        id: "contact-app",
        type: "system",
        isContact: true,
        title: "Kontakt",
        subtitle: "SEKRETARIAT, ADRES I MEDIA SPOŁECZNOŚCIOWE",
        url: "https://zsa.mans.edu.pl/",
        cover: "ZSACover.png",
        background: "ZSABackground.png",
        music: "",
        fallbackBg: "linear-gradient(135deg, #0d4b96, #041638)",
        author: "Zespół Szkół Akademickich w Łomży",
        platform: "Informacje kontaktowe i Social Media",
        description: "Dane kontaktowe ZSA w Łomży (ul. Studencka 19), godziny pracy sekretariatu oraz odnośniki do Facebooka, Instagrama i YouTube.",
        svg: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <rect x="10" y="16" width="44" height="32" rx="4" fill="rgba(255,255,255,0.14)"/>
                <polyline points="12 19 32 35 52 19"/>
                <line x1="12" y1="45" x2="25" y2="32"/>
                <line x1="52" y1="45" x2="39" y2="32"/>
              </svg>`
      }
    ];

    /* Ukryta aplikacja GoldHEN (Admin) — otwierana wyłącznie z ikony ZSAGames Plus w lewym górnym rogu */
    const GOLDHEN_APP_ITEM = {
      id: "goldhen-app",
      type: "system",
      isGoldHen: true,
      isDisc: false,
      title: "GoldHEN",
      subtitle: "ADMIN • PANEL SYSTEMOWY",
      url: "",
      cover: "ZSACover.png",
      background: "ZSABackground.png",
      music: "",
      fallbackBg: "linear-gradient(135deg, #4f3a05, #140f02)",
      author: "ZSAGames System Admin",
      platform: "Moduł Administracyjny Orbis OS",
      description: "Chroniony panel administratora GoldHEN. Wymaga zalogowania kontem Supabase."
    };

    /* ============================================================================
       3B. LEGENDA SKRÓTÓW PRZEDMIOTÓW + BAZA PLANÓW LEKCJI Z PLIKU PDF
       ============================================================================ */
    const SUBJECT_LEGEND = [
      { code: "Sbd", name: "Systemy baz danych" },
      { code: "Pai", name: "Programowanie aplikacji internetowych" },
      { code: "Wiai", name: "Witryny i aplikacje internetowe" },
      { code: "Eutk", name: "Eksploatacja urządzeń techniki komputerowej" },
      { code: "Utk", name: "Urządzenia techniki komputerowej" },
      { code: "Miklsk", name: "Montaż i eksploatacja lokalnej sieci komputerowej" },
      { code: "Lsk", name: "Lokalne sieci komputerowe" },
      { code: "Pbd", name: "Projektowanie baz danych" },
      { code: "Jn", name: "Język niemiecki" },
      { code: "Jh", name: "Język hiszpański" },
      { code: "JaZ", name: "Język angielski zawodowy" },
      { code: "Bw", name: "Bezpieczeństwo wewnętrzne" },
      { code: "Aso", name: "Administrowanie systemami operacyjnymi" },
      { code: "So", name: "Systemy operacyjne" },
      { code: "PPAI", name: "Podstawy programowania aplikacji internetowych" },
      { code: "PPIO", name: "Podstawy programowania i obiektowego" },
      { code: "inf roz", name: "Informatyka rozszerzona" },
      { code: "Jp", name: "Język polski" },
      { code: "Ja", name: "Język angielski" },
      { code: "Mat", name: "Matematyka" },
      { code: "His", name: "Historia" },
      { code: "Geo", name: "Geografia" },
      { code: "Fiz", name: "Fizyka" },
      { code: "Chem", name: "Chemia" },
      { code: "Bio", name: "Biologia" },
      { code: "Wf", name: "Wychowanie fizyczne" },
      { code: "EO", name: "Edukacja obywatelska" },
      { code: "EZ", name: "Edukacja zdrowotna" },
      { code: "Edb", name: "Edukacja dla bezpieczeństwa" },
      { code: "Biz", name: "Biznes i zarządzanie" },
      { code: "Zzw", name: "Zajęcia z wychowawcą" },
      { code: "Rel", name: "Religia" }
    ];

    const LESSON_HOURS = [
      "8:00-8:45",
      "8:55-9:40",
      "9:50-10:35",
      "10:45-11:30",
      "11:50-12:35",
      "12:40-13:25",
      "13:30-14:15",
      "14:20-15:05",
      "15:10-15:55",
      "16:00-16:45"
    ];

    const BREAK_HOURS = [
      { nr: 1, time: "8:45 - 8:55", duration: "10 min" },
      { nr: 2, time: "9:40 - 9:50", duration: "10 min" },
      { nr: 3, time: "10:35 - 10:45", duration: "10 min" },
      { nr: 4, time: "11:30 - 11:50", duration: "20 min" },
      { nr: 5, time: "12:35 - 12:40", duration: "5 min" },
      { nr: 6, time: "13:25 - 13:30", duration: "5 min" },
      { nr: 7, time: "14:15 - 14:20", duration: "5 min" },
      { nr: 8, time: "15:05 - 15:10", duration: "5 min" },
      { nr: 9, time: "15:55 - 16:00", duration: "5 min" }
    ];

    function renderTimetableBreaks() {
      const breaksGridEl = document.getElementById("tt-breaks-grid");
      if (!breaksGridEl) return;
      breaksGridEl.innerHTML = BREAK_HOURS.map((b) => `
        <div class="tt-break-item">
          <span class="tt-break-nr">Przerwa ${b.nr}.</span>
          <span class="tt-break-time">${b.time} (${b.duration})</span>
        </div>
      `).join("");
    }
    renderTimetableBreaks();
   
    
    /* Nawigacja po kartach w zakładce Kierunki Kształcenia */
    /* ============================================================================
       3C. DANE I NAWIGACJA W ZAKŁADCE "KIERUNKI KSZTAŁCENIA" (CZYTELNY WIDOK W INDEX)
       ============================================================================ */
    const DIRECTIONS_CONTENT_DB = [
      {
        badge: "Oferta Kierunków • 5-letnie Technikum (AT)",
        title: "Kierunki Kształcenia — Akademickie Technikum",
        url: "https://zsa.mans.edu.pl/technikum/",
        lead: "5-letnie Akademickie Technikum w ZSA w Łomży (ul. Studencka 19) łączy pełne przygotowanie do egzaminu maturalnego z praktyczną nauką zawodu. Absolwenci otrzymują świadectwo dojrzałości oraz państwowy dyplom technika (z suplementem Europass w języku angielskim).",
        cards: [
          {
            title: "Technik Programista",
            code: "INF.03 + INF.04",
            desc: "Tworzenie nowoczesnych witryn i aplikacji internetowych (HTML5, CSS3, JS, PHP), programowanie obiektowe, desktopowe i mobilne oraz projektowanie i administracja systemami baz danych (SQL/MySQL)."
          },
          {
            title: "Technik Informatyk",
            code: "INF.02 + INF.03",
            desc: "Montaż i eksploatacja sprzętu komputerowego (UTK/EUTK), projektowanie i konfiguracja lokalnych sieci komputerowych (LSK/Miklsk), administracja serwerowymi systemami operacyjnymi (ASO) oraz tworzenie stron WWW."
          },
          {
            title: "Technik Logistyk",
            code: "SPL.01 + SPL.04",
            desc: "Planowanie i organizacja łańcuchów dostaw, obsługa procesów magazynowych, spedycja krajowa i międzynarodowa, gospodarka zapasami oraz praca z profesjonalnymi systemami logistycznymi."
          },
          {
            title: "Technik Mechanik",
            code: "MEC.05 + MEC.09",
            desc: "Projektowanie wspomagane komputerowo w systemach CAD/CAM, programowanie i obsługa obrabiarek sterowanych numerycznie (CNC) oraz organizacja i nadzorowanie procesów produkcji mechanicznej."
          }
        ],
        highlightsTitle: "Najważniejsze informacje dla kandydata (Technikum)",
        highlights: [
          "Państwowy tytuł zawodowy Technika + pełne przygotowanie do Matury",
          "Zajęcia zawodowe w specjalistycznych pracowniach IT, sieciowych, CNC i logistycznych",
          "Język angielski zawodowy (JaZ) oraz drugi język obcy: niemiecki lub hiszpański",
          "Praktyki zawodowe u lokalnych i regionalnych pracodawców oraz projekty zespołowe"
        ]
      },
      {
        badge: "Informacje o Szkole • Akademickie Technikum (ASP)",
        title: "Akademickie Technikum przy MANS w Łomży",
        url: "https://zsa.mans.edu.pl/akademicka-szkola-ponadpodstawowa/",
        lead: "Akademickie Technikum funkcjonuje w strukturach Zespołu Szkół Akademickich przy Międzynarodowej Akademii Nauk Stosowanych (MANS) w Łomży. Uczniowie uczą się bezpłatnie w nowoczesnym kampusie akademickim przy ul. Studenckiej 19.",
        cards: [
          {
            title: "Kampus i Pracownie MANS",
            code: "UL. STUDENCKA 19",
            desc: "Dostęp do profesjonalnych laboratoriów komputerowych, pracowni chemicznych (Lab5/Lab6), przestronnych auli wykładowych, stref relaksu oraz nowoczesnego kompleksu trzech hal sportowych (H1–H3)."
          },
          {
            title: "Patronat WAT i Współpraca",
            code: "WAT & MANS",
            desc: "Szkoła objęta jest patronatem Wojskowej Akademii Technicznej w Warszawie oraz MANS w Łomży. Uczniowie biorą udział w wykładach akademickich, warsztatach inżynieryjnych i spotkaniach z ekspertami."
          },
          {
            title: "Rozwój Pasji i Projekty IT",
            code: "KOŁA & E-SPORT",
            desc: "Możliwość rozwijania własnych projektów programistycznych i gamedevowych (w tym inicjatyw uczniowskich takich jak ZSAGames), udział w turniejach e-sportowych, olimpiadach technicznych i sekcjach sportowych."
          },
          {
            title: "Organizacja i Atmosfera",
            code: "1 ZMIANA",
            desc: "Nauka odbywa się w przyjaznej, bezpiecznej atmosferze. Jasny podział godzin lekcyjnych (od 8:00), wsparcie wychowawców, pedagoga i doradcy zawodowego oraz bogate życie społeczności szkolnej."
          }
        ],
        highlightsTitle: "Dlaczego warto wybrać Akademickie Technikum ZSA?",
        highlights: [
          "Bezpłatna szkoła publiczna o unikalnym klimacie uczelni wyższej",
          "Świetna lokalizacja i nowoczesna infrastruktura sportowo-dydaktyczna",
          "Wycieczki integracyjne i edukacyjne w kraju oraz za granicą (np. Węgry, stolice UE)",
          "Bezpośrednie przygotowanie zarówno do podjęcia dobrze płatnej pracy, jak i studiów inżynierskich"
        ]
      },
      {
        badge: "Oferta Profili • 4-letnie Liceum (ALO)",
        title: "Kierunki i Profile Kształcenia — Liceum",
        url: "https://zsa.mans.edu.pl/liceum/",
        lead: "4-letnie Akademickie Liceum Ogólnokształcące w ZSA w Łomży oferuje profilowane klasy przygotowujące do matury rozszerzonej oraz rekrutacji na studia uniwersyteckie, politechniczne, medyczne i mundurowe.",
        cards: [
          {
            title: "Bezpieczeństwo Wewnętrzne / Mundurowy",
            code: "BW + WOS / HIST / GEO",
            desc: "Zajęcia z bezpieczeństwa wewnętrznego (Bw), edukacji dla bezpieczeństwa, samoobrony oraz sprawności fizycznej. Przygotowanie do służb mundurowych (Wojsko, Policja, Straż Graniczna) i studiów na WAT/AWL."
          },
          {
            title: "Profil Biologiczno-Chemiczny (Medyczny)",
            code: "BIO + CHEM",
            desc: "Rozszerzona biologia i chemia realizowana z wykorzystaniem profesjonalnych laboratoriów akademickich MANS. Kierunek dedykowany przyszłym studentom medycyny, pielęgniarstwa, fizjoterapii, kosmetologii i biotechnologii."
          },
          {
            title: "Profil Humanistyczno-Prawny i Językowy",
            code: "JP + HIST + JA",
            desc: "Rozszerzony język polski, historia oraz język angielski z elementami filozofii i edukacji obywatelskiej. Doskonałe przygotowanie na prawo, administrację, psychologię, dziennikarstwo i filologie."
          },
          {
            title: "Profil Matematyczno-Geograficzny / IT",
            code: "MAT + GEO / INF",
            desc: "Rozszerzona matematyka w połączeniu z geografią, fizyką lub informatyką. Przygotowanie do studiów ekonomicznych, finansowych, informatycznych, logistycznych i politechnicznych."
          }
        ],
        highlightsTitle: "Najważniejsze atuty profili w Liceum (ALO)",
        highlights: [
          "Zajęcia laboratoryjne z chemii i biologii w salach akademickich MANS",
          "Przedmiot dodatkowy: Bezpieczeństwo wewnętrzne (Bw) oraz Biznes i zarządzanie",
          "Nauka dwóch języków obcych: język angielski + język hiszpański lub niemiecki",
          "System fakultetów i konsultacji maturalnych z przedmiotów rozszerzonych"
        ]
      },
      {
        badge: "Informacje o Szkole • Akademickie Liceum (ALO)",
        title: "Akademickie Liceum Ogólnokształcące w Łomży",
        url: "https://zsa.mans.edu.pl/akademickie-liceum-ogolnoksztalcace/",
        lead: "Akademickie Liceum Ogólnokształcące (ALO) w Zespole Szkół Akademickich w Łomży to czteroletnia szkoła ponadpodstawowa zlokalizowana w budynku MANS przy ul. Studenckiej 19, stawiająca na nowoczesną dydaktykę i partnerskie relacje.",
        cards: [
          {
            title: "Skuteczna Droga do Matury",
            code: "4 LATA NAUKI",
            desc: "Kameralne grupy przedmiotowe i językowe pozwalają na indywidualne podejście do każdego ucznia, regularne powtórki maturalne oraz rozwijanie mocnych stron przed egzaminem dojrzałości."
          },
          {
            title: "Akademickie Środowisko",
            code: "KAMPUS MANS",
            desc: "Uczniowie ALO na co dzień funkcjonują w otoczeniu akademickim, korzystając z auli, bibliotek, laboratoriów, hal sportowych oraz uczestnicząc w wydarzeniach organizowanych przez MANS i WAT."
          },
          {
            title: "Języki i Wyjazdy Zagraniczne",
            code: "EUROPA & KULTURA",
            desc: "Intensywna nauka języka angielskiego oraz języka hiszpańskiego lub niemieckiego, połączona z wyjazdami edukacyjnymi, wycieczkami zagranicznymi i poznawaniem kultury europejskiej."
          },
          {
            title: "Społeczność i Samorząd",
            code: "AKTYWNE ŻYCIE ZSA",
            desc: "Szkoła wspiera inicjatywy uczniowskie, akcje charytatywne (np. zbiórki dla schroniska Arka), uroczystości patriotyczne, zawody sportowe i koła zainteresowań."
          }
        ],
        highlightsTitle: "Podsumowanie informacji o ALO w Łomży",
        highlights: [
          "Bezpłatna nauka w 4-letnim liceum ogólnokształcącym",
          "Lokalizacja: Zespół Szkół Akademickich, ul. Studencka 19 w Łomży",
          "Patronat naukowy Wojskowej Akademii Technicznej (WAT) w Warszawie",
          "Przyjazna atmosfera, brak anonimowości i pełne wsparcie kadry pedagogicznej"
        ]
      }
    ];

    let dirStep = "LIST";          // "LIST" (4 karty wyboru) | "DETAIL" (czytelny opis w menu)
    let dirFocusIdx = 0;           // 0,1 = Technikum | 2,3 = Liceum | -1 = lewy przycisk Start
    let dirSelectedIdx = 0;        // Indeks aktualnie otwartej sekcji (0..3)
    let dirDetailFocus = "OPEN_URL"; // "OPEN_URL" | "BACK_BTN" | "START_BTN"

    const dirListStepEl = document.getElementById("dir-list-step");
    const dirDetailStepEl = document.getElementById("dir-detail-step");
    const dirBreadcrumbEl = document.getElementById("dir-breadcrumb");
    const dirBackStepBtnEl = document.getElementById("dir-back-step-btn");
    const dirOpenOriginalBtnEl = document.getElementById("dir-open-original-btn");
    const dirCardsEls = () => Array.from(document.querySelectorAll(".dir-link-card"));

    function updateDirectionsFocusUI() {
      const startBtnEl = document.getElementById("sub-start-btn");

      if (dirStep === "LIST") {
        dirListStepEl.style.display = "grid";
        dirDetailStepEl.style.display = "none";
        dirBackStepBtnEl.style.display = "none";
        dirBreadcrumbEl.innerHTML = `Wybierz sekcję, aby przeczytać najważniejsze informacje: <strong>Technikum (AT)</strong> lub <strong>Liceum (ALO)</strong>`;

        startBtnEl.classList.toggle("focused", dirFocusIdx === -1);
        dirCardsEls().forEach((card, idx) => {
          card.classList.toggle("pad-focused", idx === dirFocusIdx);
        });
      } else {
        dirListStepEl.style.display = "none";
        dirDetailStepEl.style.display = "flex";
        dirBackStepBtnEl.style.display = "inline-flex";

        startBtnEl.classList.toggle("focused", dirDetailFocus === "START_BTN");
        dirBackStepBtnEl.classList.toggle("pad-focused", dirDetailFocus === "BACK_BTN");
        dirOpenOriginalBtnEl.classList.toggle("pad-focused", dirDetailFocus === "OPEN_URL");
      }
    }

    function openDirectionDetail(idx) {
      const data = DIRECTIONS_CONTENT_DB[idx];
      if (!data) return;

      dirSelectedIdx = idx;
      dirStep = "DETAIL";
      dirDetailFocus = "OPEN_URL";

      dirBreadcrumbEl.innerHTML = `Podgląd sekcji: <strong>${data.title}</strong> (▲ ▼ Przewijaj opis)`;
      document.getElementById("dir-detail-badge").textContent = data.badge;
      document.getElementById("dir-detail-title").textContent = data.title;
      document.getElementById("dir-detail-lead").textContent = data.lead;
      document.getElementById("dir-highlights-title").textContent = data.highlightsTitle;
      document.getElementById("dir-detail-url-text").textContent = data.url;

      const cardsContainer = document.getElementById("dir-detail-cards");
      cardsContainer.innerHTML = data.cards.map((c) => `
        <div class="dir-info-card">
          <div class="dir-info-card-head">
            <span class="dir-info-card-title">${c.title}</span>
            <span class="dir-info-card-code">${c.code}</span>
          </div>
          <p class="dir-info-card-desc">${c.desc}</p>
        </div>
      `).join("");

      const highlightsList = document.getElementById("dir-highlights-list");
      highlightsList.innerHTML = data.highlights.map((h) => `<li><span>${h}</span></li>`).join("");

      dirDetailStepEl.scrollTop = 0;
      playCustomWav("select");
      updateDirectionsFocusUI();
    }

    function closeDirectionDetail() {
      if (dirStep !== "DETAIL") return false;
      dirStep = "LIST";
      dirFocusIdx = dirSelectedIdx;
      playCustomWav("back");
      updateDirectionsFocusUI();
      return true;
    }

    dirCardsEls().forEach((card, idx) => {
      card.addEventListener("mouseenter", () => {
        if (dirStep === "LIST") {
          dirFocusIdx = idx;
          updateDirectionsFocusUI();
        }
      });
      card.addEventListener("click", () => {
        dirFocusIdx = idx;
        openDirectionDetail(idx);
      });
    });

    dirBackStepBtnEl.addEventListener("click", () => {
      closeDirectionDetail();
    });

    dirOpenOriginalBtnEl.addEventListener("mouseenter", () => {
      if (dirStep === "DETAIL") {
        dirDetailFocus = "OPEN_URL";
        updateDirectionsFocusUI();
      }
    });

    dirOpenOriginalBtnEl.addEventListener("click", () => {
      const data = DIRECTIONS_CONTENT_DB[dirSelectedIdx];
      if (data && data.url) {
        launchUrlWithSleepDelay(data.url, data.title);
      }
    });

    const DEFAULT_TIMETABLE_DB = {
      ALO: [
        {
          id: "1A ALO",
          tutor: "Angelika Trepanowska",
          days: {
            Pn: ["Jh (306)", "EZ", "Jp (505)", "Jp (505)", "Zzw", "Rel (AW)", "Ja (C10)", "Jp (505)", "Geo (207)", "His (100)"],
            Wt: ["Fiz (102)", "Ja (C10)", "Geo (207)", "His (C10)", "Wf (H3)", "Mat (B03)", "Wf (H1)", "Edb (B06)", "Jp (505)", ""],
            Sr: ["", "", "", "Wf (H1)", "Chem (Lab5)", "Geo (207)", "Biz (403)", "Fil (B04)", "Jp (505)", "Jp (505)"],
            Czw: ["Zzpd", "His (102)", "Jh (306)", "Ja (C10)", "Mat (102)", "Bw (AW)", "", "", "", ""],
            Pi: ["", "", "", "Mat (102)", "Inf (608)", "Bio (B04)", "", "", "", ""]
          }
        },
        {
          id: "1B ALO",
          tutor: "Ewa Powichrowska",
          days: {
            Pn: ["Biz (403)", "Wf (H3)", "Jp (108)", "Jp (108)", "Jh (306)", "Rel (AW)", "Bio (B04)", "", "", ""],
            Wt: ["", "", "", "", "Inf (509)", "Jp (108)", "Ja (C10)", "Fil (B04)", "Mat (200) / Ja (C10)", "Fiz (502)"],
            Sr: ["Wf (H1)", "Wf (H1)", "Geo (207)", "Bw (NA)", "Jh (306)", "His (C10)", "Chem (Lab5)", "", "", ""],
            Czw: ["His (102)", "Ja (C10)", "Jp (108)", "Jp (108)", "His (C10)", "EZ", "Mat (200)", "Zzw", "", ""],
            Pi: ["Edb (B06)", "Ja (C10)", "Ja (C10)", "Jp (108)", "Mat (200)", "", "", "", "", ""]
          }
        },
        {
          id: "2A ALO",
          tutor: "Piotr Filipkowski",
          days: {
            Pn: ["", "His (102)", "Bw (AW)", "Bw (AW)", "Geo (207)", "Inf (509)", "EO (104)", "EO (104)", "His (102)", ""],
            Wt: ["Geo (207)", "Biz (403)", "Mat (100)", "Zzpd", "Ja (504)", "Ja (504)", "Jp (505)", "Jh (306)", "Rel (AW)", ""],
            Sr: ["Zzw (102)", "Jp (505)", "Wf (H1)", "Mat (200)", "Mat (200)", "Mat (200)", "Jp (505)", "Ja (504)", "", ""],
            Czw: ["Geo (207)", "Jh (306)", "Fiz (B01)", "EZ", "Jp (505)", "Chem (Lab5)", "Bio (B04)", "", "", ""],
            Pi: ["Jp (505)", "Jp (505) / Ja (502)", "Jp (505) / Ja (502)", "His (100)", "Bio (B04)", "Chem (Lab5)", "Wf (H3)", "", "", ""]
          }
        },
        {
          id: "2B ALO",
          tutor: "Adrian Lutrzykowski",
          days: {
            Pn: ["Jp (505)", "Inf (608)", "EZ", "Bio (B04)", "Mat (100)", "EO (104)", "Mat (100)", "Fiz (108)", "Wf (H1)", "His (NA)"],
            Wt: ["", "Jp (505)", "Bio (B04)", "Jp (505)", "Jp (505)", "Zzw", "Geo (207)", "Rel (AW)", "Geo (207)", ""],
            Sr: ["Ja (C06)", "Ja (C10)", "Ja (C10)", "Jp (505)", "Biz (403)", "Mat (100)", "Jh (306)", "Mat (100)", "EO (507)", "His (NA)"],
            Czw: ["", "Jp (505)", "Bw (AW)", "Bw (H1)", "Chem (Lab5)", "Ja (500)", "Ja (C06)", "His (NA)", "Wf (H1)", ""],
            Pi: ["", "", "", "", "Chem (Lab5)", "Jh (306)", "Jp (505)", "", "", ""]
          }
        },
        {
          id: "3A ALO",
          tutor: "Ernest Żebrowski",
          days: {
            Pn: ["Geo (207)", "Jp (505)", "Zzw", "Bw (NA)", "", "", "", "", "", ""],
            Wt: ["Jp (505)", "Wf (H2)", "His (102)", "Rel (AW)", "Jh (306)", "Ja (507)", "Ja (507)", "Ja (507)", "Ja (C06)", "Ja (507)"],
            Sr: ["", "", "Jh (306)", "Fiz (B01)", "His (102)", "EO (108)", "Geo (500)", "Geo (500)", "", ""],
            Czw: ["Inf (509)", "Bio (B04)", "Jp (505)", "Chem (Lab6)", "Wf (H1)", "Jp (505)", "Ja (504)", "Bw (AW)", "Jp (505)", "Mat (200)"],
            Pi: ["", "", "", "", "", "Mat (200)", "Fiz (B01)", "Wf (H1)", "Jp (505)", "Mat (200)"]
          }
        },
        {
          id: "4A ALO",
          tutor: "Ernest Żebrowski",
          days: {
            Pn: ["His (305)", "Ja (502)", "Ja (502)", "Zzw (502)", "Ja (502)", "Ja (502)", "Jp (500)", "Jp (500)", "His (305)", ""],
            Wt: ["", "", "Jh (306)", "Wf (H2)", "Mat (200)", "Jp (500)", "Jp (500)", "Jp (500)", "", ""],
            Sr: ["", "", "Jh (306)", "Jp (500)", "", "Jp (500)", "", "", "", ""],
            Czw: ["", "", "Ja (502)", "Ja (502)", "Mat (200)", "Mat (200)", "Wf (H1)", "Wf (H1)", "", ""],
            Pi: ["", "", "", "", "", "", "His (305)", "His (305)", "Mat (200)", ""]
          }
        },
        {
          id: "4B ALO",
          tutor: "Ewelina Sobotka",
          days: {
            Pn: ["", "", "", "", "", "Jp (505)", "Geo (207)", "Jp (505)", "Wf (H2)", "Wf (H2)"],
            Wt: ["", "", "", "", "Ja (502)", "Zzw (502)", "Rel (AW)", "", "", ""],
            Sr: ["Jp (505)", "Mat (102)", "Mat (102)", "Ja (C06)", "Geo (207)", "", "", "", "", ""],
            Czw: ["Jh (306)", "Ja (502)", "His", "Jh (306)", "Ja (502)", "Mat (102)", "Ja (502)", "Jp (505)", "His", ""],
            Pi: ["", "", "Mat (102)", "Jp (505)", "Ja (502)", "Jp (505)", "Wf (H1)", "Jp (505)", "", ""]
          }
        },
        {
          id: "4C ALO",
          tutor: "Rafał Marcin Bućkowski",
          days: {
            Pn: ["", "", "Jh (306)", "Geo (207)", "Jp (505)", "", "", "", "", ""],
            Wt: ["Wf (H2)", "Ja (502)", "Ja (502)", "Ja (502)", "His (305)", "Jp (505)", "Rel (AW)", "", "", ""],
            Sr: ["Ja (502)", "Ja (502)", "His (305)", "Mat (102)", "Zzw (B01)", "Mat (102)", "Ja (502)", "Jp (505)", "Geo (207)", ""],
            Czw: ["", "His (305)", "Mat (102)", "His (305)", "Jh (306)", "Wf (H1)", "Jp (505)", "", "", ""],
            Pi: ["", "", "", "", "Mat (102)", "Wf (H1)", "", "", "", ""]
          }
        }
      ],
      AT: [
        {
          id: "1A AT",
          tutor: "Emilia Kownacka",
          days: {
            Pn: ["", "Wf (H3/H1)", "Jh (306)", "Bw (NA)", "His (C10)", "Cad/CAM / Eutk / Wiai", "Cad/CAM / Utk / Sbd", "Utk (600) / Bhp (B06)", "", ""],
            Wt: ["Ja (C10)", "Jp (400)", "Ja (C10)", "Rel (AW)", "Jh (306)", "Fiz (B01)", "Fil (B03)", "Mat (200)", "Edb (B06)", ""],
            Sr: ["Mech PEiE (C09)", "Mech PEiE (C09)", "Wf (H2/H3)", "Jp (400)", "Chem (Lab5)", "Geo (207)", "Fiz (B01)", "So (308) / PPAI (606)", "So (308) / PPIO (606)", ""],
            Czw: ["", "", "Wf (H2/H3)", "Jp (400)", "EiE (108) / Aso (600)", "EiE / Utk / Sbd", "His (100)", "Mat (200)", "Inf (509)", ""],
            Pi: ["JaZ (C10)", "Jp (400)", "Bio (B04)", "EZ / Fiz / Aso / PPAI", "PPIO (606) / Ja (C06)", "Mat (200)", "Zzw (C10)", "inf roz (509) / Wiai (308)", "", ""]
          }
        },
        {
          id: "1B AT",
          tutor: "Aleksandra Dzbeńska",
          days: {
            Pn: ["Wf (H1)", "Jp (400)", "Zzw (403)", "His (C10)", "EZ", "PZ (200)", "PZ (200)", "Inf (608)", "Ja (C10)", "Bhp (B06)"],
            Wt: ["Edb (B06)", "PL (104)", "Jp (400)", "Ja (507)", "Rel (AW)", "Mat (200)", "Mat (200)", "Fiz (108)", "PL (104)", "JaZ (C10)"],
            Sr: ["", "", "Bw (AW)", "OKiK (403)", "Geo (108)", "Zm (403)", "Fil (B04)", "Geo (500)", "OKiK (403)", "Geo (500)"],
            Czw: ["", "", "Bio (B04)", "Bw (AW)", "Wf (H3)", "Jh (306)", "Chem (Lab5)", "Jp (400)", "Jp (400)", ""],
            Pi: ["", "His (100)", "Jh (306)", "PiWZ (403)", "Ja (C06)", "PiWZ (403)", "Wf (H2)", "Fiz (B01)", "Mat (100)", "inf roz (608)"]
          }
        },
        {
          id: "2A AT",
          tutor: "Anna Szulc-Wójcicka",
          days: {
            Pn: ["Inf Lsk (608)", "Biz (403)", "Miklsk (608) / PPAI (606)", "Mat (102)", "Ksiop Z (308)", "Utk (600) / Sbd (308)", "His (102)", "Jh (306)", "Lsk (608) / Pio", "Geo (207)"],
            Wt: ["Jp (400)", "Bhp (B06)", "Zzw", "Bw (H2)", "Bio (B04)", "EO (B01)", "JaZ (C10)", "Ja (504)", "Prog PPIO (606)", "Prog Psbd (308)"],
            Sr: ["Inf Aso (600)", "Inf Eutk (600)", "Wf (H2)", "Rel (AW)", "Aso (600) / Wiai (308)", "Mat (102)", "Ja (104/504)", "Ja (502)", "", ""],
            Czw: ["Jp (400)", "Inf (509)", "Wf (H3)", "inf roz (308)", "Bw (AW)", "His (C10)", "Miklsk (608) / Pad (606)", "Lsk (608) / Wiai (308)", "So (308) / PPAI (606)", "So (308) / PPAI (606)"],
            Pi: ["Mat (102)", "EZ", "Aso (600) / Pio", "Lsk (608) / PPAI (509)", "Jh (306)", "Jp (400)", "Chem (Lab5)", "Fiz (B01)", "", ""]
          }
        },
        {
          id: "2BC AT",
          tutor: "Wojciech Żelechowski",
          days: {
            Pn: ["Jp (400)", "His (305)", "His (305)", "Zzw (305)", "Inf (509)", "Mat (102)", "Wf (H1/H3)", "Bhp (B06)", "Log PZ (200) / Aso (600)", "PZ (200) / Lsk (608) / Fiz"],
            Wt: ["Biz (403)", "Geo (207)", "Uism / Zm / Aso", "EZ", "Mat (102)", "Fiz (108)", "Ja (C06/104)", "PEiE / Geo / Eutk", "Ja (507) / Geo (102)", "Ja (502) / Uism (C08)"],
            Sr: ["EiE / PL / Lsk", "EiE / PL / Lsk", "PEiE / PL / Lsk", "Rel (AW)", "Bw (AW)", "Ksiop Z (308)", "Fiz / PZ / Aso", "EO (104)", "Zm (403) / Pih (C08)", "Log Opm (104)"],
            Czw: ["Uism (C08) / PiWZ", "Pih (C08) / PiWZ", "Pih (C08) / PL", "Jp (400)", "Bio (B04)", "Bw (H2)", "Mech Ptikm (C03)", "Mech Ptikm (C03)", "Cad/CAM (C09)", "Cad/CAM (C09)"],
            Pi: ["Jn (305) / Jh (306)", "Jn (305) / Jh (306)", "Jp (400)", "Chem (Lab5)", "Wf (H3/H2)", "Mat (102)", "JaZ (C10)", "EiE / Opm / Miklsk", "TiKM / Opm / inf roz", "TiKM / Ppt / Miklsk"]
          }
        },
        {
          id: "3A AT",
          tutor: "Karol Jaskółka",
          days: {
            Pn: ["", "", "His (C10)", "Pai (603)", "Wf (H3)", "Jh (306)", "Pai (603)", "JaZ (C10)", "Geo (207)", "Wiai (603)"],
            Wt: ["Ja (502)", "Chem (Lab6)", "Wf (H3)", "Dgwbi (B01)", "Bw (NA)", "Mat (100)", "His (102)", "Zzw (505)", "Pai (603)", "Pai (603)"],
            Sr: ["", "", "Jp (505)", "Mat (100)", "EO (104)", "Jp (505)", "Ja (502)", "Pai (603)", "Inf (509)", "Miklsk (608)"],
            Czw: ["Wf (H3)", "Fiz (B01)", "inf roz (308)", "Pai (603)", "Dgwbi (104)", "Mat (100)", "Rel (AW)", "Sbd (509)", "Bw (AW)", "Jp (505)"],
            Pi: ["", "", "", "Wiai (603)", "Sbd (606)", "Miklsk (608)", "Mat (100)", "Pbd (606)", "Pbd (606)", "Bio (B04)"]
          }
        },
        {
          id: "3B AT",
          tutor: "Justyna Bućkowska",
          days: {
            Pn: ["Opm (104) / Jh / PPAD", "Mech Uism (C08)", "Zzw (104) / Uism (C08)", "Wf (H3)", "His / PEiE (C09)", "Mat (100) / PEiE (C09)", "Jp (505) / Ptikm (C03)", "Mat (100) / Ptikm (C03)", "Prog Psbd (308)", "Cad/CAM / Ppt / PPAI"],
            Wt: ["Log Opm (104)", "Log Opt / Prog Pam", "EO (B01)", "Opm (104) / PPAI (606)", "Prog Pad (606)", "", "Mech Ppih (C08)", "Mech Ppih (C08)", "", ""],
            Sr: ["Log Geo (207)", "Log Geo (207)", "Ja (C06)", "Ja (507)", "Jp (505)", "Fiz (B01)", "Log Opt / Psbd (308)", "PiWZ (200) / Cad/CAM", "PiWZ (200) / Bw (C07)", "Log Drpt / Bw (AW)"],
            Czw: ["JaZ (C10)", "inf roz (308)", "Geo (207)", "Ppih / Opt / PPAI", "Mat (100)", "Inf (509)", "Rel (AW)", "Prog Pza1", "", ""],
            Pi: ["Fiz (B01) / Prog PPAW", "Wf (H1)", "His", "Wf (H2)", "Jp (505)", "Mat (100)", "Chem (Lab6)", "Bio (B04)", "Prog PPAM", ""]
          }
        },
        {
          id: "4A AT",
          tutor: "Beata Borawska",
          days: {
            Pn: ["Pai (603)", "Pai (603)", "Wf (H1)", "Pbd (600)", "Rel (AW)", "His (305)", "Ja (C06)", "Ja (C06)", "", ""],
            Wt: ["", "", "", "", "JaZ (507)", "Bw (AW)", "Pai (603)", "Pai (603)", "Miklsk (608)", "Miklsk (608)"],
            Sr: ["Mat (100)", "Mat (100)", "Mat (100)", "Bio (B04)", "Chem (Lab6)", "EO (104)", "Jp (108)", "Jp (108)", "Zzw", "Geo (207)"],
            Czw: ["", "", "", "Sbd (608)", "inf roz (308)", "Wiai (603)", "Mat (100)", "Ja (500)", "", ""],
            Pi: ["Pbd (600)", "Pai (603)", "Pai (603)", "Jn (305) / Jh (306)", "Wiai (603)", "Wf (H3)", "Sbd (509)", "Wf (H3)", "Jp", ""]
          }
        },
        {
          id: "4BC AT",
          tutor: "Paweł Duchnowski",
          days: {
            Pn: ["", "", "", "", "Miklsk (608)", "Rel (AW)", "Wf (H1/H3)", "Jn / Jh (306)", "Pai (603)", "Pai (603) / Zzw (308)"],
            Wt: ["Pai (603)", "Pai (603)", "Bw (AW)", "Pai (603)", "Mat (100)", "Wf (H1/H3)", "Mat (100)", "Ja (C06/104)", "Jp (403)", "Ja (C06/104)"],
            Sr: ["", "", "", "", "EO (104)", "Ja (C06/502)", "Wiai (603)", "Mat (100)", "Pbd (600)", "Bio (B04)"],
            Czw: ["His (305)", "Pai (603)", "JaZ (C10)", "Geo (207)", "Pbd (600)", "Jp (104)", "", "", "", ""],
            Pi: ["Wiai (603)", "Chem", "Wf (H3/H2)", "Sbd (606)", "Mat (100)", "Sbd (509)", "Miklsk (608)", "Jp (400)", "inf roz (308)", ""]
          }
        },
        {
          id: "4D AT",
          tutor: "Andrzej Piotrowski",
          days: {
            Pn: ["", "", "", "", "Rel (AW)", "Geo (207)", "Jp (403)", "Jp (403)", "Mat (100)", "Mat (102)"],
            Wt: ["Wf (H1)", "Jn (305) / Jh (306)", "Zzw (606)", "Mat (102)", "Pai (603)", "Wiai (603)", "Ja (504)", "JaZ (C10)", "inf roz (308)", ""],
            Sr: ["Ja (504)", "Ja (504)", "Pai (603)", "Pbd (600)", "Pai (603)", "Wf (H1)", "Pai (603)", "Mat (102)", "Miklsk (608)", ""],
            Czw: ["Pai (603)", "Wf (H2)", "Wiai (603)", "EO (104)", "Pai (603)", "His (305)", "Sbd (509)", "Pbd (600)", "Miklsk (600)", ""],
            Pi: ["", "", "", "", "", "", "Jp (400)", "Chem (Lab6)", "Bio (B04)", "Sbd (606)"]
          }
        },
        {
          id: "5A AT",
          tutor: "Anna Karwowska",
          days: {
            Pn: ["Mat (100)", "Pbd (600)", "Pbd (600)", "Jp (400)", "Wiai (603)", "Wiai (603)", "Jp (400)", "Wf (H1)", "Zzw (400)", "Jn (305) / Jh (306)"],
            Wt: ["Pbd (600)", "Ja (504)", "Pai (603)", "Ja (504)", "His (400)", "Jn (305) / Jh (306)", "Wf (H1)", "inf roz (100)", "Mat (100)", "Mat (100)"],
            Sr: ["Wiai (603)", "Wiai (603)", "His (400)", "Pai (603)", "Ja (504)", "", "", "", "", ""],
            Czw: ["Jp (400)", "Pbd (600)", "Sbd (606)", "Wf (H1)", "Rel (NA)", "Sbd (608)", "Pai (603)", "Pai (603)", "Mat (100)", "Mat (100)"],
            Pi: ["", "", "", "", "Jp (400)", "", "", "", "", ""]
          }
        },
        {
          id: "5B AT",
          tutor: "Agnieszka Tchórzewska",
          days: {
            Pn: ["", "Mat (100)", "Mat (100)", "Wf (H1)", "Wiai (603)", "Wiai (603)", "Ja (502)", "Jp (400)", "Jh (306)", "Jp (400)"],
            Wt: ["", "Pbd (600)", "Pai (603)", "His (305)", "Wf (H1)", "Jp (400)", "Jh (306)", "inf roz (308)", "Mat (100)", "Mat (100)"],
            Sr: ["Wiai (603)", "Wiai (603)", "Ja (502)", "Pai (603)", "Wf (H1)", "Pbd (600)", "His (305)", "Pbd (600)", "Zzw (207)", "Pbd (600)"],
            Czw: ["", "", "", "", "Rel (NA)", "Sbd (608)", "Pai (603)", "Pai (603)", "", ""],
            Pi: ["Ja (502)", "Mat (200)", "Sbd (606)", "Jp (400)", "", "", "", "", "", ""]
          }
        },
        {
          id: "5C AT",
          tutor: "Łukasz Polkowski",
          days: {
            Pn: ["Pbd (600)", "Wf (H1)", "Jp (400)", "Mat (100)", "Pai (600)", "", "", "", "", ""],
            Wt: ["Jn (305) / Jh (306)", "Wf (H1)", "Ja (504)", "Wiai (600)", "Wiai (600)", "Wiai (600)", "Wiai (600)", "His (305)", "Pai (600)", "Pai (600)"],
            Sr: ["Jp (400)", "Jp (400)", "Ja (504)", "Wf (H2)", "His (305)", "Ja (504)", "Jp (400)", "", "", ""],
            Czw: ["Pbd (600)", "Pbd (600)", "Pbd (600)", "Pai (600)", "Mat (108)", "inf roz (308)", "Jn (305) / Jh (306)", "Mat (108)", "Sbd (509)", ""],
            Pi: ["Mat (200)", "Sbd (606)", "Mat (200)", "Zzw (600)", "", "", "", "", "", ""]
          }
        }
      ]
    };

    /* Renderowanie legendy skrótów przedmiotów */
    function renderTimetableLegend() {
      const gridEl = document.getElementById("tt-legend-grid");
      if (!gridEl) return;
      gridEl.innerHTML = SUBJECT_LEGEND.map((item) => `
        <div class="tt-legend-item">
          <span class="tt-legend-code">${item.code}</span>
          <span>${item.name}</span>
        </div>
      `).join("");
    }
    renderTimetableLegend();

    /* Funkcja generująca podpowiedź (tooltip) z rozwinięciem skrótu dla danej komórki lekcji */
    function buildLessonTooltip(rawSlotText) {
      if (!rawSlotText) return "";
      const matches = [];
      SUBJECT_LEGEND.forEach((entry) => {
        const escaped = entry.code.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const rx = new RegExp(`(^|[^a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ])${escaped}(?=$|[^a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ])`, "i");
        if (rx.test(rawSlotText)) {
          matches.push(`${entry.code} = ${entry.name}`);
        }
      });
      return matches.join(" • ");
    }

    /* ============================================================================
       4. SYSTEM AUDIO: SMOOTH FADE-IN / FADE-OUT + DUAL-DECK SEAMLESS LOOPER
       ============================================================================ */
    let isSystemSleeping = false;
    let wakeUpCooldownUntil = 0;
    let audioUnlocked = false;
    let pendingLaunchTimeout = null;

    const sfxChannels = {};
    ["move", "select", "back"].forEach((key) => {
      const path = SOUND_CONFIG[key];
      if (path) {
        sfxChannels[key] = {
          index: 0,
          players: Array.from({ length: 3 }, () => {
            const a = new Audio(path);
            a.preload = "auto";
            a.volume = 0.75;
            return a;
          })
        };
      }
    });

    function playCustomWav(type = "move", forcePlay = false) {
      if (isSystemSleeping && !forcePlay) return;
      try {
        const ch = sfxChannels[type];
        if (!ch) return;
        const player = ch.players[ch.index];
        ch.index = (ch.index + 1) % ch.players.length;
        player.currentTime = 0;
        player.play().catch(() => {});
      } catch (_) {}
    }

    class SmoothLoopTrack {
      constructor(src, maxVolume) {
        this.src = src;
        this.maxVolume = maxVolume;
        this.fadeFactor = 0;
        this.targetFactor = 0;

        this.deckA = new Audio(src);
        this.deckB = new Audio(src);
        [this.deckA, this.deckB].forEach((d) => {
          d.preload = "auto";
          d.loop = false;
          d.volume = 0;
        });

        this.primary = this.deckA;
        this.secondary = this.deckB;
        this.isCrossfadingLoop = false;
        this.loopMix = 0;
      }

      fadeIn() {
        this.targetFactor = 1;
        if (!audioUnlocked) return;
        if (this.primary.paused) {
          this.primary.volume = 0;
          this.primary.play().catch(() => {});
        }
      }

      fadeOut() {
        this.targetFactor = 0;
      }

      tick(dtSec) {
        if (!audioUnlocked) return;
        if (this.fadeFactor === 0 && this.targetFactor === 0 && this.primary.paused) return;

        const fadeSpeed = 1000 / Math.max(120, AUDIO_FADE_SETTINGS.fadeDurationMs);
        if (this.fadeFactor < this.targetFactor) {
          if (this.primary.paused) {
            this.primary.play().catch(() => {});
          }
          this.fadeFactor = Math.min(this.targetFactor, this.fadeFactor + fadeSpeed * dtSec);
        } else if (this.fadeFactor > this.targetFactor) {
          this.fadeFactor = Math.max(this.targetFactor, this.fadeFactor - fadeSpeed * dtSec);
          if (this.fadeFactor <= 0.001 && this.targetFactor === 0) {
            this.fadeFactor = 0;
            this.pauseAll();
            return;
          }
        }

        const dur = this.primary.duration;
        const cur = this.primary.currentTime;
        const cfWindow = AUDIO_FADE_SETTINGS.loopCrossfadeSec;

        if (Number.isFinite(dur) && dur > cfWindow * 2.2) {
          const timeLeft = dur - cur;
          if (timeLeft <= cfWindow) {
            if (!this.isCrossfadingLoop) {
              this.isCrossfadingLoop = true;
              this.secondary.currentTime = 0;
              this.secondary.volume = 0;
              this.secondary.play().catch(() => {});
            }
            const linearProgress = Math.min(1, Math.max(0, 1 - timeLeft / cfWindow));
            this.loopMix = 0.5 - 0.5 * Math.cos(linearProgress * Math.PI);

            if (timeLeft <= 0.03 || this.primary.ended) {
              this.completeLoopSwap();
            }
          } else if (this.primary.ended) {
            this.primary.currentTime = 0;
            this.primary.play().catch(() => {});
          }
        } else {
          this.primary.loop = true;
        }

        const effectiveMaster = this.fadeFactor * this.maxVolume;
        if (this.isCrossfadingLoop) {
          this.primary.volume = Math.max(0, Math.min(1, effectiveMaster * (1 - this.loopMix)));
          this.secondary.volume = Math.max(0, Math.min(1, effectiveMaster * this.loopMix));
        } else {
          this.primary.volume = Math.max(0, Math.min(1, effectiveMaster));
          if (!this.secondary.paused) {
            this.secondary.volume = 0;
          }
        }
      }

      completeLoopSwap() {
        this.primary.pause();
        this.primary.currentTime = 0;
        this.primary.volume = 0;
        const temp = this.primary;
        this.primary = this.secondary;
        this.secondary = temp;
        this.isCrossfadingLoop = false;
        this.loopMix = 0;
      }

      pauseAll() {
        this.isCrossfadingLoop = false;
        this.loopMix = 0;
        [this.deckA, this.deckB].forEach((d) => {
          if (!d.paused) d.pause();
          d.currentTime = 0;
          d.volume = 0;
        });
      }
    }

    const trackRegistry = new Map();

    function getOrCreateTrack(src, isSystem = false) {
      if (!src) return null;
      if (!trackRegistry.has(src)) {
        const vol = isSystem ? AUDIO_FADE_SETTINGS.systemBaseVolume : AUDIO_FADE_SETTINGS.gameBaseVolume;
        trackRegistry.set(src, new SmoothLoopTrack(src, vol));
      }
      return trackRegistry.get(src);
    }

    if (SOUND_CONFIG.systemMusic) {
      getOrCreateTrack(SOUND_CONFIG.systemMusic, true);
    }

    function syncBackgroundMusic() {
      if (isSystemSleeping) {
        trackRegistry.forEach((track) => track.fadeOut());
        return;
      }

      const inGameSubmenu = (navLevel === "SUBMENU");
      const currentItem = getActiveGameItem();
      const customGameTrackSrc = (inGameSubmenu && currentItem && currentItem.music) ? currentItem.music : "";
      const desiredSrc = customGameTrackSrc || SOUND_CONFIG.systemMusic || "";

      if (desiredSrc) {
        getOrCreateTrack(desiredSrc, desiredSrc === SOUND_CONFIG.systemMusic);
      }

      trackRegistry.forEach((track, src) => {
        if (src === desiredSrc) {
          track.fadeIn();
        } else {
          track.fadeOut();
        }
      });
    }

    function unlockAudioOnInteraction() {
      if (audioUnlocked) return;
      audioUnlocked = true;
      syncBackgroundMusic();
    }

    window.addEventListener("keydown", unlockAudioOnInteraction, { once: false, passive: true });
    window.addEventListener("pointerdown", unlockAudioOnInteraction, { once: false, passive: true });
    window.addEventListener("touchstart", unlockAudioOnInteraction, { once: false, passive: true });

    /* ============================================================================
       5. OBSŁUGA TŁA WIDEO (.MP4 / .WEBM / .OGG / .MOV) ORAZ .GIF / .PNG BEZ DŹWIĘKU
       ============================================================================ */
    const backdropEl = document.getElementById("game-theme-backdrop");
    const themeVideoEl = document.getElementById("game-theme-video");
    themeVideoEl.muted = true;
    themeVideoEl.defaultMuted = true;
    themeVideoEl.volume = 0;

    let currentVideoBgSrc = "";

    function isVideoFile(path) {
      if (!path) return false;
      return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(path);
    }

    function updateSubmenuBackdropMedia(item) {
      const bgMedia = (item && (item.backgroundVideo || item.background || item.cover)) || "";
      const fallbackGrad = (item && item.fallbackBg) || "linear-gradient(135deg, #081d4a, #020817)";

      if (isVideoFile(bgMedia)) {
        backdropEl.style.backgroundImage = fallbackGrad;
        themeVideoEl.classList.add("visible");
        if (currentVideoBgSrc !== bgMedia) {
          currentVideoBgSrc = bgMedia;
          themeVideoEl.src = bgMedia;
        }
        themeVideoEl.muted = true;
        themeVideoEl.volume = 0;
        if (!isSystemSleeping && navLevel === "SUBMENU") {
          themeVideoEl.play().catch(() => {});
        }
      } else {
        pauseBackdropVideo();
        themeVideoEl.classList.remove("visible");
        if (bgMedia) {
          backdropEl.style.backgroundImage = `url("${bgMedia}"), ${fallbackGrad}`;
        } else {
          backdropEl.style.backgroundImage = fallbackGrad;
        }
      }
    }

    function pauseBackdropVideo() {
      if (!themeVideoEl.paused) {
        themeVideoEl.pause();
      }
    }

    /* ============================================================================
       6. PS4 SLEEP MODE FIRST + SMALL DELAY BEFORE OPENING TAB
       ============================================================================ */
    const sleepOverlayEl = document.getElementById("ps4-sleep-overlay");
    const sleepAppTitleEl = document.getElementById("sleep-app-title");

    function enterSleepMode(appName = "") {
      if (isSystemSleeping) return;
      isSystemSleeping = true;
      sleepAppTitleEl.textContent = appName
        ? `Wstrzymano system — uruchamianie: ${appName}`
        : "Wstrzymano system na czas działania aplikacji";
      document.body.classList.add("state-sleep");
      pauseBackdropVideo();
      if (window.ZSA_SCHOOL_3D) window.ZSA_SCHOOL_3D.pause();
      syncBackgroundMusic();
    }

    function wakeUpFromSleepMode() {
      if (!isSystemSleeping) return;
      if (pendingLaunchTimeout) {
        clearTimeout(pendingLaunchTimeout);
        pendingLaunchTimeout = null;
      }
      isSystemSleeping = false;
      wakeUpCooldownUntil = performance.now() + 340;
      document.body.classList.remove("state-sleep");
      unlockAudioOnInteraction();
      playCustomWav("back", true);
      if (navLevel === "SUBMENU" && themeVideoEl.classList.contains("visible")) {
        themeVideoEl.play().catch(() => {});
      }
      if (window.ZSA_SCHOOL_3D) window.ZSA_SCHOOL_3D.resume();
      syncBackgroundMusic();
    }

    function launchUrlWithSleepDelay(url, title = "Aplikacja") {
      if (!url || isSystemSleeping) return;
      playCustomWav("select");
      enterSleepMode(title);

      if (pendingLaunchTimeout) clearTimeout(pendingLaunchTimeout);
      pendingLaunchTimeout = setTimeout(() => {
        pendingLaunchTimeout = null;
        const targetWindow = OPEN_APPS_IN_NEW_TAB ? "_blank" : "_self";
        if (OPEN_APPS_IN_NEW_TAB) {
          window.open(url, targetWindow, "noopener");
        } else {
          window.location.href = url;
        }
      }, SLEEP_BEFORE_LAUNCH_DELAY_MS);
    }

    sleepOverlayEl.addEventListener("click", (e) => {
      e.stopPropagation();
      wakeUpFromSleepMode();
    });

    document.getElementById("top-zsa-profile-link").addEventListener("click", (e) => {
      e.preventDefault();
      launchUrlWithSleepDelay("https://zsa.mans.edu.pl", "Oficjalny Portal ZSA");
    });

    document.addEventListener("visibilitychange", () => {
      document.body.classList.toggle("tab-hidden", document.hidden);
      if (document.hidden) {
        pauseBackdropVideo();
      } else if (!isSystemSleeping && navLevel === "SUBMENU" && themeVideoEl.classList.contains("visible")) {
        themeVideoEl.play().catch(() => {});
      }
    });

    /* ============================================================================
       7. WIEŚCI Z https://zsa.mans.edu.pl/2026/ + PRAWDZIWE ZDJĘCIA ARTYKUŁÓW (JAK NA ZDJ. 2)
       ============================================================================ */
    const ZSA_2026_URL = "https://zsa.mans.edu.pl/2026/";
    const ZSA_WP_API_URL = "https://zsa.mans.edu.pl/wp-json/wp/v2/posts?_embed&per_page=8";

    /* Domyślny zestaw artykułów (bez wymuszania logo szkoły — prawdziwe miniatury są pobierane z API/HTML) */
    let zsaNewsArticles = [
      {
        title: "ZBIÓRKA KARMY DLA SCHRONISKA ARKA W ŁOMŻY",
        date: "12 listopada 2026",
        excerpt: "Włącz się w szkolną akcję pomocy dla podopiecznych Schroniska dla Bezdomnych Zwierząt „Arka” w Łomży.",
        url: "https://zsa.mans.edu.pl/2026/11/12/zbiorka-karmy-dlaschroniska-arka-w-lomzy/",
        image: ""
      },
      {
        title: "11 Listopada — Narodowe Święto Niepodległości",
        date: "10 listopada 2026",
        excerpt: "„Zapraszamy całą społeczność szkolną na uroczysty apel z okazji Narodowego Święta Niepodległości! Wspólnie uczcijmy rocznicę odzyskania przez Polskę niepodległości, oddając hołd tym, którzy walczyli o wolność naszej Ojczyzny”",
        url: "https://zsa.mans.edu.pl/2026/11/10/11-listopada/",
        image: ""
      },
      {
        title: "Niezapomniana przygoda na Węgrzech! Uczniowie naszej szkoły odkrywali uroki Budapesztu i Zakola Dunaju",
        date: "5 listopada 2026",
        excerpt: "W dniach 3-5 listopada 2026 roku uczniowie naszej szkoły uczestniczyli w wyjątkowej wycieczce na Węgry, podczas której mieli okazję odkrywać piękno Budapesztu, urokliwego Szentendre oraz historycznego Wyszehradu.",
        url: "https://zsa.mans.edu.pl/2026/11/05/niezapomniana-przygoda-na-wegrzech-uczniowie-naszej-szkoly-odkrywali-uroki-budapesztu-i-zakola-dunaju/",
        image: ""
      },
      {
        title: "WAT spotkanie on-line",
        date: "4 listopada 2026",
        excerpt: "Wojskowa Akademia Techniczna w Warszawie zaproponowała spotkanie w formule zdalnej dotyczące kierunków studiów, zasad rekrutacji oraz możliwości rozwoju naukowego. Nasze szkoły objęte są patronatem WAT.",
        url: "https://zsa.mans.edu.pl/2026/11/04/wat-spotkanie-on-line/",
        image: ""
      }
    ];

    let whatsNewFocusIndex = 0;
    let newsImageDwellTimer = null;

    function isSchoolLogoUrl(url) {
      if (!url) return true;
      return /cropped-logo_ZSA_MANS|logo-zsa/i.test(url);
    }

    function cleanExtractedUrl(rawUrl) {
      if (!rawUrl) return "";
      return rawUrl
        .replace(/^['"\s]+|['"\s)+]+$/g, "")
        .replace(/&quot;/gi, "")
        .replace(/&#039;/gi, "")
        .trim();
    }

    function scheduleNewsImageReveal() {
      clearTimeout(newsImageDwellTimer);
      const listEl = document.getElementById("zsa-news-list");
      if (!listEl) return;

      Array.from(listEl.querySelectorAll(".zsa-news-card")).forEach((c) => {
        c.classList.remove("reveal-image");
      });

      if (navLevel !== "SUBMENU" || !MAIN_RIBBON_ITEMS[mainIndex]?.isWhatsNew) return;
      if (whatsNewFocusIndex < 0) return;

      newsImageDwellTimer = setTimeout(() => {
        const cards = listEl.querySelectorAll(".zsa-news-card");
        const activeCard = cards[whatsNewFocusIndex];
        if (activeCard && activeCard.getAttribute("data-has-image") === "1") {
          activeCard.classList.add("reveal-image");
        }
      }, NEWS_IMAGE_DWELL_MS);
    }

    function updateWhatsNewFocusUI() {
      const startBtnEl = document.getElementById("sub-start-btn");
      const refreshBtnEl = document.getElementById("zsa-refresh-btn");
      const listEl = document.getElementById("zsa-news-list");
      if (!listEl) return;

      startBtnEl.classList.toggle("focused", whatsNewFocusIndex === -2);
      refreshBtnEl.classList.toggle("pad-focused", whatsNewFocusIndex === -1);

      const cards = Array.from(listEl.querySelectorAll(".zsa-news-card"));
      cards.forEach((card, idx) => {
        const isFocused = (idx === whatsNewFocusIndex);
        card.classList.toggle("pad-focused", isFocused);
        if (isFocused) {
          card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      });

      scheduleNewsImageReveal();
    }

    function renderZsaNewsList() {
      const listEl = document.getElementById("zsa-news-list");
      if (!listEl) return;

      listEl.innerHTML = zsaNewsArticles.map((art, idx) => {
        const validImg = (art.image && !isSchoolLogoUrl(art.image)) ? art.image : "";
        const hasImgAttr = validImg ? "1" : "0";
        return `
          <div class="zsa-news-card" data-idx="${idx}" data-has-image="${hasImgAttr}">
            <div class="zsa-news-date">
              <span>${art.date}</span>
              <span class="zsa-news-dwell-hint">${validImg ? "Zatrzymaj się, aby zobaczyć zdjęcie • ✕ Otwórz" : "✕ Otwórz artykuł"}</span>
            </div>
            <div class="zsa-news-title">${art.title}</div>
            ${art.excerpt ? `<div class="zsa-news-excerpt">${art.excerpt}</div>` : ""}
            <div class="zsa-news-img-wrap">
              ${validImg ? `<img class="zsa-news-img" src="${validImg}" alt="${art.title.replace(/"/g, "&quot;")}" loading="lazy" onerror="this.closest('.zsa-news-card').setAttribute('data-has-image','0'); this.parentElement.style.display='none';" />` : ""}
            </div>
          </div>
        `;
      }).join("");

      Array.from(listEl.querySelectorAll(".zsa-news-card")).forEach((card, idx) => {
        card.addEventListener("mouseenter", () => {
          if (whatsNewFocusIndex !== idx) {
            whatsNewFocusIndex = idx;
            playCustomWav("move");
            updateWhatsNewFocusUI();
          }
        });
        card.addEventListener("click", (e) => {
          e.preventDefault();
          const art = zsaNewsArticles[idx];
          if (art && art.url) {
            launchUrlWithSleepDelay(art.url, art.title);
          }
        });
      });

      if (whatsNewFocusIndex >= zsaNewsArticles.length) {
        whatsNewFocusIndex = 0;
      }
      updateWhatsNewFocusUI();
    }

    /* Wyciąganie pierwszego prawdziwego zdjęcia z kodu HTML (zarówno z archiwum Bizberg, jak i z treści wpisu) */
    function extractBestArticleImageFromElement(rootEl) {
      if (!rootEl) return "";

      /* 1. Sprawdzenie wszystkich stylów inline z url(...) — np. miniatury motywu Bizberg na https://zsa.mans.edu.pl/2026/ */
      const styledNodes = Array.from(rootEl.querySelectorAll("[style*='url']"));
      if (rootEl.getAttribute && rootEl.getAttribute("style") && /url/i.test(rootEl.getAttribute("style"))) {
        styledNodes.unshift(rootEl);
      }
      for (const node of styledNodes) {
        const styleAttr = node.getAttribute("style") || "";
        const match = styleAttr.match(/url\(\s*['"]?([^'")\s]+)['"]?\s*\)/i);
        if (match && match[1]) {
          const candidate = cleanExtractedUrl(match[1]);
          if (candidate && !isSchoolLogoUrl(candidate)) {
            return candidate;
          }
        }
      }

      /* 2. Sprawdzenie atrybutów data-bg / data-background */
      const bgDataNode = rootEl.querySelector("[data-bg], [data-background], [data-lazy-bg]");
      if (bgDataNode) {
        const candidate = cleanExtractedUrl(
          bgDataNode.getAttribute("data-bg") ||
          bgDataNode.getAttribute("data-background") ||
          bgDataNode.getAttribute("data-lazy-bg")
        );
        if (candidate && !isSchoolLogoUrl(candidate)) return candidate;
      }

      /* 3. Sprawdzenie znaczników <img> (data-lazy-src, data-src, srcset, src) */
      const imgs = Array.from(rootEl.querySelectorAll("img"));
      for (const img of imgs) {
        let candidate = cleanExtractedUrl(
          img.getAttribute("data-lazy-src") ||
          img.getAttribute("data-src") ||
          img.getAttribute("src") ||
          ""
        );
        if (!candidate && img.getAttribute("srcset")) {
          const firstSrc = img.getAttribute("srcset").split(",")[0].trim().split(/\s+/)[0];
          candidate = cleanExtractedUrl(firstSrc);
        }
        if (candidate && !isSchoolLogoUrl(candidate) && !/avatar|emoji|icon/i.test(candidate)) {
          return candidate;
        }
      }

      return "";
    }

    function parseZsaArchiveHtml(htmlString) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, "text/html");
      const articles = Array.from(doc.querySelectorAll("article"));
      const parsed = [];

      articles.forEach((art) => {
        const titleLink = art.querySelector("h4 a, h2 a, h3 a, .entry-title a");
        if (!titleLink) return;
        const title = titleLink.textContent.trim();
        const url = titleLink.getAttribute("href") || ZSA_2026_URL;

        let dateText = "2026";
        const links = Array.from(art.querySelectorAll("a"));
        const dateCandidate = links.find((a) => a !== titleLink && /\d{4}/.test(a.textContent));
        if (dateCandidate) {
          dateText = dateCandidate.textContent.trim();
        }

        const pEl = art.querySelector("p");
        const excerpt = pEl ? pEl.textContent.trim() : "";
        const image = extractBestArticleImageFromElement(art);

        if (title) {
          parsed.push({ title, date: dateText, excerpt, url, image });
        }
      });

      return parsed;
    }

    /* Parsowanie oficjalnego WordPress REST API (zwraca dokładne miniatury wpisów featuredmedia i zdjęcia z treści) */
    function parseWpJsonPosts(postsArray) {
      if (!Array.isArray(postsArray)) return [];
      const monthsPl = [
        "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
        "lipca", "sierpnia", "września", "października", "listopada", "grudnia"
      ];
      const parser = new DOMParser();

      return postsArray.map((post) => {
        const titleDoc = parser.parseFromString(post.title?.rendered || "", "text/html");
        const title = (titleDoc.body.textContent || "").trim();

        const excerptDoc = parser.parseFromString(post.excerpt?.rendered || "", "text/html");
        const excerpt = (excerptDoc.body.textContent || "").trim();

        let dateStr = "2026";
        if (post.date) {
          const d = new Date(post.date);
          if (!Number.isNaN(d.getTime())) {
            dateStr = `${d.getDate()} ${monthsPl[d.getMonth()]} ${d.getFullYear()}`;
          }
        }

        let image = "";
        const mediaArr = post._embedded && post._embedded["wp:featuredmedia"];
        if (Array.isArray(mediaArr) && mediaArr[0]) {
          const m = mediaArr[0];
          const sizes = m.media_details && m.media_details.sizes;
          image =
            (sizes && (sizes.medium_large?.source_url || sizes.large?.source_url || sizes.full?.source_url)) ||
            m.source_url ||
            "";
        }

        if ((!image || isSchoolLogoUrl(image)) && post.content?.rendered) {
          const contentDoc = parser.parseFromString(post.content.rendered, "text/html");
          image = extractBestArticleImageFromElement(contentDoc.body);
        }

        if (isSchoolLogoUrl(image)) image = "";

        return {
          title,
          date: dateStr,
          excerpt,
          url: post.link || ZSA_2026_URL,
          image: cleanExtractedUrl(image)
        };
      }).filter((item) => Boolean(item.title));
    }

    async function fetchTextWithFallback(targetUrl) {
      const urls = [
        targetUrl,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`,
        `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`
      ];
      for (const u of urls) {
        try {
          const res = await fetch(u, { cache: "no-store" });
          if (res.ok) {
            return await res.text();
          }
        } catch (_) {}
      }
      return "";
    }

    /* Jeżeli dany wpis nie miał obrazka na liście archiwum, doczytujemy zdjęcie z jego podstrony (og:image / wp-content) */
    async function enrichMissingArticleImages() {
      const parser = new DOMParser();
      for (let i = 0; i < zsaNewsArticles.length; i++) {
        const art = zsaNewsArticles[i];
        if (art.image && !isSchoolLogoUrl(art.image)) continue;
        if (!art.url) continue;

        const html = await fetchTextWithFallback(art.url);
        if (!html) continue;

        const doc = parser.parseFromString(html, "text/html");
        let foundImg = "";

        const ogImg = doc.querySelector("meta[property='og:image'], meta[name='twitter:image']");
        if (ogImg && ogImg.getAttribute("content")) {
          const candidate = cleanExtractedUrl(ogImg.getAttribute("content"));
          if (!isSchoolLogoUrl(candidate)) foundImg = candidate;
        }

        if (!foundImg) {
          const articleScope = doc.querySelector("article, .entry-content, main") || doc.body;
          foundImg = extractBestArticleImageFromElement(articleScope);
        }

        if (foundImg && !isSchoolLogoUrl(foundImg)) {
          zsaNewsArticles[i].image = foundImg;
          renderZsaNewsList();
        }
      }
    }

    async function fetchLatestZsaNews2026() {
      const statusEl = document.getElementById("zsa-news-status-text");
      if (statusEl) {
        statusEl.textContent = "Sprawdzanie najnowszych wpisów i zdjęć z https://zsa.mans.edu.pl/2026/ ...";
      }

      /* Krok 1: Próba pobrania z oficjalnego WordPress REST API (zawiera dokładne miniatury wpisów jak na zdj. 2) */
      const apiText = await fetchTextWithFallback(ZSA_WP_API_URL);
      if (apiText) {
        try {
          const json = JSON.parse(apiText);
          const apiItems = parseWpJsonPosts(json);
          if (apiItems.length > 0) {
            zsaNewsArticles = apiItems.slice(0, 8);
            renderZsaNewsList();
            if (statusEl) {
              statusEl.textContent = "Nawiguj padem (▲ ▼) — zatrzymaj się na wpisie, aby rozwinąć zdjęcie";
            }
            enrichMissingArticleImages();
            return;
          }
        } catch (_) {}
      }

      /* Krok 2: Pobranie bezpośrednio z archiwum HTML https://zsa.mans.edu.pl/2026/ */
      const archiveHtml = await fetchTextWithFallback(ZSA_2026_URL);
      if (archiveHtml) {
        const htmlItems = parseZsaArchiveHtml(archiveHtml);
        if (htmlItems.length > 0) {
          zsaNewsArticles = htmlItems.slice(0, 8);
          renderZsaNewsList();
          if (statusEl) {
            statusEl.textContent = "Nawiguj padem (▲ ▼) — zatrzymaj się na wpisie, aby rozwinąć zdjęcie";
          }
          enrichMissingArticleImages();
          return;
        }
      }

      renderZsaNewsList();
      enrichMissingArticleImages();
      if (statusEl) {
        statusEl.textContent = "Nawiguj padem (▲ ▼) — zatrzymaj się na wpisie, aby rozwinąć zdjęcie";
      }
    }

    document.getElementById("zsa-refresh-btn").addEventListener("click", () => {
      playCustomWav("select");
      fetchLatestZsaNews2026();
    });

    /* ============================================================================
       7B. LOGIKA APLIKACJI "PLAN LEKCJI" Z DOKŁADNĄ NAWIGACJĄ GÓRA/DÓŁ
       ============================================================================ */
    let ttStep = "SCHOOL";     // "SCHOOL" | "CLASS" | "SCHEDULE"
    let ttFocusArea = "MAIN";  // "MAIN" (karty szkół/klas/plan) | "PDF_BTN" (lewy przycisk Pełny PDF) | "BACK_BTN" (górny przycisk Wstecz)
    let ttSchoolKey = "ALO";
    let ttSchoolFocusIdx = 0;  // 0 = Liceum (ALO), 1 = Technikum (AT)
    let ttClassFocusIdx = 0;

    const ttSchoolStepEl = document.getElementById("tt-school-step");
    const ttClassStepEl = document.getElementById("tt-class-step");
    const ttScheduleStepEl = document.getElementById("tt-schedule-step");
    const ttBreadcrumbEl = document.getElementById("tt-breadcrumb");
    const ttBackStepBtnEl = document.getElementById("tt-back-step-btn");
    const ttScheduleTbodyEl = document.getElementById("tt-schedule-tbody");

    /**
     * Geometryczne wyszukiwanie kafelka bezpośrednio POD (direction = 1) lub NAD (direction = -1)
     * aktualnie zaznaczonym kafelkiem w siatce klas.
     * Dzięki temu strzałka w dół/górę zawsze trafia w kafelek z tej samej kolumny!
     */
    function findVerticallyAlignedCardIndex(cards, currentIndex, direction) {
      const currentCard = cards[currentIndex];
      if (!currentCard) return -1;

      const curRect = currentCard.getBoundingClientRect();
      const curCenterX = curRect.left + curRect.width / 2;
      const curCenterY = curRect.top + curRect.height / 2;

      let bestRowDeltaY = Infinity;
      let rowCandidates = [];

      cards.forEach((card, idx) => {
        if (idx === currentIndex) return;
        const r = card.getBoundingClientRect();
        const cy = r.top + r.height / 2;
        const dy = (cy - curCenterY) * direction;

        if (dy > 18) {
          if (dy < bestRowDeltaY - 14) {
            bestRowDeltaY = dy;
            rowCandidates = [{ idx, r }];
          } else if (Math.abs(dy - bestRowDeltaY) <= 14) {
            rowCandidates.push({ idx, r });
          }
        }
      });

      if (rowCandidates.length === 0) return -1;

      let bestIdx = rowCandidates[0].idx;
      let minDeltaX = Infinity;
      rowCandidates.forEach((cand) => {
        const cx = cand.r.left + cand.r.width / 2;
        const dx = Math.abs(cx - curCenterX);
        if (dx < minDeltaX) {
          minDeltaX = dx;
          bestIdx = cand.idx;
        }
      });

      return bestIdx;
    }

    function syncTimetableFocusVisuals() {
      const startBtnEl = document.getElementById("sub-start-btn");
      startBtnEl.classList.toggle("focused", ttFocusArea === "PDF_BTN");
      ttBackStepBtnEl.classList.toggle("pad-focused", ttFocusArea === "BACK_BTN");

      const schoolCards = Array.from(ttSchoolStepEl.querySelectorAll(".tt-school-card"));
      schoolCards.forEach((card, idx) => {
        card.classList.toggle("pad-focused", ttStep === "SCHOOL" && ttFocusArea === "MAIN" && idx === ttSchoolFocusIdx);
      });

      const classCards = Array.from(ttClassStepEl.querySelectorAll(".tt-class-card"));
      classCards.forEach((card, idx) => {
        const active = (ttStep === "CLASS" && ttFocusArea === "MAIN" && idx === ttClassFocusIdx);
        card.classList.toggle("pad-focused", active);
        if (active) {
          card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      });
    }

    function renderTimetableUI() {
      if (ttStep === "SCHOOL") {
        ttSchoolStepEl.style.display = "grid";
        ttClassStepEl.style.display = "none";
        ttScheduleStepEl.style.display = "none";
        ttBackStepBtnEl.style.display = "none";
        ttBreadcrumbEl.innerHTML = `Krok 1/3 — Wybierz typ szkoły: <strong>Liceum (ALO)</strong> lub <strong>Technikum (AT)</strong>`;
      } else if (ttStep === "CLASS") {
        ttSchoolStepEl.style.display = "none";
        ttClassStepEl.style.display = "grid";
        ttScheduleStepEl.style.display = "none";
        ttBackStepBtnEl.style.display = "inline-flex";

        const schoolName = ttSchoolKey === "ALO" ? "Akademickie Liceum Ogólnokształcące (ALO)" : "Akademickie Technikum (AT)";
        ttBreadcrumbEl.innerHTML = `Krok 2/3 — Szkoła: <strong>${schoolName}</strong> • Wybierz klasę`;

        const classes = DEFAULT_TIMETABLE_DB[ttSchoolKey] || [];
        ttClassStepEl.innerHTML = classes.map((c, idx) => `
          <div class="tt-class-card" data-cidx="${idx}">
            <div class="tt-class-code">${c.id}</div>
            <div class="tt-class-tutorLabel">Wychowawca</div>
            <div class="tt-class-tutor">${c.tutor}</div>
          </div>
        `).join("");

        Array.from(ttClassStepEl.querySelectorAll(".tt-class-card")).forEach((card, idx) => {
          card.addEventListener("mouseenter", () => {
            ttFocusArea = "MAIN";
            ttClassFocusIdx = idx;
            syncTimetableFocusVisuals();
          });
          card.addEventListener("click", () => {
            ttFocusArea = "MAIN";
            ttClassFocusIdx = idx;
            playCustomWav("select");
            ttStep = "SCHEDULE";
            renderTimetableUI();
          });
        });
      } else if (ttStep === "SCHEDULE") {
        ttSchoolStepEl.style.display = "none";
        ttClassStepEl.style.display = "none";
        ttScheduleStepEl.style.display = "block";
        ttBackStepBtnEl.style.display = "inline-flex";

        const classObj = (DEFAULT_TIMETABLE_DB[ttSchoolKey] || [])[ttClassFocusIdx];
        if (!classObj) return;

        ttBreadcrumbEl.innerHTML = `Klasa: <strong>${classObj.id}</strong> • Wychowawca: <strong>${classObj.tutor}</strong> (▲ ▼ Przewijaj plan i legendę)`;

        ttScheduleTbodyEl.innerHTML = LESSON_HOURS.map((hourStr, hIdx) => {
          const pn = classObj.days.Pn[hIdx] || "";
          const wt = classObj.days.Wt[hIdx] || "";
          const sr = classObj.days.Sr[hIdx] || "";
          const czw = classObj.days.Czw[hIdx] || "";
          const pi = classObj.days.Pi[hIdx] || "";

          const fmt = (val) => {
            if (!val) return `<span class="tt-empty-slot">—</span>`;
            const tip = buildLessonTooltip(val).replace(/"/g, "&quot;");
            return `<span class="tt-lesson-pill" ${tip ? `title="${tip}"` : ""}>${val}</span>`;
          };

          return `
            <tr>
              <td class="tt-col-nr">${hIdx + 1}.</td>
              <td class="tt-col-time">${hourStr}</td>
              <td>${fmt(pn)}</td>
              <td>${fmt(wt)}</td>
              <td>${fmt(sr)}</td>
              <td>${fmt(czw)}</td>
              <td>${fmt(pi)}</td>
            </tr>
          `;
        }).join("");

        ttScheduleStepEl.scrollTop = 0;
      }

      syncTimetableFocusVisuals();
    }

    Array.from(ttSchoolStepEl.querySelectorAll(".tt-school-card")).forEach((card, idx) => {
      card.addEventListener("mouseenter", () => {
        ttFocusArea = "MAIN";
        ttSchoolFocusIdx = idx;
        syncTimetableFocusVisuals();
      });
      card.addEventListener("click", () => {
        ttFocusArea = "MAIN";
        ttSchoolFocusIdx = idx;
        ttSchoolKey = idx === 0 ? "ALO" : "AT";
        ttClassFocusIdx = 0;
        playCustomWav("select");
        ttStep = "CLASS";
        renderTimetableUI();
      });
    });

    ttBackStepBtnEl.addEventListener("click", () => {
      if (ttStep === "SCHEDULE") {
        ttStep = "CLASS";
        ttFocusArea = "MAIN";
        playCustomWav("back");
        renderTimetableUI();
      } else if (ttStep === "CLASS") {
        ttStep = "SCHOOL";
        ttFocusArea = "MAIN";
        playCustomWav("back");
        renderTimetableUI();
      }
    });

    /* ============================================================================
       7C. BAZA WSZYSTKICH 53 NAUCZYCIELI Z PLIKU PDF + LOGIKA "PLAN NAUCZYCIELI"
       Format wpisu lekcji: [nrLekcji (1..10), "Przedmiot", "Klasa", "Sala"]
       ============================================================================ */
const TEACHERS_PDF_DB = [
  {
    code: "RBanach",
    name: "R. Banach",
    role: "Edukacja dla bezpieczeństwa (Edb), BHP",
    days: {
      Pn: [
        [8, "Bhp", "2BC AT", "B06"],
        [9, "Bhp", "1A AT", "B06"],
        [10, "Bhp", "1B AT", "B06"]
      ],
      Wt: [
        [1, "Edb", "1B AT", "B06"],
        [2, "Bhp", "2A AT", "B06"],
        [8, "Edb", "1A ALO", "B06"],
        [10, "Edb", "1A AT", "B06"]
      ],
      Sr: [],
      Czw: [],
      Pi: [
        [1, "Edb", "1B ALO", "B06"]
      ]
    }
  },
  {
    code: "BBorawska",
    name: "Beata Borawska",
    role: "Język polski • Wychowawca 4A AT",
    days: {
      Pn: [
        [7, "Jp", "4D AT", "403"],
        [8, "Jp", "4D AT", "403"]
      ],
      Wt: [
        [9, "Jp", "4BC AT", "403"]
      ],
      Sr: [
        [7, "Jp", "4A AT", "108"],
        [8, "Jp", "4A AT", "108"],
        [9, "Zzw", "4A AT", "400"]
      ],
      Czw: [
        [6, "Jp", "4BC AT", "104"]
      ],
      Pi: [
        [7, "Jp", "4D AT", "400"],
        [8, "Jp", "4BC AT", "400"],
        [9, "Jp", "4A AT", "400"]
      ]
    }
  },
  {
    code: "SBrzóska",
    name: "S. Brzóska",
    role: "Matematyka, Elektrotechnika i elektronika (EiE)",
    days: {
      Pn: [
        [1, "Mat", "5A AT", "100"],
        [2, "Mat", "5B AT", "100"],
        [3, "Mat", "5B AT", "100"],
        [4, "Mat", "5C AT", "100"]
      ],
      Wt: [
        [9, "Mat", "5B AT", "100"],
        [10, "Mat", "5B AT", "100"]
      ],
      Sr: [
        [9, "Mat", "5A AT", "100"],
        [10, "Mat", "5A AT", "100"]
      ],
      Czw: [
        [5, "Mat", "5C AT", "108"],
        [6, "Mech EiE", "1A AT", "108"],
        [7, "Mech EiE", "1A AT", "108"],
        [8, "Mat", "5C AT", "108"],
        [9, "Mat", "5A AT", "100"],
        [10, "Mat", "5A AT", "100"]
      ],
      Pi: [
        [1, "Mat", "5C AT", "200"],
        [2, "Mat", "5B AT", "200"],
        [3, "Mat", "5C AT", "200"]
      ]
    }
  },
  {
    code: "JBućkowska",
    name: "Justyna Bućkowska",
    role: "Przedmioty logistyczne (Opm, PL, Ppt) • Wychowawca 3B AT",
    days: {
      Pn: [
        [1, "Log Opm", "3B AT", "104"],
        [3, "Zzw", "3B AT", "104"],
        [10, "Log Ppt", "3B AT", "104"]
      ],
      Wt: [
        [1, "Log Opm", "3B AT", "104"],
        [2, "PL", "1B AT", "104"],
        [4, "Log Opm", "3B AT", "104"],
        [9, "PL", "1B AT", "104"]
      ],
      Sr: [
        [10, "Log Opm", "2BC AT", "104"]
      ],
      Czw: [],
      Pi: [
        [8, "Log Opm", "2BC AT", "104"],
        [9, "Log Opm", "2BC AT", "104"],
        [10, "Log Ppt", "2BC AT", "104"]
      ]
    }
  },
  {
    code: "RBućkowski",
    name: "Rafał Marcin Bućkowski",
    role: "Fizyka • Wychowawca 4C ALO",
    days: {
      Pn: [
        [8, "Fiz", "2B ALO", "108"]
      ],
      Wt: [
        [6, "Fiz", "2BC AT", "108"],
        [7, "Fiz", "1A AT", "B01"],
        [8, "Fiz", "1B AT", "108"],
        [10, "Mech Fiz", "2BC AT", "108"]
      ],
      Sr: [
        [4, "Fiz", "3A ALO", "B01"],
        [5, "Zzw", "4C ALO", "B01"],
        [6, "Fiz", "3B AT", "B01"],
        [7, "Mech Fiz", "2BC AT", "B01"],
        [8, "Fiz", "1A AT", "B01"]
      ],
      Czw: [
        [2, "Fiz", "3A AT", "B01"],
        [3, "Fiz", "2A ALO", "B01"]
      ],
      Pi: [
        [1, "Mech Fiz", "3B AT", "B01"],
        [5, "Mech Fiz", "1A AT", "B01"],
        [7, "Fiz", "3A ALO", "B01"],
        [8, "Fiz", "2A AT", "B01"],
        [9, "Fiz", "1B AT", "B01"]
      ]
    }
  },
  {
    code: "RChodorowski",
    name: "R. Chodorowski",
    role: "Przedmioty mechaniczne (CAD/CAM)",
    days: {
      Pn: [
        [7, "Mech Cad/CAM", "1A AT", "606"],
        [8, "Mech Cad/CAM", "1A AT", "606"],
        [9, "Mech Cad/CAM", "3B AT", "C09"]
      ],
      Wt: [],
      Sr: [],
      Czw: [
        [8, "Mech Cad/CAM", "3B AT", "C09"],
        [9, "Mech Cad/CAM", "2BC AT", "C09"],
        [10, "Mech Cad/CAM", "2BC AT", "C09"]
      ],
      Pi: []
    }
  },
  {
    code: "WCwalina",
    name: "W. Cwalina",
    role: "Biologia",
    days: {
      Pn: [],
      Wt: [],
      Sr: [
        [9, "Bio", "4BC AT", "B04"]
      ],
      Czw: [],
      Pi: [
        [8, "Bio", "3B AT", "B04"],
        [9, "Bio", "4D AT", "B04"],
        [10, "Bio", "3A AT", "B04"]
      ]
    }
  },
  {
    code: "PDuchnowski",
    name: "Paweł Duchnowski",
    role: "Przedmioty IT (Sbd, Wiai, So, Ksiop, inf roz) • Wychowawca 4BC AT",
    days: {
      Pn: [
        [5, "Ksiop z", "2A AT", "308"],
        [6, "Prog Sbd", "2A AT", "308"],
        [7, "Prog Wiai", "1A AT", "308"],
        [8, "Prog Sbd", "1A AT", "308"],
        [9, "Prog Psbd", "3B AT", "308"],
        [10, "Zzw", "4BC AT", "308"]
      ],
      Wt: [
        [8, "inf roz", "5B AT", "308"],
        [9, "inf roz", "4D AT", "308"],
        [10, "Prog Psbd", "2A AT", "308"]
      ],
      Sr: [
        [5, "Prog Wiai", "2A AT", "308"],
        [6, "Ksiop z", "2BC AT", "308"],
        [7, "Prog Psbd", "3B AT", "308"],
        [8, "inf roz", "5A AT", "308"],
        [9, "Inf So", "1A AT", "308"],
        [10, "Inf So", "1A AT", "308"]
      ],
      Czw: [
        [5, "inf roz", "4A AT", "308"],
        [6, "inf roz", "5C AT", "308"],
        [7, "Prog Sbd", "1A AT", "308"],
        [8, "Prog Wiai", "2A AT", "308"],
        [9, "Inf So", "2A AT", "308"],
        [10, "Inf So", "2A AT", "308"]
      ],
      Pi: [
        [9, "inf roz", "4BC AT", "308"],
        [10, "Prog Wiai", "1A AT", "308"]
      ]
    }
  },
  {
    code: "IDudzińska",
    name: "I. Dudzińska",
    role: "Język angielski",
    days: {
      Pn: [],
      Wt: [
        [2, "Ja", "5A AT", "504"],
        [3, "Ja", "5C AT", "504"],
        [4, "Ja", "5A AT", "504"],
        [5, "Ja", "2A ALO", "504"],
        [6, "Ja", "2A ALO", "504"],
        [7, "Ja", "4D AT", "504"],
        [8, "Ja (Niemundurowi)", "2A AT", "504"]
      ],
      Sr: [
        [1, "Ja", "4D AT", "504"],
        [2, "Ja", "4D AT", "504"],
        [3, "Ja", "5C AT", "504"],
        [5, "Ja", "5A AT", "504"],
        [6, "Ja", "5C AT", "504"],
        [7, "Ja (Niemundurowi)", "2A AT", "504"],
        [8, "Ja", "2A ALO", "504"]
      ],
      Czw: [],
      Pi: []
    }
  },
  {
    code: "ADzbeńska",
    name: "Aleksandra Dzbeńska",
    role: "Biznes i zarządzanie, Logistyka (Zm, OKiK) • Wychowawca 1B AT",
    days: {
      Pn: [
        [1, "Biz", "1B ALO", "403"],
        [2, "Biz", "2A AT", "403"],
        [3, "Zzw", "1B AT", "403"]
      ],
      Wt: [
        [1, "Biz", "2BC AT", "403"],
        [2, "Biz", "2A ALO", "403"],
        [3, "Log Zm", "2BC AT", "403"]
      ],
      Sr: [
        [4, "OKiK", "1B AT", "403"],
        [5, "Biz", "2B ALO", "403"],
        [6, "Zm", "1B AT", "403"],
        [7, "Biz", "1A ALO", "403"],
        [8, "OKiK", "1B AT", "403"],
        [9, "Log Zm", "2BC AT", "403"]
      ],
      Czw: [],
      Pi: []
    }
  },
  {
    code: "BDzięgielewska",
    name: "B. Dzięgielewska",
    role: "Geografia, Geografia logistyczna",
    days: {
      Pn: [
        [1, "Geo", "3A ALO", "207"]
      ],
      Wt: [
        [8, "Log Geo", "2BC AT", "102"],
        [10, "Log Geo", "2BC AT", "102"]
      ],
      Sr: [
        [5, "Geo", "1B AT", "108"],
        [7, "Geo", "3A ALO", "500"],
        [8, "Geo", "3A ALO", "500"],
        [9, "Geo", "1B AT", "500"],
        [10, "Geo", "1B AT", "500"]
      ],
      Czw: [],
      Pi: []
    }
  },
  {
    code: "MFiega",
    name: "M. Fiega",
    role: "Matematyka, Przedmioty logistyczne (PL, PiWZ, Opt)",
    days: {
      Pn: [],
      Wt: [
        [2, "Log Opt", "3B AT", "—"],
        [3, "Mat", "2A ALO", "100"]
      ],
      Sr: [
        [1, "Log PL", "2BC AT", "—"],
        [2, "Log PL", "2BC AT", "—"],
        [3, "Log PL", "2BC AT", "—"],
        [4, "Mat", "2A ALO", "200"],
        [5, "Mat", "2A ALO", "200"],
        [6, "Mat", "2A ALO", "200"],
        [7, "Log Opt", "3B AT", "—"]
      ],
      Czw: [
        [1, "Log PiWZ", "2BC AT", "—"],
        [2, "Log PiWZ", "2BC AT", "—"],
        [3, "Log PL", "2BC AT", "—"],
        [4, "Log Opt", "3B AT", "—"]
      ],
      Pi: [
        [4, "PiWZ", "1B AT", "403"],
        [7, "PiWZ", "1B AT", "403"]
      ]
    }
  },
  {
    code: "MFilipkowski",
    name: "M. Filipkowski",
    role: "Informatyka, Język polski",
    days: {
      Pn: [
        [5, "Inf", "2BC AT", "509"],
        [6, "Inf", "2A ALO", "509"],
        [7, "Jp", "4A ALO", "500"],
        [8, "Jp", "4A ALO", "500"]
      ],
      Wt: [
        [6, "Jp", "4A ALO", "500"],
        [7, "Jp", "4A ALO", "500"],
        [8, "Jp", "4A ALO", "500"]
      ],
      Sr: [
        [5, "Jp", "4A ALO", "500"],
        [6, "Jp", "4A ALO", "500"],
        [9, "Inf", "3A AT", "509"]
      ],
      Czw: [
        [1, "Inf", "3A ALO", "509"],
        [2, "Inf", "2A AT", "509"]
      ],
      Pi: []
    }
  },
  {
    code: "PFilipkowski",
    name: "Piotr Filipkowski",
    role: "Historia • Wychowawca 2A ALO",
    days: {
      Pn: [
        [2, "His", "2A ALO", "102"],
        [3, "His", "3A AT", "C10"],
        [4, "His", "1B AT", "C10"],
        [5, "His", "3B AT", "—"],
        [6, "His", "1A AT", "C10"],
        [7, "His", "2A AT", "102"],
        [9, "His", "2A ALO", "102"],
        [10, "His", "1A ALO", "100"]
      ],
      Wt: [
        [3, "His", "3A ALO", "102"],
        [4, "His", "1A ALO", "C10"],
        [7, "His", "3A AT", "102"]
      ],
      Sr: [
        [1, "Zzw", "2A ALO", "102"],
        [5, "His", "3A ALO", "102"],
        [6, "His", "1B ALO", "C10"]
      ],
      Czw: [
        [1, "His", "1B ALO", "102"],
        [2, "His", "1A ALO", "102"],
        [3, "His", "4B ALO", "—"],
        [5, "His", "1B ALO", "C10"],
        [6, "His", "2A AT", "C10"],
        [8, "His", "1A AT", "100"],
        [9, "His", "4B ALO", "—"]
      ],
      Pi: [
        [2, "His", "1B AT", "100"],
        [3, "His", "3B AT", "—"],
        [4, "His", "2A ALO", "100"]
      ]
    }
  },
  {
    code: "MJankowska",
    name: "M. Jankowska",
    role: "Edukacja obywatelska (EO), Dgwbi",
    days: {
      Pn: [],
      Wt: [
        [3, "EO", "3B AT", "B01"],
        [4, "Dgwbi", "3A AT", "B01"],
        [6, "EO", "2A AT", "B01"]
      ],
      Sr: [
        [4, "EO", "4BC AT", "104"],
        [5, "EO", "3A AT", "104"],
        [6, "EO", "4A AT", "104"]
      ],
      Czw: [
        [4, "EO", "4D AT", "104"],
        [5, "Dgwbi", "3A AT", "104"]
      ],
      Pi: []
    }
  },
  {
    code: "BJasińska",
    name: "B. Jasińska",
    role: "Edukacja obywatelska (EO)",
    days: {
      Pn: [
        [6, "EO", "2B ALO", "104"],
        [7, "EO", "2A ALO", "104"],
        [8, "EO", "2A ALO", "104"]
      ],
      Wt: [],
      Sr: [
        [6, "EO", "3A ALO", "108"],
        [9, "EO", "2B ALO", "507"]
      ],
      Czw: [],
      Pi: []
    }
  },
  {
    code: "KJaskółka",
    name: "Karol Jaskółka",
    role: "Język polski • Wychowawca 3A AT",
    days: {
      Pn: [
        [1, "Jp", "2B ALO", "505"],
        [2, "Jp", "3A ALO", "505"],
        [3, "Jp", "1A ALO", "505"],
        [4, "Jp", "1A ALO", "505"],
        [5, "Jp", "4C ALO", "505"],
        [6, "Jp", "4B ALO", "505"],
        [7, "Jp", "3B AT", "505"],
        [8, "Jp", "4B ALO", "505"],
        [9, "Jp", "1A ALO", "505"]
      ],
      Wt: [
        [1, "Jp", "3A ALO", "505"],
        [2, "Jp", "2B ALO", "505"],
        [4, "Jp", "2B ALO", "505"],
        [5, "Jp", "2B ALO", "505"],
        [6, "Jp", "4C ALO", "505"],
        [7, "Jp", "2A ALO", "505"],
        [8, "Zzw", "3A AT", "505"],
        [9, "Jp", "1A ALO", "505"]
      ],
      Sr: [
        [1, "Jp", "4B ALO", "505"],
        [2, "Jp", "2A ALO", "505"],
        [3, "Jp", "3A AT", "505"],
        [4, "Jp", "2B ALO", "505"],
        [5, "Jp", "3B AT", "505"],
        [6, "Jp", "3A AT", "505"],
        [7, "Jp", "2A ALO", "505"],
        [8, "Jp", "4C ALO", "505"],
        [9, "Jp", "1A ALO", "505"],
        [10, "Jp", "1A ALO", "505"]
      ],
      Czw: [
        [2, "Jp", "2B ALO", "505"],
        [3, "Jp", "3A ALO", "505"],
        [5, "Jp", "2A ALO", "505"],
        [6, "Jp", "3A ALO", "505"],
        [7, "Jp", "4C ALO", "505"],
        [8, "Jp", "4B ALO", "505"],
        [9, "Jp", "3A ALO", "505"],
        [10, "Jp", "3A AT", "505"]
      ],
      Pi: [
        [1, "Jp", "2A ALO", "505"],
        [2, "Jp (1. Grupa)", "2A ALO", "505"],
        [3, "Jp (1. Grupa)", "2A ALO", "505"],
        [4, "Jp", "4B ALO", "505"],
        [5, "Jp", "3B AT", "505"],
        [6, "Jp", "4B ALO", "505"],
        [7, "Jp", "2B ALO", "505"],
        [8, "Jp", "4B ALO", "505"],
        [9, "Jp", "3A ALO", "505"]
      ]
    }
  },
  {
    code: "KKarpik",
    name: "K. Karpik",
    role: "Wychowanie fizyczne (Wf)",
    days: {
      Pn: [
        [1, "Wf", "1B AT", "H1"],
        [2, "Wf", "1B ALO", "H3"],
        [3, "Wf (Niemundurowy)", "1A AT", "H3"],
        [4, "Wf", "3B AT", "H3"],
        [5, "Wf", "3A AT", "H3"],
        [6, "Wf (Niemundurowi)", "4BC AT", "H3"],
        [7, "Wf (Niemundurowi)", "2BC AT", "H3"]
      ],
      Wt: [
        [3, "Wf", "3A AT", "H3"],
        [4, "Wf (Niemundurowy)", "1A AT", "H3"],
        [5, "Wf", "1A ALO", "H3"],
        [6, "Wf (Niemundurowi)", "4BC AT", "H3"],
        [7, "Wf", "1A ALO", "H1"]
      ],
      Sr: [
        [1, "Wf", "1B ALO", "H1"],
        [2, "Wf", "1B ALO", "H1"],
        [3, "Wf", "2A AT", "H2"],
        [4, "Wf", "1A ALO", "H1"]
      ],
      Czw: [
        [1, "Wf", "3A AT", "H3"],
        [3, "Wf", "2A AT", "H3"],
        [4, "Wf (Niemundurowy)", "1A AT", "H3"],
        [5, "Wf", "1B AT", "H3"]
      ],
      Pi: [
        [2, "Wf", "3B AT", "H1"],
        [3, "Wf (Niemundurowi)", "4BC AT", "H2"],
        [4, "Wf", "3B AT", "H2"],
        [5, "Wf (Niemundurowi)", "2BC AT", "H2"],
        [6, "Wf", "1B AT", "H2"]
      ]
    }
  },
  {
    code: "AKarwowska",
    name: "Anna Karwowska",
    role: "Język polski, Historia • Wychowawca 5A AT",
    days: {
      Pn: [
        [1, "Jp", "2BC AT", "400"],
        [2, "Jp", "1B AT", "400"],
        [3, "Jp", "5C AT", "400"],
        [4, "Jp", "5A AT", "400"],
        [7, "Jp", "5A AT", "400"],
        [8, "Jp", "5B AT", "400"],
        [9, "Zzw", "5A AT", "400"],
        [10, "Jp", "5B AT", "400"]
      ],
      Wt: [
        [1, "Jp", "2A AT", "400"],
        [2, "Jp", "1A AT", "400"],
        [3, "Jp", "1B AT", "400"],
        [5, "His", "5A AT", "400"],
        [6, "Jp", "5B AT", "400"]
      ],
      Sr: [
        [1, "Jp", "5C AT", "400"],
        [2, "Jp", "5C AT", "400"],
        [3, "His", "5A AT", "400"],
        [5, "Jp", "1A AT", "400"],
        [7, "Jp", "5C AT", "400"]
      ],
      Czw: [
        [1, "Jp", "2A AT", "400"],
        [4, "Jp", "2BC AT", "400"],
        [5, "Jp", "1A AT", "400"],
        [8, "Jp", "1B AT", "400"],
        [9, "Jp", "1B AT", "400"]
      ],
      Pi: [
        [1, "Jp", "5A AT", "400"],
        [2, "Jp", "1A AT", "400"],
        [3, "Jp", "2BC AT", "400"],
        [4, "Jp", "5B AT", "400"],
        [5, "Jp", "5A AT", "400"],
        [6, "Jp", "2A AT", "400"]
      ]
    }
  },
  {
    code: "PKodzis",
    name: "P. Kodzis",
    role: "Przedmioty sieciowe i IT (Lsk, Miklsk, Inf, inf roz)",
    days: {
      Pn: [
        [1, "Inf Lsk", "2A AT", "608"],
        [2, "Inf", "2B ALO", "608"],
        [3, "Inf Miklsk", "2A AT", "608"],
        [4, "Miklsk", "4BC AT", "608"],
        [8, "Inf", "1B AT", "608"],
        [9, "Inf Lsk", "2A AT", "608"],
        [10, "Inf Lsk", "2BC AT", "608"]
      ],
      Wt: [
        [4, "Inf", "1B ALO", "509"],
        [9, "Miklsk", "4A AT", "608"],
        [10, "Miklsk", "4A AT", "608"]
      ],
      Sr: [
        [1, "Inf Lsk", "2BC AT", "608"],
        [2, "Inf Lsk", "2BC AT", "608"],
        [3, "Inf Lsk", "2BC AT", "608"],
        [9, "Miklsk", "4D AT", "608"],
        [10, "Miklsk", "3A AT", "608"]
      ],
      Czw: [
        [6, "Inf", "3B AT", "509"],
        [7, "Inf Miklsk", "2A AT", "608"],
        [8, "Inf Lsk", "2A AT", "608"],
        [9, "Miklsk", "4D AT", "600"],
        [10, "Inf", "1A AT", "509"]
      ],
      Pi: [
        [4, "Inf Lsk", "2A AT", "608"],
        [5, "Inf", "1A ALO", "608"],
        [6, "Miklsk", "3A AT", "608"],
        [7, "Miklsk", "4BC AT", "608"],
        [8, "Inf Miklsk", "2BC AT", "608"],
        [9, "Inf Miklsk", "2BC AT", "608"],
        [10, "inf roz", "1B AT", "608"]
      ]
    }
  },
  {
    code: "RKowalczyk",
    name: "R. Kowalczyk",
    role: "Wychowanie fizyczne (Wf)",
    days: {
      Pn: [
        [2, "Wf", "5C AT", "H1"],
        [3, "Wf", "4A AT", "H1"],
        [4, "Wf", "5B AT", "H1"],
        [6, "Wf (Mundorowi)", "4BC AT", "H1"],
        [7, "Wf (Mundorowi)", "2BC AT", "H1"],
        [8, "Wf", "5A AT", "H1"]
      ],
      Wt: [
        [1, "Wf", "4D AT", "H1"],
        [2, "Wf", "5C AT", "H1"],
        [4, "Wf (Mundurowy)", "1A AT", "H1"],
        [5, "Wf", "5B AT", "H1"],
        [6, "Wf (Mundorowi)", "4BC AT", "H1"]
      ],
      Sr: [
        [3, "Wf", "2A ALO", "H1"],
        [4, "Wf", "5C AT", "H2"],
        [5, "Wf", "5B AT", "H1"],
        [6, "Wf", "4D AT", "H1"],
        [7, "Wf", "5A AT", "H1"]
      ],
      Czw: [
        [2, "Wf", "4D AT", "H2"],
        [3, "Wf (Mundurowy)", "1A AT", "H2"],
        [4, "Wf (Mundurowy)", "1A AT", "H2"]
      ],
      Pi: [
        [3, "Wf (Mundorowi)", "4BC AT", "H3"],
        [4, "Wf", "5A AT", "H1"],
        [5, "Wf (Mundorowi)", "2BC AT", "H3"],
        [6, "Wf", "4A AT", "H3"],
        [7, "Wf", "2A ALO", "H3"],
        [8, "Wf", "4A AT", "H3"]
      ]
    }
  },
  {
    code: "EKownacka",
    name: "Emilia Kownacka",
    role: "Język angielski (Ja, JaZ) • Wychowawca 1A AT",
    days: {
      Pn: [
        [7, "Ja", "1A ALO", "C10"],
        [8, "JaZ", "3A AT", "C10"],
        [9, "Ja", "1B AT", "C10"]
      ],
      Wt: [
        [1, "Ja", "1A AT", "C10"],
        [2, "Ja", "1A ALO", "C10"],
        [3, "Ja", "1A AT", "C10"],
        [4, "Ja", "1B AT", "507"],
        [5, "JaZ", "4A AT", "507"],
        [6, "Ja", "1B ALO", "C10"],
        [7, "JaZ", "2A AT", "C10"],
        [8, "JaZ", "4D AT", "C10"],
        [9, "Ja", "1B ALO", "C10"],
        [10, "JaZ", "1B AT", "C10"]
      ],
      Sr: [],
      Czw: [
        [1, "JaZ", "3B AT", "C10"],
        [2, "Ja", "1B ALO", "C10"],
        [3, "JaZ", "4BC AT", "C10"],
        [4, "Ja", "1A ALO", "C10"]
      ],
      Pi: [
        [1, "JaZ", "1A AT", "C10"],
        [2, "Ja", "1B ALO", "C10"],
        [3, "Ja", "1B ALO", "C10"],
        [5, "Ja", "1B AT", "C06"],
        [6, "Ja", "1A AT", "C06"],
        [7, "JaZ", "2BC AT", "C10"],
        [8, "Zzw", "1A AT", "C10"]
      ]
    }
  },
  {
    code: "KKrzemiński",
    name: "K. Krzemiński",
    role: "Przedmioty mechaniczne (Ptikm)",
    days: {
      Pn: [],
      Wt: [
        [7, "Mech Ptikm", "3B AT", "C03"],
        [8, "Mech Ptikm", "3B AT", "C03"]
      ],
      Sr: [],
      Czw: [
        [7, "Mech Ptikm", "2BC AT", "C03"],
        [8, "Mech Ptikm", "2BC AT", "C03"]
      ],
      Pi: []
    }
  },
  {
    code: "KLisek",
    name: "K. Lisek",
    role: "Zajęcia z pomocy psychologiczno-pedagogicznej / Zzpd",
    days: {
      Pn: [],
      Wt: [
        [4, "Zzpd", "2A ALO", "—"]
      ],
      Sr: [],
      Czw: [
        [1, "Zzpd", "1A ALO", "—"]
      ],
      Pi: []
    }
  },
  {
    code: "ALutrzykowski",
    name: "Adrian Lutrzykowski",
    role: "Religia, Historia • Wychowawca 2B ALO",
    days: {
      Pn: [
        [5, "Rel", "4A AT", "AW"],
        [5, "Rel", "4BC AT", "AW"],
        [5, "Rel", "4D AT", "AW"],
        [6, "Rel", "1A ALO", "AW"],
        [6, "Rel", "1B ALO", "AW"],
        [10, "His", "2B ALO", "NA"]
      ],
      Wt: [
        [4, "Rel", "3A ALO", "AW"],
        [5, "Rel", "1A AT", "AW"],
        [5, "Rel", "1B AT", "AW"],
        [6, "Zzw", "2B ALO", "—"],
        [7, "Rel", "4B ALO", "AW"],
        [7, "Rel", "4C ALO", "AW"],
        [9, "Rel", "2A ALO", "AW"],
        [9, "Rel", "2B ALO", "AW"]
      ],
      Sr: [
        [4, "Rel", "2A AT", "AW"],
        [4, "Rel", "2BC AT", "AW"],
        [10, "His", "2B ALO", "NA"]
      ],
      Czw: [
        [5, "Rel", "5A AT", "NA"],
        [5, "Rel", "5B AT", "NA"],
        [7, "Rel", "3A AT", "AW"],
        [7, "Rel", "3B AT", "AW"],
        [8, "His", "2B ALO", "NA"]
      ],
      Pi: []
    }
  },
  {
    code: "AMakowski",
    name: "A. Makowski",
    role: "Przedmioty mechaniczne (Uism, Pih, Ppih)",
    days: {
      Pn: [],
      Wt: [
        [2, "Mech Uism", "3B AT", "C08"],
        [3, "Mech Uism", "2BC AT", "C08"],
        [4, "Mech Uism", "3B AT", "C08"]
      ],
      Sr: [
        [7, "Mech Ppih", "3B AT", "C08"],
        [8, "Mech Ppih", "3B AT", "C08"],
        [9, "Mech Uism", "2BC AT", "C08"],
        [10, "Mech Pih", "2BC AT", "C08"]
      ],
      Czw: [
        [1, "Mech Uism", "2BC AT", "C08"],
        [2, "Mech Pih", "2BC AT", "C08"],
        [3, "Mech Pih", "2BC AT", "C08"],
        [4, "Mech Ppih", "3B AT", "C08"]
      ],
      Pi: []
    }
  },
  {
    code: "ŻMucharska",
    name: "Ż. Mucharska",
    role: "Język angielski",
    days: {
      Pn: [
        [7, "Ja", "4A AT", "C06"],
        [8, "Ja", "4A AT", "C06"]
      ],
      Wt: [],
      Sr: [
        [1, "Ja", "2B ALO", "C06"],
        [2, "Ja", "2B ALO", "C10"],
        [3, "Ja", "2B ALO", "C10"]
      ],
      Czw: [
        [6, "Ja", "2B ALO", "500"],
        [7, "Ja", "2B ALO", "C06"],
        [8, "Ja", "4A AT", "500"]
      ],
      Pi: []
    }
  },
  {
    code: "MMuzyk",
    name: "M. Muzyk",
    role: "Bazy danych (Sbd, Pbd)",
    days: {
      Pn: [],
      Wt: [],
      Sr: [],
      Czw: [
        [4, "Sbd", "4A AT", "608"],
        [6, "Sbd", "5A AT", "608"],
        [6, "Sbd", "5B AT", "608"],
        [7, "Sbd", "4D AT", "509"],
        [8, "Sbd", "3A AT", "509"],
        [9, "Sbd", "5C AT", "509"]
      ],
      Pi: [
        [2, "Sbd", "5C AT", "606"],
        [3, "Sbd", "5A AT", "606"],
        [3, "Sbd", "5B AT", "606"],
        [4, "Sbd", "4BC AT", "606"],
        [5, "Sbd", "3A AT", "606"],
        [6, "Sbd", "4BC AT", "509"],
        [7, "Sbd", "4A AT", "509"],
        [8, "Pbd", "3A AT", "606"],
        [9, "Pbd", "3A AT", "606"],
        [10, "Sbd", "4D AT", "606"]
      ]
    }
  },
  {
    code: "BNarewska",
    name: "B. Narewska",
    role: "Chemia (Pracownia Lab5)",
    days: {
      Pn: [],
      Wt: [],
      Sr: [
        [5, "Chem", "1A ALO", "Lab5"],
        [6, "Chem", "1A AT", "Lab5"],
        [7, "Chem", "1B ALO", "Lab5"]
      ],
      Czw: [
        [5, "Chem", "2B ALO", "Lab5"],
        [6, "Chem", "2A ALO", "Lab5"],
        [7, "Chem", "1B AT", "Lab5"]
      ],
      Pi: [
        [4, "Chem", "2BC AT", "Lab5"],
        [5, "Chem", "2B ALO", "Lab5"],
        [6, "Chem", "2A ALO", "Lab5"],
        [7, "Chem", "2A AT", "Lab5"]
      ]
    }
  },
  {
    code: "JNarewski",
    name: "J. Narewski",
    role: "Wychowanie fizyczne (Wf)",
    days: {
      Pn: [
        [9, "Wf", "4B ALO", "H2"],
        [10, "Wf", "4B ALO", "H2"]
      ],
      Wt: [
        [1, "Wf", "4C ALO", "H2"],
        [2, "Wf", "3A ALO", "H2"],
        [3, "Wf", "4A ALO", "H2"]
      ],
      Sr: [],
      Czw: [
        [5, "Wf", "3A ALO", "H1"],
        [6, "Wf", "4C ALO", "H1"],
        [7, "Wf", "4A ALO", "H1"],
        [8, "Wf", "4A ALO", "H1"]
      ],
      Pi: [
        [6, "Wf", "4C ALO", "H1"],
        [7, "Wf", "4B ALO", "H1"],
        [8, "Wf", "3A ALO", "H1"]
      ]
    }
  },
  {
    code: "PNiecikowska",
    name: "P. Niecikowska",
    role: "Język angielski",
    days: {
      Pn: [],
      Wt: [
        [7, "Ja (1. Grupa)", "2BC AT", "C06"],
        [8, "Ja (1. Grupa)", "4BC AT", "C06"],
        [9, "Ja (1. Grupa)", "2BC AT", "507"],
        [10, "Ja (1. Grupa)", "4BC AT", "C06"]
      ],
      Sr: [
        [3, "Ja", "3B AT", "C06"],
        [4, "Ja", "3B AT", "507"],
        [5, "Ja (1. Grupa)", "4BC AT", "C06"],
        [7, "Ja (Mundorowi)", "2A AT", "104"],
        [8, "Ja (Mundorowi)", "2A AT", "502"]
      ],
      Czw: [],
      Pi: []
    }
  },
  {
    code: "MPawłowska",
    name: "M. Pawłowska",
    role: "Język angielski",
    days: {
      Pn: [],
      Wt: [
        [6, "Ja", "3A ALO", "507"],
        [7, "Ja", "3A ALO", "507"],
        [8, "Ja", "3A ALO", "507"],
        [9, "Ja", "3A ALO", "C06"],
        [10, "Ja", "3A ALO", "507"]
      ],
      Sr: [],
      Czw: [
        [7, "Ja", "3A ALO", "504"]
      ],
      Pi: []
    }
  },
  {
    code: "EPiotrowska",
    name: "E. Piotrowska",
    role: "Przedmioty mechaniczne (PEiE, EiE, TiKM)",
    days: {
      Pn: [],
      Wt: [
        [5, "Mech PEiE", "3B AT", "C09"],
        [6, "Mech PEiE", "3B AT", "C09"],
        [8, "Mech PEiE", "2BC AT", "C09"]
      ],
      Sr: [
        [1, "Mech EiE", "2BC AT", "C09"],
        [2, "Mech EiE", "2BC AT", "C09"],
        [3, "Mech PEiE", "2BC AT", "C09"]
      ],
      Czw: [
        [1, "Mech PEiE", "1A AT", "C09"],
        [2, "Mech PEiE", "1A AT", "C09"]
      ],
      Pi: [
        [8, "Mech EiE", "2BC AT", "C09"],
        [9, "Mech TiKM", "2BC AT", "C09"],
        [10, "Mech TiKM", "2BC AT", "C09"]
      ]
    }
  },
  {
    code: "APiotrowski",
    name: "Andrzej Piotrowski",
    role: "Przedmioty programistyczne (PPAI, PPIO, Pad, Pam) • Wychowawca 4D AT",
    days: {
      Pn: [
        [1, "Prog PPAD", "3B AT", "—"],
        [3, "Prog PPAI", "2A AT", "606"],
        [9, "Prog Pio", "2A AT", "—"],
        [10, "Prog PPAI", "3B AT", "606"]
      ],
      Wt: [
        [2, "Prog Pam", "3B AT", "—"],
        [3, "Zzw", "4D AT", "606"],
        [4, "Prog PPAI", "3B AT", "606"],
        [5, "Prog Pad", "3B AT", "606"],
        [9, "Prog PPIO", "2A AT", "606"]
      ],
      Sr: [
        [9, "Prog PPAI", "1A AT", "606"],
        [10, "Prog PPIO", "1A AT", "606"]
      ],
      Czw: [
        [4, "Prog PPAI", "3B AT", "606"],
        [6, "Prog PPIO", "1A AT", "606"],
        [7, "Prog Pad", "2A AT", "606"],
        [8, "Prog Pza1", "3B AT", "—"],
        [9, "Prog PPAI", "2A AT", "606"],
        [10, "Prog PPAI", "2A AT", "606"]
      ],
      Pi: [
        [1, "Prog PPAW", "3B AT", "—"],
        [3, "Prog Pio", "2A AT", "—"],
        [4, "Prog PPAI", "2A AT", "509"],
        [5, "Prog PPAI", "1A AT", "509"],
        [9, "Prog PPAM", "3B AT", "—"]
      ]
    }
  },
  {
    code: "ŁPolkowski",
    name: "Łukasz Polkowski",
    role: "Przedmioty IT (Pbd, Aso, Eutk, Utk, Wiai, Pai) • Wychowawca 5C AT",
    days: {
      Pn: [
        [1, "Pbd", "5C AT", "600"],
        [2, "Pbd", "5A AT", "600"],
        [3, "Pbd", "5A AT", "600"],
        [4, "Pbd", "4A AT", "600"],
        [5, "Pai", "5C AT", "600"],
        [6, "Inf Utk", "2A AT", "600"],
        [7, "Inf Eutk", "1A AT", "600"],
        [8, "Inf Utk", "1A AT", "600"],
        [9, "Inf Aso", "2BC AT", "600"],
        [10, "Inf Utk", "1A AT", "600"]
      ],
      Wt: [
        [1, "Pbd", "5A AT", "600"],
        [2, "Pbd", "5B AT", "600"],
        [3, "Inf Aso", "2BC AT", "600"],
        [4, "Wiai", "5C AT", "600"],
        [5, "Wiai", "5C AT", "600"],
        [6, "Wiai", "5C AT", "600"],
        [7, "Wiai", "5C AT", "600"],
        [8, "Inf Eutk", "2BC AT", "600"],
        [9, "Pai", "5C AT", "600"],
        [10, "Pai", "5C AT", "600"]
      ],
      Sr: [
        [1, "Inf Aso", "2A AT", "600"],
        [2, "Inf Eutk", "2A AT", "600"],
        [4, "Pbd", "4D AT", "600"],
        [5, "Inf Aso", "2A AT", "600"],
        [6, "Pbd", "5B AT", "600"],
        [7, "Inf Aso", "2BC AT", "600"],
        [8, "Pbd", "4BC AT", "600"],
        [9, "Pbd", "5B AT", "600"],
        [10, "Pbd", "5B AT", "600"]
      ],
      Czw: [
        [1, "Pbd", "5C AT", "600"],
        [2, "Pbd", "5C AT", "600"],
        [3, "Pbd", "5C AT", "600"],
        [4, "Pai", "5C AT", "600"],
        [5, "Pbd", "4BC AT", "600"],
        [6, "Inf Aso", "1A AT", "600"],
        [7, "Inf Utk", "1A AT", "600"],
        [8, "Pbd", "4D AT", "600"]
      ],
      Pi: [
        [1, "Pbd", "4A AT", "600"],
        [2, "Pbd", "5A AT", "600"],
        [3, "Inf Aso", "2A AT", "600"],
        [4, "Zzw", "5C AT", "600"],
        [5, "Inf Aso", "1A AT", "600"]
      ]
    }
  },
  {
    code: "EPowichrowska",
    name: "Ewa Powichrowska",
    role: "Matematyka, Fizyka • Wychowawca 1B ALO",
    days: {
      Pn: [],
      Wt: [
        [5, "Mat", "4A ALO", "200"],
        [6, "Mat", "1B AT", "200"],
        [7, "Mat", "1B AT", "200"],
        [8, "Mat", "1B ALO", "200"],
        [9, "Mat", "1A AT", "200"],
        [10, "Fiz", "1B ALO", "502"]
      ],
      Sr: [],
      Czw: [
        [5, "Mat", "4A ALO", "200"],
        [6, "Mat", "4A ALO", "200"],
        [7, "Mat", "1B ALO", "200"],
        [8, "Zzw", "1B ALO", "200"],
        [9, "Mat", "1A AT", "200"],
        [10, "Mat", "3A ALO", "200"]
      ],
      Pi: [
        [5, "Mat", "1B ALO", "200"],
        [6, "Mat", "3A ALO", "200"],
        [7, "Mat", "1A AT", "200"],
        [8, "Mat", "1B AT", "100"],
        [9, "Mat", "4A ALO", "200"],
        [10, "Mat", "3A ALO", "200"]
      ]
    }
  },
  {
    code: "MRadlińska",
    name: "M. Radlińska",
    role: "Matematyka",
    days: {
      Pn: [
        [5, "Mat", "2B ALO", "100"],
        [6, "Mat", "3B AT", "100"],
        [7, "Mat", "2B ALO", "100"],
        [8, "Mat", "3B AT", "100"]
      ],
      Wt: [
        [5, "Mat", "4BC AT", "100"],
        [6, "Mat", "3A AT", "100"],
        [7, "Mat", "4BC AT", "100"]
      ],
      Sr: [
        [1, "Mat", "4A AT", "100"],
        [2, "Mat", "4A AT", "100"],
        [3, "Mat", "4A AT", "100"],
        [4, "Mat", "3A AT", "100"],
        [6, "Mat", "2B ALO", "100"],
        [7, "Mat", "4BC AT", "100"],
        [8, "Mat", "2B ALO", "100"]
      ],
      Czw: [
        [5, "Mat", "3B AT", "100"],
        [6, "Mat", "3A AT", "100"],
        [7, "Mat", "4A AT", "100"]
      ],
      Pi: [
        [5, "Mat", "4BC AT", "100"],
        [6, "Mat", "3B AT", "100"],
        [7, "Mat", "3A AT", "100"]
      ]
    }
  },
  {
    code: "MRosińska",
    name: "M. Rosińska",
    role: "Język polski",
    days: {
      Pn: [
        [3, "Jp", "1B ALO", "108"],
        [4, "Jp", "1B ALO", "108"]
      ],
      Wt: [
        [5, "Jp", "1B ALO", "108"]
      ],
      Sr: [],
      Czw: [
        [3, "Jp", "1B ALO", "108"],
        [4, "Jp", "1B ALO", "108"]
      ],
      Pi: [
        [4, "Jp", "1B ALO", "108"]
      ]
    }
  },
  {
    code: "MiSakowski",
    name: "Mi. Sakowski",
    role: "Bezpieczeństwo wewnętrzne (Bw)",
    days: {
      Pn: [
        [3, "Bw", "2A ALO", "AW"],
        [4, "Bw", "3A ALO", "NA"],
        [5, "Bw", "1A AT", "NA"]
      ],
      Wt: [
        [3, "Bw", "4BC AT", "AW"],
        [4, "Bw", "2A AT", "H2"],
        [5, "Bw", "3A AT", "NA"],
        [6, "Bw", "4A AT", "AW"]
      ],
      Sr: [
        [3, "Bw", "1B AT", "AW"],
        [4, "Bw", "1B ALO", "NA"],
        [5, "Bw", "2BC AT", "AW"]
      ],
      Czw: [
        [9, "Bw (Mundorowi)", "3B AT", "C07"]
      ],
      Pi: []
    }
  },
  {
    code: "ESaldat",
    name: "E. Saldat",
    role: "Geografia",
    days: {
      Pn: [],
      Wt: [
        [7, "Geo", "2B ALO", "207"],
        [8, "Geo", "2B ALO", "207"]
      ],
      Sr: [
        [1, "Log Geo", "3B AT", "207"],
        [2, "Log Geo", "3B AT", "207"],
        [3, "Geo", "1B ALO", "207"]
      ],
      Czw: [],
      Pi: []
    }
  },
  {
    code: "MSalomońska",
    name: "M. Salomońska",
    role: "Przedmioty logistyczne (PZ, PiWZ, Drpt)",
    days: {
      Pn: [
        [6, "PZ", "1B AT", "200"],
        [7, "PZ", "1B AT", "200"],
        [9, "Log PZ", "2BC AT", "200"],
        [10, "Log PZ", "2BC AT", "200"]
      ],
      Wt: [],
      Sr: [
        [7, "Log PZ", "2BC AT", "200"],
        [8, "Log PiWZ", "3B AT", "200"],
        [9, "Log PiWZ", "3B AT", "200"],
        [10, "Log Drpt", "3B AT", "—"]
      ],
      Czw: [],
      Pi: []
    }
  },
  {
    code: "LSamluk",
    name: "L. Samluk",
    role: "Informatyka rozszerzona (inf roz)",
    days: {
      Pn: [],
      Wt: [],
      Sr: [],
      Czw: [
        [2, "inf roz", "3B AT", "308"],
        [3, "inf roz", "3A AT", "308"],
        [4, "inf roz", "2A AT", "308"]
      ],
      Pi: [
        [9, "Inf/Prog inf roz", "1A AT", "509"],
        [10, "Inf inf roz", "2BC AT", "509"]
      ]
    }
  },
  {
    code: "ASkołozdrzy",
    name: "A. Skołozdrzy",
    role: "Bezpieczeństwo wewnętrzne (Bw)",
    days: {
      Pn: [
        [4, "Bw", "2A ALO", "AW"]
      ],
      Wt: [],
      Sr: [],
      Czw: [
        [3, "Bw", "2B ALO", "AW"],
        [4, "Bw", "1B AT", "AW"],
        [6, "Bw", "1A ALO", "AW"]
      ],
      Pi: []
    }
  },
  {
    code: "ESobotka",
    name: "Ewelina Sobotka",
    role: "Język angielski • Wychowawca 4B ALO",
    days: {
      Pn: [
        [2, "Ja", "4A ALO", "502"],
        [4, "Ja", "4A ALO", "502"],
        [5, "Ja", "4A ALO", "502"],
        [6, "Ja", "4A ALO", "502"],
        [7, "Ja", "5B AT", "502"]
      ],
      Wt: [
        [1, "Ja", "3A AT", "502"],
        [2, "Ja", "4C ALO", "502"],
        [3, "Ja", "4C ALO", "502"],
        [4, "Ja", "4C ALO", "502"],
        [5, "Ja", "4B ALO", "502"],
        [6, "Zzw", "4B ALO", "502"],
        [7, "Ja (2. Grupa)", "2BC AT", "104"],
        [8, "Ja (2. Grupa)", "4BC AT", "104"],
        [9, "Ja (2. Grupa)", "2BC AT", "502"],
        [10, "Ja (2. Grupa)", "4BC AT", "104"]
      ],
      Sr: [
        [1, "Ja", "4C ALO", "502"],
        [2, "Ja", "4C ALO", "502"],
        [3, "Ja", "5B AT", "502"],
        [4, "Ja", "4B ALO", "C06"],
        [5, "Ja (2. Grupa)", "4BC AT", "502"],
        [6, "Ja", "4C ALO", "502"],
        [7, "Ja", "3A AT", "502"]
      ],
      Czw: [
        [2, "Ja", "4B ALO", "502"],
        [3, "Ja", "4A ALO", "502"],
        [4, "Ja", "4A ALO", "502"],
        [5, "Ja", "4B ALO", "502"],
        [7, "Ja", "4B ALO", "502"]
      ],
      Pi: [
        [1, "Ja", "5B AT", "502"],
        [2, "Ja (2. Grupa)", "2A ALO", "502"],
        [3, "Ja (2. Grupa)", "2A ALO", "502"],
        [5, "Ja", "4B ALO", "502"]
      ]
    }
  },
  {
    code: "ASzulcW",
    name: "Anna Szulc-Wójcicka",
    role: "Język hiszpański (Jh) • Wychowawca 2A AT",
    days: {
      Pn: [
        [1, "Jh", "1A ALO", "306"],
        [2, "Jh", "3B AT", "306"],
        [3, "Jh", "4C ALO", "306"],
        [4, "Jh", "1A AT", "306"],
        [5, "Jh", "1B ALO", "306"],
        [6, "Jh", "3A AT", "306"],
        [7, "Jh (2. Grupa)", "4BC AT", "306"],
        [8, "Jh", "2A AT", "306"],
        [9, "Jh", "5B AT", "306"],
        [10, "Jh (2. Grupa)", "5A AT", "306"]
      ],
      Wt: [
        [1, "Jh (2. Grupa)", "5C AT", "306"],
        [2, "Jh (2. Grupa)", "4D AT", "306"],
        [3, "Zzw", "2A AT", "306"],
        [4, "Jh", "4A ALO", "306"],
        [5, "Jh", "3A ALO", "306"],
        [6, "Jh", "1A AT", "306"],
        [7, "Jh", "5B AT", "306"],
        [8, "Jh", "2A ALO", "306"]
      ],
      Sr: [
        [3, "Jh", "3A ALO", "306"],
        [4, "Jh", "4A ALO", "306"],
        [5, "Jh", "1B ALO", "306"],
        [6, "Jh (2. Grupa)", "5A AT", "306"],
        [7, "Jh", "2B ALO", "306"]
      ],
      Czw: [
        [1, "Jh", "4B ALO", "306"],
        [2, "Jh", "2A ALO", "306"],
        [3, "Jh", "1A ALO", "306"],
        [4, "Jh", "4B ALO", "306"],
        [5, "Jh", "4C ALO", "306"],
        [6, "Jh", "1B AT", "306"],
        [7, "Jh (2. Grupa)", "5C AT", "306"]
      ],
      Pi: [
        [1, "Jh (2. Grupa)", "2BC AT", "306"],
        [2, "Jh (2. Grupa)", "2BC AT", "306"],
        [3, "Jh", "1B AT", "306"],
        [4, "Jh (2. Grupa)", "4A AT", "306"],
        [5, "Jh", "2A AT", "306"],
        [6, "Jh", "2B ALO", "306"]
      ]
    }
  },
  {
    code: "ATchórzewska",
    name: "Agnieszka Tchórzewska",
    role: "Geografia • Wychowawca 5B AT",
    days: {
      Pn: [
        [4, "Geo", "4C ALO", "207"],
        [5, "Geo", "2A ALO", "207"],
        [6, "Geo", "4D AT", "207"],
        [7, "Geo", "4B ALO", "207"],
        [8, "Geo", "1A ALO", "207"],
        [9, "Geo", "3A AT", "207"],
        [10, "Geo", "2A AT", "207"]
      ],
      Wt: [
        [1, "Geo", "2A ALO", "207"],
        [2, "Geo", "2BC AT", "207"],
        [3, "Geo", "1A ALO", "207"]
      ],
      Sr: [
        [5, "Geo", "4B ALO", "207"],
        [6, "Geo", "1A ALO", "207"],
        [7, "Geo", "1A AT", "207"],
        [8, "Zzw", "5B AT", "207"],
        [9, "Geo", "4C ALO", "207"],
        [10, "Geo", "4A AT", "207"]
      ],
      Czw: [
        [1, "Geo", "2A ALO", "207"],
        [3, "Geo", "3B AT", "207"],
        [4, "Geo", "4BC AT", "207"]
      ],
      Pi: []
    }
  },
  {
    code: "ATrepanowska",
    name: "Angelika Trepanowska",
    role: "Matematyka, Chemia, Fizyka • Wychowawca 1A ALO",
    days: {
      Pn: [
        [4, "Mat", "2A AT", "102"],
        [5, "Zzw", "1A ALO", "102"],
        [6, "Mat", "2BC AT", "102"],
        [9, "Mat", "4D AT", "100"],
        [10, "Mat", "4D AT", "102"]
      ],
      Wt: [
        [1, "Fiz", "1A ALO", "102"],
        [2, "Chem", "3A AT", "Lab6"],
        [4, "Mat", "4D AT", "102"],
        [5, "Mat", "2BC AT", "102"],
        [6, "Mat", "1A ALO", "B03"]
      ],
      Sr: [
        [2, "Mat", "4B ALO", "102"],
        [3, "Mat", "4B ALO", "102"],
        [4, "Mat", "4C ALO", "102"],
        [5, "Chem", "4A AT", "Lab6"],
        [6, "Mat", "2A AT", "102"],
        [7, "Mat", "4C ALO", "102"],
        [8, "Mat", "4D AT", "102"]
      ],
      Czw: [
        [3, "Mat", "4C ALO", "102"],
        [4, "Chem", "3A ALO", "Lab6"],
        [5, "Mat", "1A ALO", "102"],
        [6, "Mat", "4B ALO", "102"]
      ],
      Pi: [
        [1, "Mat", "2A AT", "102"],
        [2, "Chem", "4BC AT", "Lab6"],
        [3, "Mat", "4B ALO", "102"],
        [4, "Mat", "1A ALO", "102"],
        [5, "Mat", "4C ALO", "102"],
        [6, "Mat", "2BC AT", "102"],
        [7, "Chem", "3B AT", "Lab6"],
        [8, "Chem", "4D AT", "Lab6"]
      ]
    }
  },
  {
    code: "BWiśniewska",
    name: "B. Wiśniewska",
    role: "Biologia, Edukacja zdrowotna (EZ)",
    days: {
      Pn: [
        [2, "EZ", "1A ALO", "—"],
        [3, "EZ", "2B ALO", "—"],
        [4, "Bio", "2B ALO", "B04"],
        [5, "EZ", "1B AT", "—"],
        [7, "Bio", "1B ALO", "B04"]
      ],
      Wt: [
        [3, "Bio", "2B ALO", "B04"],
        [4, "EZ", "2BC AT", "—"],
        [5, "Bio", "2A AT", "B04"]
      ],
      Sr: [
        [4, "Bio", "4A AT", "B04"]
      ],
      Czw: [
        [2, "Bio", "3A ALO", "B04"],
        [3, "Bio", "1B AT", "B04"],
        [4, "EZ", "2A ALO", "—"],
        [5, "Bio", "2BC AT", "B04"],
        [6, "EZ", "1B ALO", "—"],
        [7, "Bio", "2A ALO", "B04"]
      ],
      Pi: [
        [2, "EZ", "2A AT", "—"],
        [3, "Bio", "1A AT", "B04"],
        [4, "EZ", "1A AT", "—"],
        [5, "Bio", "2A ALO", "B04"],
        [6, "Bio", "1A ALO", "B04"]
      ]
    }
  },
  {
    code: "AZambrzycka",
    name: "A. Zambrzycka",
    role: "Filozofia (Fil)",
    days: {
      Pn: [],
      Wt: [
        [7, "Fil", "1B ALO", "B04"],
        [8, "Fil", "1A AT", "B03"]
      ],
      Sr: [
        [7, "Fil", "1B AT", "B04"],
        [8, "Fil", "1A ALO", "B04"]
      ],
      Czw: [],
      Pi: []
    }
  },
  {
    code: "DZawojski",
    name: "D. Zawojski",
    role: "Bezpieczeństwo wewnętrzne (Bw)",
    days: {
      Pn: [],
      Wt: [],
      Sr: [],
      Czw: [
        [4, "Bw", "2B ALO", "H1"],
        [5, "Bw", "2A AT", "AW"],
        [6, "Bw", "2BC AT", "H2"],
        [8, "Bw", "3A ALO", "AW"],
        [9, "Bw", "3A AT", "AW"],
        [10, "Bw (Mundorowi)", "3B AT", "AW"]
      ],
      Pi: []
    }
  },
  {
    code: "AZwierciadłowski",
    name: "A. Zwierciadłowski",
    role: "Wychowanie fizyczne (Wf)",
    days: {
      Pn: [
        [9, "Wf", "2B ALO", "H1"]
      ],
      Wt: [],
      Sr: [],
      Czw: [
        [9, "Wf", "2B ALO", "H1"]
      ],
      Pi: []
    }
  },
  {
    code: "EŻebrowski",
    name: "Ernest Żebrowski",
    role: "Przedmioty programistyczne (Pai, Wiai) • Wychowawca 3A ALO i 4A ALO",
    days: {
      Pn: [
        [1, "Pai", "4A AT", "603"],
        [2, "Pai", "4A AT", "603"],
        [3, "Zzw", "3A ALO", "603"],
        [3, "Zzw", "4A ALO", "603"],
        [4, "Pai", "3A AT", "603"],
        [5, "Wiai", "5A AT", "603"],
        [5, "Wiai", "5B AT", "603"],
        [6, "Wiai", "5A AT", "603"],
        [6, "Wiai", "5B AT", "603"],
        [7, "Pai", "3A AT", "603"],
        [8, "Pai", "4BC AT", "603"],
        [9, "Pai", "4BC AT", "603"],
        [10, "Wiai", "3A AT", "603"]
      ],
      Wt: [
        [1, "Pai", "4BC AT", "603"],
        [2, "Pai", "4BC AT", "603"],
        [3, "Pai", "5A AT", "603"],
        [3, "Pai", "5B AT", "603"],
        [4, "Pai", "4BC AT", "603"],
        [5, "Pai", "4D AT", "603"],
        [6, "Wiai", "4D AT", "603"],
        [7, "Pai", "4A AT", "603"],
        [8, "Pai", "4A AT", "603"],
        [9, "Pai", "3A AT", "603"],
        [10, "Pai", "3A AT", "603"]
      ],
      Sr: [
        [1, "Wiai", "5A AT", "603"],
        [1, "Wiai", "5B AT", "603"],
        [2, "Wiai", "5A AT", "603"],
        [2, "Wiai", "5B AT", "603"],
        [3, "Pai", "4D AT", "603"],
        [4, "Pai", "5A AT", "603"],
        [4, "Pai", "5B AT", "603"],
        [5, "Pai", "4D AT", "603"],
        [6, "Wiai", "4BC AT", "603"],
        [7, "Pai", "4D AT", "603"],
        [8, "Pai", "3A AT", "603"]
      ],
      Czw: [
        [1, "Pai", "4D AT", "603"],
        [2, "Pai", "4BC AT", "603"],
        [3, "Wiai", "4D AT", "603"],
        [4, "Pai", "3A AT", "603"],
        [5, "Pai", "4D AT", "603"],
        [6, "Wiai", "4A AT", "603"],
        [7, "Pai", "5A AT", "603"],
        [7, "Pai", "5B AT", "603"],
        [8, "Pai", "5A AT", "603"],
        [8, "Pai", "5B AT", "603"]
      ],
      Pi: [
        [1, "Wiai", "4BC AT", "603"],
        [2, "Pai", "4A AT", "603"],
        [3, "Pai", "4A AT", "603"],
        [4, "Wiai", "3A AT", "603"],
        [5, "Wiai", "4A AT", "603"]
      ]
    }
  },
  {
    code: "WŻelechowski",
    name: "Wojciech Żelechowski",
    role: "Historia, Język niemiecki (Jn), EO • Wychowawca 2BC AT",
    days: {
      Pn: [
        [1, "His", "4A ALO", "305"],
        [2, "His", "2BC AT", "305"],
        [3, "His", "2BC AT", "305"],
        [4, "Zzw", "2BC AT", "305"],
        [6, "His", "4A AT", "305"],
        [7, "Jn (1. Grupa)", "4BC AT", "305"],
        [9, "His", "4A ALO", "305"],
        [10, "Jn (1. Grupa)", "5A AT", "305"]
      ],
      Wt: [
        [1, "Jn (1. Grupa)", "5C AT", "305"],
        [2, "Jn (1. Grupa)", "4D AT", "305"],
        [4, "His", "5B AT", "305"],
        [5, "His", "4C ALO", "305"],
        [8, "His", "5C AT", "305"]
      ],
      Sr: [
        [3, "His", "4C ALO", "305"],
        [5, "His", "5C AT", "305"],
        [6, "Jn (1. Grupa)", "5A AT", "305"],
        [7, "His", "5B AT", "305"],
        [8, "EO", "2BC AT", "104"]
      ],
      Czw: [
        [1, "His", "4BC AT", "305"],
        [2, "His", "4C ALO", "305"],
        [4, "His", "4C ALO", "305"],
        [6, "His", "4D AT", "305"],
        [7, "Jn (1. Grupa)", "5C AT", "305"]
      ],
      Pi: [
        [1, "Jn (1. Grupa)", "2BC AT", "305"],
        [2, "Jn (1. Grupa)", "2BC AT", "305"],
        [4, "Jn (1. Grupa)", "4A AT", "305"],
        [7, "His", "4A ALO", "305"],
        [8, "His", "4A ALO", "305"]
      ]
    }
  }
];

    let tchStep = "LIST";          // "LIST" | "SCHEDULE"
    let tchFocusArea = "MAIN";     // "MAIN" | "PDF_BTN" | "SEARCH_INPUT" | "BACK_BTN"
    let tchFocusIdx = 0;
    let tchSelectedCode = "";
    let tchSearchQuery = "";

    const tchListStepEl = document.getElementById("tch-list-step");
    const tchScheduleStepEl = document.getElementById("tch-schedule-step");
    const tchBreadcrumbEl = document.getElementById("tch-breadcrumb");
    const tchBackStepBtnEl = document.getElementById("tch-back-step-btn");
    const tchSearchInputEl = document.getElementById("tch-search-input");
    const tchScheduleTbodyEl = document.getElementById("tch-schedule-tbody");
    const tchSummaryBannerEl = document.getElementById("tch-summary-banner");
    const tchDailyGridEl = document.getElementById("tch-daily-grid");

    function getTeacherMetaStats(t) {
      let totalLessons = 0;
      const roomsSet = new Set();
      const classesSet = new Set();
      ["Pn", "Wt", "Sr", "Czw", "Pi"].forEach((d) => {
        (t.days[d] || []).forEach((slot) => {
          totalLessons++;
          if (slot[2]) classesSet.add(slot[2]);
          if (slot[3]) roomsSet.add(slot[3]);
        });
      });
      return {
        totalLessons,
        rooms: Array.from(roomsSet),
        classes: Array.from(classesSet)
      };
    }

    function getFilteredTeachers() {
      const q = tchSearchQuery.trim().toLowerCase();
      if (!q) return TEACHERS_PDF_DB;
      return TEACHERS_PDF_DB.filter((t) => {
        const meta = getTeacherMetaStats(t);
        const hay = `${t.code} ${t.name} ${t.role} ${meta.rooms.join(" ")} ${meta.classes.join(" ")}`.toLowerCase();
        return hay.includes(q);
      });
    }

    function syncTeachersFocusVisuals() {
      const startBtnEl = document.getElementById("sub-start-btn");
      if (startBtnEl) startBtnEl.classList.toggle("focused", tchFocusArea === "PDF_BTN");
      if (tchBackStepBtnEl) tchBackStepBtnEl.classList.toggle("pad-focused", tchFocusArea === "BACK_BTN");
      if (tchSearchInputEl) tchSearchInputEl.classList.toggle("pad-focused", tchFocusArea === "SEARCH_INPUT");

      if (tchListStepEl) {
        const cards = Array.from(tchListStepEl.querySelectorAll(".tch-card"));
        cards.forEach((card, idx) => {
          const active = (tchStep === "LIST" && tchFocusArea === "MAIN" && idx === tchFocusIdx);
          card.classList.toggle("pad-focused", active);
          if (active) {
            card.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        });
      }
    }

    function renderTeachersUI() {
      if (!tchListStepEl || !tchScheduleStepEl) return;
      const filtered = getFilteredTeachers();

      if (tchStep === "LIST") {
        tchListStepEl.style.display = "grid";
        tchScheduleStepEl.style.display = "none";
        tchBackStepBtnEl.style.display = "none";
        tchSearchInputEl.style.display = "inline-block";
        tchBreadcrumbEl.innerHTML = `Wybierz nauczyciela z listy (<strong>${filtered.length} z ${TEACHERS_PDF_DB.length} nauczycieli ZSA</strong>) — sprawdź godziny i sale`;

        if (tchFocusIdx >= filtered.length) {
          tchFocusIdx = Math.max(0, filtered.length - 1);
        }

        tchListStepEl.innerHTML = filtered.map((t, idx) => {
          const stats = getTeacherMetaStats(t);
          const mainRooms = stats.rooms.slice(0, 5).join(", ");
          const todayAbs = getTeacherAbsencesOnDate(t.code);
          const absBadgeHtml = todayAbs.length
            ? todayAbs.map((a) => `
                <div class="tch-absent-badge">
                  🚫 ${a.all_day ? "Niedostępny dziś (cały dzień)" : `Niedostępny dziś: ${a.time_from}–${a.time_to}`}
                </div>
              `).join("")
            : "";

          return `
            <div class="tch-card ${todayAbs.length ? "is-absent-today" : ""}" data-tcode="${t.code}" data-tidx="${idx}">
              <div class="tch-card-top">
                <span class="tch-card-code">${t.code}</span>
                <span class="tch-card-hours">${stats.totalLessons} lek./tyg.</span>
              </div>
              <div class="tch-card-name">${t.name}</div>
              <div class="tch-card-subjects">${t.role}</div>
              <div class="tch-card-rooms">🚪 Sale: <strong>${mainRooms || "wg planu"}</strong></div>
              ${absBadgeHtml}
            </div>
          `;
        }).join("");

        Array.from(tchListStepEl.querySelectorAll(".tch-card")).forEach((card, idx) => {
          card.addEventListener("mouseenter", () => {
            tchFocusArea = "MAIN";
            tchFocusIdx = idx;
            syncTeachersFocusVisuals();
          });
          card.addEventListener("click", () => {
            tchFocusArea = "MAIN";
            tchFocusIdx = idx;
            tchSelectedCode = card.getAttribute("data-tcode");
            playCustomWav("select");
            tchStep = "SCHEDULE";
            renderTeachersUI();
          });
        });
      } else if (tchStep === "SCHEDULE") {
        tchListStepEl.style.display = "none";
        tchScheduleStepEl.style.display = "block";
        tchBackStepBtnEl.style.display = "inline-flex";
        tchSearchInputEl.style.display = "none";

        const teacher = TEACHERS_PDF_DB.find((t) => t.code === tchSelectedCode) || filtered[tchFocusIdx] || TEACHERS_PDF_DB[0];
        if (!teacher) return;

        const stats = getTeacherMetaStats(teacher);
        tchBreadcrumbEl.innerHTML = `Nauczyciel: <strong>${teacher.name} (${teacher.code})</strong> • Godziny lekcyjne i sale (▲ ▼ Przewijaj)`;

        tchSummaryBannerEl.innerHTML = `
          <div class="tch-summary-main">
            <div class="tch-summary-name">${teacher.name} <span style="color:#7ec8ff;font-size:0.9rem;">(${teacher.code})</span></div>
            <div class="tch-summary-meta">${teacher.role}</div>
          </div>
          <div class="tch-summary-badges">
            <span class="tch-stat-pill">Godzin w tygodniu: <strong>${stats.totalLessons}</strong></span>
            <span class="tch-stat-pill">Sale lekcyjne: <strong>${stats.rooms.join(", ") || "—"}</strong></span>
            <span class="tch-stat-pill">Uczone klasy: <strong>${stats.classes.join(", ")}</strong></span>
          </div>
        `;

        const teacherTodayAbs = getTeacherAbsencesOnDate(teacher.code);
        if (teacherTodayAbs.length > 0) {
          tchSummaryBannerEl.innerHTML += teacherTodayAbs.map((a) => `
            <div class="tch-absent-badge" style="width:100%;font-size:0.84rem;padding:6px 10px;">
              🚫 DZISIAJ NIEDOSTĘPNY: ${a.all_day ? "CAŁY DZIEŃ" : `od ${a.time_from} do ${a.time_to}`} ${a.note ? ` (${a.note})` : ""}
            </div>
          `).join("");
        }

        const todayWeekdayKey = ["Nd", "Pn", "Wt", "Sr", "Czw", "Pi", "Sb"][new Date().getDay()];

        tchScheduleTbodyEl.innerHTML = LESSON_HOURS.map((hourStr, hIdx) => {
          const lessonNr = hIdx + 1;
          const renderCell = (dayKey) => {
            const entries = (teacher.days[dayKey] || []).filter((e) => e[0] === lessonNr);
            if (entries.length === 0) return `<span class="tt-empty-slot">—</span>`;
            const isBlockedToday =
              dayKey === todayWeekdayKey &&
              teacherTodayAbs.some((a) => doesLessonOverlapAbsence(hourStr, a));

            return entries.map(([nr, subj, cls, room]) => {
              const tip = buildLessonTooltip(subj).replace(/"/g, "&quot;");
              return `
                <div class="tch-slot-item ${isBlockedToday ? "slot-absent" : ""}" ${tip ? `title="${tip}"` : ""}>
                  <div class="tch-slot-top">
                    <span class="tch-slot-subj">${subj}</span>
                    <span class="tch-slot-room">Sala ${room}</span>
                  </div>
                  <div class="tch-slot-class">
                    Klasa: <strong>${cls}</strong>
                    ${isBlockedToday ? `<span style="color:#ff8e99;font-size:0.7rem;font-weight:700;"> • NIEDOSTĘPNY</span>` : ""}
                  </div>
                </div>
              `;
            }).join("");
          };

          return `
            <tr>
              <td class="tt-col-nr">${lessonNr}.</td>
              <td class="tt-col-time">${hourStr}</td>
              <td>${renderCell("Pn")}</td>
              <td>${renderCell("Wt")}</td>
              <td>${renderCell("Sr")}</td>
              <td>${renderCell("Czw")}</td>
              <td>${renderCell("Pi")}</td>
            </tr>
          `;
        }).join("");

        const dayNamesPl = [
          { key: "Pn", label: "Poniedziałek" },
          { key: "Wt", label: "Wtorek" },
          { key: "Sr", label: "Środa" },
          { key: "Czw", label: "Czwartek" },
          { key: "Pi", label: "Piątek" }
        ];

        tchDailyGridEl.innerHTML = dayNamesPl.map((d) => {
          const list = (teacher.days[d.key] || []).slice().sort((a, b) => a[0] - b[0]);
          const rowsHtml = list.length === 0
            ? `<div class="tch-day-row"><span style="color:rgba(255,255,255,0.4);">Brak lekcji w tym dniu</span></div>`
            : list.map(([nr, subj, cls, room]) => `
                <div class="tch-day-row">
                  <span class="tch-day-hour">${nr}. (${LESSON_HOURS[nr - 1]})</span>
                  <span style="color:#ffffff;font-weight:600;">${subj} • <span style="color:#8fd0ff;">${cls}</span></span>
                  <span class="tch-slot-room">Sala ${room}</span>
                </div>
              `).join("");

          return `
            <div class="tch-day-card">
              <div class="tch-day-title">${d.label} (${list.length} lek.)</div>
              ${rowsHtml}
            </div>
          `;
        }).join("");

        tchScheduleStepEl.scrollTop = 0;
      }

      syncTeachersFocusVisuals();
    }

    if (tchSearchInputEl) {
      tchSearchInputEl.addEventListener("input", (e) => {
        tchSearchQuery = e.target.value || "";
        tchStep = "LIST";
        tchFocusIdx = 0;
        renderTeachersUI();
      });
      tchSearchInputEl.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          tchSearchInputEl.blur();
          tchFocusArea = "MAIN";
          playCustomWav("move");
          syncTeachersFocusVisuals();
        } else if (e.key === "Escape") {
          e.preventDefault();
          tchSearchInputEl.blur();
          tchFocusArea = "MAIN";
          syncTeachersFocusVisuals();
        }
        e.stopPropagation();
      });
    }

    if (tchBackStepBtnEl) {
      tchBackStepBtnEl.addEventListener("click", () => {
        if (tchStep === "SCHEDULE") {
          tchStep = "LIST";
          tchFocusArea = "MAIN";
          playCustomWav("back");
          renderTeachersUI();
        }
      });
    }

    /* ============================================================================
       7D. APLIKACJA "DOKUMENTACJA" (CZYTNIK DOCX / PDF + WYSZUKIWARKA SŁÓW)
       ============================================================================ */
    const DOCS_LIBRARY_DB = [
      {
        id: "statut-at",
        category: "STATUTY",
        format: "DOCX",
        file: "STATUT_ATMANS_W_LOMZY_v22025.docx",
        badge: "DOCX • STATUT TECHNIKUM (AT)",
        title: "Statut Akademickiego Technikum MANS w Łomży",
        preview: "Przepisy ogólne, zawody technikum, organy szkoły, prawa i obowiązki ucznia, WZO, wagi ocen i punktacja zachowania.",
        lead: "Tekst jednolity zatwierdzony Uchwałą Rady Pedagogicznej ZSA MANS w Łomży z dnia 28.08.2024 r. (obowiązujący od 01.09.2024 r.). Siedziba: ul. Studencka 19, 18-400 Łomża.",
        sections: [
          {
            code: "Rozdział I–II (§1–§3)",
            title: "Przepisy ogólne, nazwa szkoły i zawody Technikum",
            text: "• Organem prowadzącym Akademickie Technikum MANS w Łomży (ul. Studencka 19) jest Międzynarodowa Akademia Nauk Stosowanych w Łomży.\n• Nadzór pedagogiczny sprawuje Podlaski Kurator Oświaty.\n• Zawody 5-letniego technikum na podbudowie szkoły podstawowej: Technik informatyk (351203), Technik logistyk (333107), Technik mechatronik (311410), Technik programista (351406)."
          },
          {
            code: "Rozdział III–IV (§4–§15)",
            title: "Cele i zadania szkoły oraz Organy Szkoły",
            text: "• Organy szkoły: Dyrektor szkoły, Rada Pedagogiczna, Rada Rodziców, Samorząd Uczniowski.\n• Stanowiska kierownicze (§14): Dyrektor szkoły, Wicedyrektor szkoły, Koordynator kształcenia mundurowego, Koordynator kształcenia praktycznego.\n• Zebrania rodziców organizowane są nie rzadziej niż 2 razy w roku szkolnym. Uchwały Rady Pedagogicznej zapadają większością głosów w obecności co najmniej połowy/2/3 członków."
          },
          {
            code: "Rozdział V–VI (§16–§32b)",
            title: "Organizacja pracy szkoły, e-dziennik Librus i nauka zdalna (MS Teams)",
            text: "• Godzina lekcyjna trwa 45 minut, zajęcia rozpoczynają się o godzinie 8:00. Optymalna liczebność oddziału: 20–35 uczniów.\n• Kształcenie praktyczne realizowane jest przez zajęcia praktyczne i praktyki zawodowe śródroczne.\n• Platformą komunikacji i wymiany danych jest dziennik elektroniczny Librus, Office 365 oraz aplikacja MS Teams (ćwiczenia online do 30 min, zakaz nagrywania lekcji i robienia zrzutów ekranu z wizerunkiem)."
          },
          {
            code: "Rozdział VII–VIII (§33–§39)",
            title: "Zasady rekrutacji, Prawa i Obowiązki Ucznia oraz Nagrody i Kary",
            text: "• Obowiązki ucznia (§37): systematyczny udział w zajęciach, wyłączanie telefonu podczas lekcji i w bibliotece, usprawiedliwianie nieobecności w terminie do 14 dni (przez Librus, pisemnie lub telefonicznie), strój galowy biało-granatowy lub mundur w dni mundurowe, całkowity zakaz palenia tytoniu, e-papierosów, alkoholu i środków odurzających.\n• Kary statutowe (§39): upomnienie wychowawcy (-15 pkt), nagana wychowawcy (-20 pkt), nagana wychowawcy z wpisem do akt (-25 pkt), upomnienie dyrektora (-30 pkt), nagana dyrektora (-35 pkt), nagana Rady Pedagogicznej (-40 pkt), nagana z ostrzeżeniem Rady Pedagogicznej (-45 pkt), przeniesienie lub skreślenie z listy uczniów."
          },
          {
            code: "Rozdział IX (§40–§48)",
            title: "Wewnątrzszkolne Zasady Oceniania (WZO) — Progi procentowe i Wagi ocen",
            text: "• Skala ocen i progi procentowe (§44): 100–99% Celujący (6), 98–89% Bardzo dobry (5), 88–71% Dobry (4), 70–51% Dostateczny (3), 50–29% Dopuszczający (2), 28–0% Niedostateczny (1). Znak '+' podnosi ocenę o 0,50, a '-' obniża o 0,20.\n• Wagi ocen: Sprawdzian dyrektorski (6), Sprawdzian (6), Kartkówka (3), Odpowiedź ustna (3), Test online (2), Aktywność (1), Praca domowa (1).\n• Zasady sprawdzianów (§43): zapowiadane min. 14 dni wcześniej (maks. 3 w tygodniu, 1 dziennie), sprawdzane w ciągu 14 dni (kartkówki 7 dni). Nieprzygotowanie ('np.'): 1 raz przy 1 godz./tyg. lub 2 razy przy 2+ godz./tyg. Do 15 września klasom pierwszym nie stawia się ocen niedostatecznych.\n• Poprawa sprawdzianu przysługuje raz w ciągu 2 tygodni. Warunek podwyższenia oceny rocznej (§46): min. 80% frekwencji i brak godzin nieusprawiedliwionych."
          },
          {
            code: "Rozdział IX–X (§49–§69)",
            title: "Punktowy System Oceniania Zachowania i Postanowienia Końcowe",
            text: "• Wyjściowa liczba punktów zachowania (§59): +35 pkt (ocena dobra).\n• Skala półroczna i roczna: Wzorowe (+100 pkt i więcej), Bardzo dobre (61–99 pkt), Dobre (15–60 pkt), Poprawne (-25 do +14 pkt), Nieodpowiednie (-249 do -26 pkt), Naganne (poniżej -250 pkt lub automatycznie powyżej 40 godz. nieusprawiedliwionych w półroczu).\n• Punkty dodatnie: praca na rzecz klasy (1–5 pkt), życie szkoły (5 pkt), samorząd uczniowski (10 pkt), organizacja imprez (10–15 pkt), konkursy/olimpiady/zawody/sztandar/wolontariat (10 pkt), 100% frekwencji (10 pkt za każdy miesiąc).\n• Punkty ujemne: godzina nieusprawiedliwiona (-5 pkt), spóźnienie (-2 pkt), jazda windą (-5 pkt), brak stroju galowego/munduru (-5 pkt), telefon/jedzenie na lekcji (-5 pkt), palenie papierosów (-10 pkt), poruszanie się pojazdami między lekcjami (-10 pkt), oszustwo/ściąganie (-10 pkt), wandalizm (-20 pkt)."
          }
        ]
      },
      {
        id: "statut-alo",
        category: "STATUTY",
        format: "DOCX",
        file: "STATUT_ALOMANS_W_LOMZY_v22025-1.docx",
        badge: "DOCX • STATUT LICEUM (ALO)",
        title: "Statut Akademickiego Liceum Ogólnokształcącego MANS w Łomży",
        preview: "Organizacja 4-letniego Liceum (ALO), organy szkoły, rekrutacja, prawa i obowiązki ucznia, WZO i ocenianie zachowania.",
        lead: "Tekst jednolity zatwierdzony Uchwałą Rady Pedagogicznej Zespołu Szkół Akademickich MANS w Łomży z dnia 28.08.2024 r. obowiązujący od dnia 01.09.2024 r.",
        sections: [
          {
            code: "Rozdział I–IV (§1–§15)",
            title: "Postanowienia ogólne, Organy Szkoły i Współpraca z Rodzicami",
            text: "• Siedziba szkoły: ul. Studencka 19, 18-400 Łomża. Organ prowadzący: Międzynarodowa Akademia Nauk Stosowanych w Łomży. Nadzór pedagogiczny: Podlaski Kurator Oświaty.\n• Organy szkoły: Dyrektor, Rada Pedagogiczna, Rada Rodziców, Samorząd Uczniowski (w tym Rada Wolontariatu).\n• Stanowiska kierownicze: Dyrektor, Wicedyrektor, Koordynator kształcenia mundurowego, Koordynator kształcenia praktycznego."
          },
          {
            code: "Rozdział V–VIII (§16–§39)",
            title: "Organizacja zajęć, Pomoc Psychologiczno-Pedagogiczna oraz Prawa i Obowiązki Ucznia",
            text: "• Lekcje trwają 45 minut i zaczynają się o 8:00. Odbywają się w oddziałach liczących optymalnie 20–35 uczniów.\n• Pomoc psychologiczno-pedagogiczna (§32a) jest dobrowolna i nieodpłatna (konsultacje z pedagogiem, psychologiem, współpraca z Poradnią Psychologiczno-Pedagogiczną w Łomży).\n• Usprawiedliwianie nieobecności (§38): do 14 dni od ustania nieobecności przez e-dziennik Librus, pisemnie lub telefonicznie.\n• Obowiązuje zakaz używania telefonów na lekcji, zakaz używek oraz obowiązek noszenia stroju galowego na uroczystościach i munduru w dni mundurowe."
          },
          {
            code: "Rozdział IX–X (§40–§69)",
            title: "Wewnątrzszkolne Zasady Oceniania (WZO), Egzaminy i Zachowanie",
            text: "• Obowiązują jednolite progi procentowe ocen (Celujący 99–100%, Bardzo dobry 89–98%, Dobry 71–88%, Dostateczny 51–70%, Dopuszczający 29–50%, Niedostateczny 0–28%) oraz wagi: Sprawdzian (6), Kartkówka/Odpowiedź (3), Test online (2), Aktywność/Praca domowa (1).\n• Egzamin klasyfikacyjny (§47) zdaje uczeń nieklasyfikowany z powodu ponad 50% nieobecności (część pisemna 60 min + ustna).\n• Egzamin poprawkowy (§48) przysługuje przy 1 lub 2 ocenach niedostatecznych rocznych (w ostatnim tygodniu ferii letnich; pisemny 60 min + ustny 15 min przygotowania i 20 min odpowiedzi).\n• Punktacja zachowania (§59): kapitał startowy +35 pkt (dobre), wzorowe od +100 pkt, bardzo dobre 61–99 pkt, poprawne -25 do +14 pkt, nieodpowiednie -249 do -26 pkt, naganne poniżej -250 pkt lub powyżej 40 godz. nieusprawiedliwionych."
          }
        ]
      },
      {
        id: "program-wych-prof",
        category: "STATUTY",
        format: "PDF",
        file: "Program-Wych-Prof-2025-2026.pdf",
        badge: "PDF • ROK SZKOLNY 2025/2026 (15 STRON)",
        title: "Szkolny Program Wychowawczo-Profilaktyczny ZSA MANS",
        preview: "Diagnoza środowiska, higiena cyfrowa, zdrowie psychiczne, sylwetka absolwenta i roczny harmonogram działań (IX–VI).",
        lead: "Uchwalony przez Radę Pedagogiczną w porozumieniu z Radą Rodziców ZSA w Łomży dnia 10 września 2025 r. na rok szkolny 2025/2026.",
        sections: [
          {
            code: "Rozdział 1–5 (str. 3–7)",
            title: "Podstawa prawna, Diagnoza środowiska, Misja Szkoły i Sylwetka Absolwenta",
            text: "• Główne obszary wynikające z diagnozy szkolnej:\n1) Wspieranie zdrowia psychicznego uczniów — odporność psychiczna, radzenie sobie ze stresem.\n2) Kształtowanie higieny cyfrowej — bezpieczne korzystanie z sieci, przeciwdziałanie fonoholizmowi i cyberprzemocy, analiza fake newsów.\n3) Rozwijanie kompetencji społecznych i obywatelskich — komunikacja, mediacje, wolontariat.\n4) Promocja zdrowego stylu życia — odżywianie, aktywność ruchowa, profilaktyka uzależnień (alkohol, tytoń, dopalacze).\n5) Kształtowanie postaw ekologicznych.\n• Sylwetka absolwenta ZSA MANS: świadomy tożsamości narodowej, odpowiedzialny, empatyczny, dbający o zdrowie, racjonalnie korzystający z technologii IT."
          },
          {
            code: "Rozdział 6–8 (str. 7–11)",
            title: "Obszary profilaktyczne i Zadania Organów Szkoły",
            text: "• Edukacja prozdrowotna: warsztaty nt. stresu, relaksacji, obchody Dnia Zdrowia Psychicznego.\n• Higiena cyfrowa: warsztaty z ekspertami IT, Dzień Bezpiecznego Internetu, walka z hejtem i manipulacją.\n• Kompetencje społeczne: Trening Umiejętności Społecznych (TUS), zajęcia integracyjne klas I, mediacje rówieśnicze.\n• Bezpieczeństwo fizyczne: próbne ewakuacje, szkolenia BHP, warsztaty pierwszej pomocy i bezpieczeństwa ruchu drogowego (m.in. z udziałem WORD Łomża)."
          },
          {
            code: "Rozdział 9–10 (str. 12–15)",
            title: "Roczny plan działań (Wrzesień – Czerwiec) i Ewaluacja",
            text: "• Wrzesień: diagnoza potrzeb (ankiety), zajęcia adaptacyjne klas I, Akcja Sprzątania Świata.\n• Październik–Listopad: rozpoznawanie kryzysów psychicznych, wolontariat, Święto Niepodległości, warsztaty antyprzemocowe.\n• Grudzień–Styczeń: tydzień zdrowego trybu życia, radzenie sobie ze stresem maturalnym, kiermasz charytatywny, Góra Grosza, ewaluacja półroczna.\n• Luty–Marzec: Dzień Bezpiecznego Internetu, tydzień profilaktyki uzależnień (papierosy, alkohol, fonoholizm), Dzień Osób z Autyzmem.\n• Kwiecień–Czerwiec: Światowy Dzień Zdrowia, Dzień Ziemi (22 IV), tydzień obywatelski, Dni Samorządności, Bezpieczne Wakacje i ankiety ewaluacyjne."
          }
        ]
      },
      {
        id: "regulamin-mundurowy",
        category: "REGULAMINY",
        format: "PDF",
        file: "REGULMIN-KLAS-MUNDUROWYCH-IX.2024-akt.pdf",
        badge: "PDF • REGULAMIN MUNDUROWY (11 STRON)",
        title: "Regulamin Klas o Profilu Mundurowym ZSA MANS",
        preview: "Mundur polowy wz. 2010, beret, naszywki ZSA, zasady wyglądu, oddawanie honorów, hierarchia i kary dyscyplinarne.",
        lead: "Opracował Zespół Mundurowy ZSA MANS w Łomży wraz z Samorządem Uczniowskim (wprowadzony 01.09.2024 r. przez Dyrektor mgr Barbarę Aleksandrę Turek).",
        sections: [
          {
            code: "Postanowienia ogólne & Pkt 1–3 (str. 1–4)",
            title: "Status klasy mundurowej, stopień „Kadet” i skład umundurowania wzór 2010",
            text: "• Dla celów szkoleniowych nauczyciele i instruktorzy mogą używać słowa „Kadet” przed nazwiskiem ucznia oraz nazw „drużyna” lub „pluton” podczas musztry, obozów obronnych i uroczystości.\n• Mundur noszony przez uczniów ZSA MANS to mundur polowy wojskowy wzór 2010 z barwami narodowymi.\n• Skład umundurowania: zielony beret z godłem Orła Białego RP, bluza polowa, spodnie polowe, sznurowane trzewiki wojskowe (brązowe lub czarne), koszulka T-shirt czarna lub zielona (khaki) wkładana do spodni."
          },
          {
            code: "Pkt 4a–4e (str. 5–6)",
            title: "Zasady noszenia munduru, naszywki na rzep i okres letni / zimowy",
            text: "• W drodze do i ze szkoły obowiązuje pełne umundurowanie (nogawki wpuszczone w trzewiki, sznurowadła schowane, zielony beret). W dni chłodne dopuszcza się polar, czapkę oliwkową/czarną, komin i czarne rękawiczki.\n• Obowiązkowe oznaczenia na rzep: identyfikator z nazwiskiem po prawej stronie bluzy, flagi biało-czerwone na obu rękawach, na lewym rękawie emblemat „ZESPÓŁ SZKÓŁ AKADEMICKICH KLASA MUNDUROWA”, z przodu szary emblemat „ZSA ŁOMŻA” lub „ZSA MANS W ŁOMŻY”.\n• Plecak w kolorze czarnym lub ciemnozielonym bez znaków reklamowych. W okresie letnim na terenie szkoły można chodzić bez bluzy polowej (w koszulce szkolnej), lecz bluzę trzeba mieć przy sobie."
          },
          {
            code: "Pkt 4f–4i (str. 6–7)",
            title: "Uczesanie, paznokcie, biżuteria i zakazy w umundurowaniu",
            text: "• Długie włosy muszą być schludnie upięte (kucyk, warkocz, kok, gumka czarna lub w kolorze włosów) bez ozdobnych klamr.\n• Paznokcie przycięte (maks. 2 mm poza opuszki palców), w kolorach naturalnych/cielistych (jasny róż, beż). Makijaż delikatny.\n• Zakaz łączenia elementów cywilnych z mundurem. Dopuszcza się po jednym drobnym kolczyku w płatku ucha; kolczyki w obrębie twarzy (nos, warga, brew) należy zdjąć. Na zajęciach obronnych zdejmuje się wszelką biżuterię, zegarki i opróżnia kieszenie.\n• Zabrania się trzymania rąk w kieszeniach, wypychania kieszeni oraz chodzenia w mundurze i żucia gumy."
          },
          {
            code: "Pkt 5–9 (str. 8–11)",
            title: "Zwolnienia z munduru, Oddawanie honorów, Brak hierarchii i Kary",
            text: "• Zwolnienie z noszenia munduru (pkt 5): zalecenie lekarza, kontuzja narządów ruchu (zgłoszona dzień wcześniej przez Librus koordynatorowi klas mundurowych) lub decyzja Dyrektora.\n• Oddawanie honorów (pkt 6): podczas Hymnu Państwowego, wciągania Flagi na maszt i pocztom sztandarowym (bez nakrycia głowy — postawa zasadnicza i skłon głowy; w berecie — wg Regulaminu musztry).\n• Hierarchia (pkt 7): uczniowie nie posiadają stopni ani relacji podwładny–przełożony bez względu na rocznik; nie mogą wydawać sobie rozkazów ani wyznaczać kar.\n• Naruszenie godności munduru (pkt 8): czasowy zakaz noszenia munduru do 14 dni lekcyjnych (nie zwalnia z munduru na lekcjach Bezpieczeństwa Wewnętrznego). Obowiązuje zakaz odpowiedzialności zbiorowej — każdy przypadek rozpatrywany jest indywidualnie."
          }
        ]
      },
      {
        id: "regulamin-wycieczek",
        category: "REGULAMINY",
        format: "PDF",
        file: "regulamin_wycieczek_2022_v2.pdf",
        badge: "PDF • REGULAMIN WYCIECZEK (14 STRON)",
        title: "Regulamin Wycieczek Szkolnych i Wyjść Grupowych ZSA",
        preview: "Rodzaje wycieczek, zadania kierownika i opiekunów, limity uczniów na 1 opiekuna, zasady w autokarze i pociągu, załączniki.",
        lead: "Regulamin organizowania krajoznawstwa, turystyki i wyjść grupowych w Zespole Szkół Akademickich w Łomży (ul. Studencka 19) wraz z wzorami oświadczeń rodziców i klauzulą RODO.",
        sections: [
          {
            code: "§1–§3 (str. 1–4)",
            title: "Zasady ogólne, Rodzaje wycieczek oraz Kierownik i Opiekunowie",
            text: "• Rodzaje wycieczek (§2): 1) przedmiotowe (w ramach lekcji), 2) krajoznawczo-turystyczne, 3) specjalistyczne wycieczki krajoznawczo-turystyczne.\n• Kierownika i opiekunów wyznacza Dyrektor szkoły. Na wycieczce zagranicznej przynajmniej jedna osoba musi znać język obcy kraju docelowego/tranzytowego.\n• Kierownik odpowiada za program, regulamin, apteczkę pierwszej pomocy, transport, wyżywienie, noclegi oraz rozliczenie finansowe wycieczki w terminie 14 dni od jej zakończenia."
          },
          {
            code: "§4 pkt 1–27 (str. 4–7)",
            title: "Bezpieczeństwo i Maksymalna liczba uczniów na 1 opiekuna",
            text: "• Limity uczniów na 1 opiekuna (§4 ust. 3):\n  a) na terenie Łomży i okolic (piesze / komunikacja miejska): 1 opiekun na 25 uczniów,\n  b) poza Łomżę środkami transportu (autokar, bus, kolej): 1 opiekun na 15 uczniów,\n  c) na szlakach turystycznych: 1 opiekun na 15 uczniów,\n  d) wycieczki rowerowe: 1 opiekun na 15 uczniów (obowiązkowe kaski rowerowe!),\n  e) wycieczki zagraniczne: 1 opiekun na 10 uczniów.\n• Dokumentację wycieczki składa się do zatwierdzenia Dyrektorowi minimum 7 dni przed wyjazdem (wyjście grupowe zgłasza się co najmniej dzień wcześniej).\n• Zakaz prowadzenia wycieczek podczas burzy, śnieżycy i gołoledzi. Zakaz podawania uczniom lekarstw bez zgody rodziców."
          },
          {
            code: "§4 pkt 28–31 & §5 (str. 7–8)",
            title: "Przejazdy autokarem, pociągiem, poruszanie się w mieście i Obowiązki Uczestnika",
            text: "• Autokar: przejście musi być wolne, opiekunowie siedzą przy drzwiach i w środku pojazdu, zakaz spacerowania i siedzenia tyłem, przerwy tylko na wyznaczonych parkingach, liczenie grupy po każdym postoju.\n• Pociąg: zakaz rozdzielania grupy na dwa wagony, zakaz wychylania się przez okna; bilety i legitymacje przechowuje kierownik.\n• Miasto: jeden opiekun prowadzi grupę na czele, drugi zamyka kolumnę w granicach kontaktu wzrokowego.\n• Obowiązki ucznia (§5): punktualność, zgłaszanie choroby lokomocyjnej, zakaz oddalania się bez zgody opiekuna, zakaz palenia, alkoholu i środków odurzających."
          },
          {
            code: "§6–§8 i Załączniki 1–2 (str. 8–14)",
            title: "Finansowanie, Konsekwencje naruszeń i Załączniki (Zgoda rodziców / RODO)",
            text: "• Finansowanie (§6): plan finansowy określa koszt ogólny i na jednego uczestnika; uczniowie w trudnej sytuacji mogą wnioskować o dofinansowanie z Rady Rodziców.\n• Uczniowie niebiorący udziału w wycieczce uczestniczą w lekcjach z inną klasą wskazaną przez dyrekcję (§7 ust. 5).\n• W przypadku rażącego naruszenia regulaminu (np. alkohol/używki) zawiadamia się rodziców i Dyrektora, a rodzice mają obowiązek natychmiastowego odebrania dziecka na własny koszt. Za szkody materialne odpowiadają rodzice.\n• Załącznik nr 1: 19-punktowy Regulamin Wycieczki. Załącznik nr 2: Wzór zgody rodziców na udział i leczenie oraz klauzula RODO ZSA w Łomży."
          }
        ]
      }
    ];

    let docStep = "LIST";          // "LIST" | "READER"
    let docFocusArea = "MAIN";     // "MAIN" | "START_BTN" | "SEARCH_INPUT" | "BACK_BTN" | "OPEN_FILE_BTN"
    let docFocusIdx = 0;
    let docSelectedId = "statut-at";
    let docSearchQuery = "";

    const docListStepEl = document.getElementById("doc-list-step");
    const docReaderStepEl = document.getElementById("doc-reader-step");
    const docBreadcrumbEl = document.getElementById("doc-breadcrumb");
    const docBackStepBtnEl = document.getElementById("doc-back-step-btn");
    const docSearchInputEl = document.getElementById("doc-search-input");
    const docSectionsListEl = document.getElementById("doc-sections-list");
    const docOpenFileBtnEl = document.getElementById("doc-open-file-btn");
    const docMatchCounterEl = document.getElementById("doc-match-counter");

    function escapeHtmlDoc(str) {
      return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    function highlightDocText(text, query) {
      const safe = escapeHtmlDoc(text);
      const q = (query || "").trim();
      if (!q) return safe;
      const escapedQ = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const rx = new RegExp(`(${escapedQ})`, "gi");
      return safe.replace(rx, `<mark class="doc-hl">$1</mark>`);
    }

    function countDocMatches(doc, query) {
      const q = (query || "").trim().toLowerCase();
      if (!q) return 0;
      const escapedQ = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const rx = new RegExp(escapedQ, "gi");
      let count = 0;
      doc.sections.forEach((s) => {
        const hay = `${s.code} ${s.title} ${s.text}`;
        const m = hay.match(rx);
        if (m) count += m.length;
      });
      return count;
    }

    function syncDocsFocusVisuals() {
      const startBtnEl = document.getElementById("sub-start-btn");
      if (startBtnEl) startBtnEl.classList.toggle("focused", docFocusArea === "START_BTN");
      if (docBackStepBtnEl) docBackStepBtnEl.classList.toggle("pad-focused", docFocusArea === "BACK_BTN");
      if (docSearchInputEl) docSearchInputEl.classList.toggle("pad-focused", docFocusArea === "SEARCH_INPUT");
      if (docOpenFileBtnEl) docOpenFileBtnEl.classList.toggle("pad-focused", docFocusArea === "OPEN_FILE_BTN");

      if (docListStepEl) {
        const cards = Array.from(docListStepEl.querySelectorAll(".dir-link-card"));
        cards.forEach((card, idx) => {
          const active = (docStep === "LIST" && docFocusArea === "MAIN" && idx === docFocusIdx);
          card.classList.toggle("pad-focused", active);
          if (active) {
            card.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        });
      }
    }

    function openDocReader(docId) {
      const doc = DOCS_LIBRARY_DB.find((d) => d.id === docId) || DOCS_LIBRARY_DB[0];
      if (!doc) return;
      docSelectedId = doc.id;
      docStep = "READER";
      docFocusArea = "MAIN";
      playCustomWav("select");
      renderDocsUI();
      if (docReaderStepEl) docReaderStepEl.scrollTop = 0;
    }

    function closeDocReader() {
      if (docStep !== "READER") return false;
      docStep = "LIST";
      docFocusArea = "MAIN";
      playCustomWav("back");
      renderDocsUI();
      return true;
    }

    function renderDocsUI() {
      if (!docListStepEl || !docReaderStepEl) return;
      const q = docSearchQuery.trim();

      if (docStep === "LIST") {
        docListStepEl.style.display = "grid";
        docReaderStepEl.style.display = "none";
        docBackStepBtnEl.style.display = "none";
        docBreadcrumbEl.innerHTML = q
          ? `Wyniki wyszukiwania frazy „<strong>${escapeHtmlDoc(q)}</strong>” we wszystkich dokumentach:`
          : `Wybierz dokument do czytania w menu: <strong>Statuty i Programy</strong> lub <strong>Regulaminy Szkolne</strong>`;

        const colStatuty = DOCS_LIBRARY_DB.filter((d) => d.category === "STATUTY");
        const colRegulaminy = DOCS_LIBRARY_DB.filter((d) => d.category === "REGULAMINY");
        const orderedDocs = [...colStatuty, ...colRegulaminy];

        if (docFocusIdx >= orderedDocs.length) docFocusIdx = 0;

        const renderCard = (doc) => {
          const globalIdx = orderedDocs.indexOf(doc);
          const matches = countDocMatches(doc, q);
          const matchBadge = q
            ? (matches > 0
                ? `<span style="color:#f5c418;font-weight:700;">• Знаleziono trafień: ${matches}</span>`
                : `<span style="color:rgba(255,255,255,0.45);">• Brak trafień (0)</span>`)
            : "";

          return `
            <div class="dir-link-card" data-doc-id="${doc.id}" data-doc-idx="${globalIdx}">
              <span class="dir-link-tag">${doc.badge} ${matchBadge}</span>
              <span class="dir-link-name">${highlightDocText(doc.title, q)}</span>
              <span class="dir-link-desc-preview">${highlightDocText(doc.preview, q)}</span>
              <span class="dir-link-url">✕ Otwórz czytnik (${doc.sections.length} sekcji) • Plik: ${doc.file}</span>
            </div>
          `;
        };

        docListStepEl.innerHTML = `
          <div class="dir-section-box">
            <div class="dir-section-title">Statuty i Programy</div>
            ${colStatuty.map(renderCard).join("")}
          </div>
          <div class="dir-section-box">
            <div class="dir-section-title">Regulaminy Szkolne</div>
            ${colRegulaminy.map(renderCard).join("")}
          </div>
        `;

        Array.from(docListStepEl.querySelectorAll(".dir-link-card")).forEach((card) => {
          const idx = Number(card.getAttribute("data-doc-idx")) || 0;
          const id = card.getAttribute("data-doc-id");
          card.addEventListener("mouseenter", () => {
            docFocusArea = "MAIN";
            docFocusIdx = idx;
            syncDocsFocusVisuals();
          });
          card.addEventListener("click", () => {
            docFocusIdx = idx;
            openDocReader(id);
          });
        });
      } else {
        docListStepEl.style.display = "none";
        docReaderStepEl.style.display = "flex";
        docBackStepBtnEl.style.display = "inline-flex";

        const doc = DOCS_LIBRARY_DB.find((d) => d.id === docSelectedId) || DOCS_LIBRARY_DB[0];
        const totalMatches = countDocMatches(doc, q);

        docBreadcrumbEl.innerHTML = `Czytnik: <strong>${doc.title}</strong> (▲ ▼ Przewijaj tekst lub szukaj słowa powyżej)`;
        document.getElementById("doc-reader-badge").textContent = `${doc.badge} • ${doc.file}`;
        document.getElementById("doc-reader-title").innerHTML = highlightDocText(doc.title, q);
        document.getElementById("doc-reader-lead").innerHTML = highlightDocText(doc.lead, q);
        document.getElementById("doc-reader-file-text").textContent = doc.file;

        if (docMatchCounterEl) {
          docMatchCounterEl.textContent = q
            ? `Trafienia dla „${q}”: ${totalMatches}`
            : `Rozdziałów: ${doc.sections.length}`;
        }

        const filteredSections = q
          ? doc.sections.filter((s) => `${s.code} ${s.title} ${s.text}`.toLowerCase().includes(q.toLowerCase()))
          : doc.sections;

        if (filteredSections.length === 0) {
          docSectionsListEl.innerHTML = `
            <div class="doc-section-card">
              <div class="dir-info-card-title">Brak wyników dla frazy „${escapeHtmlDoc(q)}” w tym dokumencie</div>
              <p class="doc-section-body">Wyczyść pole wyszukiwania powyżej lub wróć do listy dokumentów, aby sprawdzić pozostałe pliki.</p>
            </div>
          `;
        } else {
          docSectionsListEl.innerHTML = filteredSections.map((s) => `
            <div class="doc-section-card ${q ? "has-match" : ""}">
              <div class="dir-info-card-head">
                <span class="dir-info-card-title">${highlightDocText(s.title, q)}</span>
                <span class="dir-info-card-code">${highlightDocText(s.code, q)}</span>
              </div>
              <div class="doc-section-body">${highlightDocText(s.text, q)}</div>
            </div>
          `).join("");
        }
      }

      if (typeof syncInputPromptsUI === "function") syncInputPromptsUI();
      syncDocsFocusVisuals();
    }

    if (docSearchInputEl) {
      docSearchInputEl.addEventListener("input", (e) => {
        docSearchQuery = e.target.value || "";
        renderDocsUI();
      });
      docSearchInputEl.addEventListener("mouseenter", () => {
        if (navLevel === "SUBMENU" && getActiveGameItem()?.isDocs) {
          docFocusArea = "SEARCH_INPUT";
          syncDocsFocusVisuals();
        }
      });
      docSearchInputEl.addEventListener("focus", () => {
        docFocusArea = "SEARCH_INPUT";
        syncDocsFocusVisuals();
      });
    }

    if (docBackStepBtnEl) {
      docBackStepBtnEl.addEventListener("mouseenter", () => {
        if (navLevel === "SUBMENU" && getActiveGameItem()?.isDocs) {
          docFocusArea = "BACK_BTN";
          syncDocsFocusVisuals();
        }
      });
      docBackStepBtnEl.addEventListener("click", () => {
        closeDocReader();
      });
    }

    if (docOpenFileBtnEl) {
      docOpenFileBtnEl.addEventListener("mouseenter", () => {
        if (navLevel === "SUBMENU" && getActiveGameItem()?.isDocs) {
          docFocusArea = "OPEN_FILE_BTN";
          syncDocsFocusVisuals();
        }
      });
      docOpenFileBtnEl.addEventListener("click", () => {
        const doc = DOCS_LIBRARY_DB.find((d) => d.id === docSelectedId) || DOCS_LIBRARY_DB[0];
        if (doc && doc.file) {
          launchUrlWithSleepDelay(doc.file, doc.title);
        }
      });
    }
    

    /* ============================================================================
       7E. CHMURA (SUPABASE) + GLOBALNY TERMINARZ + STATUS NIEOBECNOŚCI NAUCZYCIELI
       ============================================================================ */
    const CLOUD_SCHEDULE_CONFIG = {
      supabaseUrl: "https://feiedqoneahslanzibez.supabase.co",
      supabaseAnonKey: "sb_publishable_Lbm_cxTaXYYLIubz1_62MQ_YTHaF8H9"
    };

    let cloudDaysOff = [];
    let cloudTeacherAbsences = [];

    function formatIsoLocal(dateObj) {
      const y = dateObj.getFullYear();
      const m = String(dateObj.getMonth() + 1).padStart(2, "0");
      const d = String(dateObj.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    }

    function isDateInRange(isoDate, fromIso, toIso) {
      return isoDate >= fromIso && isoDate <= (toIso || fromIso);
    }

    function getHolidaysForDate(isoDate) {
      return cloudDaysOff.filter((h) => isDateInRange(isoDate, h.date_from, h.date_to));
    }

    function getAbsencesForDate(isoDate) {
      return cloudTeacherAbsences.filter((a) => isDateInRange(isoDate, a.date_from, a.date_to));
    }

    function getTeacherAbsencesOnDate(teacherCode, isoDate = formatIsoLocal(new Date())) {
      return cloudTeacherAbsences.filter(
        (a) => a.teacher_code === teacherCode && isDateInRange(isoDate, a.date_from, a.date_to)
      );
    }

    function doesLessonOverlapAbsence(lessonRangeStr, absence) {
      if (!absence) return false;
      if (absence.all_day) return true;
      if (!absence.time_from || !absence.time_to) return true;
      const [lStart, lEnd] = lessonRangeStr.split("-").map(parseHmToMinutes);
      const aStart = parseHmToMinutes(absence.time_from);
      const aEnd = parseHmToMinutes(absence.time_to);
      return lStart < aEnd && lEnd > aStart;
    }

    async function fetchCloudScheduleData() {
      const configured =
        CLOUD_SCHEDULE_CONFIG.supabaseUrl &&
        !CLOUD_SCHEDULE_CONFIG.supabaseUrl.includes("TWOJ-PROJEKT");

      if (!configured) {
        try {
          cloudDaysOff = JSON.parse(localStorage.getItem("zsa_days_off") || "[]");
          cloudTeacherAbsences = JSON.parse(localStorage.getItem("zsa_teacher_absences") || "[]");
        } catch (_) {}
        if (navLevel === "SUBMENU" && getActiveGameItem()?.isCalendar) renderCalendarUI();
        if (navLevel === "SUBMENU" && getActiveGameItem()?.isTeachers) renderTeachersUI();
        if (typeof window.renderGoldHenUI === "function" && navLevel === "SUBMENU" && isGoldHenOpen) window.renderGoldHenUI();
        return;
      }

      const headers = {
        "apikey": CLOUD_SCHEDULE_CONFIG.supabaseAnonKey
      };
      if (CLOUD_SCHEDULE_CONFIG.supabaseAnonKey.startsWith("eyJ")) {
        headers["Authorization"] = `Bearer ${CLOUD_SCHEDULE_CONFIG.supabaseAnonKey}`;
      }

      try {
        const [resH, resA] = await Promise.all([
          fetch(`${CLOUD_SCHEDULE_CONFIG.supabaseUrl}/rest/v1/days_off?select=*&order=date_from.asc`, { headers }),
          fetch(`${CLOUD_SCHEDULE_CONFIG.supabaseUrl}/rest/v1/teacher_absences?select=*&order=date_from.asc`, { headers })
        ]);
        if (resH.ok) cloudDaysOff = await resH.json();
        if (resA.ok) cloudTeacherAbsences = await resA.json();
      } catch (_) {}

      if (navLevel === "SUBMENU" && getActiveGameItem()?.isCalendar) renderCalendarUI();
      if (navLevel === "SUBMENU" && getActiveGameItem()?.isTeachers) renderTeachersUI();
    }

    /* Stan kalendarza (tylko Poniedziałek – Piątek) */
    function snapDateToWeekday(dateObj, dir = 1) {
      const d = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
      while (d.getDay() === 0 || d.getDay() === 6) {
        d.setDate(d.getDate() + (dir >= 0 ? 1 : -1));
      }
      return d;
    }

    const nowDateInit = snapDateToWeekday(new Date(), 1);
    let calYear = nowDateInit.getFullYear();
    let calMonth = nowDateInit.getMonth();
    let calSelectedIso = formatIsoLocal(nowDateInit);
    let calFocusArea = "GRID"; // "GRID" | "START_BTN"

    const calGridEl = document.getElementById("cal-grid");
    const calMonthTitleEl = document.getElementById("cal-month-title");
    const calDetailsLabelEl = document.getElementById("cal-selected-date-label");
    const calDetailsListEl = document.getElementById("cal-details-list");

    const MONTHS_PL_NOM = [
      "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
      "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
    ];

    function renderCalendarDetails(isoDate) {
      if (!calDetailsLabelEl || !calDetailsListEl) return;
      const [y, m, d] = isoDate.split("-");
      calDetailsLabelEl.textContent = `Dzień: ${d}.${m}.${y}`;

      const holidays = getHolidaysForDate(isoDate);
      const absences = getAbsencesForDate(isoDate);

      if (holidays.length === 0 && absences.length === 0) {
        calDetailsListEl.innerHTML = `
          <div class="cal-event-card">
            <div class="cal-event-tag" style="color:#7ec8ff;">Brak zmian w planie</div>
            <div class="cal-event-title">Normalny dzień zajęć</div>
            <div class="cal-event-meta">Brak zgłoszonych dni wolnych oraz nieobecności nauczycieli w tym terminie.</div>
          </div>
        `;
        return;
      }

      const holHtml = holidays.map((h) => `
        <div class="cal-event-card holiday">
          <div class="cal-event-tag">Dzień wolny od zajęć</div>
          <div class="cal-event-title">${h.title}</div>
          <div class="cal-event-meta">Termin: ${h.date_from === h.date_to ? h.date_from : `${h.date_from} – ${h.date_to}`}</div>
        </div>
      `).join("");

      const absHtml = absences.map((a) => `
        <div class="cal-event-card absence">
          <div class="cal-event-tag">Nieobecność nauczyciela</div>
          <div class="cal-event-title">${a.teacher_name}</div>
          <div class="cal-event-meta">
            Godziny: <strong>${a.all_day ? "Cały dzień" : `${a.time_from} – ${a.time_to}`}</strong><br/>
            Okres: ${a.date_from === a.date_to ? a.date_from : `${a.date_from} – ${a.date_to}`}
            ${a.note ? `<br/>Uwaga: ${a.note}` : ""}
          </div>
        </div>
      `).join("");

      calDetailsListEl.innerHTML = holHtml + absHtml;
    }

    function renderCalendarUI() {
      if (!calGridEl || !calMonthTitleEl) return;
      calMonthTitleEl.textContent = `${MONTHS_PL_NOM[calMonth]} ${calYear}`;

      const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
      const todayIso = formatIsoLocal(new Date());

      // Znajdź pierwszy dzień roboczy (Pon=1 .. Pią=5) w tym miesiącu
      let firstWeekdayOffset = 0;
      for (let d = 1; d <= daysInMonth; d++) {
        const dow = new Date(calYear, calMonth, d).getDay();
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
        const dow = new Date(calYear, calMonth, day).getDay();
        if (dow === 0 || dow === 6) continue; // Pomijamy sobotę i niedzielę

        const iso = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const holidays = getHolidaysForDate(iso);
        const absences = getAbsencesForDate(iso);
        const isToday = iso === todayIso;
        const isSelected = iso === calSelectedIso;

        const classes = ["cal-day-cell"];
        if (isToday) classes.push("is-today");
        if (holidays.length) classes.push("has-holiday");
        if (absences.length) classes.push("has-absence");
        if (isSelected) classes.push("selected");
        if (isSelected && calFocusArea === "GRID") classes.push("pad-focused");

        html += `
          <div class="${classes.join(" ")}" data-iso="${iso}">
            <span class="cal-day-num">${day}</span>
            <div class="cal-day-dots">
              ${holidays.length ? `<i class="cal-dot holiday" title="Dzień wolny"></i>` : ""}
              ${absences.length ? `<i class="cal-dot absence" title="Nieobecności"></i><span class="cal-abs-count">${absences.length}</span>` : ""}
            </div>
          </div>
        `;
      }

      calGridEl.innerHTML = html;

      Array.from(calGridEl.querySelectorAll(".cal-day-cell[data-iso]")).forEach((cell) => {
        cell.addEventListener("click", () => {
          calFocusArea = "GRID";
          calSelectedIso = cell.getAttribute("data-iso");
          playCustomWav("move");
          renderCalendarUI();
        });
      });

      const startBtnEl = document.getElementById("sub-start-btn");
      if (startBtnEl) startBtnEl.classList.toggle("focused", calFocusArea === "START_BTN");

      renderCalendarDetails(calSelectedIso);
    }

    function shiftCalendarSelectedDay(deltaDays) {
      const [y, m, d] = calSelectedIso.split("-").map(Number);
      const next = new Date(y, m - 1, d + deltaDays);
      const snapped = snapDateToWeekday(next, deltaDays >= 0 ? 1 : -1);
      calYear = snapped.getFullYear();
      calMonth = snapped.getMonth();
      calSelectedIso = formatIsoLocal(snapped);
      playCustomWav("move");
      renderCalendarUI();
    }

    // Zwraca true, jeśli udało się przesunąć o tydzień w górę W TYM SAMYM MIESIĄCU; false -> jesteśmy na samej górze
    function moveCalendarUpOneRow() {
      const [y, m, d] = calSelectedIso.split("-").map(Number);
      const prevWeek = new Date(y, m - 1, d - 7);
      if (prevWeek.getMonth() !== calMonth || prevWeek.getFullYear() !== calYear) {
        return false; // Jesteśmy w górnym wierszu miesiąca -> pozwól wyjść z Terminarza
      }
      calSelectedIso = formatIsoLocal(prevWeek);
      playCustomWav("move");
      renderCalendarUI();
      return true;
    }

    document.getElementById("cal-prev-month")?.addEventListener("click", () => {
      calMonth--;
      if (calMonth < 0) { calMonth = 11; calYear--; }
      calSelectedIso = formatIsoLocal(snapDateToWeekday(new Date(calYear, calMonth, 1), 1));
      playCustomWav("move");
      renderCalendarUI();
    });

    document.getElementById("cal-next-month")?.addEventListener("click", () => {
      calMonth++;
      if (calMonth > 11) { calMonth = 0; calYear++; }
      calSelectedIso = formatIsoLocal(snapDateToWeekday(new Date(calYear, calMonth, 1), 1));
      playCustomWav("move");
      renderCalendarUI();
    });

    document.getElementById("cal-today-btn")?.addEventListener("click", () => {
      const now = snapDateToWeekday(new Date(), 1);
      calYear = now.getFullYear();
      calMonth = now.getMonth();
      calSelectedIso = formatIsoLocal(now);
      playCustomWav("select");
      renderCalendarUI();
    });

    document.getElementById("cal-refresh-btn")?.addEventListener("click", () => {
      playCustomWav("select");
      fetchCloudScheduleData();
    });
    

    /* ============================================================================
       7F. APLIKACJA "KONTAKT" (NAWIGACJA PO MEDIACH SPOŁECZNOŚCIOWYCH I SCROLL)
       ============================================================================ */
    let contactFocusIdx = 0; // -1 = lewy przycisk Start | 0 = Facebook | 1 = Instagram | 2 = YouTube

    const contactScrollWrapEl = document.getElementById("contact-scroll-wrap");
    const contactCardsEls = () => Array.from(document.querySelectorAll("#zsa-contact-view .contact-social-card"));

    function updateContactFocusUI() {
      const startBtnEl = document.getElementById("sub-start-btn");
      if (startBtnEl) startBtnEl.classList.toggle("focused", contactFocusIdx === -1);

      contactCardsEls().forEach((card, idx) => {
        const active = idx === contactFocusIdx;
        card.classList.toggle("pad-focused", active);
        if (active) {
          card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      });
    }

    contactCardsEls().forEach((card, idx) => {
      card.addEventListener("mouseenter", () => {
        if (navLevel === "SUBMENU" && getActiveGameItem()?.isContact) {
          contactFocusIdx = idx;
          updateContactFocusUI();
        }
      });
      card.addEventListener("click", () => {
        const url = card.getAttribute("data-url");
        const title = card.getAttribute("data-title") || "Kontakt ZSA";
        if (url) {
          launchUrlWithSleepDelay(url, title);
        }
      });
    });


    /* ============================================================================
       7G. SYSTEM PŁYT / KLUCZY (isDisc) ORAZ APLIKACJA "GOLDHEN" (ADMIN LOGIN)
       ============================================================================ */
    const DISC_ICON_SVG = `
      <span class="ps4-disc-icon" title="Wersja płytowa">
        <svg viewBox="0 0 24 24">
          <defs>
            <linearGradient id="ps4DiscGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#e8f6ff"/>
              <stop offset="45%" stop-color="#7ec8ff"/>
              <stop offset="100%" stop-color="#2b6cb0"/>
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="url(#ps4DiscGrad)" stroke="rgba(255,255,255,0.75)" stroke-width="1"/>
          <circle cx="12" cy="12" r="3.4" fill="#04122c" stroke="rgba(255,255,255,0.85)" stroke-width="1"/>
        </svg>
      </span>
    `;

    let pendingDiscItem = null;
    const discModalEl = document.getElementById("ps4-disc-modal");
    const discKeyInputEl = document.getElementById("disc-key-input");
    const discKeyMsgEl = document.getElementById("disc-key-msg");

    function getUnlockedDiscsSet() {
      try {
        return new Set(JSON.parse(localStorage.getItem("zsa_unlocked_discs") || "[]"));
      } catch (_) {
        return new Set();
      }
    }

    function isDiscUnlocked(item) {
      if (!item || !item.isDisc) return true;
      return getUnlockedDiscsSet().has(item.id);
    }

    function markDiscUnlocked(itemId) {
      const set = getUnlockedDiscsSet();
      set.add(itemId);
      localStorage.setItem("zsa_unlocked_discs", JSON.stringify(Array.from(set)));
    }

    function isDiscModalOpen() {
      return Boolean(discModalEl && discModalEl.classList.contains("open"));
    }

    function openDiscModal(item) {
      if (!discModalEl || !item) return;
      pendingDiscItem = item;
      document.getElementById("disc-modal-cover").innerHTML = createCoverMarkup(item);
      document.getElementById("disc-modal-title").textContent = item.title;
      discKeyInputEl.value = "";
      discKeyMsgEl.textContent = "";
      discKeyMsgEl.classList.remove("ok");
      discModalEl.classList.add("open");
      playCustomWav("select");
      setTimeout(() => discKeyInputEl.focus(), 120);
    }

    function closeDiscModal() {
      if (!discModalEl) return;
      discModalEl.classList.remove("open");
      pendingDiscItem = null;
      if (discKeyInputEl) discKeyInputEl.blur();
      playCustomWav("back");
    }

    function validateAndActivateDiscKey() {
      if (!pendingDiscItem) return;
      const entered = (discKeyInputEl.value || "").trim().toUpperCase();
      if (!entered) {
        discKeyMsgEl.textContent = "Wpisz klucz aktywacyjny.";
        discKeyMsgEl.classList.remove("ok");
        return;
      }

      const allowed = Array.isArray(pendingDiscItem.discKeys)
        ? pendingDiscItem.discKeys.map((k) => String(k).trim().toUpperCase())
        : (pendingDiscItem.discKey ? [String(pendingDiscItem.discKey).trim().toUpperCase()] : ["ZSA777"]);

      if (allowed.includes(entered)) {
        markDiscUnlocked(pendingDiscItem.id);
        discKeyMsgEl.textContent = "Klucz zaakceptowany! Uruchamianie gry...";
        discKeyMsgEl.classList.add("ok");
        playCustomWav("select");
        const targetItem = pendingDiscItem;
        setTimeout(() => {
          closeDiscModal();
          launchUrlWithSleepDelay(targetItem.url, targetItem.title);
        }, 420);
      } else {
        discKeyMsgEl.textContent = "Nieprawidłowy klucz. Kup grę w sklepie, aby otrzymać klucz.";
        discKeyMsgEl.classList.remove("ok");
        playCustomWav("back");
      }
    }

    document.getElementById("disc-buy-btn")?.addEventListener("click", () => {
      if (!pendingDiscItem) return;
      const shopUrl = pendingDiscItem.buyUrl || pendingDiscItem.url;
      if (shopUrl) {
        launchUrlWithSleepDelay(shopUrl, `Sklep — ${pendingDiscItem.title}`);
      }
    });

    document.getElementById("disc-activate-btn")?.addEventListener("click", validateAndActivateDiscKey);
    document.getElementById("disc-cancel-btn")?.addEventListener("click", closeDiscModal);
    discModalEl?.addEventListener("click", (e) => {
      if (e.target === discModalEl) closeDiscModal();
    });
    discKeyInputEl?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        validateAndActivateDiscKey();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeDiscModal();
      }
      e.stopPropagation();
    });

    /* --- Otwieranie i zamykanie widoku GoldHEN (logika panelu w osobnym pliku goldhen-admin.js) --- */
    let isGoldHenOpen = false;

    function openGoldHenApp(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (isSystemSleeping || isDiscModalOpen() || performance.now() < wakeUpCooldownUntil) return;
      unlockAudioOnInteraction();

      if (navLevel === "SUBMENU" && isGoldHenOpen) return;

      enteredSubmenuFromFolder = (navLevel === "FOLDER");
      isGoldHenOpen = true;
      navLevel = "SUBMENU";
      playCustomWav("select");
      syncUiState();
    }

    const psPlusGoldHenBtn = document.getElementById("ps-plus-goldhen-btn") || document.querySelector(".ps-plus-icon");
    psPlusGoldHenBtn?.addEventListener("click", openGoldHenApp);

    document.getElementById("gh-exit-login-btn")?.addEventListener("click", () => navigateUp(true));
    document.getElementById("gh-exit-workspace-btn")?.addEventListener("click", () => navigateUp(true));


    /* Wykrywanie prawdziwych telefonów i tabletów + orientacja Portrait / Landscape */
    function detectRealMobile() {
      const ua = navigator.userAgent || "";
      const hasTouch = ("ontouchstart" in window) || (navigator.maxTouchPoints > 0);
      const isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
      const uaMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|PlayBook|Silk/i.test(ua);
      const uaDataMobile = Boolean(navigator.userAgentData && navigator.userAgentData.mobile);
      const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
      const noHover = window.matchMedia("(hover: none)").matches;

      const isTouchDevice = Boolean(
        hasTouch && (uaMobileOrTablet || isIPadOS || uaDataMobile || (coarsePointer && noHover))
      );

      const shortestSide = Math.min(window.innerWidth, window.innerHeight);
      const isTablet = isTouchDevice && (isIPadOS || /iPad|Tablet/i.test(ua) || shortestSide >= 600);
      const isPortrait = window.innerHeight > window.innerWidth;

      document.body.classList.toggle("is-mobile", isTouchDevice);
      document.body.classList.toggle("is-tablet", isTablet);
      document.body.classList.toggle("is-portrait", isTouchDevice && isPortrait);
      document.body.classList.toggle("is-landscape", isTouchDevice && !isPortrait);

      return { isTouchDevice, isTablet, isPortrait };
    }

    function isPortraitTouchLayout() {
      return document.body.classList.contains("is-mobile") && document.body.classList.contains("is-portrait");
    }

    detectRealMobile();



    /* ============================================================================
       8. MASZYNA STANÓW NAWIGACJI PS4 (ZUNIFIKOWANA: KLAWIATURA, MYSZ, DOTYK, PAD)
       ============================================================================ */
    let navLevel = "MAIN";
    let mainIndex = 0;
    let folderIndex = 0;
    let enteredSubmenuFromFolder = false;

    let cachedTileStep = 178;
    let cachedFocusX = 240;
    let cachedTileStepY = 106;
    let cachedFocusY = 165;

    function refreshLayoutMetrics() {
      const { isTouchDevice, isTablet, isPortrait } = detectRealMobile();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const bodyStyle = document.body.style;

      if (isTouchDevice) {
        let tileSize, activeSize, bottomBar, tileGap, focusX, focusY, ribbonY, previewSize, portraitX;

        if (isPortrait) {
          if (isTablet) {
            tileSize = Math.round(Math.max(108, Math.min(140, vw * 0.17)));
            activeSize = Math.round(Math.max(150, Math.min(194, vw * 0.24)));
            bottomBar = 36;
            tileGap = 16;
            focusY = Math.round(Math.max(110, Math.min(200, vh * 0.20)));
            portraitX = Math.round(Math.max(32, vw * 0.06));
          } else {
            tileSize = Math.round(Math.max(76, Math.min(102, vw * 0.22)));
            activeSize = Math.round(Math.max(106, Math.min(142, vw * 0.31)));
            bottomBar = 30;
            tileGap = 14;
            focusY = Math.round(Math.max(84, Math.min(165, vh * 0.19)));
            portraitX = Math.round(Math.max(14, vw * 0.05));
          }
          focusX = portraitX;
          ribbonY = 0;
          previewSize = tileSize;
        } else {
          if (isTablet) {
            tileSize = Math.round(Math.max(120, Math.min(156, vh * 0.21)));
            activeSize = Math.round(Math.max(170, Math.min(220, vh * 0.30)));
            bottomBar = 38;
            tileGap = 10;
            focusX = Math.round(Math.max(80, Math.min(165, vw * 0.12)));
            ribbonY = Math.round(Math.max(96, Math.min(144, vh * 0.19)));
          } else {
            tileSize = Math.round(Math.max(78, Math.min(122, vh * 0.27)));
            activeSize = Math.round(Math.max(110, Math.min(168, vh * 0.38)));
            bottomBar = 28;
            tileGap = 8;
            focusX = Math.round(Math.max(30, Math.min(100, vw * 0.09)));
            ribbonY = Math.round(Math.max(58, Math.min(100, vh * 0.19)));
          }
          focusY = ribbonY;
          portraitX = focusX;
          previewSize = Math.round(tileSize * 0.78);
        }

        bodyStyle.setProperty("--tile-size", `${tileSize}px`);
        bodyStyle.setProperty("--tile-active-size", `${activeSize}px`);
        bodyStyle.setProperty("--tile-bottom-bar", `${bottomBar}px`);
        bodyStyle.setProperty("--tile-gap", `${tileGap}px`);
        bodyStyle.setProperty("--focus-x", `${focusX}px`);
        bodyStyle.setProperty("--focus-y", `${focusY}px`);
        bodyStyle.setProperty("--ribbon-y", `${ribbonY}px`);
        bodyStyle.setProperty("--preview-tile-size", `${previewSize}px`);
        bodyStyle.setProperty("--portrait-x", `${portraitX}px`);

        cachedFocusX = focusX;
        cachedFocusY = focusY;
        cachedTileStep = tileSize + tileGap;
        cachedTileStepY = tileSize + tileGap;
      } else {
        ["--tile-size", "--tile-active-size", "--tile-bottom-bar", "--tile-gap", "--focus-x", "--focus-y", "--ribbon-y", "--preview-tile-size", "--portrait-x"]
          .forEach((prop) => bodyStyle.removeProperty(prop));

        const styles = getComputedStyle(document.documentElement);
        const tileSize = parseFloat(styles.getPropertyValue("--tile-size")) || 168;
        const tileGap = parseFloat(styles.getPropertyValue("--tile-gap")) || 10;
        cachedFocusX = parseFloat(styles.getPropertyValue("--focus-x")) || 240;
        cachedTileStep = tileSize + tileGap;
        cachedFocusY = 162;
        cachedTileStepY = cachedTileStep;
      }
    }

    const mainTrackEl = document.getElementById("main-ribbon-track");
    const folderTrackEl = document.getElementById("folder-ribbon-track");

    function createCoverMarkup(item) {
      const safeTitle = (item.title || "").replace(/"/g, "&quot;");
      const bg = item.fallbackBg || "linear-gradient(135deg, #0c3b94, #041942)";
      const src = item.cover || "";
      return `
        <img class="tile-cover-img" src="${src}" alt="${safeTitle}" decoding="async"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="fallback-cover" style="display:none; background:${bg};">
          <span>${item.title}</span>
        </div>
      `;
    }

    function createTileElement(item, index, onClick) {
      const tile = document.createElement("div");
      tile.className = "ps4-tile";

      let innerHtml = "";
      if (item.type === "folder") {
        const cells = item.items.slice(0, 3).map(sub => `
          <div class="folder-cell">${createCoverMarkup(sub)}</div>
        `).join("");
        innerHtml = `
          <div class="folder-grid-2x2">
            ${cells}
            <div class="folder-cell folder-icon-cell">
              <svg viewBox="0 0 24 24">
                <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
              </svg>
            </div>
          </div>
        `;
      } else if (item.type === "system") {
        innerHtml = `
          <div class="tile-system-art">
            ${item.svg}
            ${item.bottomLabel ? `<span class="tile-system-label">${item.bottomLabel}</span>` : ""}
          </div>
        `;
      } else {
        innerHtml = createCoverMarkup(item);
      }

      const discMarkup = item.isDisc ? DISC_ICON_SVG : "";
      const bottomBarHtml = item.type === "folder"
        ? `<svg class="down-arrow-glyph" viewBox="0 0 24 24"><path d="M12 17l-6-6h4V5h4v6h4l-6 6z"/></svg>`
        : `<span>Start</span>${discMarkup}`;

      tile.innerHTML = `
        <div class="ps4-tile-inner">${innerHtml}</div>
        <div class="tile-bottom-bar">${bottomBarHtml}</div>
        <div class="tile-side-title">${item.title}</div>
      `;

      tile.addEventListener("click", (e) => onClick(index, item, e));
      return tile;
    }

  function buildRibbons() {
      refreshLayoutMetrics();
      mainTrackEl.innerHTML = "";
      MAIN_RIBBON_ITEMS.forEach((item, idx) => {
        const el = createTileElement(item, idx, (clickedIdx, clickedItem, evt) => {
          if (isSystemSleeping || isDiscModalOpen() || performance.now() < wakeUpCooldownUntil) return;
          unlockAudioOnInteraction();

          if (navLevel === "SUBMENU") {
            navigateUp(true);
            return;
          }

          if (navLevel === "FOLDER") {
            navLevel = "MAIN";
            mainIndex = clickedIdx;
            playCustomWav("back");
            syncUiState();
            return;
          }

          if (mainIndex !== clickedIdx) {
            mainIndex = clickedIdx;
            playCustomWav("move");
            syncUiState();
            return;
          }

          if (
            clickedItem.type === "folder" ||
            clickedItem.isTimetable ||
            clickedItem.isWhatsNew ||
            clickedItem.isDirections ||
            clickedItem.isTeachers ||
            clickedItem.isDocs ||
            clickedItem.isCalendar ||
            clickedItem.isContact ||
            clickedItem.isGoldHen
          ) {
            navigateDown();
          } else if (evt && evt.target.closest(".tile-bottom-bar")) {
            launchActiveItem();
          } else {
            navigateDown();
          }
        });
        mainTrackEl.appendChild(el);
      });

      folderTrackEl.innerHTML = "";
      CUSTOM_GAMES_DATA.forEach((game, gIdx) => {
        const el = createTileElement({ ...game, type: "game" }, gIdx, (clickedIdx, _clickedItem, evt) => {
          if (isSystemSleeping || isDiscModalOpen() || performance.now() < wakeUpCooldownUntil) return;
          unlockAudioOnInteraction();

          if (navLevel === "SUBMENU") {
            navigateUp(true);
            return;
          }

          if (navLevel === "MAIN") {
            navLevel = "FOLDER";
            folderIndex = clickedIdx;
            playCustomWav("move");
            syncUiState();
          } else if (navLevel === "FOLDER") {
            if (folderIndex !== clickedIdx) {
              folderIndex = clickedIdx;
              playCustomWav("move");
              syncUiState();
            } else if (evt && evt.target.closest(".tile-bottom-bar")) {
              launchActiveItem();
            } else {
              navigateDown();
            }
          }
        });
        folderTrackEl.appendChild(el);
      });

      syncUiState();
    }

    function getActiveGameItem() {
      if (navLevel === "SUBMENU" && isGoldHenOpen) {
        return GOLDHEN_APP_ITEM;
      }
      if (navLevel === "FOLDER" || (navLevel === "SUBMENU" && enteredSubmenuFromFolder)) {
        return CUSTOM_GAMES_DATA[folderIndex];
      }
      return MAIN_RIBBON_ITEMS[mainIndex];
    }

    function populateSubmenuScreen(item) {
      document.getElementById("sub-cover-box").innerHTML = createCoverMarkup(item);
      document.getElementById("sub-game-title").textContent = item.title;

      const zsaDirectionsViewEl = document.getElementById("zsa-directions-view");
      const zsaTeachersViewEl = document.getElementById("zsa-teachers-view");
      const zsaDocsViewEl = document.getElementById("zsa-docs-view");
      const zsaCalendarViewEl = document.getElementById("zsa-calendar-view");
      const zsaContactViewEl = document.getElementById("zsa-contact-view");
      const zsaGoldHenViewEl = document.getElementById("zsa-goldhen-view");
      const gameInfoViewEl = document.getElementById("game-info-view");
      const zsaNewsViewEl = document.getElementById("zsa-news-view");
      const zsaTimetableViewEl = document.getElementById("zsa-timetable-view");
      const rightLabelEl = document.getElementById("sub-header-right-label");
      const leftNavLabelEl = document.getElementById("sub-left-nav-label");
      const startBtnEl = document.getElementById("sub-start-btn");
      const startBtnTextEl = document.getElementById("sub-start-btn-text");
      const zsaLibrusViewEl = document.getElementById("zsa-librus-view");

      gameInfoViewEl.style.display = "none";
      zsaNewsViewEl.style.display = "none";
      zsaTimetableViewEl.style.display = "none";
      zsaDirectionsViewEl.style.display = "none";
      if (zsaTeachersViewEl) zsaTeachersViewEl.style.display = "none";
      if (zsaDocsViewEl) zsaDocsViewEl.style.display = "none";
      if (zsaCalendarViewEl) zsaCalendarViewEl.style.display = "none";
      if (zsaContactViewEl) zsaContactViewEl.style.display = "none";
      if (zsaGoldHenViewEl) zsaGoldHenViewEl.style.display = "none";
      if (zsaLibrusViewEl) zsaLibrusViewEl.style.display = "none";

      if (item.isWhatsNew) {
        zsaNewsViewEl.style.display = "flex";
        rightLabelEl.textContent = "Aktualności 2026";
        leftNavLabelEl.textContent = "Wieści ZSA";
        startBtnTextEl.textContent = "Portal ZSA";
        whatsNewFocusIndex = 0;
        renderZsaNewsList();
        fetchLatestZsaNews2026();
      } else if (item.isTimetable) {
        zsaTimetableViewEl.style.display = "flex";
        rightLabelEl.textContent = "Rozkład Zajęć 2026";
        leftNavLabelEl.textContent = "Wybór Szkoły i Klasy";
        startBtnTextEl.textContent = "Pełny PDF";
        ttStep = "SCHOOL";
        ttFocusArea = "MAIN";
        renderTimetableUI();
      } else if (item.isDirections) {
        zsaDirectionsViewEl.style.display = "flex";
        rightLabelEl.textContent = "Technikum i Liceum";
        leftNavLabelEl.textContent = "Oferta Edukacyjna";
        startBtnTextEl.textContent = "Portal ZSA";
        dirStep = "LIST";
        dirFocusIdx = 0;
        updateDirectionsFocusUI();
      } else if (item.isTeachers) {
        if (zsaTeachersViewEl) zsaTeachersViewEl.style.display = "flex";
        rightLabelEl.textContent = "Godziny i Sale Nauczycieli (PDF)";
        leftNavLabelEl.textContent = "Wykaz Nauczycieli";
        startBtnTextEl.textContent = "Pełny PDF";
        tchStep = "LIST";
        tchFocusArea = "MAIN";
        renderTeachersUI();
        fetchCloudScheduleData();
      } else if (item.isDocs) {
        if (zsaDocsViewEl) zsaDocsViewEl.style.display = "flex";
        rightLabelEl.textContent = "Statuty, Regulaminy i Programy";
        leftNavLabelEl.textContent = "Dokumentacja ZSA";
        startBtnTextEl.textContent = "Pobierz Plik";
        docStep = "LIST";
        docFocusArea = "MAIN";
        renderDocsUI();
      } else if (item.isCalendar) {
        if (zsaCalendarViewEl) zsaCalendarViewEl.style.display = "flex";
        rightLabelEl.textContent = "Kalendarz ZSA";
        leftNavLabelEl.textContent = "Dni Wolne & Nieobecności";
        startBtnTextEl.textContent = "Odśwież Dane";
        calFocusArea = "GRID";
        renderCalendarUI();
        fetchCloudScheduleData();
      } else if (item.isContact) {
        if (zsaContactViewEl) zsaContactViewEl.style.display = "flex";
        rightLabelEl.textContent = "Dane Kontaktowe";
        leftNavLabelEl.textContent = "Kontakt & Social Media";
        startBtnTextEl.textContent = "Portal ZSA";
        contactFocusIdx = 0;
        if (contactScrollWrapEl) contactScrollWrapEl.scrollTop = 0;
        updateContactFocusUI();
        if (typeof syncInputPromptsUI === "function") syncInputPromptsUI();
      } else if (item.isLibrus) {
      if (zsaLibrusViewEl) zsaLibrusViewEl.style.display = "flex";
      rightLabelEl.textContent = "Frekwencja i Oceny";
      leftNavLabelEl.textContent = "Szybki Librus";
      startBtnTextEl.textContent = "Portal Librus";
      startBtnEl.classList.add("focused");
      if (typeof window.onOpenSzybkiLibrus === "function") window.onOpenSzybkiLibrus();
      } else if (item.isGoldHen) {
        if (zsaGoldHenViewEl) zsaGoldHenViewEl.style.display = "flex";
        rightLabelEl.textContent = "Moduł Administracyjny";
        leftNavLabelEl.textContent = "GoldHEN Admin";
        startBtnTextEl.textContent = "Wyjdź";
        startBtnEl.classList.add("focused");
        if (typeof window.renderGoldHenUI === "function") window.renderGoldHenUI();
      } else {
        gameInfoViewEl.style.display = "flex";
        rightLabelEl.textContent = "Informacje";
        leftNavLabelEl.textContent = "Informacje o grze";
        startBtnTextEl.innerHTML = item.isDisc
          ? `Start ${DISC_ICON_SVG.replace('class="ps4-disc-icon"', 'class="ps4-disc-icon inline-disc"')}`
          : "Start";
        startBtnEl.classList.add("focused");

        document.getElementById("sub-desc-tag").textContent = item.subtitle || "INFORMACJE • ZSAGAMES";
        document.getElementById("sub-desc-text").textContent = item.description || "";
        document.getElementById("sub-meta-author").textContent = item.author || "ZSAGames — ZSA w Łomży";
        document.getElementById("sub-meta-platform").textContent = item.platform || "Przeglądarka HTML5";
        document.getElementById("sub-meta-url").textContent = item.url || "https://zsagames.github.io";
      }

      updateSubmenuBackdropMedia(item);
    }

    function syncUiState() {
      const verticalMode = isPortraitTouchLayout();

      if (navLevel !== "SUBMENU") {
        isGoldHenOpen = false;
      }

      if (verticalMode) {
        const mainTranslateY = cachedFocusY - mainIndex * cachedTileStepY;
        mainTrackEl.style.transform = `translate3d(0, ${Math.round(mainTranslateY)}px, 0)`;

        if (navLevel === "MAIN") {
          folderTrackEl.style.transform = `translate3d(0, ${Math.round(cachedFocusY)}px, 0)`;
        } else {
          const folderTranslateY = cachedFocusY - folderIndex * cachedTileStepY;
          folderTrackEl.style.transform = `translate3d(0, ${Math.round(folderTranslateY)}px, 0)`;
        }
      } else {
        const mainTranslateX = cachedFocusX - mainIndex * cachedTileStep;
        mainTrackEl.style.transform = `translate3d(${Math.round(mainTranslateX)}px, 0, 0)`;

        if (navLevel === "MAIN") {
          folderTrackEl.style.transform = `translate3d(${Math.round(cachedFocusX)}px, 0, 0)`;
        } else {
          const folderTranslateX = cachedFocusX - folderIndex * cachedTileStep;
          folderTrackEl.style.transform = `translate3d(${Math.round(folderTranslateX)}px, 0, 0)`;
        }
      }

      Array.from(mainTrackEl.children).forEach((el, idx) => {
        el.classList.toggle("active", idx === mainIndex);
      });

      Array.from(folderTrackEl.children).forEach((el, idx) => {
        el.classList.toggle("active", navLevel !== "MAIN" && idx === folderIndex);
      });

      const onFolderTile = MAIN_RIBBON_ITEMS[mainIndex]?.type === "folder";
      document.body.classList.toggle("folder-preview", !verticalMode && navLevel === "MAIN" && onFolderTile);
      document.body.classList.toggle("state-folder", navLevel === "FOLDER");
      document.body.classList.toggle("state-submenu", navLevel === "SUBMENU");
      document.body.classList.toggle("from-folder", navLevel === "SUBMENU" && enteredSubmenuFromFolder);

      if (navLevel === "SUBMENU") {
        const activeItem = getActiveGameItem();
        populateSubmenuScreen(activeItem);
      } else {
        clearTimeout(newsImageDwellTimer);
        pauseBackdropVideo();
        if (document.activeElement && document.activeElement.tagName === "INPUT") {
          document.activeElement.blur();
        }
      }
      if (window.ZSA_SCHOOL_3D) {
        const activeIdx = navLevel === "FOLDER" ? folderIndex : mainIndex;
        const activeTotal = navLevel === "FOLDER" ? CUSTOM_GAMES_DATA.length : MAIN_RIBBON_ITEMS.length;
        window.ZSA_SCHOOL_3D.setRibbonPosition(activeIdx, activeTotal, navLevel);
      }
      syncBackgroundMusic();
    }

    function navigateLeft() {
      if (isSystemSleeping || isDiscModalOpen() || performance.now() < wakeUpCooldownUntil) return;
      unlockAudioOnInteraction();

      if (navLevel === "SUBMENU") {
        const activeItem = getActiveGameItem();

        if (activeItem?.isGoldHen || activeItem?.isLibrus) return;

        if (activeItem?.isContact) {
          if (contactFocusIdx > 0) contactFocusIdx--;
          else contactFocusIdx = -1;
          playCustomWav("move");
          updateContactFocusUI();
          return;
        }

        if (activeItem?.isCalendar) {
          if (calFocusArea === "GRID") shiftCalendarSelectedDay(-1);
          return;
        }

        if (activeItem?.isDocs) {
          if (docFocusArea === "BACK_BTN" || docFocusArea === "SEARCH_INPUT") {
            if (docSearchInputEl) docSearchInputEl.blur();
            docFocusArea = "START_BTN";
          } else if (docStep === "LIST" && docFocusArea === "MAIN") {
            if (docFocusIdx >= 3) docFocusIdx = Math.min(2, docFocusIdx - 3);
            else docFocusArea = "START_BTN";
          } else {
            docFocusArea = "START_BTN";
          }
          playCustomWav("move");
          syncDocsFocusVisuals();
          return;
        }

        if (activeItem?.isDirections) {
          if (dirStep === "LIST") {
            if (dirFocusIdx >= 2) dirFocusIdx -= 2;
            else dirFocusIdx = -1;
          } else {
            if (dirDetailFocus === "BACK_BTN") dirDetailFocus = "OPEN_URL";
            else dirDetailFocus = "START_BTN";
          }
          playCustomWav("move");
          updateDirectionsFocusUI();
          return;
        }

        if (activeItem?.isWhatsNew) {
          if (whatsNewFocusIndex !== -2) {
            whatsNewFocusIndex = -2;
            playCustomWav("move");
            updateWhatsNewFocusUI();
          }
          return;
        }

        if (activeItem?.isTimetable) {
          if (ttFocusArea === "BACK_BTN") {
            ttFocusArea = "PDF_BTN";
            playCustomWav("move");
            syncTimetableFocusVisuals();
            return;
          }
          if (ttStep === "SCHOOL" && ttFocusArea === "MAIN") {
            if (ttSchoolFocusIdx > 0) ttSchoolFocusIdx--;
            else ttFocusArea = "PDF_BTN";
            playCustomWav("move");
            syncTimetableFocusVisuals();
          } else if (ttStep === "CLASS" && ttFocusArea === "MAIN") {
            const cards = Array.from(ttClassStepEl.querySelectorAll(".tt-class-card"));
            const curCard = cards[ttClassFocusIdx];
            const prevCard = cards[ttClassFocusIdx - 1];
            if (prevCard && curCard && Math.abs(prevCard.getBoundingClientRect().top - curCard.getBoundingClientRect().top) < 18) {
              ttClassFocusIdx--;
            } else {
              ttFocusArea = "PDF_BTN";
            }
            playCustomWav("move");
            syncTimetableFocusVisuals();
          } else if (ttStep === "SCHEDULE" && ttFocusArea === "MAIN") {
            ttFocusArea = "PDF_BTN";
            playCustomWav("move");
            syncTimetableFocusVisuals();
          }
          return;
        }

        if (activeItem?.isTeachers) {
          if (tchFocusArea === "BACK_BTN" || tchFocusArea === "SEARCH_INPUT") {
            if (tchSearchInputEl) tchSearchInputEl.blur();
            tchFocusArea = "PDF_BTN";
            playCustomWav("move");
            syncTeachersFocusVisuals();
            return;
          }
          if (tchStep === "LIST" && tchFocusArea === "MAIN") {
            const cards = Array.from(tchListStepEl.querySelectorAll(".tch-card"));
            const curCard = cards[tchFocusIdx];
            const prevCard = cards[tchFocusIdx - 1];
            if (prevCard && curCard && Math.abs(prevCard.getBoundingClientRect().top - curCard.getBoundingClientRect().top) < 18) {
              tchFocusIdx--;
            } else {
              tchFocusArea = "PDF_BTN";
            }
          } else {
            tchFocusArea = "PDF_BTN";
          }
          playCustomWav("move");
          syncTeachersFocusVisuals();
          return;
        }

        return;
      }

      if (navLevel === "MAIN") {
        if (mainIndex > 0) {
          mainIndex--;
          playCustomWav("move");
          syncUiState();
        }
      } else if (navLevel === "FOLDER") {
        if (folderIndex > 0) {
          folderIndex--;
          playCustomWav("move");
          syncUiState();
        }
      }
    }

    function navigateRight() {
      if (isSystemSleeping || isDiscModalOpen() || performance.now() < wakeUpCooldownUntil) return;
      unlockAudioOnInteraction();

      if (navLevel === "SUBMENU") {
        const activeItem = getActiveGameItem();

        if (activeItem?.isGoldHen || activeItem?.isLibrus) return;

        if (activeItem?.isContact) {
          const maxIdx = contactCardsEls().length - 1;
          if (contactFocusIdx < maxIdx) {
            contactFocusIdx++;
            playCustomWav("move");
            updateContactFocusUI();
          }
          return;
        }

        if (activeItem?.isCalendar) {
          if (calFocusArea === "START_BTN") {
            calFocusArea = "GRID";
            playCustomWav("move");
            renderCalendarUI();
          } else {
            shiftCalendarSelectedDay(1);
          }
          return;
        }

        if (activeItem?.isDocs) {
          if (docFocusArea === "START_BTN") {
            docFocusArea = docStep === "READER" ? "OPEN_FILE_BTN" : "MAIN";
          } else if (docStep === "LIST" && docFocusArea === "MAIN" && docFocusIdx < 3) {
            docFocusIdx = Math.min(DOCS_LIBRARY_DB.length - 1, docFocusIdx + 3);
          } else if (docStep === "READER") {
            docFocusArea = "BACK_BTN";
          }
          playCustomWav("move");
          syncDocsFocusVisuals();
          return;
        }

        if (activeItem?.isDirections) {
          if (dirStep === "LIST") {
            if (dirFocusIdx === -1) dirFocusIdx = 0;
            else if (dirFocusIdx < 2) dirFocusIdx += 2;
          } else {
            if (dirDetailFocus === "START_BTN") dirDetailFocus = "OPEN_URL";
            else if (dirDetailFocus === "OPEN_URL") dirDetailFocus = "BACK_BTN";
          }
          playCustomWav("move");
          updateDirectionsFocusUI();
          return;
        }

        if (activeItem?.isWhatsNew) {
          if (whatsNewFocusIndex === -2) {
            whatsNewFocusIndex = 0;
            playCustomWav("move");
            updateWhatsNewFocusUI();
          }
          return;
        }

        if (activeItem?.isTimetable) {
          if (ttFocusArea === "PDF_BTN") {
            ttFocusArea = "MAIN";
            playCustomWav("move");
            syncTimetableFocusVisuals();
            return;
          }
          if (ttStep === "SCHOOL" && ttFocusArea === "MAIN" && ttSchoolFocusIdx < 1) {
            ttSchoolFocusIdx++;
            playCustomWav("move");
            syncTimetableFocusVisuals();
          } else if (ttStep === "CLASS" && ttFocusArea === "MAIN") {
            const list = DEFAULT_TIMETABLE_DB[ttSchoolKey] || [];
            if (ttClassFocusIdx < list.length - 1) {
              ttClassFocusIdx++;
              playCustomWav("move");
              syncTimetableFocusVisuals();
            }
          } else if (ttStep === "SCHEDULE" && ttFocusArea === "MAIN") {
            ttFocusArea = "BACK_BTN";
            playCustomWav("move");
            syncTimetableFocusVisuals();
          }
          return;
        }

        if (activeItem?.isTeachers) {
          if (tchFocusArea === "PDF_BTN") {
            tchFocusArea = "MAIN";
            playCustomWav("move");
            syncTeachersFocusVisuals();
            return;
          }
          if (tchStep === "LIST" && tchFocusArea === "MAIN") {
            const filtered = getFilteredTeachers();
            if (tchFocusIdx < filtered.length - 1) {
              tchFocusIdx++;
              playCustomWav("move");
              syncTeachersFocusVisuals();
            }
          } else if (tchStep === "SCHEDULE" && tchFocusArea === "MAIN") {
            tchFocusArea = "BACK_BTN";
            playCustomWav("move");
            syncTeachersFocusVisuals();
          }
          return;
        }

        return;
      }

      if (navLevel === "MAIN") {
        if (mainIndex < MAIN_RIBBON_ITEMS.length - 1) {
          mainIndex++;
          playCustomWav("move");
          syncUiState();
        }
      } else if (navLevel === "FOLDER") {
        if (folderIndex < CUSTOM_GAMES_DATA.length - 1) {
          folderIndex++;
          playCustomWav("move");
          syncUiState();
        }
      }
    }

    function navigateDown() {
      if (isSystemSleeping || isDiscModalOpen() || performance.now() < wakeUpCooldownUntil) return;
      unlockAudioOnInteraction();

      if (navLevel === "SUBMENU") {
        const activeItem = getActiveGameItem();

        if (activeItem?.isGoldHen || activeItem?.isLibrus) return;

        if (activeItem?.isContact) {
          if (contactFocusIdx === -1) {
            contactFocusIdx = 0;
            playCustomWav("move");
            updateContactFocusUI();
          } else if (contactScrollWrapEl) {
            contactScrollWrapEl.scrollBy({ top: 150, behavior: "smooth" });
            playCustomWav("move");
          }
          return;
        }

        if (activeItem?.isCalendar) {
          if (calFocusArea === "START_BTN") {
            calFocusArea = "GRID";
            renderCalendarUI();
          } else {
            shiftCalendarSelectedDay(7);
          }
          return;
        }

        if (activeItem?.isDocs) {
          if (docFocusArea === "SEARCH_INPUT" || docFocusArea === "BACK_BTN") {
            if (docSearchInputEl) docSearchInputEl.blur();
            docFocusArea = "MAIN";
            playCustomWav("move");
            syncDocsFocusVisuals();
            return;
          }
          if (docStep === "LIST" && docFocusArea === "MAIN") {
            if (docFocusIdx !== 2 && docFocusIdx < DOCS_LIBRARY_DB.length - 1) {
              docFocusIdx++;
              playCustomWav("move");
              syncDocsFocusVisuals();
            }
          } else if (docStep === "READER") {
            docReaderStepEl.scrollBy({ top: 170, behavior: "smooth" });
            playCustomWav("move");
          }
          return;
        }

        if (activeItem?.isDirections) {
          if (dirStep === "LIST") {
            if (dirFocusIdx === -1) dirFocusIdx = 0;
            else if (dirFocusIdx === 0 || dirFocusIdx === 2) dirFocusIdx++;
            playCustomWav("move");
            updateDirectionsFocusUI();
          } else {
            if (dirDetailFocus === "BACK_BTN") {
              dirDetailFocus = "OPEN_URL";
              updateDirectionsFocusUI();
            }
            dirDetailStepEl.scrollBy({ top: 150, behavior: "smooth" });
            playCustomWav("move");
          }
          return;
        }

        if (activeItem?.isWhatsNew) {
          if (whatsNewFocusIndex < 0) {
            whatsNewFocusIndex = 0;
          } else if (whatsNewFocusIndex < zsaNewsArticles.length - 1) {
            whatsNewFocusIndex++;
          }
          playCustomWav("move");
          updateWhatsNewFocusUI();
          return;
        }

        if (activeItem?.isTimetable) {
          if (ttFocusArea === "BACK_BTN") {
            ttFocusArea = "MAIN";
            playCustomWav("move");
            syncTimetableFocusVisuals();
            return;
          }
          if (ttStep === "CLASS" && ttFocusArea === "MAIN") {
            const cards = Array.from(ttClassStepEl.querySelectorAll(".tt-class-card"));
            const alignedBelowIdx = findVerticallyAlignedCardIndex(cards, ttClassFocusIdx, 1);
            if (alignedBelowIdx !== -1) {
              ttClassFocusIdx = alignedBelowIdx;
              playCustomWav("move");
              syncTimetableFocusVisuals();
            }
          } else if (ttStep === "SCHEDULE") {
            ttFocusArea = "MAIN";
            syncTimetableFocusVisuals();
            ttScheduleStepEl.scrollBy({ top: 160, behavior: "smooth" });
            playCustomWav("move");
          }
          return;
        }

        if (activeItem?.isTeachers) {
          if (tchFocusArea === "SEARCH_INPUT" || tchFocusArea === "BACK_BTN") {
            if (tchSearchInputEl) tchSearchInputEl.blur();
            tchFocusArea = "MAIN";
            playCustomWav("move");
            syncTeachersFocusVisuals();
            return;
          }
          if (tchStep === "LIST" && tchFocusArea === "MAIN") {
            const cards = Array.from(tchListStepEl.querySelectorAll(".tch-card"));
            const alignedBelowIdx = findVerticallyAlignedCardIndex(cards, tchFocusIdx, 1);
            if (alignedBelowIdx !== -1) {
              tchFocusIdx = alignedBelowIdx;
              playCustomWav("move");
              syncTeachersFocusVisuals();
            }
          } else if (tchStep === "SCHEDULE") {
            tchFocusArea = "MAIN";
            syncTeachersFocusVisuals();
            tchScheduleStepEl.scrollBy({ top: 160, behavior: "smooth" });
            playCustomWav("move");
          }
          return;
        }

        return;
      }

      if (navLevel === "MAIN") {
        const current = MAIN_RIBBON_ITEMS[mainIndex];
        if (current.type === "folder") {
          navLevel = "FOLDER";
          playCustomWav("move");
          syncUiState();
        } else {
          enteredSubmenuFromFolder = false;
          navLevel = "SUBMENU";
          playCustomWav("select");
          syncUiState();
        }
      } else if (navLevel === "FOLDER") {
        enteredSubmenuFromFolder = true;
        navLevel = "SUBMENU";
        playCustomWav("select");
        syncUiState();
      }
    }

    function navigateUp(isBackButton = false) {
      if (isSystemSleeping || performance.now() < wakeUpCooldownUntil) return;
      unlockAudioOnInteraction();

      if (isDiscModalOpen()) {
        if (isBackButton) closeDiscModal();
        return;
      }

      if (navLevel === "SUBMENU") {
        const activeItem = getActiveGameItem();

        if (activeItem?.isGoldHen) {
          if (activeItem?.isLibrus && !isBackButton) return;
          if (typeof window.isGoldHenEditorOpen === "function" && window.isGoldHenEditorOpen()) {
            window.closeGoldHenEditor();
            return;
          }
        }

        if (activeItem?.isContact && !isBackButton && contactScrollWrapEl && contactScrollWrapEl.scrollTop > 10) {
          contactScrollWrapEl.scrollBy({ top: -150, behavior: "smooth" });
          playCustomWav("move");
          return;
        }

        if (activeItem?.isCalendar) {
          if (!isBackButton && moveCalendarUpOneRow()) {
            return;
          }
        }

        if (activeItem?.isDocs) {
          if (docStep === "READER") {
            if (isBackButton) {
              closeDocReader();
              return;
            }
            if (docReaderStepEl.scrollTop > 10) {
              docReaderStepEl.scrollBy({ top: -170, behavior: "smooth" });
              playCustomWav("move");
              return;
            }
            closeDocReader();
            return;
          } else if (docStep === "LIST" && !isBackButton) {
            if (docFocusArea === "MAIN" && docFocusIdx !== 0 && docFocusIdx !== 3) {
              docFocusIdx--;
              playCustomWav("move");
              syncDocsFocusVisuals();
              return;
            } else if (docFocusArea === "MAIN") {
              docFocusArea = "SEARCH_INPUT";
              playCustomWav("move");
              syncDocsFocusVisuals();
              return;
            }
          }
        }

        if (activeItem?.isDirections) {
          if (dirStep === "DETAIL") {
            if (isBackButton) {
              closeDirectionDetail();
              return;
            }
            if (dirDetailStepEl.scrollTop > 10) {
              dirDetailStepEl.scrollBy({ top: -150, behavior: "smooth" });
              playCustomWav("move");
              return;
            }
            if (dirDetailFocus !== "BACK_BTN") {
              dirDetailFocus = "BACK_BTN";
              playCustomWav("move");
              updateDirectionsFocusUI();
              return;
            }
            closeDirectionDetail();
            return;
          }
          if (!isBackButton && (dirFocusIdx === 1 || dirFocusIdx === 3)) {
            dirFocusIdx--;
            playCustomWav("move");
            updateDirectionsFocusUI();
            return;
          }
        }

        if (activeItem?.isWhatsNew && !isBackButton) {
          if (whatsNewFocusIndex > 0) {
            whatsNewFocusIndex--;
            playCustomWav("move");
            updateWhatsNewFocusUI();
            return;
          } else if (whatsNewFocusIndex === 0) {
            whatsNewFocusIndex = -1;
            playCustomWav("move");
            updateWhatsNewFocusUI();
            return;
          }
        }

        if (activeItem?.isTimetable) {
          if (ttStep === "SCHEDULE") {
            if (!isBackButton && ttScheduleStepEl.scrollTop > 10) {
              ttScheduleStepEl.scrollBy({ top: -160, behavior: "smooth" });
              playCustomWav("move");
              return;
            }
            if (!isBackButton && ttFocusArea !== "BACK_BTN") {
              ttFocusArea = "BACK_BTN";
              playCustomWav("move");
              syncTimetableFocusVisuals();
              return;
            }
            ttStep = "CLASS";
            ttFocusArea = "MAIN";
            playCustomWav("back");
            renderTimetableUI();
            return;
          } else if (ttStep === "CLASS") {
            if (isBackButton) {
              ttStep = "SCHOOL";
              ttFocusArea = "MAIN";
              playCustomWav("back");
              renderTimetableUI();
              return;
            }
            if (ttFocusArea === "MAIN") {
              const cards = Array.from(ttClassStepEl.querySelectorAll(".tt-class-card"));
              const alignedAboveIdx = findVerticallyAlignedCardIndex(cards, ttClassFocusIdx, -1);
              if (alignedAboveIdx !== -1) {
                ttClassFocusIdx = alignedAboveIdx;
                playCustomWav("move");
                syncTimetableFocusVisuals();
                return;
              }
              ttFocusArea = "BACK_BTN";
              playCustomWav("move");
              syncTimetableFocusVisuals();
              return;
            } else if (ttFocusArea === "BACK_BTN") {
              ttStep = "SCHOOL";
              ttFocusArea = "MAIN";
              playCustomWav("back");
              renderTimetableUI();
              return;
            }
          }
        }

        if (activeItem?.isTeachers) {
          if (tchStep === "SCHEDULE") {
            if (!isBackButton && tchScheduleStepEl.scrollTop > 10) {
              tchScheduleStepEl.scrollBy({ top: -160, behavior: "smooth" });
              playCustomWav("move");
              return;
            }
            if (!isBackButton && tchFocusArea !== "BACK_BTN") {
              tchFocusArea = "BACK_BTN";
              playCustomWav("move");
              syncTeachersFocusVisuals();
              return;
            }
            tchStep = "LIST";
            tchFocusArea = "MAIN";
            playCustomWav("back");
            renderTeachersUI();
            return;
          } else if (tchStep === "LIST" && !isBackButton) {
            if (tchFocusArea === "MAIN") {
              const cards = Array.from(tchListStepEl.querySelectorAll(".tch-card"));
              const alignedAboveIdx = findVerticallyAlignedCardIndex(cards, tchFocusIdx, -1);
              if (alignedAboveIdx !== -1) {
                tchFocusIdx = alignedAboveIdx;
                playCustomWav("move");
                syncTeachersFocusVisuals();
                return;
              }
              tchFocusArea = "SEARCH_INPUT";
              playCustomWav("move");
              syncTeachersFocusVisuals();
              return;
            }
          }
        }

        navLevel = enteredSubmenuFromFolder ? "FOLDER" : "MAIN";
        playCustomWav("back");
        syncUiState();
      } else if (navLevel === "FOLDER") {
        navLevel = "MAIN";
        playCustomWav("back");
        syncUiState();
      }
    }

    function triggerPressAnimation() {
      const startBtn = document.getElementById("sub-start-btn");
      if (navLevel === "SUBMENU" && startBtn) {
        startBtn.classList.add("pressed");
        setTimeout(() => startBtn.classList.remove("pressed"), 160);
      } else {
        const activeTile = (navLevel === "FOLDER" ? folderTrackEl : mainTrackEl).querySelector(".ps4-tile.active");
        if (activeTile) {
          activeTile.classList.add("pressed");
          setTimeout(() => activeTile.classList.remove("pressed"), 160);
        }
      }
    }

    function launchActiveItem() {
      if (isSystemSleeping || isDiscModalOpen() || curr.isLibrus || performance.now() < wakeUpCooldownUntil) return;
      unlockAudioOnInteraction();

      if (navLevel === "MAIN") {
        const curr = MAIN_RIBBON_ITEMS[mainIndex];
        if (
          curr.type === "folder" ||
          curr.isWhatsNew ||
          curr.isTimetable ||
          curr.isDirections ||
          curr.isTeachers ||
          curr.isDocs ||
          curr.isCalendar ||
          curr.isContact ||
          curr.isGoldHen
        ) {
          navigateDown();
          return;
        }
      }

      const item = getActiveGameItem();

      if (navLevel === "SUBMENU" && item?.isGoldHen) {
        navigateUp(true);
        return;
      }

      if (navLevel === "SUBMENU" && item?.isContact) {
        if (contactFocusIdx >= 0) {
          const card = contactCardsEls()[contactFocusIdx];
          if (card) {
            const url = card.getAttribute("data-url");
            const title = card.getAttribute("data-title") || "Kontakt ZSA";
            if (url) launchUrlWithSleepDelay(url, title);
          }
          return;
        }
      }

      if (navLevel === "SUBMENU" && item?.isCalendar) {
        triggerPressAnimation();
        playCustomWav("select");
        fetchCloudScheduleData();
        return;
      }

      if (navLevel === "SUBMENU" && item?.isDocs) {
        const currentDoc = DOCS_LIBRARY_DB.find((d) => d.id === docSelectedId) || DOCS_LIBRARY_DB[docFocusIdx] || DOCS_LIBRARY_DB[0];
        if (docFocusArea === "START_BTN" || docFocusArea === "OPEN_FILE_BTN") {
          triggerPressAnimation();
          launchUrlWithSleepDelay(currentDoc.file, currentDoc.title);
          return;
        }
        if (docFocusArea === "BACK_BTN") {
          closeDocReader();
          return;
        }
        if (docFocusArea === "SEARCH_INPUT") {
          if (docSearchInputEl) docSearchInputEl.focus();
          return;
        }
        if (docStep === "LIST") {
          const targetDoc = DOCS_LIBRARY_DB[docFocusIdx] || DOCS_LIBRARY_DB[0];
          openDocReader(targetDoc.id);
          return;
        } else if (docStep === "READER") {
          triggerPressAnimation();
          launchUrlWithSleepDelay(currentDoc.file, currentDoc.title);
          return;
        }
      }

      if (navLevel === "SUBMENU" && item?.isDirections) {
        if (dirStep === "LIST") {
          if (dirFocusIdx >= 0) {
            openDirectionDetail(dirFocusIdx);
            return;
          }
        } else if (dirStep === "DETAIL") {
          if (dirDetailFocus === "BACK_BTN") {
            closeDirectionDetail();
            return;
          } else if (dirDetailFocus === "OPEN_URL") {
            const data = DIRECTIONS_CONTENT_DB[dirSelectedIdx];
            if (data && data.url) {
              launchUrlWithSleepDelay(data.url, data.title);
            }
            return;
          }
        }
      }

      if (navLevel === "SUBMENU" && item?.isWhatsNew) {
        if (whatsNewFocusIndex === -1) {
          playCustomWav("select");
          fetchLatestZsaNews2026();
          return;
        } else if (whatsNewFocusIndex >= 0) {
          const art = zsaNewsArticles[whatsNewFocusIndex];
          if (art && art.url) {
            launchUrlWithSleepDelay(art.url, art.title);
          }
          return;
        }
      }

      if (navLevel === "SUBMENU" && item?.isTimetable) {
        if (ttFocusArea === "PDF_BTN") {
          triggerPressAnimation();
          launchUrlWithSleepDelay(item.url, "Pełny Plan Lekcji PDF (ZSA)");
          return;
        }
        if (ttFocusArea === "BACK_BTN") {
          navigateUp(true);
          return;
        }
        if (ttStep === "SCHOOL") {
          ttSchoolKey = ttSchoolFocusIdx === 0 ? "ALO" : "AT";
          ttClassFocusIdx = 0;
          ttStep = "CLASS";
          ttFocusArea = "MAIN";
          playCustomWav("select");
          renderTimetableUI();
          return;
        } else if (ttStep === "CLASS") {
          ttStep = "SCHEDULE";
          ttFocusArea = "MAIN";
          playCustomWav("select");
          renderTimetableUI();
          return;
        } else if (ttStep === "SCHEDULE") {
          triggerPressAnimation();
          launchUrlWithSleepDelay(item.url, "Pełny Plan Lekcji PDF (ZSA)");
          return;
        }
      }

      if (navLevel === "SUBMENU" && item?.isTeachers) {
        if (tchFocusArea === "PDF_BTN") {
          triggerPressAnimation();
          launchUrlWithSleepDelay(item.url, "Pełny Plan Lekcji PDF (ZSA)");
          return;
        }
        if (tchFocusArea === "BACK_BTN") {
          navigateUp(true);
          return;
        }
        if (tchFocusArea === "SEARCH_INPUT") {
          if (tchSearchInputEl) tchSearchInputEl.focus();
          return;
        }
        if (tchStep === "LIST") {
          const filtered = getFilteredTeachers();
          const chosen = filtered[tchFocusIdx];
          if (chosen) {
            tchSelectedCode = chosen.code;
            tchStep = "SCHEDULE";
            tchFocusArea = "MAIN";
            playCustomWav("select");
            renderTeachersUI();
          }
          return;
        } else if (tchStep === "SCHEDULE") {
          triggerPressAnimation();
          launchUrlWithSleepDelay(item.url, "Pełny Plan Lekcji PDF (ZSA)");
          return;
        }
      }

      if (item && item.isDisc && !isDiscUnlocked(item)) {
        triggerPressAnimation();
        openDiscModal(item);
        return;
      }

      if (item && item.url) {
        triggerPressAnimation();
        launchUrlWithSleepDelay(item.url, item.title);
      }
    }

    const subStartBtnEl = document.getElementById("sub-start-btn");
    subStartBtnEl.addEventListener("mouseenter", () => {
      if (navLevel !== "SUBMENU") return;
      const item = getActiveGameItem();
      if (item?.isWhatsNew) {
        whatsNewFocusIndex = -2;
        updateWhatsNewFocusUI();
      } else if (item?.isTimetable) {
        ttFocusArea = "PDF_BTN";
        syncTimetableFocusVisuals();
      } else if (item?.isDirections) {
        if (dirStep === "LIST") dirFocusIdx = -1;
        else dirDetailFocus = "START_BTN";
        updateDirectionsFocusUI();
      } else if (item?.isTeachers) {
        tchFocusArea = "PDF_BTN";
        syncTeachersFocusVisuals();
      } else if (item?.isDocs) {
        docFocusArea = "START_BTN";
        syncDocsFocusVisuals();
      } else if (item?.isCalendar) {
        calFocusArea = "START_BTN";
        renderCalendarUI();
      } else if (item?.isContact) {
        contactFocusIdx = -1;
        updateContactFocusUI();
      }
    });

    subStartBtnEl.addEventListener("click", () => {
      const item = getActiveGameItem();
      if (item?.isGoldHen) {
        navigateUp(true);
        return;
      }
      if (item?.isCalendar) {
        triggerPressAnimation();
        playCustomWav("select");
        fetchCloudScheduleData();
        return;
      }
      if (item?.isDocs) {
        const currentDoc = DOCS_LIBRARY_DB.find((d) => d.id === docSelectedId) || DOCS_LIBRARY_DB[docFocusIdx] || DOCS_LIBRARY_DB[0];
        if (currentDoc?.file) {
          triggerPressAnimation();
          launchUrlWithSleepDelay(currentDoc.file, currentDoc.title);
        }
        return;
      }
      if (item && item.isDisc && !isDiscUnlocked(item)) {
        triggerPressAnimation();
        openDiscModal(item);
        return;
      }
      if (item && item.url) {
        triggerPressAnimation();
        launchUrlWithSleepDelay(item.url, item.title);
      }
    });

    const zsaRefreshBtnHoverEl = document.getElementById("zsa-refresh-btn");
    if (zsaRefreshBtnHoverEl) {
      zsaRefreshBtnHoverEl.addEventListener("mouseenter", () => {
        if (navLevel === "SUBMENU" && getActiveGameItem()?.isWhatsNew) {
          whatsNewFocusIndex = -1;
          updateWhatsNewFocusUI();
        }
      });
    }

    if (ttBackStepBtnEl) {
      ttBackStepBtnEl.addEventListener("mouseenter", () => {
        if (navLevel === "SUBMENU" && getActiveGameItem()?.isTimetable) {
          ttFocusArea = "BACK_BTN";
          syncTimetableFocusVisuals();
        }
      });
    }

    if (dirBackStepBtnEl) {
      dirBackStepBtnEl.addEventListener("mouseenter", () => {
        if (navLevel === "SUBMENU" && getActiveGameItem()?.isDirections && dirStep === "DETAIL") {
          dirDetailFocus = "BACK_BTN";
          updateDirectionsFocusUI();
        }
      });
    }

    if (tchBackStepBtnEl) {
      tchBackStepBtnEl.addEventListener("mouseenter", () => {
        if (navLevel === "SUBMENU" && getActiveGameItem()?.isTeachers) {
          tchFocusArea = "BACK_BTN";
          syncTeachersFocusVisuals();
        }
      });
    }

    if (tchSearchInputEl) {
      tchSearchInputEl.addEventListener("mouseenter", () => {
        if (navLevel === "SUBMENU" && getActiveGameItem()?.isTeachers && tchStep === "LIST") {
          tchFocusArea = "SEARCH_INPUT";
          syncTeachersFocusVisuals();
        }
      });
      tchSearchInputEl.addEventListener("focus", () => {
        tchFocusArea = "SEARCH_INPUT";
        syncTeachersFocusVisuals();
      });
    }

    window.addEventListener("keydown", (e) => {
      if (isSystemSleeping) {
        e.preventDefault();
        wakeUpFromSleepMode();
        return;
      }
      if (isDiscModalOpen()) {
        if (e.key === "Escape") {
          e.preventDefault();
          closeDiscModal();
        }
        return;
      }
      if (performance.now() < wakeUpCooldownUntil) return;

      const activeEl = document.activeElement;
      const activeTag = activeEl ? activeEl.tagName : "";

      if (activeEl && activeEl.closest && (activeEl.closest("#zsa-goldhen-view") || activeEl.closest("#zsa-librus-view"))) {
        if (activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT") {
          if (e.key === "Escape") {
            e.preventDefault();
            activeEl.blur();
          }
          return;
        }
        if (activeTag === "BUTTON" && (e.key === "Enter" || e.key === " ")) {
          return;
        }
      }

      if (activeTag === "INPUT" || activeTag === "TEXTAREA") {
        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === "Escape") {
          e.preventDefault();
          activeEl.blur();
          tchFocusArea = "MAIN";
          docFocusArea = "MAIN";
          playCustomWav("move");
          syncTeachersFocusVisuals();
          syncDocsFocusVisuals();
        }
        return;
      }

      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        e.preventDefault(); navigateLeft();
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        e.preventDefault(); navigateRight();
      } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        e.preventDefault(); navigateDown();
      } else if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        e.preventDefault(); navigateUp(false);
      } else if (e.key === "Escape" || e.key === "Backspace") {
        e.preventDefault(); navigateUp(true);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); launchActiveItem();
      }
    });

    let lastWheelTime = 0;
    window.addEventListener("wheel", (e) => {
      if (isSystemSleeping || isDiscModalOpen() || performance.now() < wakeUpCooldownUntil) return;

      if (navLevel === "SUBMENU") {
        const scrollable = e.target.closest(
          ".zsa-news-list, .tt-class-grid, .tt-schedule-wrap, .dir-columns, .dir-detail-wrap, .tch-grid, .cal-board, .cal-details-panel, .contact-scroll-wrap, .gh-empty-workspace, .lib-scroll-body"
        );
        if (scrollable) {
          return;
        }
        const activeItem = getActiveGameItem();
        if (
          activeItem?.isWhatsNew ||
          activeItem?.isTimetable ||
          activeItem?.isDirections ||
          activeItem?.isTeachers ||
          activeItem?.isDocs ||
          activeItem?.isCalendar ||
          activeItem?.isContact ||
          activeItem?.isGoldHen ||
          activeItem?.isLibrus
        ) {
          return;
        }
      }

      const now = performance.now();
      if (now - lastWheelTime < 110) return;

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (Math.abs(e.deltaX) > 8) {
          lastWheelTime = now;
          if (e.deltaX > 0) navigateRight();
          else navigateLeft();
        }
      } else if (Math.abs(e.deltaY) > 10) {
        lastWheelTime = now;
        if (navLevel === "SUBMENU") {
          if (e.deltaY < -20) navigateUp(true);
        } else {
          if (e.deltaY > 0) navigateRight();
          else navigateLeft();
        }
      }
    }, { passive: true });

    let touchStartX = 0;
    let touchStartY = 0;
    let touchLastX = 0;
    let touchLastY = 0;
    let touchMovedInScrollable = false;
    let ignoreClickUntil = 0;

    // Blokuje przypadkowe kliknięcie kafelka natychmiast po zakończeniu gestu swipe
    window.addEventListener("click", (e) => {
      if (performance.now() < ignoreClickUntil) {
        e.stopPropagation();
        e.preventDefault();
      }
    }, true);

    window.addEventListener("touchstart", (e) => {
      if (isSystemSleeping || e.touches.length !== 1) return;
      touchStartX = touchLastX = e.touches[0].clientX;
      touchStartY = touchLastY = e.touches[0].clientY;

      const scrollable = e.target.closest(
        ".zsa-news-list, .tt-class-grid, .tt-schedule-wrap, .dir-columns, .dir-detail-wrap, .tch-grid, .cal-board, .cal-details-panel, .contact-scroll-wrap, .cal-layout"
      );
      touchMovedInScrollable = Boolean(
        scrollable && (scrollable.scrollHeight > scrollable.clientHeight || scrollable.scrollWidth > scrollable.clientWidth)
      );
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (isSystemSleeping || e.touches.length !== 1 || touchMovedInScrollable) return;
      if (performance.now() < wakeUpCooldownUntil) return;

      const curX = e.touches[0].clientX;
      const curY = e.touches[0].clientY;
      const dx = curX - touchLastX;
      const dy = curY - touchLastY;
      const portraitMode = isPortraitTouchLayout();

      if (portraitMode && navLevel !== "SUBMENU") {
        // W trybie Portrait na wstędze: pionowy swipe przewija kafelki, poziomy otwiera/cofa
        if (Math.abs(dy) > Math.abs(dx)) {
          if (Math.abs(dy) >= 44) {
            ignoreClickUntil = performance.now() + 260;
            if (dy < 0) navigateRight();
            else navigateLeft();
            touchLastY = curY;
            touchLastX = curX;
          }
        } else if (Math.abs(dx) >= 58) {
          ignoreClickUntil = performance.now() + 260;
          if (dx < 0) navigateDown();
          else navigateUp(true);
          touchLastX = curX;
          touchLastY = curY;
        }
      } else {
        // Tryb Landscape (lub wewnątrz Submenu): poziomy swipe po wstędze, pionowy góra/dół
        if (Math.abs(dx) > Math.abs(dy)) {
          if (Math.abs(dx) >= 48) {
            ignoreClickUntil = performance.now() + 260;
            if (dx < 0) navigateRight();
            else navigateLeft();
            touchLastX = curX;
            touchLastY = curY;
          }
        } else if (Math.abs(dy) >= 46) {
          ignoreClickUntil = performance.now() + 260;
          if (dy < 0) navigateDown();
          else navigateUp(false);
          touchLastY = curY;
          touchLastX = curX;
        }
      }
    }, { passive: true });

    document.getElementById("btn-left").addEventListener("click", navigateLeft);
    document.getElementById("btn-right").addEventListener("click", navigateRight);
    document.getElementById("btn-up").addEventListener("click", () => {
      if (isPortraitTouchLayout() && navLevel !== "SUBMENU") navigateLeft();
      else navigateUp(false);
    });
    document.getElementById("btn-down").addEventListener("click", () => {
      if (isPortraitTouchLayout() && navLevel !== "SUBMENU") navigateRight();
      else navigateDown();
    });
    document.getElementById("btn-back").addEventListener("click", () => navigateUp(true));
    document.getElementById("btn-play").addEventListener("click", launchActiveItem);

    function returnToRibbonMenu() {
      if (isSystemSleeping || performance.now() < wakeUpCooldownUntil) return;
      unlockAudioOnInteraction();

      if (typeof isDiscModalOpen === "function" && isDiscModalOpen()) {
        closeDiscModal();
      }

      if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
        document.activeElement.blur();
      }

      if (navLevel === "SUBMENU") {
        navLevel = enteredSubmenuFromFolder ? "FOLDER" : "MAIN";
        playCustomWav("back");
        syncUiState();
      } else if (navLevel === "FOLDER") {
        navLevel = "MAIN";
        playCustomWav("back");
        syncUiState();
      }
    }

    document.getElementById("btn-return-menu")?.addEventListener("click", returnToRibbonMenu);

    // Płynne przeliczenie układu po obróceniu telefonu (Portrait <-> Landscape)
    let orientationResizeTimer = null;
    window.addEventListener("orientationchange", () => {
      clearTimeout(orientationResizeTimer);
      orientationResizeTimer = setTimeout(() => {
        resizeCanvas();
        if (typeof syncInputPromptsUI === "function") syncInputPromptsUI();
      }, 140);
    });

    /* ============================================================================
       OBSŁUGA KONTROLERA + AUTOMATYCZNE PRZEŁĄCZANIE IKON (PAD / PC / TELEFON)
       ============================================================================ */
    let isGamepadConnected = false;
    let lastPadTime = 0;

    function checkAnyGamepadConnected() {
      if (!navigator.getGamepads) return false;
      const pads = navigator.getGamepads();
      for (let i = 0; i < pads.length; i++) {
        if (pads[i] && pads[i].connected) return true;
      }
      return false;
    }

    function syncInputPromptsUI() {
      isGamepadConnected = checkAnyGamepadConnected();
      document.body.classList.toggle("has-gamepad", isGamepadConnected);

      const isMobile = document.body.classList.contains("is-mobile");
      const mode = isGamepadConnected ? "PAD" : (isMobile ? "MOBILE" : "PC");

      const crossText = mode === "PAD" ? "✕" : (mode === "PC" ? "Spacja" : "");
      const circleText = mode === "PAD" ? "○" : (mode === "PC" ? "Backspace" : "");
      const navText = mode === "PAD" ? "◀ ▶ ▲ ▼" : (mode === "PC" ? "Strzałki / WASD" : "");
      const inlinePrefix = mode === "PAD" ? "✕ " : (mode === "PC" ? "[Spacja] " : "");

      // 1. Podmiana wszystkich plakietek przycisków (.ds4-badge)
      document.querySelectorAll(".ds4-badge").forEach((badge) => {
        if (badge.classList.contains("cross")) {
          badge.textContent = crossText;
        } else if (badge.classList.contains("circle")) {
          badge.textContent = circleText;
        } else {
          badge.textContent = navText;
        }
      });

      // 2. Przyciski dotykowe na telefonie (bez znaczków PS, dopóki pad nie jest podłączony)
      const btnBackEl = document.getElementById("btn-back");
      const btnPlayEl = document.getElementById("btn-play");
      if (btnBackEl) btnBackEl.textContent = isGamepadConnected ? "○ Wróć" : "Wróć";
      if (btnPlayEl) btnPlayEl.textContent = isGamepadConnected ? "✕ Start" : "Start";

      // 3. Etykiety na kartach wyboru w Planie Lekcji i Kierunkach Kształcenia
      document.querySelectorAll(".tt-school-count, .dir-link-url").forEach((el) => {
        const clean = el.textContent.replace(/^(\[Spacja\]\s*|✕\s*)/, "");
        el.textContent = `${inlinePrefix}${clean}`;
      });

      // 4. Podpowiedzi w sekcji "Co nowego"
      const newsStatusEl = document.getElementById("zsa-news-status-text");
      if (newsStatusEl && !newsStatusEl.textContent.includes("Sprawdzanie")) {
        if (mode === "PAD") {
          newsStatusEl.textContent = "Nawiguj padem (▲ ▼) — zatrzymaj się na wpisie, aby rozwinąć zdjęcie";
        } else if (mode === "MOBILE") {
          newsStatusEl.textContent = "Przesuwaj palcem i dotknij wpisu, aby otworzyć artykuł";
        } else {
          newsStatusEl.textContent = "Nawiguj klawiaturą (▲ ▼ / WS) lub myszką — zatrzymaj się na wpisie, aby rozwinąć zdjęcie";
        }
      }

      document.querySelectorAll(".zsa-news-card").forEach((card) => {
        const hintEl = card.querySelector(".zsa-news-dwell-hint");
        if (!hintEl) return;
        const hasImg = card.getAttribute("data-has-image") === "1";
        if (mode === "PAD") {
          hintEl.textContent = hasImg ? "Zatrzymaj się, aby zobaczyć zdjęcie • ✕ Otwórz" : "✕ Otwórz artykuł";
        } else if (mode === "MOBILE") {
          hintEl.textContent = "Dotknij, aby otworzyć";
        } else {
          hintEl.textContent = hasImg ? "Zatrzymaj się, aby zobaczyć zdjęcie • [Spacja] Otwórz" : "[Spacja] Otwórz artykuł";
        }
      });
    }

    // Automatyczna aktualizacja po wyrenderowaniu listy aktualności ZSA lub zmianie rozmiaru okna
    const _origRenderZsaNewsList = renderZsaNewsList;
    renderZsaNewsList = function () {
      _origRenderZsaNewsList();
      syncInputPromptsUI();
    };

    window.addEventListener("gamepadconnected", syncInputPromptsUI);
    window.addEventListener("gamepaddisconnected", syncInputPromptsUI);
    window.addEventListener("resize", () => {
      detectRealMobile();
      syncInputPromptsUI();
    });

    syncInputPromptsUI();

    function pollGamepad(now) {
      const currentlyConnected = checkAnyGamepadConnected();
      if (currentlyConnected !== isGamepadConnected) {
        syncInputPromptsUI();
      }

      const pads = navigator.getGamepads ? navigator.getGamepads() : [];
      const pad = pads[0] || pads[1] || pads[2] || pads[3];
      if (!pad || now - lastPadTime <= 170) return;

      const axX = pad.axes[0] || 0;
      const axY = pad.axes[1] || 0;
      const up = pad.buttons[12]?.pressed || axY < -0.55;
      const down = pad.buttons[13]?.pressed || axY > 0.55;
      const left = pad.buttons[14]?.pressed || axX < -0.55;
      const right = pad.buttons[15]?.pressed || axX > 0.55;
      const crossBtn = pad.buttons[0]?.pressed;
      const circleBtn = pad.buttons[1]?.pressed;

      if (isSystemSleeping) {
        if (crossBtn || circleBtn || up || down || left || right) {
          lastPadTime = now + 250;
          wakeUpFromSleepMode();
        }
        return;
      }

      if (now < wakeUpCooldownUntil) return;

      if (left) { lastPadTime = now; navigateLeft(); }
      else if (right) { lastPadTime = now; navigateRight(); }
      else if (down) { lastPadTime = now; navigateDown(); }
      else if (up) { lastPadTime = now; navigateUp(false); }
      else if (circleBtn) { lastPadTime = now + 150; navigateUp(true); }
      else if (crossBtn) { lastPadTime = now + 180; launchActiveItem(); }
    }

    /* ============================================================================
       8B. ZEGAR 24-GODZINNY + ZEGAR NA ŻYWO W PLANIE LEKCJI (Z WYKRYWANIEM PRZERWY/LEKCJI)
       ============================================================================ */
    const clockDateEl = document.getElementById("ps4-clock-date");
    const clockTimeEl = document.getElementById("ps4-clock-time");
    const ttClockTimeEl = document.getElementById("tt-clock-time");
    const ttClockStatusEl = document.getElementById("tt-clock-status");

    function parseHmToMinutes(hmStr) {
      const [h, m] = hmStr.trim().split(":").map(Number);
      return h * 60 + m;
    }

    function getCurrentSchoolBellStatus(totalMinutes) {
      for (let i = 0; i < LESSON_HOURS.length; i++) {
        const [startStr, endStr] = LESSON_HOURS[i].split("-");
        const s = parseHmToMinutes(startStr);
        const e = parseHmToMinutes(endStr);
        if (totalMinutes >= s && totalMinutes < e) {
          return `• Trwa ${i + 1}. lekcja (do ${endStr.trim()})`;
        }
      }
      for (let i = 0; i < BREAK_HOURS.length; i++) {
        const [startStr, endStr] = BREAK_HOURS[i].time.split("-");
        const s = parseHmToMinutes(startStr);
        const e = parseHmToMinutes(endStr);
        if (totalMinutes >= s && totalMinutes < e) {
          return `• Trwa ${BREAK_HOURS[i].nr}. przerwa (do ${endStr.trim()})`;
        }
      }
      return "";
    }

    function updateClock() {
      const d = new Date();
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();
      const hours24 = String(d.getHours()).padStart(2, "0");
      const mins = String(d.getMinutes()).padStart(2, "0");
      const secs = String(d.getSeconds()).padStart(2, "0");

      clockDateEl.textContent = `${day}.${month}.${year}`;
      clockTimeEl.textContent = `${hours24}:${mins}`;

      if (ttClockTimeEl) {
        ttClockTimeEl.textContent = `${hours24}:${mins}:${secs}`;
      }
      if (ttClockStatusEl) {
        ttClockStatusEl.textContent = getCurrentSchoolBellStatus(d.getHours() * 60 + d.getMinutes());
      }
    }
    updateClock();
    setInterval(updateClock, 1000);

    /* ============================================================================
       9. ULEPSZONE TŁO XMB / PS4 SILK WAVE (ZOPTYMALIZOWANE POD LOW-END PC)
       ============================================================================ */
    const canvas = document.getElementById("ps4-wave-canvas");
    const allowWaveAlpha = !IS_LOW_END_PC && !document.body.classList.contains("is-mobile");
    const ctx = canvas.getContext("2d", { alpha: allowWaveAlpha, desynchronized: true });
    const bgCacheCanvas = document.createElement("canvas");
    const bgCacheCtx = bgCacheCanvas.getContext("2d", { alpha: false });

    const RENDER_SCALE = IS_LOW_END_PC ? 0.46 : 0.62;
    let cw = 0, ch = 0;
    let waveGradients = [];
    let crestGradients = [];

    const xmbSparkles = Array.from({ length: IS_LOW_END_PC ? 10 : 18 }, () => ({
      x: Math.random(),
      y: 0.42 + Math.random() * 0.42,
      r: 0.8 + Math.random() * 1.4,
      speedX: 0.00018 + Math.random() * 0.00024,
      phase: Math.random() * Math.PI * 2
    }));

    let waveParallaxX = 0;

    function rebuildCanvasCache() {
      bgCacheCanvas.width = cw;
      bgCacheCanvas.height = ch;

      /* Klasyczny kobaltowy gradient tła PS4 Orbis OS */
      const bgGrad = bgCacheCtx.createLinearGradient(0, 0, cw * 0.85, ch);
      bgGrad.addColorStop(0, "#0039a6");
      bgGrad.addColorStop(0.38, "#0046bf");
      bgGrad.addColorStop(0.72, "#002b82");
      bgGrad.addColorStop(1, "#001852");
      bgCacheCtx.fillStyle = bgGrad;
      bgCacheCtx.fillRect(0, 0, cw, ch);

      const glow = bgCacheCtx.createRadialGradient(cw * 0.52, ch * 0.32, cw * 0.05, cw * 0.52, ch * 0.32, cw * 0.68);
      glow.addColorStop(0, "rgba(110, 195, 255, 0.34)");
      glow.addColorStop(0.5, "rgba(38, 124, 240, 0.16)");
      glow.addColorStop(1, "rgba(0, 32, 96, 0)");
      bgCacheCtx.fillStyle = glow;
      bgCacheCtx.fillRect(0, 0, cw, ch);

      const fillConfigs = [
        ["rgba(0, 26, 94, 0.52)", "rgba(24, 102, 224, 0.42)", "rgba(96, 185, 255, 0.14)"],
        ["rgba(8, 52, 146, 0.46)", "rgba(56, 146, 255, 0.36)", "rgba(175, 225, 255, 0.16)"],
        ["rgba(18, 80, 190, 0.34)", "rgba(115, 196, 255, 0.24)", "rgba(235, 248, 255, 0.08)"]
      ];

      waveGradients = fillConfigs.map((stops) => {
        const g = ctx.createLinearGradient(0, ch * 0.24, cw, ch * 0.96);
        g.addColorStop(0, stops[0]);
        g.addColorStop(0.55, stops[1]);
        g.addColorStop(1, stops[2]);
        return g;
      });

      crestGradients = [
        "rgba(195, 232, 255, 0.56)",
        "rgba(240, 250, 255, 0.72)",
        "rgba(155, 215, 255, 0.38)"
      ];
    }

    function resizeCanvas() {
      cw = Math.max(320, Math.floor(window.innerWidth * RENDER_SCALE));
      ch = Math.max(200, Math.floor(window.innerHeight * RENDER_SCALE));
      canvas.width = cw;
      canvas.height = ch;
      refreshLayoutMetrics();
      rebuildCanvasCache();
      drawPs4XmbWave(performance.now());
      syncUiState();
    }
    window.addEventListener("resize", resizeCanvas);

    function drawPs4XmbWave(time) {
      if (window.ZSA_SCHOOL_3D && window.ZSA_SCHOOL_3D.isActive()) {
        ctx.clearRect(0, 0, cw, ch);
      } else {
        ctx.drawImage(bgCacheCanvas, 0, 0);
      }

      // Płynna paralaksa fali PS4 reagująca na ruch wstęgi
      const targetParallax = (navLevel === "FOLDER" ? folderIndex : mainIndex) * 0.14;
      waveParallaxX += (targetParallax - waveParallaxX) * 0.075;

      const t = time * 0.00044;
      const step = IS_LOW_END_PC ? 22 : 14;

      for (let w = 0; w < 3; w++) {
        const phaseOffset = w * 1.45 + waveParallaxX * (0.65 + w * 0.28);
        const speedMult = 1 - w * 0.15;
        const baseSlopeStart = ch * (0.86 + w * 0.055);
        const baseSlopeEnd = ch * (0.24 + w * 0.10);
        const ribbonThickness = ch * (0.24 - w * 0.036);

        ctx.beginPath();

        for (let x = 0; x <= cw + step; x += step) {
          const nx = x / cw;
          const diagY = baseSlopeStart + (baseSlopeEnd - baseSlopeStart) * Math.pow(nx, 1.12);
          const wave1 = Math.sin(nx * 3.4 - t * speedMult + phaseOffset) * (ch * 0.052);
          const wave2 = Math.cos(nx * 1.9 + t * 0.65 - phaseOffset) * (ch * 0.028);
          const yTop = diagY + wave1 + wave2;

          if (x === 0) ctx.moveTo(x, yTop);
          else ctx.lineTo(x, yTop);
        }

        for (let x = cw + step; x >= 0; x -= step) {
          const nx = x / cw;
          const diagY = baseSlopeStart + (baseSlopeEnd - baseSlopeStart) * Math.pow(nx, 1.12);
          const wave1 = Math.sin(nx * 2.9 - t * speedMult * 0.85 + phaseOffset + 0.65) * (ch * 0.044);
          const twist = (0.55 + 0.45 * Math.sin(nx * 2.3 + t * 0.45 + w)) * ribbonThickness;
          const yBot = diagY + wave1 + twist;
          ctx.lineTo(x, yBot);
        }

        ctx.closePath();
        ctx.fillStyle = waveGradients[w];
        ctx.fill();

        ctx.beginPath();
        for (let x = 0; x <= cw + step; x += step) {
          const nx = x / cw;
          const diagY = baseSlopeStart + (baseSlopeEnd - baseSlopeStart) * Math.pow(nx, 1.12);
          const wave1 = Math.sin(nx * 3.4 - t * speedMult + phaseOffset) * (ch * 0.052);
          const wave2 = Math.cos(nx * 1.9 + t * 0.65 - phaseOffset) * (ch * 0.028);
          const yTop = diagY + wave1 + wave2;

          if (x === 0) ctx.moveTo(x, yTop);
          else ctx.lineTo(x, yTop);
        }
        ctx.strokeStyle = crestGradients[w];
        ctx.lineWidth = w === 1 ? 1.55 : 1.0;
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(230, 246, 255, 0.52)";
      for (let i = 0; i < xmbSparkles.length; i++) {
        const s = xmbSparkles[i];
        s.x += s.speedX;
        if (s.x > 1.03) s.x = -0.03;

        const px = s.x * cw;
        const py = (s.y - s.x * 0.25 + Math.sin(t * 2.0 + s.phase) * 0.016) * ch;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    /* ============================================================================
       10. ZJEDNOCZONA PĘTLA GŁÓWNA (AUDIO + GAMEPAD + CANVAS + SLEEP RECOVERY)
       ============================================================================ */
    let lastAudioTime = performance.now();
    let lastCanvasFrameTime = 0;

    function mainLoop(now) {
      const dtSec = Math.min(0.1, (now - lastAudioTime) / 1000);
      lastAudioTime = now;

      trackRegistry.forEach((track) => track.tick(dtSec));

      if (!document.hidden) {
        pollGamepad(now);
        if (!isSystemSleeping && navLevel !== "SUBMENU") {
          if (!IS_LOW_END_PC || now - lastCanvasFrameTime >= 15.5) {
            lastCanvasFrameTime = now;
            drawPs4XmbWave(now);
          }
        }
      }
      requestAnimationFrame(mainLoop);
    }

    function restoreScreenAfterTabOrSleep() {
      document.body.classList.toggle("tab-hidden", document.hidden);
      if (!document.hidden) {
        resizeCanvas();
      }
    }

    document.addEventListener("visibilitychange", restoreScreenAfterTabOrSleep);
    window.addEventListener("focus", restoreScreenAfterTabOrSleep);
    window.addEventListener("pageshow", restoreScreenAfterTabOrSleep);

    buildRibbons();
    resizeCanvas();
    fetchLatestZsaNews2026();
    fetchCloudScheduleData();
    requestAnimationFrame(mainLoop);