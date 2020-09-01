// This is the request API
document.getElementById('zipInput').addEventListener('input', function(e) {
    let zipcode = e.target.value;
    const temperature = document.getElementById('temperature');
    const status = document.getElementById('status');
    const api = `https://api.weather.com/v1/location/${zipcode}%3A4%3AUS/forecast/daily/3day.json?units=e&language=en-US&apiKey=9d2908c81003444ea908c81003b44ed4`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {max_temp} = data.forecasts[0];
            const {phrase_22char} = data.forecasts[0].day;
            //Set DOM Elements from the API
            temperature.textContent = max_temp + '°F';
            status.textContent = phrase_22char;
        });
});