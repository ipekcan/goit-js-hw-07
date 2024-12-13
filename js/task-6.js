"use strict";


const btnCreate = document.querySelector("#controls .create");
const btnDestroy = document.querySelector("#controls .destroy");

const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click",addDivs);
btnDestroy.addEventListener("click",destroy);

function addDivs() {
  divBoxes.innerHTML = "";
  const divNum = document.getElementsByClassName("inputNumber");
  let number = divNum[0].value;
  if (number>=1 && number<=100){
    for (let i = 1; i <= number; i++) {
      let newDiv = document.createElement("div");
      
      newDiv.setAttribute("style",`width:${20+10*parseInt(i)}px; height:${20+10*parseInt(i)}px; background-color:${getRandomHexColor()}; margin: 44px`) ;
      
      divBoxes.append(newDiv);
    }
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function destroy() {
  divBoxes.innerHTML = "";
  let divNum = document.getElementsByClassName("inputNumber");
  divNum[0].value = "";
}