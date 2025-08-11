// Select the form for changing the location
const cityForm = document.querySelector('.change-location');
// Select the card element to display weather details
const card = document.querySelector('.card');
// Select the container for weather details
const details = document.querySelector('.details');
// Select the image element for day/night time
const time = document.querySelector('img.time');
// Select the image element for weather icons
const icon = document.querySelector('.icon img');

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
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // let timeSrc = null;
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg'
    // } else {
    //     timeSrc = 'img/night.svg'
    // }
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    // if(card.classList.contains('d-none')){
    //     card.classList.remove('d-none');
    // }
    card.classList.contains('d-none') ? card.classList.remove('d-none') : none;
};

const updateCity = async (city) => {

    // Fetch city details and weather information using asynchronous functions
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    // return {
    //     cityDets: cityDets,
    //     weather: weather
    // };
    return {
        cityDets,
        weather
    };
};

cityForm.addEventListener('submit', event => {

    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the city name entered by the user and reset the form
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Update the UI with the new city and handle any errors
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    // Store the city name in local storage for persistence
    localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
    // If a city is stored in local storage, update the UI with its weather details
    updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}