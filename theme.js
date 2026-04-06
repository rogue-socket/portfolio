const THEME_STORAGE_KEY = "portfolio-theme";
let cleanupRailNavigation = null;
let cleanupRailProgress = null;

function getActiveTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function updateThemeButtons(theme) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", String(theme === "dark"));
    button.setAttribute("aria-label", `Switch to ${nextTheme} mode`);

    const label = button.querySelector("[data-theme-label]");
    if (label) {
      label.textContent = `Switch to ${nextTheme} mode`;
    }
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  updateThemeButtons(theme);
}

function initializeThemeToggle() {
  applyTheme(getActiveTheme());

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = getActiveTheme() === "dark" ? "light" : "dark";

      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch (error) {
        // Ignore storage failures and still update the current page theme.
      }

      applyTheme(nextTheme);
    });
  });
}

function initializeRailNavigation() {
  if (typeof cleanupRailNavigation === "function") {
    cleanupRailNavigation();
    cleanupRailNavigation = null;
  }

  const railLinks = Array.from(document.querySelectorAll(".rail-link[href^='#']"));
  if (!railLinks.length) {
    return;
  }

  const pairs = railLinks
    .map((link) => {
      const target = document.querySelector(link.getAttribute("href"));

      if (!target) {
        return null;
      }

      return { link, target };
    })
    .filter(Boolean)
    .sort((left, right) => left.target.offsetTop - right.target.offsetTop);

  if (!pairs.length) {
    return;
  }

  function setActive(hash) {
    pairs.forEach(({ link, target }) => {
      link.classList.toggle("is-active", hash === `#${target.id}`);
    });
  }

  function getActiveHash() {
    const anchorOffset = Math.max(window.innerHeight * 0.34, 180);
    const anchorPosition = window.scrollY + anchorOffset;
    let activePair = pairs[0];

    pairs.forEach((pair) => {
      if (pair.target.offsetTop <= anchorPosition) {
        activePair = pair;
      }
    });

    return `#${activePair.target.id}`;
  }

  let frameId = null;

  function syncActiveRailLink() {
    frameId = null;
    setActive(getActiveHash());
  }

  function requestSync() {
    if (frameId !== null) {
      return;
    }

    frameId = window.requestAnimationFrame(syncActiveRailLink);
  }

  const removeLinkListeners = pairs.map(({ link }) => {
    const handleClick = () => {
      setActive(link.getAttribute("href"));
      requestSync();
    };

    link.addEventListener("click", handleClick);

    return () => {
      link.removeEventListener("click", handleClick);
    };
  });

  const initialHash = window.location.hash && document.querySelector(window.location.hash)
    ? window.location.hash
    : `#${pairs[0].target.id}`;

  setActive(initialHash);

  window.addEventListener("scroll", requestSync, { passive: true });
  window.addEventListener("resize", requestSync);
  window.addEventListener("hashchange", requestSync);

  if (!("IntersectionObserver" in window)) {
    requestSync();

    cleanupRailNavigation = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      removeLinkListeners.forEach((removeListener) => {
        removeListener();
      });
      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", requestSync);
      window.removeEventListener("hashchange", requestSync);
    };

    return;
  }

  const observer = new IntersectionObserver(
    () => {
      requestSync();
    },
    {
      rootMargin: "-28% 0px -46% 0px",
      threshold: [0.2, 0.35, 0.6]
    }
  );

  pairs.forEach(({ target }) => {
    observer.observe(target);
  });

  requestSync();

  cleanupRailNavigation = () => {
    if (frameId !== null) {
      window.cancelAnimationFrame(frameId);
    }

    removeLinkListeners.forEach((removeListener) => {
      removeListener();
    });
    observer.disconnect();
    window.removeEventListener("scroll", requestSync);
    window.removeEventListener("resize", requestSync);
    window.removeEventListener("hashchange", requestSync);
  };
}

function initializeRailProgress() {
  if (typeof cleanupRailProgress === "function") {
    cleanupRailProgress();
    cleanupRailProgress = null;
  }

  const railShell = document.querySelector(".side-rail-shell");
  if (!railShell) {
    return;
  }

  let frameId = null;

  function updateProgress() {
    frameId = null;

    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0
      ? Math.min(window.scrollY / scrollHeight, 1)
      : 0;

    railShell.style.setProperty("--rail-progress", progress.toFixed(4));
  }

  function requestUpdate() {
    if (frameId !== null) {
      return;
    }

    frameId = window.requestAnimationFrame(updateProgress);
  }

  requestUpdate();

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);

  cleanupRailProgress = () => {
    if (frameId !== null) {
      window.cancelAnimationFrame(frameId);
    }

    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
  };
}

initializeThemeToggle();
initializeRailNavigation();
initializeRailProgress();