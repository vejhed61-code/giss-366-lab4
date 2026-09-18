let map = L.map("map", {center: [32.7667, -108.2667], zoom: 12});
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {attribution: '&copy; OpenStreetMap contributors'}
).addTo(map);
let pnt = L.marker([32.7, -108.3]).addTo(map);
pnt.bindPopup("<b>Tyrone</b> is a nearby community southwest of Silver City.");
let line = L.polyline([
    [32.7, -108.3],
    [32.75, -108.1333]
], {
    color: "blue",
    weight: 5
}).addTo(map);
let area = L.polygon([
    [32.7667, -108.2839],
    [32.85, -108.2167],
    [32.75, -108.1333]
], {
    color: "green",
    fillColor: "lightgreen"
}).addTo(map);
L.control.scale({position: "bottomright"}).addTo(map);