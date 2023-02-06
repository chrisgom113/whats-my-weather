var APIKey = 'c29c595fed34bd03d71c486c172a3363';

//Elements
var searchBtnEL = document.getElementById('search-btn')
var cityInputEl = $('#city-input');


searchBtnEL.addEventListener('click', fetchWeatherData);


//Functions
function fetchWeatherData (cityRequested) {
    var cityRequested = cityInputEl.val();
    var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityRequested + '&appid=' + APIKey;

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    })

}






