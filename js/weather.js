const API_KEY = "1224842e7e2960147c312d9183f71e75";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const cityContainer = document.querySelector("#weather span:last-child");
            cityContainer.innerText = `in ${data.name}`;
            weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}'C`;
        } );
}

function onGeoError(){
    alert("Can't find your location. Can't get weather info.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);