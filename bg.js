const body = document.querySelector("body");

const imgNumber = 4;

function paintImg(imgNum) {
  const img = new Image();
  img.src = `/images/${imgNum + 1}.jpg`;
  img.classList.add("bgImage");
  body.appendChild(img);
}

function getRandom() {
  const num = Math.floor(Math.random() * imgNumber);
  return num;
}

function init() {
  const randomNumber = getRandom();
  paintImg(randomNumber);
}

init();
