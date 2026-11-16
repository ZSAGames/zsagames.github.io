 /* ============================================================================
       0. USTAWIENIA OTWIERANIA APLIKACJI (_blank vs _self), SLEEP DELAY I AUDIO
       ============================================================================ */
    const OPEN_APPS_IN_NEW_TAB = true;
    const SLEEP_BEFORE_LAUNCH_DELAY_MS = 200; // Zmniejszony delay po wejściu w Sleep Mode przed otwarciem karty
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
        description: "Jason i Lucia zawsze czuli, że los im nie sprzyja. Jednak gdy łatwy skok kończy się katastrofą, poznają najmroczniejsze oblicze najbardziej słonecznego miasta w Ameryce i trafiają w sam środek przestępczego spisku, który swoimi mackami oplata cały stan Leonida. Jeśli chcą wyjść z tego cało, muszą na sobie polegać tak, jak jeszcze nigdy wcześniej."
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
        background: "VPBackground.png",
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
        svg: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3">
                <path d="M14 22h36l-3 32H17L14 22z" fill="rgba(255,255,255,0.12)"/>
                <path d="M23 22v-5a9 9 0 0 1 18 0v5"/>
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
      }
    ];

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

    /* Wykrywanie urządzeń mobilnych */
    function detectRealMobile() {
      const uaMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const coarsePointer = window.matchMedia("(pointer: coarse) and (hover: none)").matches;
      document.body.classList.toggle("is-mobile", Boolean(uaMobile && coarsePointer));
    }
    detectRealMobile();

    /* ============================================================================
       8. MASZYNA STANÓW NAWIGACJI PS4
       ============================================================================ */
    let navLevel = "MAIN";
    let mainIndex = 0;
    let folderIndex = 0;
    let enteredSubmenuFromFolder = false;

    let cachedTileStep = 178;
    let cachedFocusX = 240;

    function refreshLayoutMetrics() {
      const styles = getComputedStyle(document.documentElement);
      const tileSize = parseFloat(styles.getPropertyValue("--tile-size")) || 168;
      const tileGap = parseFloat(styles.getPropertyValue("--tile-gap")) || 10;
      cachedFocusX = parseFloat(styles.getPropertyValue("--focus-x")) || 240;
      cachedTileStep = tileSize + tileGap;
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

      const bottomBarHtml = item.type === "folder"
        ? `<svg class="down-arrow-glyph" viewBox="0 0 24 24"><path d="M12 17l-6-6h4V5h4v6h4l-6 6z"/></svg>`
        : `<span>Start</span>`;

      tile.innerHTML = `
        <div class="ps4-tile-inner">${innerHtml}</div>
        <div class="tile-bottom-bar">${bottomBarHtml}</div>
        <div class="tile-side-title">${item.title}</div>
      `;

      tile.addEventListener("click", () => onClick(index, item));
      return tile;
    }

    function buildRibbons() {
      refreshLayoutMetrics();
      mainTrackEl.innerHTML = "";
      MAIN_RIBBON_ITEMS.forEach((item, idx) => {
        const el = createTileElement(item, idx, (clickedIdx, clickedItem) => {
          if (isSystemSleeping || performance.now() < wakeUpCooldownUntil) return;
          unlockAudioOnInteraction();
          if (navLevel === "SUBMENU") {
            navigateUp(true);
            return;
          }
          if (navLevel === "FOLDER") {
            navLevel = "MAIN";
          }
          if (mainIndex !== clickedIdx) {
            mainIndex = clickedIdx;
            playCustomWav("move");
            syncUiState();
          } else if (clickedItem.type === "folder" || clickedItem.isTimetable || clickedItem.isWhatsNew || clickedItem.isDirections) {
            navigateDown();
          } else {
            launchActiveItem();
          }
        });
        mainTrackEl.appendChild(el);
      });

      folderTrackEl.innerHTML = "";
      CUSTOM_GAMES_DATA.forEach((game, gIdx) => {
        const el = createTileElement({ ...game, type: "game" }, gIdx, (clickedIdx) => {
          if (isSystemSleeping || performance.now() < wakeUpCooldownUntil) return;
          unlockAudioOnInteraction();
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
            } else {
              launchActiveItem();
            }
          }
        });
        folderTrackEl.appendChild(el);
      });

      syncUiState();
    }

    function getActiveGameItem() {
      if (navLevel === "FOLDER" || (navLevel === "SUBMENU" && enteredSubmenuFromFolder)) {
        return CUSTOM_GAMES_DATA[folderIndex];
      }
      return MAIN_RIBBON_ITEMS[mainIndex];
    }

    function populateSubmenuScreen(item) {
      document.getElementById("sub-cover-box").innerHTML = createCoverMarkup(item);
      document.getElementById("sub-game-title").textContent = item.title;
      
      const zsaDirectionsViewEl = document.getElementById("zsa-directions-view");
      const gameInfoViewEl = document.getElementById("game-info-view");
      const zsaNewsViewEl = document.getElementById("zsa-news-view");
      const zsaTimetableViewEl = document.getElementById("zsa-timetable-view");
      const rightLabelEl = document.getElementById("sub-header-right-label");
      const leftNavLabelEl = document.getElementById("sub-left-nav-label");
      const startBtnEl = document.getElementById("sub-start-btn");
      const startBtnTextEl = document.getElementById("sub-start-btn-text");

      if (item.isWhatsNew) {
        gameInfoViewEl.style.display = "none";
        zsaNewsViewEl.style.display = "flex";
        zsaTimetableViewEl.style.display = "none";
        rightLabelEl.textContent = "Aktualności 2026";
        leftNavLabelEl.textContent = "Wieści ZSA";
        startBtnTextEl.textContent = "Portal ZSA";
        zsaDirectionsViewEl.style.display = "none";
        whatsNewFocusIndex = 0;
        renderZsaNewsList();
        fetchLatestZsaNews2026();
      } else if (item.isTimetable) {
        gameInfoViewEl.style.display = "none";
        zsaNewsViewEl.style.display = "none";
        zsaTimetableViewEl.style.display = "flex";
        rightLabelEl.textContent = "Rozkład Zajęć 2026";
        leftNavLabelEl.textContent = "Wybór Szkoły i Klasy";
        startBtnTextEl.textContent = "Pełny PDF";
        zsaDirectionsViewEl.style.display = "none";
        ttStep = "SCHOOL";
        ttFocusArea = "MAIN";
        renderTimetableUI();
      } else if (item.isDirections) {
        gameInfoViewEl.style.display = "none";
        zsaNewsViewEl.style.display = "none";
        zsaTimetableViewEl.style.display = "none";
        zsaDirectionsViewEl.style.display = "flex";
        rightLabelEl.textContent = "Technikum i Liceum";
        leftNavLabelEl.textContent = "Oferta Edukacyjna";
        startBtnTextEl.textContent = "Portal ZSA";
        dirStep = "LIST";
        dirFocusIdx = 0;
        updateDirectionsFocusUI();
      } else {
        gameInfoViewEl.style.display = "flex";
        zsaNewsViewEl.style.display = "none";
        zsaTimetableViewEl.style.display = "none";
        rightLabelEl.textContent = "Informacje";
        leftNavLabelEl.textContent = "Informacje o grze";
        startBtnTextEl.textContent = "Start";
        zsaDirectionsViewEl.style.display = "none";
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
      const mainTranslateX = cachedFocusX - mainIndex * cachedTileStep;
      mainTrackEl.style.transform = `translate3d(${Math.round(mainTranslateX)}px, 0, 0)`;

      Array.from(mainTrackEl.children).forEach((el, idx) => {
        el.classList.toggle("active", idx === mainIndex);
      });

      if (navLevel === "MAIN") {
        folderTrackEl.style.transform = `translate3d(${Math.round(cachedFocusX)}px, 0, 0)`;
      } else {
        const folderTranslateX = cachedFocusX - folderIndex * cachedTileStep;
        folderTrackEl.style.transform = `translate3d(${Math.round(folderTranslateX)}px, 0, 0)`;
      }

      Array.from(folderTrackEl.children).forEach((el, idx) => {
        el.classList.toggle("active", navLevel !== "MAIN" && idx === folderIndex);
      });

      const onFolderTile = MAIN_RIBBON_ITEMS[mainIndex]?.type === "folder";
      document.body.classList.toggle("folder-preview", navLevel === "MAIN" && onFolderTile);
      document.body.classList.toggle("state-folder", navLevel === "FOLDER");
      document.body.classList.toggle("state-submenu", navLevel === "SUBMENU");
      document.body.classList.toggle("from-folder", navLevel === "SUBMENU" && enteredSubmenuFromFolder);

      if (navLevel === "SUBMENU") {
        const activeItem = getActiveGameItem();
        populateSubmenuScreen(activeItem);
      } else {
        clearTimeout(newsImageDwellTimer);
        pauseBackdropVideo();
      }
      syncBackgroundMusic();
    }

    function navigateLeft() {
      if (isSystemSleeping || performance.now() < wakeUpCooldownUntil) return;
      unlockAudioOnInteraction();

      if (navLevel === "SUBMENU") {
        const activeItem = getActiveGameItem();

        if (activeItem?.isDirections) {
          if (dirStep === "LIST") {
            if (dirFocusIdx >= 2) dirFocusIdx -= 2;
            else dirFocusIdx = -1;
          } else {
            dirDetailFocus = "START_BTN";
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
            if (ttSchoolFocusIdx > 0) {
              ttSchoolFocusIdx--;
            } else {
              ttFocusArea = "PDF_BTN";
            }
            playCustomWav("move");
            syncTimetableFocusVisuals();
          } else if (ttStep === "CLASS" && ttFocusArea === "MAIN") {
            const cards = Array.from(ttClassStepEl.querySelectorAll(".tt-class-card"));
            const curCard = cards[ttClassFocusIdx];
            const prevCard = cards[ttClassFocusIdx - 1];
            if (prevCard && curCard && Math.abs(prevCard.getBoundingClientRect().top - curCard.getBoundingClientRect().top) < 15) {
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
      if (isSystemSleeping || performance.now() < wakeUpCooldownUntil) return;
      unlockAudioOnInteraction();

      if (navLevel === "SUBMENU") {
        const activeItem = getActiveGameItem();
        if (activeItem?.isDirections) {
          if (dirStep === "LIST") {
            if (dirFocusIdx === -1) dirFocusIdx = 0;
            else if (dirFocusIdx < 2) dirFocusIdx += 2;
          } else {
            if (dirDetailFocus === "START_BTN") dirDetailFocus = "OPEN_URL";
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
      if (isSystemSleeping || performance.now() < wakeUpCooldownUntil) return;
      unlockAudioOnInteraction();

      if (navLevel === "SUBMENU") {
        const activeItem = getActiveGameItem();
        if (activeItem?.isDirections) {
          if (dirStep === "LIST") {
            if (dirFocusIdx === 0 || dirFocusIdx === 2) {
              dirFocusIdx++;
              playCustomWav("move");
              updateDirectionsFocusUI();
            }
          } else {
            if (dirDetailFocus === "BACK_BTN") {
              dirDetailFocus = "OPEN_URL";
              updateDirectionsFocusUI();
            }
            dirDetailStepEl.scrollBy({ top: 140, behavior: "smooth" });
            playCustomWav("move");
          }
          return;
        }
        
        if (activeItem?.isWhatsNew) {
          if (whatsNewFocusIndex === -2) {
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
            ttScheduleStepEl.scrollBy({ top: 150, behavior: "smooth" });
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

      if (navLevel === "SUBMENU") {
        const activeItem = getActiveGameItem();
        
        if (activeItem?.isDirections) {
          if (dirStep === "DETAIL") {
            if (!isBackButton && dirDetailStepEl.scrollTop > 10) {
              dirDetailStepEl.scrollBy({ top: -140, behavior: "smooth" });
              playCustomWav("move");
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

        /* Nawigacja w górę wewnątrz "Co nowego" */
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

        /* Nawigacja w górę / cofanie wewnątrz "Planu Lekcji" */
        if (activeItem?.isTimetable) {
          if (ttStep === "SCHEDULE") {
            if (!isBackButton && ttScheduleStepEl.scrollTop > 10) {
              ttScheduleStepEl.scrollBy({ top: -150, behavior: "smooth" });
              playCustomWav("move");
              return;
            }
            ttStep = "CLASS";
            ttFocusArea = "MAIN";
            playCustomWav("back");
            renderTimetableUI();
            return;
          } else if (ttStep === "CLASS") {
            if (!isBackButton && ttFocusArea === "MAIN") {
              const cards = Array.from(ttClassStepEl.querySelectorAll(".tt-class-card"));
              const alignedAboveIdx = findVerticallyAlignedCardIndex(cards, ttClassFocusIdx, -1);
              if (alignedAboveIdx !== -1) {
                ttClassFocusIdx = alignedAboveIdx;
                playCustomWav("move");
                syncTimetableFocusVisuals();
                return;
              }
            }
            ttStep = "SCHOOL";
            ttFocusArea = "MAIN";
            playCustomWav("back");
            renderTimetableUI();
            return;
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
      if (isSystemSleeping || performance.now() < wakeUpCooldownUntil) return;
      unlockAudioOnInteraction();

      /* Jeśli jesteśmy na głównej wstędze, kafelki Folder, Plan Lekcji i Kierunki otwierają swój widok na dole */
      if (navLevel === "MAIN") {
        const curr = MAIN_RIBBON_ITEMS[mainIndex];
        if (curr.type === "folder" || curr.isTimetable || curr.isDirections) {
          navigateDown();
          return;
        }
      }

      const item = getActiveGameItem();

      /* Obsługa zatwierdzenia X / Enter wewnątrz Sub-Menu "Kierunki Kształcenia" */
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

      /* Obsługa zatwierdzenia X / Enter wewnątrz Sub-Menu "Co nowego" */
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

      /* Obsługa zatwierdzenia X / Enter wewnątrz Sub-Menu "Plan Lekcji" */
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

      if (item && item.url) {
        triggerPressAnimation();
        launchUrlWithSleepDelay(item.url, item.title);
      }
    }


    document.getElementById("sub-start-btn").addEventListener("click", () => {
      const item = getActiveGameItem();
      if (item && item.url) {
        triggerPressAnimation();
        launchUrlWithSleepDelay(item.url, item.title);
      }
    });

    /* Obsługa klawiatury */
    window.addEventListener("keydown", (e) => {
      if (isSystemSleeping) {
        e.preventDefault();
        wakeUpFromSleepMode();
        return;
      }
      if (performance.now() < wakeUpCooldownUntil) return;

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
      } else if (e.key === "Enter") {
        e.preventDefault(); launchActiveItem();
      }
    });

    /* Obsługa kółka myszy */
    let lastWheelTime = 0;
    window.addEventListener("wheel", (e) => {
      if (isSystemSleeping || performance.now() < wakeUpCooldownUntil) return;
      if (navLevel === "SUBMENU" && (MAIN_RIBBON_ITEMS[mainIndex]?.isWhatsNew || MAIN_RIBBON_ITEMS[mainIndex]?.isTimetable || MAIN_RIBBON_ITEMS[mainIndex]?.isDirections)) {
        return;
      }
      const now = performance.now();
      if (now - lastWheelTime < 150) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (Math.abs(e.deltaX) > 10) {
          lastWheelTime = now;
          if (e.deltaX > 0) navigateRight();
          else navigateLeft();
        }
      } else if (Math.abs(e.deltaY) > 12) {
        lastWheelTime = now;
        if (navLevel === "SUBMENU") {
          if (e.deltaY < 0) navigateUp(true);
        } else {
          if (e.deltaY > 0) navigateRight();
          else navigateLeft();
        }
      }
    }, { passive: true });

    /* Gesty dotykowe i przyciski mobilne */
    let touchStartX = 0;
    let touchStartY = 0;
    window.addEventListener("touchstart", (e) => {
      if (isSystemSleeping || !e.touches.length) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener("touchend", (e) => {
      if (isSystemSleeping || performance.now() < wakeUpCooldownUntil || !e.changedTouches.length) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) < 34 && Math.abs(dy) < 34) return;
      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) navigateRight();
        else navigateLeft();
      } else {
        if (dy < 0) navigateDown();
        else navigateUp(false);
      }
    }, { passive: true });

    document.getElementById("btn-left").addEventListener("click", navigateLeft);
    document.getElementById("btn-right").addEventListener("click", navigateRight);
    document.getElementById("btn-up").addEventListener("click", () => navigateUp(false));
    document.getElementById("btn-down").addEventListener("click", navigateDown);
    document.getElementById("btn-back").addEventListener("click", () => navigateUp(true));
    document.getElementById("btn-play").addEventListener("click", launchActiveItem);

    /* Obsługa kontrolera DualShock 4 / Xbox Gamepad API */
    let lastPadTime = 0;
    function pollGamepad(now) {
      const pads = navigator.getGamepads ? navigator.getGamepads() : [];
      const pad = pads[0] || pads[1] || pads[2] || pads[3];
      if (!pad || now - lastPadTime <= 180) return;

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
    const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
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

    function rebuildCanvasCache() {
      bgCacheCanvas.width = cw;
      bgCacheCanvas.height = ch;

      const bgGrad = bgCacheCtx.createLinearGradient(0, 0, cw * 0.9, ch);
      bgGrad.addColorStop(0, "#00236b");
      bgGrad.addColorStop(0.46, "#0044a6");
      bgGrad.addColorStop(0.78, "#003082");
      bgGrad.addColorStop(1, "#001442");
      bgCacheCtx.fillStyle = bgGrad;
      bgCacheCtx.fillRect(0, 0, cw, ch);

      const glow = bgCacheCtx.createRadialGradient(cw * 0.62, ch * 0.44, cw * 0.04, cw * 0.62, ch * 0.44, cw * 0.6);
      glow.addColorStop(0, "rgba(65, 155, 255, 0.34)");
      glow.addColorStop(0.55, "rgba(18, 92, 210, 0.14)");
      glow.addColorStop(1, "rgba(0, 32, 96, 0)");
      bgCacheCtx.fillStyle = glow;
      bgCacheCtx.fillRect(0, 0, cw, ch);

      const fillConfigs = [
        ["rgba(0, 18, 66, 0.72)", "rgba(8, 72, 178, 0.48)", "rgba(50, 148, 255, 0.08)"],
        ["rgba(4, 34, 102, 0.65)", "rgba(24, 108, 224, 0.42)", "rgba(110, 195, 255, 0.12)"],
        ["rgba(12, 62, 152, 0.48)", "rgba(75, 165, 255, 0.30)", "rgba(200, 235, 255, 0.04)"]
      ];

      waveGradients = fillConfigs.map((stops) => {
        const g = ctx.createLinearGradient(0, ch * 0.32, cw, ch * 0.98);
        g.addColorStop(0, stops[0]);
        g.addColorStop(0.55, stops[1]);
        g.addColorStop(1, stops[2]);
        return g;
      });

      crestGradients = [
        "rgba(165, 220, 255, 0.48)",
        "rgba(225, 245, 255, 0.62)",
        "rgba(135, 205, 255, 0.34)"
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
      ctx.drawImage(bgCacheCanvas, 0, 0);

      const t = time * 0.00052;
      const step = IS_LOW_END_PC ? 22 : 14;

      for (let w = 0; w < 3; w++) {
        const phaseOffset = w * 1.35;
        const speedMult = 1 - w * 0.16;
        const baseSlopeStart = ch * (0.92 + w * 0.045);
        const baseSlopeEnd = ch * (0.34 + w * 0.085);
        const ribbonThickness = ch * (0.20 - w * 0.032);

        ctx.beginPath();

        for (let x = 0; x <= cw + step; x += step) {
          const nx = x / cw;
          const diagY = baseSlopeStart + (baseSlopeEnd - baseSlopeStart) * Math.pow(nx, 1.15);
          const wave1 = Math.sin(nx * 3.8 - t * speedMult + phaseOffset) * (ch * 0.048);
          const wave2 = Math.cos(nx * 2.1 + t * 0.72 - phaseOffset) * (ch * 0.026);
          const yTop = diagY + wave1 + wave2;

          if (x === 0) ctx.moveTo(x, yTop);
          else ctx.lineTo(x, yTop);
        }

        for (let x = cw + step; x >= 0; x -= step) {
          const nx = x / cw;
          const diagY = baseSlopeStart + (baseSlopeEnd - baseSlopeStart) * Math.pow(nx, 1.15);
          const wave1 = Math.sin(nx * 3.2 - t * speedMult * 0.85 + phaseOffset + 0.7) * (ch * 0.042);
          const twist = (0.55 + 0.45 * Math.sin(nx * 2.6 + t * 0.5 + w)) * ribbonThickness;
          const yBot = diagY + wave1 + twist;
          ctx.lineTo(x, yBot);
        }

        ctx.closePath();
        ctx.fillStyle = waveGradients[w];
        ctx.fill();

        ctx.beginPath();
        for (let x = 0; x <= cw + step; x += step) {
          const nx = x / cw;
          const diagY = baseSlopeStart + (baseSlopeEnd - baseSlopeStart) * Math.pow(nx, 1.15);
          const wave1 = Math.sin(nx * 3.8 - t * speedMult + phaseOffset) * (ch * 0.048);
          const wave2 = Math.cos(nx * 2.1 + t * 0.72 - phaseOffset) * (ch * 0.026);
          const yTop = diagY + wave1 + wave2;

          if (x === 0) ctx.moveTo(x, yTop);
          else ctx.lineTo(x, yTop);
        }
        ctx.strokeStyle = crestGradients[w];
        ctx.lineWidth = w === 1 ? 1.4 : 0.95;
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(220, 242, 255, 0.58)";
      for (let i = 0; i < xmbSparkles.length; i++) {
        const s = xmbSparkles[i];
        s.x += s.speedX;
        if (s.x > 1.03) s.x = -0.03;

        const px = s.x * cw;
        const py = (s.y - s.x * 0.28 + Math.sin(t * 2.2 + s.phase) * 0.018) * ch;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    /* ============================================================================
       10. ZJEDNOCZONA PĘTLA GŁÓWNA (AUDIO + GAMEPAD + CANVAS)
       ============================================================================ */
    let lastAudioTime = performance.now();
    function mainLoop(now) {
      const dtSec = Math.min(0.1, (now - lastAudioTime) / 1000);
      lastAudioTime = now;

      trackRegistry.forEach((track) => track.tick(dtSec));

      if (!document.hidden) {
        pollGamepad(now);
        if (!isSystemSleeping && navLevel !== "SUBMENU") {
          drawPs4XmbWave(now);
        }
      }
      requestAnimationFrame(mainLoop);
    }

    buildRibbons();
    resizeCanvas();
    fetchLatestZsaNews2026();
    requestAnimationFrame(mainLoop);