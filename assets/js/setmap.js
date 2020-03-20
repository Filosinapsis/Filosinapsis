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


let big = [130, 130]; // Big
let medium = [100, 100]; // Medium
let small = [90, 90];   // Small

// TODO: Crear rutina para encajar las características de cada neurona

let yellowMarker = L.icon({
    iconUrl: 'assets/images/yellow_sphere.png',
    iconSize: small
});

let skyblueMarker = L.icon({
    iconUrl: 'assets/images/skyblue_sphere.png',
    iconSize: small
});

let redMarker = L.icon({
    iconUrl: 'assets/images/1.png',
    iconSize: small
});

let greenMarker = L.icon({
    iconUrl: 'assets/images/green_sphere.png',
    iconSize: small
});

let whiteMarker = L.icon({
    iconUrl: 'assets/images/white_sphere.png',
    iconSize: medium
});

let whiteBigMarker = L.icon({
    iconUrl: 'assets/images/white_sphere.png',
    iconSize: big
});

let iconMarker = L.icon({
    iconUrl: 'assets/images/1.png',
    iconSize: [70, 70]
});

let iconMarker3 = L.icon({
    iconUrl: 'assets/images/2.png',
    iconSize: [20, 20]
});

// TODO: Crear una rutina para apuntar las neuronas en el mapa

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

// TODO: Crear una rutina para trazar las polyline
L.polyline([PureMath, Geometry]).addTo(PMap);
L.polyline([PureMath, AnalysisMath]).addTo(PMap);
L.polyline([Algebra, PureMath]).addTo(PMap);
L.polyline([Numbers, PureMath]).addTo(PMap);
L.polyline([AppliedMath, MainMath]).addTo(PMap);
L.polyline([PureMath, MainMath]).addTo(PMap);

var bounds = [
    [0, 0],
    [3000, 3000]
];

var image = L.imageOverlay('', bounds).addTo(PMap);
