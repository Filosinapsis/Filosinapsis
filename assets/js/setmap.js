// JavaScript Document auto !important

var baseLayers = {};

let neurons_A = L.layerGroup();
let neurons_B = L.layerGroup();

var overlays = {
    Grupo_A: neurons_A,
    Grupo_B: neurons_B,
};

let PMap = L.map('PMap', {
    crs: L.CRS.Simple,
    layers: [neurons_A, neurons_B],
}).setView([89, 100], 0);

function changeSizeText(neuronIndex, size) {
    document.getElementsByClassName('leaflet-popup-content')[
        neuronIndex
    ].style.fontSize = '' + size + 'rem';
}

// * changeNeuronSizeByType('small', 90, -45);
// * changeNeuronSizeByType('small', X, Y)
// *                                (X/2) - ((X/2)*2)

function changeNeuronSizeByType(type, size) {
    let newZoom = '' + size + 'px';
    let margin = size / 2 - (size / 2) * 2;
    let newMargin = '' + margin + 'px';

    $('#PMap .marker--' + type).css({
        width: newZoom,
        height: newZoom,
        marginLeft: newMargin,
        marginTop: newMargin,
    });
}

function getNeuronBy(index) {
    return document.getElementsByClassName('leaflet-marker-icon')[index];
}

/// TODO: Crear el algoritmo matemático que programe esta gráfica (no manualmente)
PMap.on('zoomend', function () {
    let currentZoom = PMap.getZoom();

    // TODO: Obtener el tipo de neurona y con ello evaluar el tamaño correspondiente
    // TODO: Cambiar el tamaño del texto según acercamiento
    // TODO: No mostrar el texto cuando el zoom esté al máximo

    let newZoom;
    let newMargin;
    let neuronsQuantity = Data.length;

    if (currentZoom == 10) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 330);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 300);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 290);
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 2.5);
        }
    } else if (currentZoom == 9) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 310);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 280);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 270);
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 2.3);
        }
    } else if (currentZoom == 8) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 290);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 260);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 250);
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 2.1);
        }
    } else if (currentZoom == 7) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 270);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 240);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 230);
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 1.9);
        }
    } else if (currentZoom == 6) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 250);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 220);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 210); // Todo sólo (90/0.5)
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 1.7);
        }
    } else if (currentZoom == 5) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 230);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 200);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 190); // Todo (90/1) o sea 90 * 2
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 1.5);
        }
    } else if (currentZoom == 4) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 210);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 180);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 170); // Todo (90/1) o sea 90 * 2
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 1.4);
        }
    } else if (currentZoom == 3) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 190);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 160);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 150);
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 1.4);
        }
    } else if (currentZoom == 2) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 170);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 140);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 130); // Ready
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 1.3);
        }
    } else if (currentZoom == 1) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 150);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 120);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 110); // Ready
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 1.2);
        }
    } else if (currentZoom == 0) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 130);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 100);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 90);
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 1.1);
        }
    } else if (currentZoom == -1) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 100);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 70);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 60);
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 1);
        }
    } else if (currentZoom == -2) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 80);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 50);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 40);
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 0.7);
        }
    } else if (currentZoom == -3) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 60);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 30);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 20);
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 0.5);
        }
    } else if (currentZoom == -4) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 50);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 20);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 10);
            }
        }

        for (let neuronIndex in Data) {
            changeSizeText(neuronIndex, 0.3);
        }

        $('.leaflet-popup-content').css({ opacity: '1' });
    } else if (currentZoom == -5) {
        for (let neuronIndex in Data) {
            let currentNeuron = getNeuronBy(neuronIndex);

            if (currentNeuron.classList.contains('marker--big')) {
                changeNeuronSizeByType('big', 30);
            } else if (currentNeuron.classList.contains('marker--medium')) {
                changeNeuronSizeByType('medium', 10);
            } else if (currentNeuron.classList.contains('marker--small')) {
                changeNeuronSizeByType('small', 5);
            }
        }

        $('.leaflet-popup-content').css({ opacity: '0' });
    }
});

// FIXME: Active layers for production version
// L.control.layers(baseLayers, overlays).addTo(PMap);

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

    if (i % 2 == 0) {
        L.marker(
            coordinates_yx(Data[i]['coordinates_y'], Data[i]['coordinates_x']),
            { icon: get_icon_color_and_size(marker_color, marker_size) }
        )
            .addTo(neurons_A)
            .on('dblclick', onDoubleClick)
            .bindPopup(marker_name);
    } else {
        L.marker(
            coordinates_yx(Data[i]['coordinates_y'], Data[i]['coordinates_x']),
            { icon: get_icon_color_and_size(marker_color, marker_size) }
        )
            .addTo(neurons_B)
            .on('dblclick', onDoubleClick)
            .bindPopup(marker_name);
    }
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

const neuronsQuantity = document.getElementsByClassName('leaflet-marker-icon')
    .length;

for (let neuronIndex = 0; neuronIndex < neuronsQuantity; neuronIndex++) {
    let currentNeuron = document.getElementsByClassName('leaflet-marker-icon');
    let currentWidth = currentNeuron[neuronIndex].style.width;

    if (currentWidth == '130px') {
        currentNeuron[neuronIndex].classList.add('marker--big');
    } else if (currentWidth == '100px') {
        currentNeuron[neuronIndex].classList.add('marker--medium');
    } else if (currentWidth == '90px') {
        currentNeuron[neuronIndex].classList.add('marker--small');
    }
}
