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

/*
var secret = [7,6,5,7,3];
var guess =  [1,2,3,6,7];
var list = [];

for (i in secret) {
    
    if (secret.includes(guess[i])) {

        console.log("i: " + guess[i])
        
        for (j in guess) {
        
            if (secret[i] == guess[j]) {
            
                if (i == j) {

                    list.push(
                        {
                        position: "rightPosition",
                        number: guess[j]
                        }
                    )
                } else {

                    list.push(
                        {
                        position: "badPosition",
                        number: guess[j]
                        }
                        )
                }
            }
        }
               
    } else if (!(secret.includes(guess[i]))) {
        list.push(
            {
            position: "wrong", 
            number: guess[i]
            }
        )
    }
}
    


console.log(secret);
console.log(guess);
console.log(list);

VM3956:9 i: 3
VM3956:9 i: 6
VM3956:9 i: 7
VM3956:47 (5) [7, 6, 5, 7, 3]
VM3956:48 (5) [1, 2, 3, 6, 7]
VM3956:49 (4) [{…}, {…}, {…}, {…}]0: {position: 'wrong', number: 1}1: {position: 'wrong', number: 2}2: {position: 'badPosition', number: 7}3: {position: 'badPosition', number: 3}length: 4[[Prototype]]: Array(0)
undefined
*/