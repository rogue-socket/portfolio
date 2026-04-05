const THEME_STORAGE_KEY = "portfolio-theme";

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

initializeThemeToggle();