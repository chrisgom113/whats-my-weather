var APIKey = 'c29c595fed34bd03d71c486c172a3363';

//Elements
var searchBtnEl = document.getElementById('search-btn')
var cityInputEl = $('#city-input');
var cityDateDisplayEl = $('#city-date');
var mainDisplayEl = $('#display-column');
var tempDisplayEl = $('#temp');
var windDisplayEl = $('#wind');
var humidityDisplayEl = $('#humidity');

//state vars
currentDate = dayjs().format('M/D/YYYY')


searchBtnEl.addEventListener('click', fetchWeatherData);


//Functions

//Fetch Weather Data
function fetchWeatherData(cityRequested) {
    var cityRequested = cityInputEl.val();
    var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityRequested + '&appid=' + APIKey + '&units=imperial';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            mainDisplayEl.removeClass("d-none");
            cityDateDisplayEl.text(data.name + ' (' + currentDate + ')');
            tempDisplayEl.text('Temp: ' + data.main.temp + ' \u2109');
            windDisplayEl.text('Wind: ' + data.wind.speed + ' MPH');
            humidityDisplayEl.text('Humidity: ' + data.main.humidity + ' %');

        })
}






