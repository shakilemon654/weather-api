    document.getElementById("search_button").addEventListener("click", () => {
        const city = document.getElementById("input-city").value;
        getWeatherData(city);
    })

    const getWeatherData = city => {
        const apiBase = "http://api.openweathermap.org/data/2.5/forecast";
        const apiKey = "1468198d3a968545675628650807cc69";
        const url = `${apiBase}?q=${city}&units=metric&APPID=${apiKey}`;
        fetch(url)
        .then(response => response.json())
        .then(data => updateWeatherData(data))   
    }

    const updateWeatherData = data => {
        document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`)
        document.getElementById("update-city-name").innerHTML = data.city.name;
        document.getElementById("update-temperature").innerText = data.list[0].main.temp;
        document.getElementById("update-weather-status").innerText = data.list[0].weather[0].main;
        document.getElementById("input-city").value = "";
    }

    getWeatherData("Tallinn");
