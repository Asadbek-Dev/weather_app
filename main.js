let weather={
    "apiKey":'abf3a7e75d2754970f28f7d5f57968b7',
    fetchWeather:function(){
        fetch("http://api.openweathermap.org/data/2.5/weather?q=tashkent&units=metric&appid=abf3a7e75d2754970f28f7d5f57968b7")
        .then((response)=>response.json())
        .then((data)=>console.log(data))
    }
}
weather.fetchWeather();