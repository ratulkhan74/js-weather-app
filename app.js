const requestURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
const apiKey = '72ed0a1108d66e80092ec7cf3f3087d7';

const searchInput = document.getElementById('input-search');
const searchButton = document.getElementById('search-button');
const weatherIcon = document.querySelector('.weather-icon');
const weatherWrapper = document.querySelector('.weather');

async function getWeather(city) {
    const response = await fetch(`${requestURL}&q=${city}&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = `${data.name}`;
    document.querySelector('.temp').innerHTML = `${parseInt(data.main.temp)} °C`;
    document.querySelector('.humidity span').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind span').innerHTML = `${parseInt(data.wind.speed)} km/h`;
    document.querySelector('.weather-type').innerHTML = `${data.weather[0].main}`;

    switch (data.weather[0].main) {
        case "Clear":
            weatherIcon.src = 'images/clear.png';
            break;
        case "Clouds":
            weatherIcon.src = 'images/clouds.png';
            break;
        case "Rain":
            weatherIcon.src = 'images/rain.png';
            break;
        case "Drizzle":
            weatherIcon.src = 'images/drizzle.png';
            break;
        case "Mist":
            weatherIcon.src = 'images/mist.png';
            break;
        case "Snow":
            weatherIcon.src = 'images/snow.png';
            break;
        case "Haze":
            weatherIcon.src = 'images/mist.png';
            break;
        default:
            break;
    }
}

searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    getWeather(searchInput.value);
});