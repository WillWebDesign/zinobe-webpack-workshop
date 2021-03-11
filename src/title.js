const { getRandomColor } = require("./color.js");
const image = require("../assets/landscape.jpg").default;

let changeCount = 0;

const el = document.querySelector("h1");

const img = document.createElement("img");
img.src = image;

el.parentNode.insertBefore(img, el.nextSibling);

setInterval(() => {
  changeCount++;
  el.innerHTML = `This title will change ! ${changeCount}`;
  el.style.color = getRandomColor();
}, 1000);
