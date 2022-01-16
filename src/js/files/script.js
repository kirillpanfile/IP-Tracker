// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


const button = document.querySelector('.form-header__button');
const input = document.querySelector('.form-header__search');
const ip = document.querySelector('#ip');
const location = document.querySelector('#lc');
const timeZone = document.querySelector('#tz');
const itp = document.querySelector('#itp');
let mapScale = 5;
let map = L.map('map').setView([51.505, -0.09], mapScale);

async function findLocation() {
    let data = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_VHgKvKYZy0a6NX350OVL7lj82IZJF&ipAddress=' + input.value)
    let response = await data.json();
    ip.textContent = response.ip;
    location.textContent = response.location.country + ', ' + response.location.city;
    timeZone.textContent = response.location.timezone;
    itp.textContent = response.isp;
    editMap([response.location.lat, response.location.lng])
}
const editMap = (lg) => {
    mapScale = 17;
    L.marker(lg).addTo(map)
        .bindPopup('Your Location')
        .openPopup();
}
input.nextElementSibling.parentNode.removeChild(input.nextSibling) // Remove Whitespace
button.addEventListener("click", (callback) => {
    findLocation()
    callback.preventDefault()
});
map.touchZoom.disable();
map.doubleClickZoom.disable();
// map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
// let mapIcon = L.icon({
//     iconUrl: '../../img/images/icon-location.svg'
// })

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    doubleClickZoom: false,
    zoomControl: false,
    boxZoom: false,
    accessToken: 'pk.eyJ1IjoiaW51bWFraWUiLCJhIjoiY2t3d290amZiMDVyNzJvbGFpOWI4bDE4NiJ9.sCoH7SuL3X_ohxx1R-kRRw'
}).addTo(map);
