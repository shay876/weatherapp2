function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "f1eac4a368d3b697e5d93c0ab2e3fcbc";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
