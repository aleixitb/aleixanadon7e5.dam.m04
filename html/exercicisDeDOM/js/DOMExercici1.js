var p = document.getElementById("text");
var btn = document.getElementById('estiljs');

btn.addEventListener("click", toggle);

function toggle() {

    if (btn.innerHTML == "Canvi d'estil") {

        applyStyle();
        btn.innerHTML = "Sense estil";
    
    } else if (btn.innerHTML == "Sense estil") {

        removeStyle();
        btn.innerHTML = "Canvi d'estil";
    }
}

function applyStyle() {
    p.style.font = "italic bold 200px arial,serif";
}

function removeStyle() {
    p.style = "none";
}