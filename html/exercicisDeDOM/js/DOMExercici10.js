class Cylinder {

    constructor(radius, height) {
        this.radius = radius
        this.height = height
    }

    area() {
        const pi = Math.PI

        return (2 * pi * (this.radius**2) + (2 * pi + this.radius * this.height));
    }
}

var form = document.querySelector("form");
var button = document.getElementById("btn");

function noReload(e) {

    e.preventDefault();
}

function makeACylinder() {
    
    let cylinder = new Cylinder()
    let inputId;

    Array.from(form.elements).forEach( input => {
        
        if (input.type == "number") {

            inputId = input.getAttribute("id");

            cylinder[inputId] = input.getAttribute("value");
        }   
    })

    console.log("area: " + cylinder.area());

    return cylinder
}

function submitAction(e) {   

    noReload(e);
    let cylinder = makeACylinder();
    console.log(cylinder);
}

btn.addEventListener("click", submitAction)