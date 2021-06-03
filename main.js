let weather = {
  apiKey: "abf3a7e75d2754970f28f7d5f57968b7",
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector('.description').innerText=description;
    document.querySelector('.temp').innerText=temp+"℃";
    document.querySelector('.humidity').innerText="Humidity: "+humidity+"%";
    document.querySelector('.wind').innerText="Wind speed: "+speed+"km/h";
  },
};
weather.fetchWeather();
