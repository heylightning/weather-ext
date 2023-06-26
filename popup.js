import { API_KEY } from './config.js';

document.addEventListener('DOMContentLoaded', () => {

    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');

    async function fetchWeatherData() {
        const apiKey = API_KEY;
        const lat = "33.44";
        const lon = "-94.04";

        const url = `https://forecast9.p.rapidapi.com/rapidapi/forecast/${lat}/${lon}/summary/`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
            }
        };        
        
        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data.items[0]);
            locationElement.textContent = `Date: ${data.items[0].dateWithTimezone}`;
            temperatureElement.textContent = `Max Temperature: ${data.items[0].temperature.max} \t Min Temperature: ${data.items[0].temperature.min}`;

        })
        .catch(err => console.error(err));
    };

    fetchWeatherData();
});