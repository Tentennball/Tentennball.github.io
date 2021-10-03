const API_KEY = "525158742641d59a2b6d7354e7655ae9";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then((data) =>{
        const weather = document.querySelector("#weather div:first-child");
        const city = document.querySelector("#weather div:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°C`;
    });

}

function onGeoError(){
    alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);