const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humid = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const icon = document.querySelector('.icon');
const bar = document.getElementById('srhbar');
const search = document.getElementById('search');

async function getWeather(data) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=9df883405da44f6686d90454242204&q=${data}&aqi=no`);
    const res = await response.json();
    // console.log(res);
    setWeather(res);
}

function setWeather(data) {
    console.log(data)
    city.innerHTML = `<h3>City:${data.location.name}</h3>`
    icon.src=data.current.condition.icon;
    temp.innerHTML = `<h3>Temparature:${data.current.temp_c}</h3>`;
    humid.innerHTML = `<h3>Humidity:${data.current.humidity}</h3>`;
    wind.innerHTML = `<h3>Wind:${data.current.wind_kph}</h3>`;
}

function start(){
    getWeather(bar.value);
}