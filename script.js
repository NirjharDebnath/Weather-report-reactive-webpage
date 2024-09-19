const apiKey = "1f83834d125d7918720dc6958107638b"; // Replace with your OpenWeatherMap API key
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    fetchWeather(city);
});

async function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Using metric units for Celsius

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        cityName.textContent = data.name + ', ' + data.sys.country;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Icon URL
        temperature.textContent = `Temperature: ${data.main.temp} °C`;
        description.textContent = data.weather[0].description;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle errors, e.g., display an error message on the webpage
    }
}
