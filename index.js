const map = L.map("map").setView(
  [
    43.096214, //latitude
    -79.037743,
  ], //longitude
  13
); //zoom

L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
  attribution: "Copyright Google Maps",
}).addTo(map);

var marker = L.marker([43.096214, -79.037743]).addTo(map);
var circle = L.circle([43.08, -79.08], { radius: 600 }).addTo(map);
var latlngs = [
  [43.09, -79.07],
  [43.08, -79.06],
  [43.1, -79.05],
];
var polygon = L.polygon(latlngs, {
  color: "orange",
  fillOpacity: 0.8,
  weight: 6,
}).addTo(map);

// var popup = L.popup()
//   .setLatLng([43.1123, -79.01])
//   .setContent("Testing a popup.")
//   .openOn(map);
marker.bindPopup("Testing a popup.").openPopup();
circle.bindPopup("<b>Testing!</b>I am a circle.");
polygon.bindPopup("Testing a polygon.");

function onMapClick(e) {
  //   alert("You clicked the map at " + e.latlng);
  L.popup().setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(map);
}

map.on("click", onMapClick);
