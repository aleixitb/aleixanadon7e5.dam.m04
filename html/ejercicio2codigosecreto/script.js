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

function generateDivs(webCodeToArray, numbers) {

    var grandpaDiv = document.createElement("div");
    grandpaDiv.setAttribute("class", "rowResult w100 flex wrap");

    console.log(Object(numbers));

    for (let i = 0; i < codeLength; i++) {

        var parentDiv = document.createElement("div"); 
        parentDiv.setAttribute("class", "w20");

        var childDiv = document.createElement("div");

        var a = Object.keys(numbers[i]);

        childDiv.setAttribute("class", `celResult flex ${a}`);
    
        childDiv.innerHTML = webCodeToArray[i];

        grandpaDiv.appendChild(parentDiv);
        parentDiv.appendChild(childDiv);
    }

    section.appendChild(grandpaDiv);
}

function check(webCode) {

    // o arreglo el map o hago un array de objetos como {rightposition: número}

    let numbers = webCode.map((i, j) => {

        if (secretCode[i] == webCode[j] && i == j) {

            return {rightPosition: webCode[i]}
        
        } else if (secretCode[i] == webCode[j] && i != j) {

            return {badPosition: webCode[j]}
        
        } else if (!(secretCode.includes(webCode[j]))) {

            return {wrong: webCode[j]}
        }
    });

    console.log("check: " + Object.keys(numbers));

    return numbers
}

// Aquí se itera con la constante maxIntento

function play() {

    let webCode = getCodeFromPage();
    let numbers = check(webCode);
    console.log("play: " + Object.keys(numbers));
    generateDivs(webCode, numbers);
    console.log(`webCode: ${webCode}`);
    
}