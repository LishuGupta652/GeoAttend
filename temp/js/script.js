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

const map = L.map("map", {
  center: [10, 78],
  zoom: 13,
});
const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "",
}).addTo(map);
L.Control.geocoder().addTo(map);

const destination = [10.7634768, 78.8161175];

const destinationCircle = L.circle(destination, {
  color: "red",
  fillColor: "#f03",
}).addTo(map);

destinationCircle.bindTooltip("Destination ", {});

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
let marker, circle, accuracy;
const successCallback = (position) => {
  const { latitude, longitude, accuracy } = position.coords;

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

    showMap(latitude, longitude, accuracy);
  } else {
    document.querySelector(".message").innerHTML =
      "You are not in the location";

    document.querySelector(
      ".coordinates"
    ).innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;

    showMap(latitude, longitude, accuracy);
  }
};
function showMap(latitude, longitude, accuracy) {
  // remove the map
  if (marker) {
    map.removeLayer(marker);
  }

  if (circle) {
    map.removeLayer(circle);
  }

  marker = L.marker([latitude, longitude]);
  circle = L.circle([latitude, longitude], { radius: 100 });

  const featureGroup = L.featureGroup([marker, circle]).addTo(map);

  map.fitBounds(featureGroup.getBounds());
  document.querySelector(".error").innerHTML = "";
  sendNotification();
}
const sendNotification = () => {
  // Send the notification to the user
  // https://developer.mozilla.org/en-US/docs/Web/API/notification
  // Ask for the permission
  // https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission
  // Notification.requestPermission();
  // new Notification("You are in the location");
  // https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification

  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      console.log(permission);
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }
};

const errorCallback = (error) => {
  console.log(error);
  document.querySelector(".message").innerHTML = "";
  document.querySelector(".coordinates").innerHTML = "";
  document.querySelector(".error").innerHTML = error.message;
};

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

if (!navigator.geolocation) {
  console.log("Your browser doesn't support geolocation feature!");
} else {
  navigator.geolocation.watchPosition(successCallback, errorCallback, options);
}
