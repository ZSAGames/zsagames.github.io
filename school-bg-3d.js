/* ============================================================================
   ZSAGames — Tło 3D budynku szkoły (.glb) za falami PS4 Orbis OS
   - Tryby wyglądu: "normal" | "wireframe" | "edges" | "hologram"
   - Live-tuning w konsoli DevTools: ZSA_SCHOOL_3D.set(...) / setMode(...)
   - Działa wyłącznie na wydajnym PC; zatrzymuje renderowanie w Sleep Mode i Submenu
   ============================================================================ */
(() => {
  "use strict";

  const SCHOOL_3D_CONFIG = {
    modelUrl: "szkola.glb",

    // === WYGLĄD MODELU ===
    // "normal"    -> oryginalne materiały/tekstury z .glb
    // "wireframe" -> klasyczna siatka trójkątów
    // "edges"     -> czyste krawędzie architektoniczne (blueprint PS4, bez przekątnych)
    // "hologram"  -> półprzezroczyste granatowe szkło + siatka wireframe
    renderMode: "wireframe",
    wireframeColor: 0x7ec8ff,     // Kolor linii (błękit PS4)
    wireframeOpacity: 0.95,       // Przezroczystość linii (0.0 – 1.0)
    fillColor: 0x062364,          // Kolor delikatnego wypełnienia dla "edges" i "hologram"
    fillOpacity: 0.76,            // Przezroczystość wypełnienia (0 = samo szkło/linie)
    edgeThresholdDeg: 1500,         // Kąt wykrywania krawędzi w trybie "edges" (im mniej, tym więcej detali)

    // === POZYCJA, OBRÓT (W STOPNIACH) I SKALA ===
    modelScale: 1.7,
    modelOffsetX: 0.85,           // Lewo (-) / Prawo (+)
    modelOffsetY: -0.15,          // Dół (-) / Góra (+)
    modelOffsetZ: -0.5,            // Dalej (-) / Bliżej (+)
    rotationXDeg: -10,
    rotationYDeg: -25,            // Obrót poziomy fasady (np. 0, 90, 180, -30)
    rotationZDeg: -2.5,

    // === KAMERA I PARALAKSA ===
    cameraFov: 60,
    cameraDistance: 7.4,
    cameraHeight: 1.55,
    lookAtY: 0.1,
    panStrength: 1.15,            // Zakres przesuwania w bok przy przewijaniu menu
    yawStrength: 0.16,            // Zakres obrotu kamery (radiany)
    smoothness: 4.8,              // Płynność ruchu (niezależna od 60Hz/144Hz)
    idleBreathStrength: 0.4,

    fogDensity: 0.042,            // Gęstość niebieskiej mgły (0 = brak mgły)
    maxPixelRatio: 1.5
  };

  const DEG2RAD = Math.PI / 180;

  let THREE_LIB = null;
  let isModelReady = false;
  let isPausedBySleep = false;
  let isPausedBySubmenu = false;
  let rafId = null;
  let lastFrameTime = 0;

  let targetNormX = 0;
  let currentNormX = 0;
  let idleTimeSec = 0;

  let renderer = null;
  let scene = null;
  let camera = null;
  let buildingGroup = null;
  let loadedModelRoot = null;
  let canvasEl = null;

  /* ================= 1. TEST SPRZĘTU (TYLKO PC, BEZ LOW-END I MOBILE) ================= */
  function isCapableDesktopPC() {
    if (
      document.body.classList.contains("is-mobile") ||
      document.body.classList.contains("is-tablet")
    ) {
      return false;
    }

    const ua = navigator.userAgent || "";
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet/i.test(ua);
    const isCoarseTouch = window.matchMedia("(pointer: coarse)").matches && navigator.maxTouchPoints > 0;
    if (isMobileUA || isCoarseTouch) return false;

    const lowCores = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
    const lowRam = typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4;
    const lowEndFlag = (typeof IS_LOW_END_PC !== "undefined" && IS_LOW_END_PC) || lowCores || lowRam;
    if (lowEndFlag) return false;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    if (navigator.connection && navigator.connection.saveData) return false;

    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl2", { failIfMajorPerformanceCaveat: true }) ||
        testCanvas.getContext("webgl", { failIfMajorPerformanceCaveat: true });
      if (!gl) return false;

      const dbg = gl.getExtension("WEBGL_debug_renderer_info");
      if (dbg) {
        const rendererStr = String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) || "");
        if (/SwiftShader|llvmpipe|Software|Microsoft Basic Render/i.test(rendererStr)) {
          return false;
        }
      }
      const loseExt = gl.getExtension("WEBGL_lose_context");
      if (loseExt) loseExt.loseContext();
    } catch (_) {
      return false;
    }

    return true;
  }

  /* ================= 2. NAKŁADANIE STYLU (NORMAL / WIREFRAME / EDGES / HOLOGRAM) ================= */
  function clearOverlaysOnMesh(mesh) {
    ["__zsaEdgeLines", "__zsaHoloWire"].forEach((key) => {
      const overlay = mesh.userData[key];
      if (overlay) {
        mesh.remove(overlay);
        if (overlay.geometry && overlay.geometry !== mesh.geometry) {
          overlay.geometry.dispose();
        }
        if (overlay.material) overlay.material.dispose();
        delete mesh.userData[key];
      }
    });
  }

  function applyRenderMode(mode = SCHOOL_3D_CONFIG.renderMode) {
    if (!loadedModelRoot || !THREE_LIB) return;
    const THREE = THREE_LIB;
    SCHOOL_3D_CONFIG.renderMode = mode;

    loadedModelRoot.traverse((obj) => {
      if (!obj.isMesh) return;

      // Zapamiętaj oryginalny materiał przy pierwszym przejściu
      if (!obj.userData.__origMaterial) {
        obj.userData.__origMaterial = obj.material;
      }

      clearOverlaysOnMesh(obj);

      // Posprzątaj poprzedni materiał tymczasowy (nie niszcząc oryginału)
      if (obj.material && obj.material !== obj.userData.__origMaterial) {
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }

      if (mode === "normal") {
        obj.material = obj.userData.__origMaterial;
        obj.visible = true;
      } else if (mode === "wireframe") {
        obj.material = new THREE.MeshBasicMaterial({
          color: SCHOOL_3D_CONFIG.wireframeColor,
          wireframe: true,
          transparent: true,
          opacity: SCHOOL_3D_CONFIG.wireframeOpacity,
          depthWrite: false
        });
      } else if (mode === "edges") {
        // Półprzezroczyste ciemnoniebieskie wypełnienie zasłania tylne linie, dając czysty wygląd blueprintu
        obj.material = new THREE.MeshBasicMaterial({
          color: SCHOOL_3D_CONFIG.fillColor,
          transparent: true,
          opacity: SCHOOL_3D_CONFIG.fillOpacity,
          polygonOffset: true,
          polygonOffsetFactor: 1,
          polygonOffsetUnits: 1
        });

        const edgesGeo = new THREE.EdgesGeometry(obj.geometry, SCHOOL_3D_CONFIG.edgeThresholdDeg);
        const edgesMat = new THREE.LineBasicMaterial({
          color: SCHOOL_3D_CONFIG.wireframeColor,
          transparent: true,
          opacity: SCHOOL_3D_CONFIG.wireframeOpacity
        });
        const lines = new THREE.LineSegments(edgesGeo, edgesMat);
        obj.add(lines);
        obj.userData.__zsaEdgeLines = lines;
      } else if (mode === "hologram") {
        obj.material = new THREE.MeshStandardMaterial({
          color: SCHOOL_3D_CONFIG.fillColor,
          emissive: SCHOOL_3D_CONFIG.wireframeColor,
          emissiveIntensity: 0.25,
          roughness: 0.35,
          metalness: 0.2,
          transparent: true,
          opacity: Math.max(0.18, SCHOOL_3D_CONFIG.fillOpacity)
        });

        const wireMat = new THREE.MeshBasicMaterial({
          color: SCHOOL_3D_CONFIG.wireframeColor,
          wireframe: true,
          transparent: true,
          opacity: SCHOOL_3D_CONFIG.wireframeOpacity * 0.85,
          depthWrite: false
        });
        const wireOverlay = new THREE.Mesh(obj.geometry, wireMat);
        wireOverlay.scale.setScalar(1.001);
        obj.add(wireOverlay);
        obj.userData.__zsaHoloWire = wireOverlay;
      }
    });
  }

  function applyTransformConfig() {
    if (!buildingGroup) return;
    buildingGroup.position.set(
      SCHOOL_3D_CONFIG.modelOffsetX,
      SCHOOL_3D_CONFIG.modelOffsetY,
      SCHOOL_3D_CONFIG.modelOffsetZ
    );
    buildingGroup.rotation.set(
      SCHOOL_3D_CONFIG.rotationXDeg * DEG2RAD,
      SCHOOL_3D_CONFIG.rotationYDeg * DEG2RAD,
      SCHOOL_3D_CONFIG.rotationZDeg * DEG2RAD
    );
    buildingGroup.scale.setScalar(SCHOOL_3D_CONFIG.modelScale);

    if (camera) {
      camera.fov = SCHOOL_3D_CONFIG.cameraFov;
      camera.updateProjectionMatrix();
    }
    if (scene && scene.fog) {
      scene.fog.density = SCHOOL_3D_CONFIG.fogDensity;
    }
  }

  /* ================= 3. KONTROLA PĘTLI RENDEROWANIA ================= */
  function shouldRenderNow() {
    if (!isModelReady || !renderer || !scene || !camera) return false;
    if (document.hidden) return false;
    if (isPausedBySleep || document.body.classList.contains("state-sleep")) return false;
    if (isPausedBySubmenu || document.body.classList.contains("state-submenu")) return false;
    return true;
  }

  function stopLoop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  function updateCameraPose(dtSec) {
    const damp = 1 - Math.exp(-SCHOOL_3D_CONFIG.smoothness * dtSec);
    currentNormX += (targetNormX - currentNormX) * damp;

    const breathX = Math.sin(idleTimeSec * 0.45) * SCHOOL_3D_CONFIG.idleBreathStrength;
    const breathY = Math.cos(idleTimeSec * 0.35) * (SCHOOL_3D_CONFIG.idleBreathStrength * 0.6);

    const panX = currentNormX * SCHOOL_3D_CONFIG.panStrength + breathX;
    const yawAngle = currentNormX * SCHOOL_3D_CONFIG.yawStrength;

    const dist = SCHOOL_3D_CONFIG.cameraDistance;
    camera.position.x = Math.sin(yawAngle) * dist + panX * 0.45;
    camera.position.z = Math.cos(yawAngle) * dist;
    camera.position.y = SCHOOL_3D_CONFIG.cameraHeight + breathY;
    camera.lookAt(panX * 0.25, SCHOOL_3D_CONFIG.lookAtY, 0);
  }

  function renderSingleFrame(now) {
    rafId = null;
    if (!shouldRenderNow()) return;

    const dtSec = lastFrameTime ? Math.min(0.05, (now - lastFrameTime) / 1000) : 0.016;
    lastFrameTime = now;
    idleTimeSec += dtSec;

    updateCameraPose(dtSec);
    renderer.render(scene, camera);
    rafId = requestAnimationFrame(renderSingleFrame);
  }

  function syncRenderLoop() {
    if (shouldRenderNow()) {
      if (rafId === null) {
        lastFrameTime = performance.now();
        rafId = requestAnimationFrame(renderSingleFrame);
      }
    } else {
      stopLoop();
    }
  }

  function handleResize() {
    if (!renderer || !camera) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / Math.max(1, h);
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, SCHOOL_3D_CONFIG.maxPixelRatio));
    renderer.setSize(w, h, false);

    if (shouldRenderNow()) {
      renderer.render(scene, camera);
    }
  }

  /* ================= 4. PUBLICZNE API (base.js + KONSOLA DEVTOOLS) ================= */
  window.ZSA_SCHOOL_3D = {
    config: SCHOOL_3D_CONFIG,
    isActive: () => isModelReady,

    setRibbonPosition(index, totalCount, navLevel) {
      const safeTotal = Math.max(2, Number(totalCount) || 2);
      const safeIdx = Math.max(0, Math.min(safeTotal - 1, Number(index) || 0));
      targetNormX = (safeIdx / (safeTotal - 1)) * 2 - 1;
      isPausedBySubmenu = navLevel === "SUBMENU";
      syncRenderLoop();
    },

    // Zmiana trybu w locie: "normal" | "wireframe" | "edges" | "hologram"
    setMode(mode) {
      applyRenderMode(mode);
      if (shouldRenderNow()) renderer.render(scene, camera);
      return `Tryb zmieniony na: ${mode}`;
    },

    // Zmiana dowolnych parametrów w locie w konsoli DevTools
    set(partial = {}) {
      const materialKeys = ["renderMode", "wireframeColor", "wireframeOpacity", "fillColor", "fillOpacity", "edgeThresholdDeg"];
      let needsMaterialRebuild = false;

      Object.entries(partial).forEach(([k, v]) => {
        if (k in SCHOOL_3D_CONFIG) {
          SCHOOL_3D_CONFIG[k] = v;
          if (materialKeys.includes(k)) needsMaterialRebuild = true;
        }
      });

      applyTransformConfig();
      if (needsMaterialRebuild) applyRenderMode(SCHOOL_3D_CONFIG.renderMode);
      if (shouldRenderNow()) {
        updateCameraPose(0.016);
        renderer.render(scene, camera);
      }
      return SCHOOL_3D_CONFIG;
    },

    // Wypisuje gotowy konfigurator do wklejenia do school-bg-3d.js
    printConfig() {
      console.log(JSON.stringify(SCHOOL_3D_CONFIG, null, 2));
    },

    pause() {
      isPausedBySleep = true;
      stopLoop();
    },

    resume() {
      isPausedBySleep = false;
      syncRenderLoop();
    },

    resize() {
      handleResize();
    }
  };

  /* ================= 5. ŁADOWANIE THREE.JS + MODELU .GLB ================= */
  async function initSchool3D() {
    canvasEl = document.getElementById("school-3d-canvas");
    if (!canvasEl) return;

    if (!isCapableDesktopPC()) {
      canvasEl.remove();
      return;
    }

    try {
      const [THREE, { GLTFLoader }, { DRACOLoader }] = await Promise.all([
        import("https://esm.sh/three@0.170.0"),
        import("https://esm.sh/three@0.170.0/examples/jsm/loaders/GLTFLoader.js"),
        import("https://esm.sh/three@0.170.0/examples/jsm/loaders/DRACOLoader.js")
      ]);
      THREE_LIB = THREE;

      renderer = new THREE.WebGLRenderer({
        canvas: canvasEl,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, SCHOOL_3D_CONFIG.maxPixelRatio));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x002d85, SCHOOL_3D_CONFIG.fogDensity);

      camera = new THREE.PerspectiveCamera(
        SCHOOL_3D_CONFIG.cameraFov,
        window.innerWidth / Math.max(1, window.innerHeight),
        0.1,
        150
      );

      const hemiLight = new THREE.HemisphereLight(0x8fd0ff, 0x051a48, 1.35);
      scene.add(hemiLight);

      const keyLight = new THREE.DirectionalLight(0xfff4e0, 1.85);
      keyLight.position.set(8, 12, 9);
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0x3aa6ff, 1.15);
      rimLight.position.set(-10, 6, -8);
      scene.add(rimLight);

      buildingGroup = new THREE.Group();
      scene.add(buildingGroup);

      const loader = new GLTFLoader();
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");
      loader.setDRACOLoader(dracoLoader);

      loader.load(
        SCHOOL_3D_CONFIG.modelUrl,
        (gltf) => {
          const model = gltf.scene;

          // Auto-centrowanie i bazowa normalizacja skali (modelScale skaluje potem całą grupę)
          const box = new THREE.Box3().setFromObject(model);
          const size = new THREE.Vector3();
          const center = new THREE.Vector3();
          box.getSize(size);
          box.getCenter(center);

          const maxDim = Math.max(size.x, size.y, size.z) || 1;
          const baseNormScale = 5.4 / maxDim;

          model.scale.setScalar(baseNormScale);
          model.position.set(
            -center.x * baseNormScale,
            -center.y * baseNormScale,
            -center.z * baseNormScale
          );

          loadedModelRoot = model;
          buildingGroup.add(model);

          applyTransformConfig();
          applyRenderMode(SCHOOL_3D_CONFIG.renderMode);

          isModelReady = true;
          currentNormX = targetNormX;
          document.body.classList.add("has-3d-school");
          canvasEl.classList.add("ready");

          canvasEl.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            stopLoop();
          });
          canvasEl.addEventListener("webglcontextrestored", () => {
            handleResize();
            syncRenderLoop();
          });

          handleResize();
          syncRenderLoop();
        },
        undefined,
        (err) => {
          console.warn("[Szkola 3D] Nie udało się załadować modelu .glb (fallback do tła 2D):", err);
          canvasEl.remove();
        }
      );

      document.addEventListener("visibilitychange", syncRenderLoop);
      window.addEventListener("resize", handleResize);
    } catch (err) {
      console.warn("[Szkola 3D] Błąd inicjalizacji Three.js (fallback do tła 2D):", err);
      canvasEl.remove();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSchool3D);
  } else {
    initSchool3D();
  }
})();