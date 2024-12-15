"use strict";
const elemTxtBox = document.querySelector("#name-input");
const logName = document.querySelector("#name-output");

elemTxtBox.addEventListener("input", () => {
  elemTxtBox.value.trim() !== ""
    ? (logName.textContent = elemTxtBox.value.trim())
    : (logName.textContent = "Anonymous");
});
