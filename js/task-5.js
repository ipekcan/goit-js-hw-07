const btnColor = document.querySelector("button");
const color = document.querySelector("span");
const rndColor = btnColor.addEventListener("click",getRandomHexColor);

function getRandomHexColor() {
 const rndNum = Math.floor(Math.random() * 16777215)
.toString(16)
.padStart(6, 0);
color.textContent = `#${rndNum}`;
document.body.style.backgroundColor = `${color.textContent}`;
return `#${rndNum}`;
} 
// function getRandomHexColor() {
//   color.textContent = rndColor;
//   document.body.style.backgroundColor = rndColor;
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

