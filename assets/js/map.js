let mainTitle = 'Matemática';
mainTitleBox = document.getElementById('title');
mainTitleBox.innerHTML = mainTitle;

// JavaScript Document auto !important
var yx = L.latLng;

var xy = function(x, y) {
    if (L.Util.isArray(x)) {
        return yx(x[1], x[0]);
    }
    return yx(y, x);
};

let PMap = L.map('PMap', { crs: L.CRS.Simple }).setView([89, 100], 0);

var searchLayer = L.geoJson().addTo(PMap);

const attributionText =
    '<span aria-label="Libro">📘</span> <strong>Filosinapsis</strong>';

L.tileLayer(``, {
    minZoom: 0,
    maxZoom: 10,
    attribution: attributionText
}).addTo(PMap);


let size_1 = [120, 120];
let size_2 = [90, 90];
let size_3 = [80, 80];

let yellowMarker = L.icon({
    iconUrl: 'assets/images/yellow_sphere.png',
    iconSize: size_3
});

let skyblueMarker = L.icon({
    iconUrl: 'assets/images/skyblue_sphere.png',
    iconSize: size_3
});

let redMarker = L.icon({
    iconUrl: 'assets/images/red_sphere.png',
    iconSize: size_3
});

let greenMarker = L.icon({
    iconUrl: 'assets/images/green_sphere.png',
    iconSize: size_3
});

let whiteMarker = L.icon({
    iconUrl: 'assets/images/white_sphere.png',
    iconSize: size_2
});

let whiteBigMarker = L.icon({
    iconUrl: 'assets/images/white_sphere.png',
    iconSize: size_1
});

let iconMarker = L.icon({
    iconUrl: 'assets/images/1.png',
    iconSize: [70, 70]
});

let iconMarker3 = L.icon({
    iconUrl: 'assets/images/2.png',
    iconSize: [20, 20]
});

var sol = xy(175.2, -145.0);
var PureMath = xy(98, 285);
var MainMath = xy(98, 105);
var AppliedMath = xy(98, -90);
var Numbers = xy(-130, -0.09);
var deneb = xy(198.7, -60.3);
var AnalysisMath = xy(350, -0.09);
var Geometry = xy(-130, -179);
var Algebra = xy(350, -179);

L.marker(Geometry, { icon: greenMarker })
    .addTo(PMap)
    .bindPopup('Geometría');

L.marker(Numbers, { icon: yellowMarker })
    .addTo(PMap)
    .bindPopup('Números');

L.marker(AppliedMath, { icon: whiteMarker })
    .addTo(PMap)
    .bindPopup('Matemática Aplicada');

L.marker(AnalysisMath, { icon: iconMarker })
    .addTo(PMap)
    .bindPopup('Análisis matemático');

L.marker(Algebra, { icon: skyblueMarker })
    .addTo(PMap)
    .bindPopup('Álgebra');

L.marker(MainMath, { icon: whiteBigMarker })
    .addTo(PMap)
    .bindPopup('Matemática');

L.marker(PureMath, { icon: whiteMarker })
    .addTo(PMap)
    .bindPopup('Matemática Pura');

var travel = L.polyline([AppliedMath, Geometry]).addTo(PMap);
var travel = L.polyline([AppliedMath, AnalysisMath]).addTo(PMap);
var travel = L.polyline([Algebra, AppliedMath]).addTo(PMap);
var travel = L.polyline([Numbers, AppliedMath]).addTo(PMap);
var travel = L.polyline([AppliedMath, MainMath]).addTo(PMap);
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
