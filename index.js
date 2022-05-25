const root = document.querySelector(":root");
const colors = ["#ff96bd", "#9999fb", "#ffe797"];
const menuButton = document.getElementsByClassName("hamburger")[0];
const triangles = document.getElementById("triangles");
const colorOptions = document.getElementsByClassName("option");
let i = 0;

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
for (let i = 0; i < 3; i++) {
  colorOptions[i].style.setProperty("fill", colors[i]);
  colorOptions[i].addEventListener("click", () => {
    changeColor(colors[i]);
  });
}
