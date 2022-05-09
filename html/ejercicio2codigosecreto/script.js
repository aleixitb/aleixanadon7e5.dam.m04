const secret = [];
const maxIntento = 8;
const codeLength = 5
var turns = 0;
var info = document.getElementById("info");

function generateCode() {

    for (let i = 0; i < codeLength; i++) {

        secret[i] = Math.floor((Math.random() * 10));
    }

    return secret;
}

generateCode();

var buttonCheck = document.getElementById('check');

function getCodeFromPage() {

    let webCode = document.getElementById('numero').value;
    let guess = [];

    for (let i = 0; i <= webCode.length; i++) {

        guess.push(webCode[i])
    }

    return guess;
}

var section = document.getElementById("result");

function generateDivs(guess) {

    let grandpaDiv = document.createElement("div");
    grandpaDiv.setAttribute("class", "rowResult w100 flex wrap");

    for (let i = 0; i < codeLength; i++) {

        let parentDiv = document.createElement("div"); 
        parentDiv.setAttribute("class", "w20");

        let childDiv = document.createElement("div");

        if (guess[i] == secret[i]) { 
            
            childDiv.setAttribute("class", "celResult flex rightPosition");

        } else if ((secret.includes(parseInt(guess[i]))) && (guess[i] != secret[i])) {

            childDiv.setAttribute("class", "celResult flex badPosition");

        } else {

            childDiv.setAttribute("class", "celResult flex wrong");
        }

        hasWon(guess);

        childDiv.innerHTML = guess[i];

        grandpaDiv.appendChild(parentDiv);
        parentDiv.appendChild(childDiv);
    }

    section.appendChild(grandpaDiv);
}

function hasWon(guess) {

    let correct = 0;

    for (let i = 0; i <= codeLength; i++) {

        if (secret[i] == guess[i]) {

            correct++
        }
    }

    if (correct > codeLength) {

        info.innerHTML = "Has guanyat!";
        buttonCheck.innerHTML = "Jugar de nou";

        buttonCheck.onclick = () => {
            window.location.reload();
        }

    } else {

        info.innerHTML = "Segueix intentant-ho";

    }
}

function showSecretCode() {

    let divs = document.querySelectorAll("main > section > div > div > *");

    divs.forEach((div, index) => {

        div.innerHTML = `${secret[index]}`;
    })
}

buttonCheck.addEventListener("click", play);

function play() {

    let regExp = new RegExp("^[0-9]{5}$");
    let input = document.getElementById("numero").value;

    if (turns < maxIntento) {

        if (regExp.test(input)) {

            let webCode = getCodeFromPage();
            generateDivs(webCode);
            turns++

        } else {

            alert("Has d'introduir un número de cinc  xifres.")
        }

    } else {

        buttonCheck.innerHTML = "Jugar de nou";
        info.innerHTML = "Has perdut!";

        document.getElementById("result").remove(); 

        showSecretCode();

        buttonCheck.onclick = () => {
            window.location.reload();
        }
    }
}