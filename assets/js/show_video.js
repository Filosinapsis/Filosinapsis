let video = document.getElementById('video');

// document.getElementById('Algoritmo de la división').classList["display"] = "none"

function show_video(content) {

    if (document.getElementById(content).style.display == "none") {
    
        document.getElementById(content).parentNode.parentNode.parentNode.style["width"] = "400px";
        document.getElementById(content).parentNode.parentNode.style["width"] = "400px";
        document.getElementById(content).parentNode.style["width"] = "400px";
    
        document.getElementById(content).style.display = "block";
        document.getElementById('show_video--' + content).innerText = "Ocultar vídeo";
    
    
    } else {

        document.getElementById(content).parentNode.parentNode.parentNode.style["width"] = "";
        document.getElementById(content).parentNode.parentNode.style["width"] = "";
        document.getElementById(content).parentNode.style["width"] = "121px";

        document.getElementById(content).style.display = "none";
        document.getElementById('show_video--' + content).innerText = "Ver vídeo";
    }

    // debugger;
    // alert(content);
}
