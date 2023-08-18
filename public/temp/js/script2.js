// // Initialize the map
// const map = L.map("map");

// // Get the tile layer from OpenStreetMaps
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   // Specify the maximum zoom of the map
//   maxZoom: 19,

//   // Set the attribution for OpenStreetMaps
//   attribution:
//     '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// // Set the view of the map
// // with the latitude, longitude and the zoom value
// map.setView([48.8584, 2.2945], 16);

// // Set the map view to the user's location
// // Uncomment below to set map according to user location
// map.locate({ setView: true, maxZoom: 16 });

// // Show a market at the position of the Eiffel Tower
// let eiffelMarker = L.marker([48.8584, 2.2945]).addTo(map);

// // Bind popup to the marker with a popup
// eiffelMarker.bindPopup("Eiffel Tower").openPopup();

// // Set the marker at the user's location
// map.on("lo  cationfound", (e) => {
//   L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
// });

// // get location change
// // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition
// // change map view on location change

var map = L.map("map", {
  center: [9.082, 8.6753],
  zoom: 8,
});
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
L.Control.geocoder().addTo(map);
if (!navigator.geolocation) {
  console.log("Your browser doesn't support geolocation feature!");
} else {
  navigator.geolocation.watchPosition(getPosition);
}
var marker, circle, lat, long, accuracy;

function getPosition(position) {
  // console.log(position)
  lat = position.coords.latitude;
  long = position.coords.longitude;
  accuracy = position.coords.accuracy;

  if (marker) {
    map.removeLayer(marker);
  }

  if (circle) {
    map.removeLayer(circle);
  }

  marker = L.marker([lat, long]);
  circle = L.circle([lat, long], { radius: accuracy });

  var featureGroup = L.featureGroup([marker, circle]).addTo(map);

  map.fitBounds(featureGroup.getBounds());

  console.log(
    "Your coordinate is: Lat: " +
      lat +
      " Long: " +
      long +
      " Accuracy: " +
      accuracy
  );
}
