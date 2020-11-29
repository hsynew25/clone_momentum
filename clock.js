const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector(".title");

function getTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  clockTitle.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
