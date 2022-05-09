const secret = [];
const maxIntento = 8;
const codeLength = 5

function generateCode() {

    for (let i = 0; i < codeLength; i++) {

        secret[i] = Math.floor((Math.random() * 10));
    }

    return secret;
}

generateCode();

document.getElementById("secretCode").innerHTML = secret;

const buttonCheck = document.getElementById('check');

function getCodeFromPage() {

    let webCode = document.getElementById('numero').value;
    let guess = [];

    for (let i = 0; i <= webCode.length; i++) {

        guess.push(webCode[i])
    }

    return guess;
}

buttonCheck.addEventListener("click", play);

var section = document.getElementById("result");

function generateDivs(guess) {

    let grandpaDiv = document.createElement("div");
    grandpaDiv.setAttribute("class", "rowResult w100 flex wrap");

    for (let i = 0; i < codeLength; i++) {

        let parentDiv = document.createElement("div"); 
        parentDiv.setAttribute("class", "w20");

        let childDiv = document.createElement("div");

        if (guess[i] == secret[i]) { 
            
            childDiv.setAttribute("class", `celResult flex rightPosition`);

        } else if ((secret.includes(parseInt(guess[i]))) && (guess[i] != secret[i])) {

            childDiv.setAttribute("class", `celResult flex badPosition`);

        } else {

            childDiv.setAttribute("class", `celResult flex wrong`);
        }

        childDiv.innerHTML = guess[i];

        grandpaDiv.appendChild(parentDiv);
        parentDiv.appendChild(childDiv);
    }

    section.appendChild(grandpaDiv);
}

// Aquí se itera con la constante maxIntento

function play() {

    let webCode = getCodeFromPage();
    generateDivs(webCode);
}