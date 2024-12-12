const btnColor = document.querySelector(".change-color");
const color = document.querySelector(".color");
color.textContent = btnColor.addEventListener("click",getRandomHexColor);

function getRandomHexColor() {
  const rndNum = Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0);
  color.textContent = rndNum;
  document.body.style.backgroundColor = `#${color.textContent}`;
  return `#${rndNum}`;
}

