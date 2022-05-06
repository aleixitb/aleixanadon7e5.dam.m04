const secretCode = [];
const maxIntento = 8;
const codeLength = 5

function generateCode() {

    for (let i = 0; i < codeLength; i++) {

        secretCode[i] = Math.floor((Math.random() * 10));
    }

    console.log(`secretCode: ${secretCode}`);

    return secretCode;
}

generateCode();

const buttonCheck = document.getElementById('check');

function getCodeFromPage() {

    let webCode = document.getElementById('numero').value;
    let webCodeToArray = [];

    for (let i = 0; i <= webCode.length; i++) {

        webCodeToArray.push(webCode[i])
    }

    return webCodeToArray;
}

buttonCheck.addEventListener("click", play);

var section = document.getElementById("result");

function generateDivs(webCodeToArray) {

    let grandpaDiv = document.createElement("div");
    grandpaDiv.setAttribute("class", "rowResult w100 flex wrap");

    for (let i = 0; i < codeLength; i++) {

        let parentDiv = document.createElement("div"); 
        parentDiv.setAttribute("class", "w20");

        let childDiv = document.createElement("div");
        childDiv.setAttribute("class", "celResult flex");
    
        childDiv.innerHTML = webCodeToArray[i];

        grandpaDiv.appendChild(parentDiv);
        parentDiv.appendChild(childDiv);
    }

    section.appendChild(grandpaDiv);
}

function check(webCode) {

    for (let i = 0; i < secretCode.length; i++) {

        for (let j = 0; j < webCode.length; j++) {

            if (secretCode[i] == webCode[j] && i == j) {

                console.log("rightPosition: " + webCode[j]);
            
            } else if (secretCode[i] == webCode[j] && i != j) {

                console.log("badPosition: " + webCode[j]);
            }
        }
    }
}

// Aquí se itera con la constante maxIntento

function play() {

    let webCode = getCodeFromPage();
    generateDivs(webCode);
    console.log(`webCode: ${webCode}`);
    check(webCode);
}
