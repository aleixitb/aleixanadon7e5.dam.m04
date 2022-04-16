var buttonChangeColor = document.getElementById("buttonChangeColor");
var collection = document.getElementsByTagName("p");

buttonChangeColor.addEventListener("click", toggle);

function toggle() {

    let button = buttonChangeColor;

    if (button.innerHTML == "Canviar color") {

        changeColor();
        button.innerHTML = "Canviar al color original";

    } else if (button.innerHTML == "Canviar al color original") {

        setDefaultColor();
        button.innerHTML = "Canviar color"
    }
}

function changeColor() {

    // Since collection is an HTMLCollection and not an array, we can convert it to an array or use the for of loop

    // ForEach Loop:
    /*
        Array.from(collection).forEach(element => {
            element.style.color = "red";
        })
    */

    // for of Loop:
    for (element of collection) {
        element.style.backgroundColor = "yellow";
    }
}

function setDefaultColor() {

    for (element of collection) {
        element.style = "none";
    }
}