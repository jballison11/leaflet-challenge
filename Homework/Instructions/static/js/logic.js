d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson", function(geodata){
    console.log(geodata)

function createMap(earthquakes) {
    var API_KEY = "pk.eyJ1IjoiamJhbGxpc29uMTEiLCJhIjoiY2swbXZzMDhvMWI5NjNjcG83cmlzNmU3biJ9.RAsVJ2lty9NYyaxPoCEgSw"
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.light",
        accessToken: API_KEY
  });
    var baseMaps = {
        "Light Map": lightmap
    };

    var overlayMaps = {
        "Earthquakes": earthquakes
    };

    var map = L.map("map-id", {
        center: [40.73, -74.0059],
        zoom: 12,
        layers: [lightmap, earthquakes]
      });

      L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
      }).addTo(map);

}

function createMarkers(response) {

    var stations = response.data.stations;

    var bikeMarkers = [];

    
});

