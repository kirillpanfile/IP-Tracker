(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  const t = document.querySelector(".form-header__button"),
    o = document.querySelector(".form-header__search"),
    n = document.querySelector("#ip"),
    i = document.querySelector("#lc"),
    a = document.querySelector("#tz"),
    c = document.querySelector("#itp");
  let r = 5,
    l = L.map("map").setView([51.505, -0.09], r);
  const d = (e) => {
    (r = 17), L.marker(e).addTo(l).bindPopup("Your Location").openPopup();
  };
  o.nextElementSibling.parentNode.removeChild(o.nextSibling),
    t.addEventListener("click", (e) => {
      !(async function () {
        let e = await fetch(
            "https://geo.ipify.org/api/v2/country,city?apiKey=at_VHgKvKYZy0a6NX350OVL7lj82IZJF&ipAddress=" +
              o.value
          ),
          t = await e.json();
        (n.textContent = t.ip),
          (i.textContent = t.location.country + ", " + t.location.city),
          (a.textContent = t.location.timezone),
          (c.textContent = t.isp),
          d([t.location.lat, t.location.lng]);
      })(),
        e.preventDefault();
    }),
    l.touchZoom.disable(),
    l.doubleClickZoom.disable(),
    l.boxZoom.disable(),
    l.keyboard.disable(),
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        doubleClickZoom: !1,
        zoomControl: !1,
        boxZoom: !1,
        accessToken:
          "pk.eyJ1IjoiaW51bWFraWUiLCJhIjoiY2t3d290amZiMDVyNzJvbGFpOWI4bDE4NiJ9.sCoH7SuL3X_ohxx1R-kRRw",
      }
    ).addTo(l),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();
