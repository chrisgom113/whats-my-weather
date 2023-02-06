var APIKey = 'c29c595fed34bd03d71c486c172a3363';

//Elements
var searchBtnEl = document.getElementById('search-btn')
var cityInputEl = $('#city-input');
var cityDateDisplayEl = $('#city-date');
var mainDisplayEl = $('#display-column');
var tempDisplayEl = $('#temp');
var windDisplayEl = $('#wind');
var humidityDisplayEl = $('#humidity');
var cityId;

//state vars
currentDate = dayjs().format('M/D/YYYY')


searchBtnEl.addEventListener('click', fetchWeatherData);


//Functions

//Fetch Weather Data
function fetchWeatherData(cityRequested) {
    var cityRequested = cityInputEl.val();
    var requestURLCurrent = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityRequested + '&appid=' + APIKey + '&units=imperial';


    fetch(requestURLCurrent)
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
            cityId = data.id;

            fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&appid=' + APIKey + '&units=imperial')
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    $('#forecast-header').removeClass('d-none');
                    var fiveDayEls = document.querySelectorAll("#day");
                    for (var i = 0; i < fiveDayEls.length; i++) {
                        fiveDayEls[i].innerHTML = '';
                        var forecastLoop = i * 8 + 4;
                        var dateIndex = new Date(data.list[forecastLoop].dt * 1000);
                        var forecastDay = dateIndex.getDate();
                        var forecastMonth = dateIndex.getMonth() + 1;
                        var forecastYear = dateIndex.getFullYear();
                        var forecastDateEl = document.createElement('h5');
                        forecastDateEl.innerHTML = forecastMonth + '/' + forecastDay + '/' + forecastYear;
                        fiveDayEls[i].append(forecastDateEl);

                    }
                })


        })


}






