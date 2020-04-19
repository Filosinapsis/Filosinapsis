function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

let markers = document.getElementsByClassName('leaflet-marker-icon');

let seconds = 150;

if (getWidth() > 768) {
    for (let index = 0; index < markers.length; index++) {
        setTimeout(() => {
            markers[index].click();
        }, index * seconds);
    }
} else {
    for (let index = 0; index < markers.length; index++) {
        markers[index].click();
    }
}
