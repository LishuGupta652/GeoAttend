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
