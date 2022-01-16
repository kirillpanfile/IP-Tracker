// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.querySelector('.form-header__search').nextElementSibling.parentNode.removeChild(document.querySelector('.form-header__search').nextSibling)

let map = L.map('map').setView([51.505, -0.09], 5);
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
let mapIcon = L.icon({
    iconUrl: '../../img/images/icon-location.svg'
})

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

L.marker([51.5, -0.09], { icon: mapIcon }).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();