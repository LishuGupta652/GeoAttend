// const marker = L.marker([10.7634768, 78.8161175]).addTo(map);

// const circle = L.circle([10.7634768, 78.8161175], {
//   color: "red",
//   fillColor: "#f03",
//   fillOpacity: 0.5,
//   radius: 500,
// }).addTo(map);

// const  polygon = L.polygon([
//   [51.509, -0.08],
//   [51.503, -0.06],
//   [51.51, -0.047],
// ]).addTo(map);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// const  popup = L.popup()
//   .setLatLng([51.513, -0.09])
//   .setContent("I am a standalone popup.")
//   .openOn(map);

// target locatoin 10.7634768, 78.8161175
function distance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = earthRadius * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function geofence(lat1, lon1, lat2, lon2, radius) {
  const d = distance(lat1, lon1, lat2, lon2);
  if (d <= radius) {
    return true;
  } else {
    return false;
  }
}

const destinationCoordinates = {
  lat: 10.7634768,
  lon: 78.8161175,
};

// if the distance is less than 100m then show the message as you are in the location
// else show the message as you are not in the location
const successCallback = (position) => {
  const { latitude, longitude } = position.coords;

  const isInside = geofence(
    destinationCoordinates.lat,
    destinationCoordinates.lon,
    latitude,
    longitude,
    0.1
  );
  if (isInside) {
    document.querySelector(".message").innerHTML = "You are in the location";

    document.querySelector(
      ".coordinates"
    ).innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;
    const map = L.map("map").setView([latitude, longitude], 20);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "© GeoAttend",
    }).addTo(map);
    const marker = L.marker([latitude, longitude]).addTo(map);

    const circle = L.circle(
      [destinationCoordinates.lat, destinationCoordinates.lon],
      {
        color: "green",
        fillColor: "green",
        fillOpacity: 0.5,
        radius: 30,
      }
    ).addTo(map);

    // Send the notification to the user
    // https://developer.mozilla.org/en-US/docs/Web/API/notification

    // Ask for the permission
    // https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission
    Notification.requestPermission();

    new Notification("You are in the location");

    // https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
  } else {
    document.querySelector(".message").innerHTML =
      "You are not in the location";

    document.querySelector(
      ".coordinates"
    ).innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;
  }
};

const errorCallback = (error) => {
  console.log(error);
};

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const watchId = navigator.geolocation.watchPosition(
  successCallback,
  errorCallback,
  options
);
