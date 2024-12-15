const btnColor = document.querySelector("button");
const color = document.querySelector("span");
const rndColor = btnColor.addEventListener("click", changeColor);

function changeColor(c) {
  c = getRandomHexColor();
  color.textContent = c;
  document.body.style.backgroundColor = c;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
