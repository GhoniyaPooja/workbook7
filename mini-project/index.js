"use strict";

window.onload = function() {
    const citySelect = document.getElementById('city');
    const forecastBody = document.getElementById('forecastBody');
    const forecast = document.getElementById("forecast");

    const cities = [
        { name: "Benbrook, TX", latitude: 32.6732, longitude: -97.4606 },
        { name: "Denver, CO", latitude: 39.7392, longitude: -104.9903 },
        { name: "New York, NY", latitude: 40.7128, longitude: -74.0060 },
        { name: "Los Angeles, CA", latitude: 34.0522, longitude: -118.2437 },
        { name: "Chicago, IL", latitude: 41.8781, longitude: -87.6298 },
    ];

    //dropdown menu
    for (const city of cities) {
        const option = document.createElement('option');
        option.value = `${city.latitude},${city.longitude}`;
        option.textContent = city.name;
        citySelect.appendChild(option);
    }

    function getWeatherData(latitude, longitude) {
        fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
            .then(response => response.json())
            .then(data => {
                const forecastUrl = data.properties.forecast;
                return fetch(forecastUrl);
            })
            .then(response => response.json())
            .then(data => {
                const periods = data.properties.periods;
                forecastBody.innerHTML = '';
                for (const period of periods) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${period.name}</td>
                        <td>${period.temperature} ${period.temperatureUnit}</td>
                        <td>Winds ${period.windDirection} ${period.windSpeed}</td>
                        <td>${period.shortForecast}</td>
                    `;
                    forecastBody.appendChild(row);
                }
            });
    }

    citySelect.onchange = function() {
        const value = this.value;
        // Split the value of latitude and longitude
        const latitudeLongitudeArray = value.split(','); 
        // Get the latitude from the array
        const latitude = latitudeLongitudeArray[0]; 
        // Get the longitude from the array
        const longitude = latitudeLongitudeArray[1]; 
        

        getWeatherData(latitude, longitude);
    };
};
