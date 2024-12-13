"use strict";
const elemTxtBox = document.querySelector("#name-input");
let name = "";
let logName = document.querySelector("#name-output");
const newName = elemTxtBox.addEventListener("keyup", writeName);
function writeName(e) {
    if (e.keyCode>64 && e.keyCode<91) {
        elemTxtBox.textContent += `${e.key}`;
        name = elemTxtBox.textContent.trim();
        if (name === "") 
            logName.innerHTML = "Anonymous";
        back();
    } else if (e.keyCode == 8) {
        back();
    }
}
function back() {
    if(elemTxtBox.value.trim() !== "")
        logName.innerHTML = elemTxtBox.value;
    else {
        logName.innerHTML = "Anonymous";
    }
}