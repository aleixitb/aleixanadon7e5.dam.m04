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

// CREAR UNA LISTA PARA ALMACENAR EL OBJETO QUE CREAS UNA SOLA VEZ
var list = [];

// CREAS EL OBJETO
buttonCreate.onclick = function createObject() {

    let v_name = document.getElementById('name').value;
    let v_grade = document.getElementById('grade').value;
    let v_age = document.getElementById('age').value;

    var student = new Student();

    student.name = v_name;
    student.grade = v_grade;
    student.age = v_age;

    // AQUÍ SE ALMACENA
    list[0] = student;

    console.log(list);
}

var buttonShow = document.getElementById('show');

// Y AQUÍ FINALMENTE SE PUEDE MOSTRAR DEFINIDO POR PANTALLA EN LA WEB
buttonShow.onclick = function showObject(student) {

    let element = document.getElementById('student');
    let content = element.innerHTML;
    
    if (content == "") {
        
        try {

            element.innerHTML = list[0].makeString();
            document.getElementById('show').innerHTML = "Ocultar objecte";

        } catch (e) {
            
        }

    } else if (content != "") {

        element.innerHTML = "";
    }
}