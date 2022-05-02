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
/*
function generateDivs() {

    let parentDiv = document.createElement("div"); //.classList.add('rowResult', 'w100', 'flex', 'wrap');

    for (let i = 0; i <= maxIntento; i++) {
        
        section[i].appendChild(parentDiv);
        
        for (let j = 0; j <= 5; j++) {
            
            let childDiv = document.createElement("div").classList.add('w20');
            parentDiv[i].appendChild(childDiv);
        }
    }
}

generateDivs();
*/
// Aquí se itera con la constante maxIntento

function play() {

}

let parentDiv = document.createElement('div'); //.classList.add('rowResult', 'w100', 'flex', 'wrap');
parentDiv.innerHTML = "parentDiv";

console.log("parentDiv: " + parentDiv);

let childDiv = document.createElement('div'); //.classList.add('w20');
childDiv.innerHTML = "childDiv"

console.log("childDiv: " + childDiv);

section.appendChild(parentDiv);
 
var el = childDiv;
el.innerHTML = 'a';

parentDiv.appendChild(el);