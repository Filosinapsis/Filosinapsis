// Neuron Generator
// Generate neurons in the map

var yx = L.latLng;

var coordinates_yx = function(x, y) {
    if (L.Util.isArray(x)) {
        return yx(x[1], x[0]);
    }
    return yx(y, x);
};

let MainMath;
let AppliedMath;
let PureMath;
let Numbers;
let Geometry;
let AnalysisMath;
let Algebra;

function positioning(neurons) {
    
    let number_of_neurons = neurons.length;
    let number_of_local_neurons = 0;
    let initial_position = {
        x: 100,
        y: 100
    };
    let terminability;
    let radius = 190;
    let x = 0;
    let y = 0;
    let alpha = 0;
    let neurons_with_coordinates = neurons;
    
    neurons_with_coordinates[0]['coordinates_x'] = initial_position['x'];
    neurons_with_coordinates[0]['coordinates_y'] = initial_position['y'];

    MainMath = coordinates_yx(neurons_with_coordinates[0]['coordinates_x'], neurons_with_coordinates[0]['coordinates_y']);

    for (let i = 0; i < number_of_neurons; i++) {
        
        number_of_local_neurons = neurons[i].SubNeurons.length;
        // console.log('Padre: ' + neurons[i].name + ' tiene ' + number_of_local_neurons + ' hijos.');

        for (let j = 0; j < number_of_neurons; j++) {
        
            // si es neurona padre... Cuando j reporta un padre i
            // Si una de las neuronas[j], su padre es igual al id
            if (neurons[j].SuperNeuron == neurons[i].id) {

                let number_of_subneurons = neurons[j].SubNeurons.length;
        
                if (number_of_subneurons > 0) {
                    terminability = 1;
                    radius = radius * 2;
                }

                alpha = (2 * Math.PI) / number_of_local_neurons;

                x = (terminability + 1) * radius * Math.cos((j - 1) * alpha - Math.PI) + neurons[i]['coordinates_x'];
                y = (terminability + 1) * radius * Math.sin((j - 1) * alpha - Math.PI) + neurons[i]['coordinates_y'];

                x = Math.round(x);
                y = Math.round(y);
        
                // console.log('    ' + neurons[j].name + ' es hijo de ' + neurons[i].name + '. Tiene una terminabilidad de ' + terminability);

                // Asignaremos las coordenadas al objeto
                // 
                neurons_with_coordinates[j]['coordinates_x'] = x;
                neurons_with_coordinates[j]['coordinates_y'] = y;

                // console.log('          Alpha: ' + alpha + ' Coordenadas=> Y: ' + y + ', X: ' + x);

                alpha = 0;
                x = 0;
                y = 0;
                terminability = 0;
                radius = 190;
            }
        
        }
    
    }

    return neurons_with_coordinates;
    
}

const neurons_with_coordinates = positioning(Data);
// console.log(neurons_with_coordinates);

AppliedMath = coordinates_yx(100, 290);
PureMath = coordinates_yx(100, -660);

Numbers = coordinates_yx(-90, -660);
Geometry = coordinates_yx(100, -470);
AnalysisMath = coordinates_yx(290, -660);
Algebra = coordinates_yx(100, -850);
