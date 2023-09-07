function isMarkerInsidePolygon(marker, poly) {
    var polyPoints = poly.getLatLngs();
    var x = marker.getLatLng().lat,
        y = marker.getLatLng().lng;

    var inside = false;
    for (var i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
        var xi = polyPoints[i].lat,
            yi = polyPoints[i].lng;
        var xj = polyPoints[j].lat,
            yj = polyPoints[j].lng;

        var intersect = yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }

    return inside;
}
