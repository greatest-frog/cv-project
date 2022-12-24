const theme = document.getElementById("theme");
const themeChanger = document.querySelector(".themeChanger");

const preferDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

if (localStorage.getItem("theme") === "dark") {
  themeChanger.querySelector("img").src = "./resources/images/sun.png";
  theme.href = "./resources/css/dark.css";
  localStorage.setItem("theme", "dark");
} else if (localStorage.getItem("theme") === "light") {
  themeChanger.querySelector("img").src = "./resources/images/moon.png";
  theme.href = "./resources/css/light.css";
  localStorage.setItem("theme", "light");
} else if (window.matchMedia && preferDarkTheme.matches) {
  themeChanger.querySelector("img").src = "./resources/images/sun.png";
  theme.href = "./resources/css/dark.css";
  localStorage.setItem("theme", "dark");
} else {
  themeChanger.querySelector("img").src = "./resources/images/moon.png";
  theme.href = "./resources/css/light.css";
  localStorage.setItem("theme", "light");
}

themeChanger.addEventListener("click", () => {
  if (
    themeChanger.querySelector("img").src.includes("/resources/images/moon.png")
  ) {
    themeChanger.querySelector("img").src = "./resources/images/sun.png";
    theme.href = "./resources/css/dark.css";
    localStorage.setItem("theme", "dark");
  } else {
    themeChanger.querySelector("img").src = "./resources/images/moon.png";
    theme.href = "./resources/css/light.css";
    localStorage.setItem("theme", "light");
  }
});
