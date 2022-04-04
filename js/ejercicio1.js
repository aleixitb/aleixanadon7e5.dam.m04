function whichIsBigger() {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    if (num1 == "" || num2 == "") {
        
        alert(`Els camps no poden estar buits.`)
    
    } else {

        if (num1 > num2) {

            alert(`Èl número ${num1} és més gran que ${num2}.`);
    
        } else if (num2 > num1) {
    
            alert(`El número ${num2} és més gran que ${num1}.`);
    
        } else if (num1 == num2) {
    
            alert(`El número ${num1} és el mateix que ${num2}.`);
    
        }
    }
}

function multiply() {

    let fact1 = document.getElementById('fact1').value;
    let fact2 = document.getElementById('fact2').value;

    let result = 0;

    for (let i = 1; i <= fact1; i++) {
    
        result += parseInt(fact2);
    }

    console.log(result)

    alert(`${fact1} x ${fact2} = ${result}`)
}

function multiplyThreeNumbers() {

    let fact1 = parseFloat(document.getElementById('factor1').value);
    let fact2 = parseFloat(document.getElementById('factor2').value);
    let fact3 = parseFloat(document.getElementById('factor3').value);

    let result = 0;

    for (let i = 1; i <= fact1; i++) {
    
        result += fact2;
    }
    
    // Reasigno variables i repeteixo el bucle anterior

    let tmp1 = result

    let tmp2 = fact3

    result = 0
    
    for (let i = 1; i <= tmp1; i++) {
    
        result += tmp2;
    }
    
    alert(`${fact1} x ${fact2} x ${fact3} = ${result}`);
}

function getPropertyNumbers() {

    let listOfNumbers = [];
    let count = 0

    for (let j = 0; j <= 10000; j++) {
        
        let number = j;

        // console.log("number: " + number)
        
        let list = [];
        
        for (let i = 0; i < (number).toString().length; i++) {
            
            list.push((number).toString()[i]);
        }
        
        //console.log(list);
        
        let result = 0;
        
        for (let i = 0; i < (list.length); i++) {
            
            result += parseInt(list[i])**3;
            //console.log(result);
        }
        
        result;
        
        if (number == result) {
        
            //console.log(true);
            listOfNumbers.push(number);
            count++;
        }
    }

    alert(`Existeixen ${count} números que compleixin aquesta propietat i són: ${listOfNumbers}`);
}