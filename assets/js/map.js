let mainTitle = 'Matemática';
mainTitleBox = document.getElementById('title');
mainTitleBox.innerHTML = mainTitle;

// JavaScript Document auto !important
var yx = L.latLng;

var xy = function(x, y) {
    if (L.Util.isArray(x)) {
        // When doing xy([x, y]);
        return yx(x[1], x[0]);
    }
    return yx(y, x); // When doing xy(x, y);
};

let PMap = L.map('PMap', { crs: L.CRS.Simple }).setView([89, 100], 0);

var searchLayer = L.geoJson().addTo(PMap);

// L.control.scale().addTo(PMap);

// setInterval(function(){
//    map.setView([0, 0]);
//    setTimeout(function(){
//        map.setView([60, 0]);
//    }, 2000);
// }, 4000);

const attributionText =
    '<span aria-label="Libro">📘</span> <strong>Filosinapsis</strong>';

L.tileLayer(``, {
    minZoom: 0,
    maxZoom: 10,
    attribution: attributionText
}).addTo(PMap);

// let marker = L.marker([51.5, -0.09]).addTo(PMap)

let yellowMarker = L.icon({
    iconUrl: 'assets/images/yellow_sphere.png',
    iconSize: [30, 30]
});

let skyblueMarker = L.icon({
    iconUrl: 'assets/images/skyblue_sphere.png',
    iconSize: [30, 30]
});

let redMarker = L.icon({
    iconUrl: 'assets/images/red_sphere.png',
    iconSize: [30, 30]
});

let greenMarker = L.icon({
    iconUrl: 'assets/images/green_sphere.png',
    iconSize: [30, 30]
});

let whiteMarker = L.icon({
    iconUrl: 'assets/images/white_sphere.png',
    iconSize: [40, 40]
});

let whiteBigMarker = L.icon({
    iconUrl: 'assets/images/white_sphere.png',
    iconSize: [60, 60]
});

let iconMarker = L.icon({
    iconUrl: 'assets/images/1.png',
    iconSize: [30, 30]
});

let iconMarker3 = L.icon({
    iconUrl: 'assets/images/2.png',
    iconSize: [20, 20]
});

var sol = xy(175.2, -145.0);
var mizar = xy(40, -119.1);
var kruegerZ = xy(-70.4, -6.5);
var deneb = xy(198.7, -60.3);
var marker2 = xy(100, -20);
var marker3 = xy(300, -0.09);
var marker4 = xy(250, -109);
var MainMath = xy(98, 105);
var PureMath = xy(98, 205);

L.marker(mizar, { icon: greenMarker })
    .addTo(PMap)
    .bindPopup('Geometría');

L.marker(kruegerZ, { icon: yellowMarker })
    .addTo(PMap)
    .bindPopup('Números');

L.marker(marker2, { icon: whiteMarker })
    .addTo(PMap)
    .bindPopup('Matemática aplicada');

L.marker(marker3, { icon: iconMarker })
    .addTo(PMap)
    .bindPopup('Análisis matemático');

L.marker(marker4, { icon: skyblueMarker })
    .addTo(PMap)
    .bindPopup('Álgebra');

L.marker(MainMath, { icon: whiteBigMarker })
    .addTo(PMap)
    .bindPopup('Matemática Aplicada');

L.marker(PureMath, { icon: whiteMarker })
    .addTo(PMap)
    .bindPopup('Matemática Pura');

var travel = L.polyline([marker2, mizar]).addTo(PMap);
var travel = L.polyline([marker2, marker3]).addTo(PMap);
var travel = L.polyline([marker4, marker2]).addTo(PMap);
var travel = L.polyline([kruegerZ, marker2]).addTo(PMap);
var travel = L.polyline([marker2, MainMath]).addTo(PMap);
var travel = L.polyline([PureMath, MainMath]).addTo(PMap);

PMap.doubleClickZoom.disable();
PMap.on('dblclick', e => {
    let latLng = PMap.mouseEventToLatLng(e.originalEvent);
    L.marker([latLng.lat, latLng.lng], { icon: whiteMarker }).addTo(PMap);
});

var bounds = [
    [0, 0],
    [3000, 3000]
];
var image = L.imageOverlay('', bounds).addTo(PMap);
