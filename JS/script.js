const searchButton = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

const API_KEY = "b542c1caa308bb6d2314019e5aff33ea";

searchButton.addEventListener('click', () => {
    const cityName = cityInput.value.trim();
    if (cityName) {
        fetchWeather(cityName);
    }
});

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
    .then(response => {
        if (!response.ok) {
            throw new Error('City not found');
        }
        return response.json();
    })
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error("Error:", error);
        alert('Unable to fetch weather. Please check the city name.');
    });
}

function displayWeather(data) {
    const cityNameDateElem = document.getElementById('city-name-date');
    const currentWeatherIconElem = document.getElementById('current-weather-icon');
    const currentTempElem = document.getElementById('current-temp');
    const currentWindElem = document.getElementById('current-wind');
    const currentHumidityElem = document.getElementById('current-humidity');
    
    // Set the data
    cityNameDateElem.textContent = `${data.name} (${new Date().toLocaleDateString()})`;
    currentWeatherIconElem.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    currentTempElem.textContent = `Temp: ${data.main.temp}°F`;
    currentWindElem.textContent = `Wind: ${data.wind.speed} MPH`;
    currentHumidityElem.textContent = `Humidity: ${data.main.humidity} %`;
}
