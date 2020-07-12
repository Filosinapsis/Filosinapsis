const Data = [
    {
        "id": 0,
        "name": "Matemática",
        "SubNeurons": [1],
        "SuperNeuron": -1,
        "color": "white",
        "size": "big"
    },
    {
        "id": 1,
        "name": "Matemáticas Puras",
        "SubNeurons": [2],
        "SuperNeuron": 0,
        "color": "yellow",
        "size": "small"
    },
    {
        "id": 2,
        "name": "Aritmética",
        "SubNeurons": [3],
        "SuperNeuron": 1,
        "color": "white",
        "size": "green"
    },
    {
        "id": 3,
        "name": "Conjuntos numéricos",
        "SubNeurons": [4],
        "SuperNeuron": 2,
        "color": "skyblue",
        "size": "small"
    },
    {
        "id": 4,
        "name": "Números naturales",
        "SubNeurons": [5, 6, 7, 8],
        "SuperNeuron": 3,
        "color": "red",
        "size": "small"
    },
    {
        "id": 5,
        "name": "Perspectiva histórica",
        "SubNeurons": [],
        "SuperNeuron": 4,
        "color": "yellow",
        "size": "small"
    },
    {
        "id": 6,
        "name": "Definición",
        "SubNeurons": [],
        "SuperNeuron": 4,
        "color": "green",
        "size": "small"
    },
    {
        "id": 7,
        "name": "Representación gráfica",
        "SubNeurons": [],
        "SuperNeuron": 4,
        "color": "red",
        "size": "small"
    },
    {
        "id": 8,
        "name": "Operaciones",
        "SubNeurons": [9, 10, 11, 12, 13, 14],
        "SuperNeuron": 4,
        "color": "skyblue",
        "size": "small"
    },
    {
        "id": 9,
        "name": "Suma",
        "SubNeurons": [],
        "SuperNeuron": 8,
        "color": "yellow",
        "size": "small"
    },
    {
        "id": 10,
        "name": "Resta",
        "SubNeurons": [],
        "SuperNeuron": 8,
        "color": "green",
        "size": "small"
    },
    {
        "id": 11,
        "name": "Multiplicación",
        "SubNeurons": [],
        "SuperNeuron": 8,
        "color": "red",
        "size": "small"
    },
    {
        "id": 12,
        "name": "Potenciación",
        "SubNeurons": [],
        "SuperNeuron": 8,
        "color": "skyblue",
        "size": "small"
    },
    {
        "id": 13,
        "name": "Radicalización",
        "SubNeurons": [],
        "SuperNeuron": 8,
        "color": "yellow",
        "size": "small"
    },
    {
        "id": 14,
        "name": "División",
        "SubNeurons": [15, 17],
        "SuperNeuron": 8,
        "color": "green",
        "size": "small"
    },
    {
        "id": 15,
        "name": "Algoritmo de la división",
        "SubNeurons": [16],
        "SuperNeuron": 14,
        "color": "red",
        "size": "small"
    },
    {
        "id": 16,
        "name": "Teorema del resto",
        "SubNeurons": [],
        "SuperNeuron": 15,
        "color": "skyblue",
        "size": "small"
    },
    {
        "id": 17,
        "name": "Divisibilidad",
        "SubNeurons": [],
        "SuperNeuron": 14,
        "color": "yellow",
        "size": "small"
    }
];
console.log({ Data })
