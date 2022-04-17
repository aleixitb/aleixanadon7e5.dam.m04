
var buttonGetAttributes = document.getElementById("buttonGetAttributes");

var linkElement = document.getElementById("itb");

var elementAttributes = linkElement.getAttributeNames();

buttonGetAttributes.addEventListener("click", toggle);

function toggle() {

    let button = buttonGetAttributes;

    if (button.innerHTML == "Clica aqui per obtenir els atributs") {

        obtenirAtributs();
        button.innerHTML = "Netejar la consola";

    } else if (button.innerHTML == "Netejar la consola") {

        clearConsole();
        button.innerHTML = "Clica aqui per obtenir els atributs";
    }
}

function obtenirAtributs() {

    Array.from(elementAttributes).forEach(element => {
        console.log(`${element}: ${linkElement.getAttribute(element)}`)
    })
}

function clearConsole() {

    console.clear();
}