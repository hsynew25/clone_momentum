const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const user_localStorage = "currentUser",
  showing_class = "showing";

function saveName(name) {
  localStorage.setItem(user_localStorage, name);
}

function handleSubmit(e) {
  e.preventDefault();
  printGreeting(input.value);
  saveName(input.value);
}

function askForName() {
  form.classList.add(showing_class);
  form.addEventListener("submit", handleSubmit);
}

function printGreeting(text) {
  form.classList.remove(showing_class);
  greeting.classList.add(showing_class);
  greeting.innerText = `Hello, ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(user_localStorage);
  if (currentUser === null) {
    askForName();
  } else {
    printGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
