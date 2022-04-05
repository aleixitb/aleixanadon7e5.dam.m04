// ELEMENTO BOTÓN
var buttonDisplayObject = document.getElementById('showObject');

// AÑADIR EVENTOS AL BOTÓN
buttonDisplayObject.addEventListener("click", displayObject);

// CREA EL OBJETO
function createObject() {

    let name = document.getElementById('name').value;
    let grade = document.getElementById('grade').value;
    let age = document.getElementById('age').value;

    let student = {
        name: name,
        grade: grade,
        age: age
    }

    return student;
}

// MOSTRA L'OBJECTE CREAT
function displayObject() {

    let student = createObject();

    let content = `Student {<br>&emsp;name: ${student.name},<br>&emsp;grade: ${student.grade},<br>&emsp;age: ${student.age}<br>}`;

    let element = document.getElementById('student')

    if (element.innerHTML == "") {

        element.innerHTML = content;
        buttonDisplayObject.innerHTML = "Ocultar objecte";

        for (i in student) {
            delete student[i];
        }

    } else if (element.innerHTML != "") {

        element.innerHTML = "";
        buttonDisplayObject.innerHTML = "Mostrar objecte";
    }
}

// BOTONS DE BORRAR
var deleteName = document.getElementById('deleteName');
var deleteGrade = document.getElementById('deleteGrade');
var deleteAge = document.getElementById('deleteAge');

var objToDelete = document.getElementById('objToDelete');

window.addEventListener("load", showStudent());

function showStudent() {
    let student = createObject()
    objToDelete.innerHTML = `Student {<br>&emsp;name: ${student.name},<br>&emsp;grade: ${student.grade},<br>&emsp;age: ${student.age}<br>}`;
}

deleteName.addEventListener("click", function(){

    delete student.name;
    showStudent();
});