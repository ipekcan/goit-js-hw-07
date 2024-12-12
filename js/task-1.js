"use strict";
const ctgs =document.querySelectorAll(".item");
console.log(`Number of categories: ${ctgs.length}`);
for (const c of ctgs) {
    const item = c.firstElementChild;
    console.log(`Category: ${item.innerHTML}`); 
    const elems = c.querySelectorAll(".item ul li").length;
    console.log(`Elements: ${elems}`);
}