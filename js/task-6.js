"use strict";

const btnCreate = document.querySelector("#controls .create");
const btnDestroy = document.querySelector("#controls .destroy");

const divBoxes = document.querySelector("#boxes");
let divNum = document.getElementsByClassName("inputNumber");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroy);

let boxArrHtml = [];
let boxStr = "";

function createBoxes(amount) {
  boxArrHtml.length = 0;

  amount = divNum[0].value;
  if (amount >= 1 && amount <= 100) {
    const fragment = document.createDocumentFragment(); // DocumentFragment oluştur

    for (let i = 0; i < amount; i++) {
      let newDiv = document.createElement("div");
      newDiv.style.width = `${30 + 10 * i}px`;
      newDiv.style.height = `${30 + 10 * i}px`;
      newDiv.style.backgroundColor = getRandomHexColor();
      newDiv.style.margin = "44px";

      fragment.appendChild(newDiv); // Div'i fragment'e ekle
    }

    divBoxes.innerHTML = ""; // Önce içeriği temizle
    divBoxes.appendChild(fragment); // Tek seferde DOM'a ekle
    divNum[0].value = "";
  } else {
    alert("Hatali sayi girdiniz!");
    destroy();
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

  divNum[0].value = "";
}
