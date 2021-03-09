# clone_momentum

https://hsynew25.github.io/clone_momentum/

<br />

## 기능

1. Clock
2. TODO List
3. Weather

<br />

## 주요 코드

<br />

시, 분, 초가 한 자리수면 앞에 0 붙이기 (삼항연사자 사용)

```javascript
clockTitle.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
  min < 10 ? `0${min}` : min
}:${sec < 10 ? `0${sec}` : sec}`;
```

<br />
<br />

유저네임,todo list,coords 로컬 스토리지에 저장

```javascript
const user_localStorage = "currentUser";

function saveName(name) {
  localStorage.setItem(user_localStorage, name);
}
```

```javascript
const todos_localStorage = "todos";
let todos = [];

function saveTodos() {
  localStorage.setItem(todos_localStorage, JSON.stringify(todos)); //JSON.stringify : JSON 문자열로 변환
}
```

```javascript
const coords_localStorage = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(coords_localStorage, JSON.stringify(coordsObj));
}
```

<br />
<br />

유저네임,todo list,coords 로컬 스토리지에서 불러오기

```javascript
function loadName() {
  const currentUser = localStorage.getItem(user_localStorage);
  if (currentUser === null) {
    askForName(); //유저네임 물어보기 (초기화면)
  } else {
    printGreeting(currentUser); //유저불러오기
  }
}
```

```javascript
function loadTodos() {
  const loadedTodos = localStorage.getItem(todos_localStorage);
  if (loadedTodos !== null) {
    const parsedTodos = JSON.parse(loadedTodos); //JSON.parse : JSON 문자열을 분석하여 객체로 변환
    parsedTodos.forEach((todo) => paintTodo(todo.text));
  }
}
```

```javascript
function loadCoords() {
  const loadedCoords = localStorage.getItem(coords_localStorage);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}
```

<br />
<br />

백그라운드 이미지 랜덤으로 변경

```javascript
const imgNumber = 4;

function getRandom() {
  const num = Math.floor(Math.random() * imgNumber);
  return num;
}

function paintImg(imgNum) {
  const img = new Image();
  img.src = `${imgObj[imgNum]}`;
  img.classList.add("bgImage");
  body.appendChild(img);
}

function init() {
  const randomNumber = getRandom();
  paintImg(randomNumber);
}
```

<br />
<br />
현재 위치 가져오기 (geolocation API)

```javascript
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); //첫번째param: 위치가져오기 성공 시 동작할 함수, 두번째param : 위치가져오기 실패 시 동작할 함수
}
```

<br />
<br />

API 사용하여 날씨정보 가져오기 (open weather map)

```javascript
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
```
