const docElement = document.documentElement;

const themeToggleBtn = document.getElementById("toggle-btn");

function updateTheme(isDarkMode) {
  docElement.classList.toggle("dark", isDarkMode);
  themeToggleBtn.setAttribute("aria-checked", isDarkMode);
  try {
    localStorage.setItem("app-theme", isDarkMode ? "dark" : "light");
  } catch (e) {
    console.warn("Could not save theme to localStorage.", e);
  }
}

function handleThemeToggleClick() {
  const isDarkMode = docElement.classList.contains("dark");
  updateTheme(!isDarkMode);
}

themeToggleBtn.addEventListener("click", handleThemeToggleClick);

/* 加载 head 中代码时 dom 还不存在，同步主题 */
function initializeTheme() {
  const isDarkMode = docElement.classList.contains("dark");
  updateTheme(isDarkMode);
}
initializeTheme();
