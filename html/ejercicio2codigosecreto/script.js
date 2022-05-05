const secretCode = [];
const maxIntento = 8;

function generateCode() {

    for (let i = 0; i < 5; i++) {

        secretCode[i] = Math.floor((Math.random() * 10));
    }

    return secretCode;
}

generateCode();

const buttonCheck = document.getElementById('check');

function getCodeFromPage() {

    let webCode = document.getElementById('numero').value;
    console.log(webCode);
}

buttonCheck.addEventListener("click", getCodeFromPage);

var section = document.getElementById("result");

function generateDivs() {

    // ahora hay que extrapolarlo a un bucle
}

generateDivs();

// Aquí se itera con la constante maxIntento

function play() {

}

// pruebas para construir las tablas de divs

let grandpaDiv = document.createElement("div");
grandpaDiv.setAttribute("class", "rowResult w100 flex wrap");

console.log("grandpaDiv: " + grandpaDiv);

let parentDiv = document.createElement("div"); 
parentDiv.setAttribute("class", "w20");

console.log("parentDiv: " + parentDiv);

let childDiv = document.createElement("div");
childDiv.setAttribute("class", "celResult flex");

console.log("childDiv: " + childDiv);

grandpaDiv.appendChild(parentDiv);
parentDiv.appendChild(childDiv);

section.appendChild(grandpaDiv);