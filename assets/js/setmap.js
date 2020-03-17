// JavaScript Document auto !important

let PMap = L.map('PMap', { crs: L.CRS.Simple }).setView([89, 100], 0);

var searchLayer = L.geoJson().addTo(PMap);

const attributionText =
    '<span aria-label="Libro">📘</span> <strong>Filosinapsis</strong>';

L.tileLayer(``, {
    minZoom: 0,
    maxZoom: 10,
    attribution: attributionText
}).addTo(PMap);


let size_1 = [130, 130];
let size_2 = [100, 100];
let size_3 = [90, 90];

let yellowMarker = L.icon({
    iconUrl: 'assets/images/yellow_sphere.png',
    iconSize: size_3
});

let skyblueMarker = L.icon({
    iconUrl: 'assets/images/skyblue_sphere.png',
    iconSize: size_3
});

let redMarker = L.icon({
    iconUrl: 'assets/images/1.png',
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

L.marker(Geometry, { icon: greenMarker })
    .addTo(PMap)
    .bindPopup('Geometría');

L.marker(Numbers, { icon: yellowMarker })
    .addTo(PMap)
    .bindPopup('Números');

L.marker(AppliedMath, { icon: whiteMarker })
    .addTo(PMap)
    .bindPopup('Matemática Aplicada');

L.marker(AnalysisMath, { icon: redMarker })
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

L.polyline([PureMath, Geometry]).addTo(PMap);
L.polyline([PureMath, AnalysisMath]).addTo(PMap);
L.polyline([Algebra, PureMath]).addTo(PMap);
L.polyline([Numbers, PureMath]).addTo(PMap);
L.polyline([AppliedMath, MainMath]).addTo(PMap);
L.polyline([PureMath, MainMath]).addTo(PMap);

// TODO: Remove this double clic neuron
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
