const root = document.querySelector(":root");
const colors = ["#ff96bd", "#9999fb", "#ffe797"];
const menuButton = document.getElementsByClassName("hamburger")[0];
const triangles = document.getElementById("triangles");
const modeText = document.getElementById("modeText");
const colorOptions = document.getElementsByClassName("option");
const modeSwitches = document.getElementsByClassName("color-mode-switch");
const moonImage = document.getElementById("moon");
const modeSettings = {
  true: {
    clrBackground: "#112B3C",
    clrFont: "#f1f1e6",
    bs: "0 1px 5px 0 rgba(248, 242, 236,0.1)",
  },
  false: {
    clrBackground: "#f8f2ec",
    clrFont: "#333333",
    bs: "0 1px 5px 0 rgba(0, 0, 0, 0.1)",
  },
};
let i = 0;

function toggleDarkMode(i) {
  state = modeSwitches[i].checked;
  root.style.setProperty("--clr-background", modeSettings[state].clrBackground);
  root.style.setProperty("--clr-font", modeSettings[state].clrFont);
  root.style.setProperty("--bs", modeSettings[state].bs);
  if (state) {
    moonImage.style.setProperty("visibility", "visible");
    modeText.textContent = "Night!";
  } else {
    moonImage.style.setProperty("visibility", "hidden");
    modeText.textContent = "Day!";
  }
  for (let j = 0; j < modeSwitches.length; j++) {
    modeSwitches[j].checked = state;
  }
}
function changeColor(color) {
  root.style.setProperty("--clr-active", color);
  triangles.classList.add("active");
  setTimeout(() => {
    triangles.classList.remove("active");
  }, 800);
  console.log("clicked");
}

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
});
triangles.addEventListener("click", () => {
  i += 1;
  changeColor(colors[i % 3]);
});
for (let i = 0; i < colorOptions.length; i++) {
  colorOptions[i].style.setProperty("fill", colors[i]);
  colorOptions[i].addEventListener("click", () => {
    changeColor(colors[i]);
  });
}
for (let i = 0; i < modeSwitches.length; i++) {
  modeSwitches[i].addEventListener("click", () => {
    toggleDarkMode(i);
  });
}
