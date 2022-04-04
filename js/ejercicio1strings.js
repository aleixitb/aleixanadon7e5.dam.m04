function stringCointainsSubstring() {

    let str1 = document.getElementById('str1').value;
    let str2 = document.getElementById('str2').value;

    // hacer que la primera sea mayúscula y el resto minúsculas

    console.log("a");

    if (str1.length == 0 || str2.length == 0) {

        alert("Els camps no poden estar buits.")

    } else if (str1.length > 0 && str2.length > 0) {

        if (str1.startsWith(str2)) {

            alert(`${str1} empieza con el substring ${str2}.`);
        }
    }
}

function comprovarLongitud() {
    
    let cadena = document.getElementById('cadena').value;
    let posicio = document.getElementById('posicio').value;

    if (cadena.length == 0 || posicio.length == 0) {

        alert("Els camps no poden estar buits.")

    } else {

        if (posicio <= cadena.length) {

            let novaCadena = cadena.substring(0, posicio - 1) + cadena.substring(posicio, cadena.length);
            
            alert(`Cadena: ${cadena} \nPosició: ${posicio} \nNova cadena: ${novaCadena}`);
        
        } else if (posicio > cadena.length) {
            
            alert(`La posició ${posicio} és més gran que la longitud de la cadena(${cadena.length}).`);
        }
    }
}

function intercanviar() {

    let paraula = document.getElementById('paraula').value;

    if (paraula.length == 0 ) {

        alert(`El camp no pot estar buit`);
    
    } else if (paraula.length == 1) {

        alert(`No pots intercanviar sinó tens almenys 2 caràcters.`)

    } else if (paraula.length >= 2) {

        let primera = paraula.charAt(0);

        console.log(primera);

        let mig = paraula.substring(1, paraula.length-1);

        console.log(mig);

        let ultima = paraula.charAt(paraula.length-1);

        console.log(ultima);

        let paraulaNova = ultima+mig+primera

        alert(`Paraula: ${paraula} \nParaula intercanviada: ${paraulaNova}`)
    }
}