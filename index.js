const root = document.querySelector(":root");
const colors = ["#ff96bd", "#9999fb", "#ffe797"];
const menuButton = document.getElementsByClassName("hamburger")[0];
const triangles = document.getElementById("triangles");
let i = 0;
const swatches = document.getElementsByClassName("colors");
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
});
triangles.addEventListener("click", () => {
  i += 1;
  root.style.setProperty("--clr-active", colors[i % 3]);

  triangles.classList.add("active");
  setTimeout(() => {
    triangles.classList.remove("active");
  }, 800);
});
for (let i = 0; i < 3; i++) {
  swatches[0];
}
