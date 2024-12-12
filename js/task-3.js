"use strict";
const elemTxtBox = document.querySelector("#name-input");
let name = "";
let logName = document.querySelector("#name-output");
const newName = elemTxtBox.addEventListener("keyup",writeName);
function writeName(e) {
    elemTxtBox.textContent += `${e.key}`;
    name = elemTxtBox.textContent.trim();
    if(name !== "")
        logName.innerHTML = name;
}
