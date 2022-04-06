class Student{

    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    makeString() {
        return `Student {
                    <br>&emsp;&emsp;name: ${this.name},
                    <br>&emsp;&emsp;grade: ${this.grade},
                    <br>&emsp;&emsp;age: ${this.age}    
                <br>}`;
    }
}

var buttonCreate = document.getElementById('create');
var buttonShow = document.getElementById('show');

// CREAR UNA LISTA PARA ALMACENAR EL OBJETO QUE CREAS UNA SOLA VEZ
var list = [];

window.addEventListener("load", function(){
    buttonShow.disabled = true;
});

// CREAS EL OBJETO
buttonCreate.onclick = function createObject() {

    if (list.length == 0) {

        let v_name = document.getElementById('name').value;
        let v_grade = document.getElementById('grade').value;
        let v_age = document.getElementById('age').value;

        var student = new Student();

        student.name = v_name;
        student.grade = v_grade;
        student.age = v_age;

        // AQUÍ SE ALMACENA
        list[0] = student;
        //console.log(list);

        if (list[0] == student) {
            
            buttonShow.disabled = false;
            buttonCreate.innerHTML = "Borrar objecte";
        
        } 

    } else if (list.length > 0) {

        document.getElementById('student').innerHTML = "";
        buttonShow.innerHTML = "Mostrar objecte";
        buttonShow.disabled = true;
        buttonCreate.innerHTML = "Crear objecte";
        list.splice(0, 1);

    }

    //console.log(list);
}

// ACTIVAR BOTÓN
function activateButton() {
    buttonShow.disabled = false;
}

// Y AQUÍ FINALMENTE SE PUEDE MOSTRAR DEFINIDO POR PANTALLA EN LA WEB
buttonShow.onclick = function showObject(student) {

    let element = document.getElementById('student');
    let content = element.innerHTML;
    
    if (content == "") {
        
        element.innerHTML = list[0].makeString();
        buttonShow.innerHTML = "Ocultar objecte";

    } else if (content != "") {

        element.innerHTML = "";
        buttonShow.innerHTML = "Mostrar objecte"
    }
}