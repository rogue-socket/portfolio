const THEME_STORAGE_KEY = "portfolio-theme";
let cleanupRailNavigation = null;
let cleanupRailProgress = null;
let cleanupArticleRailObserver = null;
let cleanupRailScrollTrap = null;

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
      const isActive = hash === `#${target.id}`;

      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
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

function slugifyHeadingText(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildArticleRailLinks() {
  const isPostPage = document.body.classList.contains("post-page");
  const railNav = document.querySelector(".rail-nav");
  const article = document.querySelector(".post-article");

  if (!isPostPage || !railNav || !article) {
    return false;
  }

  railNav
    .querySelectorAll("[data-generated-heading-link='true']")
    .forEach((link) => {
      link.remove();
    });

  railNav
    .querySelectorAll(".rail-link[href^='#']:not([data-generated-heading-link='true'])")
    .forEach((link) => {
      link.remove();
    });

  const headings = Array.from(article.querySelectorAll("h2, h3, h4"));
  const usedIds = new Map();

  headings.forEach((heading) => {
    const text = heading.textContent ? heading.textContent.trim() : "";
    if (!text) {
      return;
    }

    const baseSlug = slugifyHeadingText(text) || "section";
    const nextIndex = (usedIds.get(baseSlug) || 0) + 1;
    usedIds.set(baseSlug, nextIndex);

    heading.id = nextIndex === 1 ? baseSlug : `${baseSlug}-${nextIndex}`;
  });

  const fragment = document.createDocumentFragment();

  headings.forEach((heading) => {
    const text = heading.textContent ? heading.textContent.trim() : "";
    if (!text || !heading.id) {
      return;
    }

    const link = document.createElement("a");
    link.className = "rail-link";
    if (heading.tagName === "H3" || heading.tagName === "H4") {
      link.classList.add("rail-link-sub");
    }

    link.href = `#${heading.id}`;
    link.setAttribute("aria-label", `Jump to ${text}`);
    link.setAttribute("data-generated-heading-link", "true");

    const dot = document.createElement("span");
    dot.className = "rail-dot";
    dot.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.className = "rail-link-text";
    label.textContent = text.length > 38 ? `${text.slice(0, 35).trimEnd()}...` : text;
    label.title = text;

    link.append(dot, label);
    fragment.append(link);
  });

  railNav.append(fragment);
  return true;
}

function initializeArticleRailLinks() {
  if (typeof cleanupArticleRailObserver === "function") {
    cleanupArticleRailObserver();
    cleanupArticleRailObserver = null;
  }

  const isPostPage = document.body.classList.contains("post-page");
  const article = document.querySelector(".post-article");

  if (!isPostPage || !article) {
    return;
  }

  buildArticleRailLinks();

  if (!("MutationObserver" in window)) {
    return;
  }

  const observer = new MutationObserver(() => {
    if (!buildArticleRailLinks()) {
      return;
    }

    initializeRailNavigation();
    initializeRailProgress();
  });

  observer.observe(article, {
    childList: true,
    subtree: true
  });

  cleanupArticleRailObserver = () => {
    observer.disconnect();
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

    const scrollEl = document.scrollingElement || document.documentElement;
    const scrollHeight = scrollEl.scrollHeight - scrollEl.clientHeight;
    const scrollTop = scrollEl.scrollTop || window.scrollY;
    let progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;

    if (scrollHeight > 0 && scrollTop >= scrollHeight - 2) {
      progress = 1;
    }

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

function initializeRailScrollTrap() {
  if (typeof cleanupRailScrollTrap === "function") {
    cleanupRailScrollTrap();
    cleanupRailScrollTrap = null;
  }

  const isPostPage = document.body.classList.contains("post-page");
  const railNav = document.querySelector(".rail-nav");

  if (!isPostPage || !railNav) {
    return;
  }

  const handleWheel = (event) => {
    if (!railNav.contains(event.target)) {
      return;
    }

    if (railNav.scrollHeight <= railNav.clientHeight) {
      return;
    }

    event.preventDefault();
    railNav.scrollTop += event.deltaY;
  };

  railNav.addEventListener("wheel", handleWheel, { passive: false });

  cleanupRailScrollTrap = () => {
    railNav.removeEventListener("wheel", handleWheel);
  };
}

initializeThemeToggle();
initializeArticleRailLinks();
initializeRailNavigation();
initializeRailProgress();
initializeRailScrollTrap();
