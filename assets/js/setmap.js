// JavaScript Document auto !important

let PMap = L.map('PMap', { crs: L.CRS.Simple }).setView([89, 100], 0);

var searchLayer = L.geoJson().addTo(PMap);

const attributionText =
    '<span aria-label="Libro">📘</span> <strong>Filosinapsis</strong>';

L.tileLayer(``, {
    minZoom: -5,
    maxZoom: 10,
    attribution: attributionText,
}).addTo(PMap);

// * Tamaño de las neuronas
let big = [130, 130]; // Big
let medium = [100, 100]; // Medium
let small = [90, 90]; // Small

// TODO: Crear rutina para encajar las características de cada neurona

// * Características de las neuronas
let yellowMarker = L.icon({
    iconUrl: 'assets/images/yellow_sphere.png',
    iconSize: small,
});

let skyblueMarker = L.icon({
    iconUrl: 'assets/images/skyblue_sphere.png',
    iconSize: small,
});

let redMarker = L.icon({
    iconUrl: 'assets/images/1.png',
    iconSize: small,
});

let greenMarker = L.icon({
    iconUrl: 'assets/images/green_sphere.png',
    iconSize: small,
});

let whiteMarker = L.icon({
    iconUrl: 'assets/images/white_sphere.png',
    iconSize: medium,
});

let whiteBigMarker = L.icon({
    iconUrl: 'assets/images/white_sphere.png',
    iconSize: big,
});

let iconMarker = L.icon({
    iconUrl: 'assets/images/1.png',
    iconSize: [70, 70],
});

let iconMarker3 = L.icon({
    iconUrl: 'assets/images/2.png',
    iconSize: [20, 20],
});

// * Obtener color de ícono y tamaño
function get_icon_color_and_size(color, size) {
    if (color == 'green') {
        return greenMarker;
    } else if (color == 'yellow') {
        return yellowMarker;
    } else if (color == 'red') {
        return redMarker;
    } else if (color == 'skyblue') {
        return skyblueMarker;
    } else if (color == 'white') {
        if (size == 'big') {
            return whiteBigMarker;
        } else {
            return whiteMarker;
        }
    }
}

let marker_color;
let marker_size;
let marker_name;

function onDoubleClick(e) {
    let video_modal_link = document.getElementById('video_modal_link');
    let video_modal_element = document.getElementById('modal_video');
    let title = document.getElementById('modal_title');
    let description = document.getElementById('modal_description');
    let neuron_name = this._popup._content;

    video_modal_element.style.display = 'block';
    video_modal_link.click();
    title.innerText = `🎬 Vídeos sobre ${neuron_name}`;
    description.innerText = `✅ Se han encontrado 4 vídeos disponibles sobre ${neuron_name}. Revisados y verificados.`;
    console.log(this);
}

// * Graficamos las neuronas en el mapa (PMap)
for (let i = 0; i < Data.length; i++) {
    marker_color = Data[i].color;
    marker_size = Data[i].size;
    marker_name = Data[i].name;

    L.marker(
        coordinates_yx(Data[i]['coordinates_y'], Data[i]['coordinates_x']),
        { icon: get_icon_color_and_size(marker_color, marker_size) }
    )
        .addTo(PMap)
        .on('dblclick', onDoubleClick)
        .bindPopup(marker_name);
}

let polyline;

for (let i = 0; i < Data.length; i++) {
    if (Data[i].SubNeurons.length > 0) {
        for (let j = 0; j < Data[i].SubNeurons.length; j++) {
            L.polyline([
                coordinates_yx(
                    Data[i]['coordinates_y'],
                    Data[i]['coordinates_x']
                ),
                coordinates_yx(
                    Data[Data[i].SubNeurons[j]]['coordinates_y'],
                    Data[Data[i].SubNeurons[j]]['coordinates_x']
                ),
            ]).addTo(PMap);
        }
    }
}

var bounds = [
    [0, 0],
    [3000, 3000],
];

var image = L.imageOverlay('', bounds).addTo(PMap);
