async function checkWeather(locationName) {
  const response = await fetch(apiUrl + locationName + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".locationName").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
    var currentTime = data.dt;
    var sunriseTime = data.sys.sunrise;
    var sunsetTime = data.sys.sunset;
    var currentWeatherCode = data.weather[0].id;
  
    // Checks if it is day
    if (currentTime >= sunriseTime && currentTime <= sunsetTime) {
      if (currentWeatherCode === 210) {
        weatherIcon.src = "res/weather/day-storm.png";
      } else if (currentWeatherCode >= 200 && currentWeatherCode <= 232) {
        weatherIcon.src = "res/weather/neutral-storm.png";
      } else if (currentWeatherCode >= 300 && currentWeatherCode <= 321) {
        weatherIcon.src = "res/weather/neutral-rain.png";
      } else if (currentWeatherCode >= 500 && currentWeatherCode <= 504) {
        weatherIcon.src = "res/weather/day-rain.png";
      } else if (currentWeatherCode === 511) {
        weatherIcon.src = "res/weather/neutral-snow.png";
      } else if (currentWeatherCode >= 520 && currentWeatherCode <= 531) {
        weatherIcon.src = "res/weather/neutral-rain.png";
      } else if (currentWeatherCode === 600 || currentWeatherCode === 612 || currentWeatherCode === 615 || currentWeatherCode === 620) {
        weatherIcon.src = "res/weather/day-snow.png";
      } else if (currentWeatherCode >= 600 && currentWeatherCode <= 622) {
        weatherIcon.src = "res/weather/neutral-snow.png";
      } else if (currentWeatherCode === 701 || currentWeatherCode === 731 || currentWeatherCode === 751 || currentWeatherCode === 761) {
        weatherIcon.src = "res/weather/day-fog.png";
      } else if (currentWeatherCode === 711 || currentWeatherCode === 721 || currentWeatherCode === 741 || currentWeatherCode === 762) {
        weatherIcon.src = "res/weather/neutral-fog.png";
      } else if (currentWeatherCode === 771 || currentWeatherCode === 781) {
        weatherIcon.src = "res/weather/neutral-wind.png";
      } else if (currentWeatherCode === 800) {
        weatherIcon.src = "res/weather/day-clear.png";
      } else if (currentWeatherCode === 801 || currentWeatherCode === 802) {
        weatherIcon.src = "res/weather/day-cloud.png";
      } else {
        weatherIcon.src = "res/weather/neutral-cloud.png";
      }
    } else { // Checks if it is night
      if (currentWeatherCode === 210) {
        weatherIcon.src = "res/weather/night-storm.png";
      } else if (currentWeatherCode >= 200 && currentWeatherCode <= 232) {
        weatherIcon.src = "res/weather/neutral-storm.png";
      } else if (currentWeatherCode >= 300 && currentWeatherCode <= 321) {
        weatherIcon.src = "res/weather/neutral-rain.png";
      } else if (currentWeatherCode >= 500 && currentWeatherCode <= 504) {
        weatherIcon.src = "res/weather/night-rain.png";
      } else if (currentWeatherCode === 511) {
        weatherIcon.src = "res/weather/neutral-snow.png";
      } else if (currentWeatherCode >= 520 && currentWeatherCode <= 531) {
        weatherIcon.src = "res/weather/neutral-rain.png";
      } else if (currentWeatherCode === 600 || currentWeatherCode === 612 || currentWeatherCode === 615 || currentWeatherCode === 620) {
        weatherIcon.src = "res/weather/night-snow.png";
      } else if (currentWeatherCode >= 600 && currentWeatherCode <= 622) {
        weatherIcon.src = "res/weather/neutral-snow.png";
      } else if (currentWeatherCode === 701 || currentWeatherCode === 731 || currentWeatherCode === 751 || currentWeatherCode === 761) {
        weatherIcon.src = "res/weather/night-fog.png";
      } else if (currentWeatherCode === 711 || currentWeatherCode === 721 || currentWeatherCode === 741 || currentWeatherCode === 762) {
        weatherIcon.src = "res/weather/neutral-fog.png";
      } else if (currentWeatherCode === 771 || currentWeatherCode === 781) {
        weatherIcon.src = "res/weather/neutral-wind.png";
      } else if (currentWeatherCode === 800) {
        weatherIcon.src = "res/weather/night-clear.png";
      } else if (currentWeatherCode === 801 || currentWeatherCode === 802) {
        weatherIcon.src = "res/weather/night-cloud.png";
      } else {
        weatherIcon.src = "res/weather/neutral-cloud.png";
      }
    }
  
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBar = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

searchButton.addEventListener("click", () => {
  checkWeather(searchBar.value);
});