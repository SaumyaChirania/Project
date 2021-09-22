//5c4cb735104b2d21bd76079a1e03747d

let weather = {
    "apiKey" : "5c4cb735104b2d21bd76079a1e03747d",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerHTML = "Weather in " + name + ":";
        document.querySelector(".weathericon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed : " + speed + " km/h";

        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector("button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter")
        weather.search();
})

weather.fetchWeather("New Delhi");
