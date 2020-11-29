const weather = document.querySelector(".js-weather"),
  tempAndPlace = weather.querySelector(".tempAndPlace"),
  weatherInfo = weather.querySelector(".weatherInfo"),
  weatherDescription = weather.querySelector(".description");

const coords_localStorage = "coords";
const API_KEY = "1c431e0ab26dc4d84613dcb9d0f0d946";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      const info = json.weather[0].main;
      const description = json.weather[0].description;
      tempAndPlace.innerText = `${temperature} @ ${place}`;
      weatherInfo.innerText = `The weather is ${info}.`;
      weatherDescription.innerText = `You can see ${description}!`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(coords_localStorage, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(latitude, longitude);
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("error");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(coords_localStorage);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
