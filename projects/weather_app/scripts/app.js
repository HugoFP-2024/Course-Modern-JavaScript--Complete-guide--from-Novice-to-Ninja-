import { Forecast } from './forecast.js';

const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const forecast = new Forecast();

const updateUI = data => {

    // const cityDets = data.cityDets;
    // const weather = data.weather;
    const { cityDets, weather } = data;

    // Update the HTML content with city and weather details
    details.innerHTML = `                
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`;

    // Set the weather icon source dynamically
    const iconSrc = `../img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // let timeSrc = null;
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg'
    // } else {
    //     timeSrc = 'img/night.svg'
    // }
    let timeSrc = weather.IsDayTime ? '../img/day.svg' : '../img/night.svg';
    time.setAttribute('src', timeSrc);

    // if(card.classList.contains('d-none')){
    //     card.classList.remove('d-none');
    // }
    card.classList.contains('d-none') ? card.classList.remove('d-none') : none;
};

// const updateCity = async (city) => {

//     // Fetch city details and weather information using asynchronous functions
//     const cityDets = await getCity(city);
//     const weather = await getWeather(cityDets.Key);

//     // return {
//     //     cityDets: cityDets,
//     //     weather: weather
//     // };
//     return {
//         cityDets,
//         weather
//     };
// };

cityForm.addEventListener('submit', event => {

    event.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
    // If a city is stored in local storage, update the UI with its weather details
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}