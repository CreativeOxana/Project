let now = new Date();

let dateElement = document.querySelector("#today");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let min = now.getMinutes();
if (min < 10) {
  min = `0${min}`;
}

dateElement.innerHTML = `${day} ${month} ${date}, ${hours}:${min}`;

//2

function cityName(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  city.innerHTML = `${cityInput.value}`;
}

let cityNameButton = document.querySelector("#city-button");
cityNameButton.addEventListener("submit", cityName);

// 3

function convertToFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#tempValue");
  temp.innerHTML = "64";
}

function convertToCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#tempValue");
  temp.innerHTML = "18";
}

let fahrenLink = document.querySelector("#fahrenheit");
fahrenLink.addEventListener("click", convertToFahrenheit);

let celLink = document.querySelector("#celsius");
celLink.addEventListener("click", convertToCelsius);

function cityTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  console.log(response.data);
}

function showCity(city) {
  let apiKey = `c8a77112b2faf6684bb4b21a0aa778ae`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(cityTemp);
}

console.log(showCity);

function changeCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;

  let apiKey = `da6d6b75abd767e257a129a08b4d0f5d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

console.log(changeCity);

function showTemperature(response) {
  let currentTemp = Math.round(response.data.main.temp);

  let displayTemp = document.querySelector("#temperature");
  displayTemp.innerHTML = `${currentTemp}`;
}
