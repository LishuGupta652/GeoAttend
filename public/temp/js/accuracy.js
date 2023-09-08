console.log(destinationPolygon);

const map = L.map('map', {
    center: [10, 78],
    zoom: 12
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Geo Attend'
}).addTo(map);
// for search api
// L.Control.geocoder().addTo(map);

const polygon = L.polygon(destinationPolygon, { color: 'red' }).addTo(map);

map.fitBounds(polygon.getBounds());
// polygon.bindTooltip('Destination ', {});
polygon.bindTooltip('Nitt department  ', {});

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

let userLocationMarker, accuracyCircle;
const successCallback = (position) => {
    const { latitude, longitude, accuracy } = position.coords;

    // remove the marker if already exists
    if (userLocationMarker) {
        map.removeLayer(userLocationMarker);
    }

    userLocationMarker = L.marker([latitude, longitude]).addTo(map);

    // remove the accuracy circle if already exists
    if (accuracyCircle) {
        map.removeLayer(accuracyCircle);
    }

    accuracyCircle = L.circle([latitude, longitude], {
        color: 'blue',
        fillColor: '#f03',
        radius: accuracy
    }).addTo(map);

    const isInside = isMarkerInsidePolygon(userLocationMarker, polygon);

    if (isInside) {
        document.querySelector('.message').innerHTML = 'Your are inside the polygon';

        document.querySelector('.coordinates').innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}
    <br> Accuracy : ${accuracy}`;
    } else {
        document.querySelector('.message').innerHTML = 'Your are outside the polygon';

        document.querySelector('.coordinates').innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude} 
    <br> Accuracy in (Meters)  : ${accuracy}
    `;
    }
};

const errorCallback = (error) => {
    console.log(error);
    document.querySelector('.message').innerHTML = '';
    document.querySelector('.coordinates').innerHTML = '';
    document.querySelector('.error').innerHTML = error.message;
};

if (!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature!");
} else {
    navigator.geolocation.watchPosition(successCallback, errorCallback, options);
}
