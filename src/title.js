const { getRandomColor } = require("./color.js");
const image = require("../assets/landscape.jpg").default;

let changeCount = 0;

const el = document.querySelector("h1");

setInterval(() => {
  changeCount++;
  el.innerHTML = `This title will change ! ${changeCount}`;
  el.style.color = getRandomColor();
}, 1000);
