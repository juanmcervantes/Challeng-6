// References to HTML elements
const searchButton = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

// OpenWeatherMap API Key
const API_KEY = "b542c1caa308bb6d2314019e5aff33ea";

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const cityName = cityInput.value.trim();
    if (cityName) {
        fetchWeather(cityName);
    }
});

// Fetch weather data from the API
function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
    .then(response => {
        if (!response.ok) throw new Error('City not found');
        return response.json();
    })
    .then(data => displayWeather(data))
    .catch(error => {
        console.error("Error:", error);
        alert('Unable to fetch weather. Please check the city name.');
    });
}

// Display the fetched weather data on the webpage
function displayWeather(data) {
    // References to display elements
    const cityNameDateElem = document.getElementById('city-name-date');
    // ... (similar lines for other elements)

    // Update elements with fetched data
    cityNameDateElem.textContent = `${data.name} (${new Date().toLocaleDateString()})`;
    // ... (similar lines for other elements)
}
