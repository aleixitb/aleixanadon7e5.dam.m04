class Cylinder {

    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        const pi = Math.PI
        return (2 * pi * (this.radius**2) + (2 * pi + this.radius * this.height));
    }
}

var form = document.querySelector("form");

function noReload(e) {

    e.preventDefault();
}

function makeACylinder() {
    
    let cylinder = new Cylinder()
    let inputId;

    Array.from(form.elements).forEach( input => {
        
        if (input.type == "number") {

            inputId = input.getAttribute("id");

            /**
             * Every parameter of the constructor is setted here in this forEach by
             * taking every attribute of the constructor and then we get the value
             * from the web using the getAttribute method.
            */

            cylinder[inputId] = input.getAttribute("value");
        }   
    })

    return cylinder
}

function submitAction(e) {   

    noReload(e);
    let cylinder = makeACylinder();
    console.log(cylinder.area);
}

form.addEventListener("submit", submitAction)