"use strict";

const btnCreate = document.querySelector("#controls .create");
const btnDestroy = document.querySelector("#controls .destroy");

const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroy);

const boxArrHtml = [];
let boxStr = "";

function createBoxes(amount) {
  divBoxes.innerHTML = "";
  boxArrHtml.length = 0;
  const divNum = document.getElementsByClassName("inputNumber");
  amount = divNum[0].value;
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      let newDiv = document.createElement("div");

      newDiv.setAttribute(
        "style",
        `width:${30 + 10 * i}px; height:${
          30 + 10 * i
        }px; background-color:${getRandomHexColor()}; margin: 44px`
      );
      boxArrHtml.push(newDiv.outerHTML);
    }
    boxStr = boxArrHtml.join("");
    divBoxes.innerHTML = boxStr;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function destroy() {
  divBoxes.innerHTML = "";
  boxArrHtml = [];
  let divNum = document.getElementsByClassName("inputNumber");
  divNum[0].value = "";
}
