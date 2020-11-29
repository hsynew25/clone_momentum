const body = document.querySelector("body");
const imgNumber = 4;

const imgObj = [
  "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80",
  "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1462480803487-a2edfd796460?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1494625927555-6ec4433b1571?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1953&q=80",
];

function paintImg(imgNum) {
  const img = new Image();
  img.src = `${imgObj[imgNum]}`;
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
