// Neuron Generator
// Generate neurons in the map

var yx = L.latLng;

var coordinates_yx = function(x, y) {
    if (L.Util.isArray(x)) {
        return yx(x[1], x[0]);
    }
    return yx(y, x);
};

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

    MainMath = coordinates_yx(
        neurons_with_coordinates[0]['coordinates_x'],
        neurons_with_coordinates[0]['coordinates_y']
    );

    for (let i = 0; i < number_of_neurons; i++) {
        number_of_local_neurons = neurons[i].SubNeurons.length;

        for (let j = 0; j < number_of_neurons; j++) {
            if (neurons[j].SuperNeuron == neurons[i].id) {
                let number_of_subneurons = neurons[j].SubNeurons.length;

                if (number_of_subneurons > 0) {
                    terminability = 1;
                    radius = radius * 2;
                }

                alpha = (2 * Math.PI) / number_of_local_neurons;

                x =
                    (terminability + 1) *
                        radius *
                        Math.cos((j - 1) * alpha - Math.PI) +
                    neurons[i]['coordinates_x'];
                y =
                    (terminability + 1) *
                        radius *
                        Math.sin((j - 1) * alpha - Math.PI) +
                    neurons[i]['coordinates_y'];

                x = Math.round(x);
                y = Math.round(y);

                neurons_with_coordinates[j]['coordinates_x'] = x;
                neurons_with_coordinates[j]['coordinates_y'] = y;

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
