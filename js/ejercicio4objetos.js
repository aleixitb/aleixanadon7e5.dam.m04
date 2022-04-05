// ELEMENTO BOTÓN
var buttonCreateObject = document.getElementById('createObject');
var buttonDisplayObject = document.getElementById('showObject');

// AÑADIR EVENTOS AL BOTÓN
buttonCreateObject.addEventListener("click",createObject );
buttonDisplayObject.addEventListener("click", displayObject);

// puedo crear una función que cuando pulsas el botón llama a otra función que crea el objeto, y en la función principal guardamos el objeto en una variable.
// el problema es que eso llama de nuevo a createObject así que habría que buscar otra solución...

// FUNCIÓN QUE CREA EL OBJETO AL PULSAR EL BOTÓN
function storeObject() {

    let name = document.getElementById('name').value;
    let grade = document.getElementById('grade').value;
    let age = document.getElementById('age').value;

    var student = {
        name: name,
        grade: grade,
        age: age
    }

    console.log("objeto creado");
    console.log(student);

    return student;
}

// MOSTRA L'OBJECTE CREAT
function displayObject(student) {

    var student = createObject();

    var content = `Student {<br>&emsp;name: ${student.name},<br>&emsp;grade: ${student.grade},<br>&emsp;age: ${student.age}<br>}`;

    var element = document.getElementById('student')

    if (element.innerHTML == "") {

        element.innerHTML = content;
        buttonDisplayObject.innerHTML = "Ocultar objecte";

    } else if (element.innerHTML != "") {

        element.innerHTML = "";
        buttonDisplayObject.innerHTML = "Mostrar objecte";
    }
}

// BOTONS DE BORRAR
var deleteName = document.getElementById('deleteName');
var deleteGrade = document.getElementById('deleteGrade');
var deleteAge = document.getElementById('deleteAge');

function displayButtons() {
    console.log("student here" + student.age);
    deleteName.innerHTML = `${student.name}`;
}