    document.getElementById("search_button").addEventListener("click", () => {
        const city = document.getElementById("input-city").value;
        getWeatherData(city);
    })

    const getWeatherData = city => {
        const apiBase = "https://api.openweathermap.org/data/2.5/weather";
        const apiKey = "1468198d3a968545675628650807cc69";
        const url = `${apiBase}?q=${city}&appid=${apiKey}`;
        fetch(url)
        .then(response => response.json())
        .then(data => updateWeatherData(data))   
    }

    const updateWeatherData = data => {
        document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        document.getElementById("update-city-name").innerHTML = data.name;
        document.getElementById("update-temperature").innerText = Math.round(data.main.temp - 273.15);
        document.getElementById("update-weather-status").innerText = data.weather[0].main;
        document.getElementById("input-city").value = "";
    }

    getWeatherData("Tallinn");
