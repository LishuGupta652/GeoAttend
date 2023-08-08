# Maths for Maps

## Distance between two points

```js
function distance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = earthRadius * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

module.exports = distance;
```

## Geofencing

```js
const distance = require("./distance");

function geofence(lat1, lon1, lat2, lon2, radius) {
  const d = distance(lat1, lon1, lat2, lon2);
  if (d <= radius) {
    return true;
  } else {
    return false;
  }
}

module.exports = geofence;
```
