const btn = document.getElementById("themeToggle");

const userPref  = localStorage.getItem("theme");
const sysPref   = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (userPref === "dark" || (!userPref && sysPref)) {
  document.body.classList.add("dark");
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
