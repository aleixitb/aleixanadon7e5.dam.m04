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

document.getElementById("secretCode").innerHTML = secretCode;

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

    let grandpaDiv = document.createElement("div");
    grandpaDiv.setAttribute("class", "rowResult w100 flex wrap");
    
    console.log(numbers)

    for (let i = 0; i < codeLength; i++) {

        let parentDiv = document.createElement("div"); 
        parentDiv.setAttribute("class", "w20");

        let childDiv = document.createElement("div");

        childDiv.setAttribute("class", `celResult flex ${numbers[i].position}`);
    
        childDiv.innerHTML = webCodeToArray[i];

        grandpaDiv.appendChild(parentDiv);
        parentDiv.appendChild(childDiv);
    }

    section.appendChild(grandpaDiv);
}

function check(webCode) {

    let list = [];

    secretCode.forEach((i) => {
        
        webCode.forEach((j) => {

            if (secretCode[i] == webCode[j] && i == j) {
                list.push(
                    {
                    position: "rightPosition",
                    number: webCode[j]
                    }
                )

            } else if (secretCode[i] == webCode[j] && i != j) {

                list.push(
                    {
                    position: "badPosition",
                    number: webCode[j]
                    }
                )

            } else if (!(webCode.includes(i))) {

                list.push(
                    {
                    position: "wrong", 
                    number: webCode[j]
                    }
                )
            }
        })
    })

    return list
}

// Aquí se itera con la constante maxIntento

function play() {

    let webCode = getCodeFromPage();
    let checkCode = check(webCode);
    generateDivs(webCode, checkCode);
}