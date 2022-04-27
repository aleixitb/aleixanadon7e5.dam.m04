var strongs = document.querySelectorAll("strong, a");

function resaltar() {

    this.style.fontSize = "120%";
    this.style.color = "white";
    this.style.backgroundColor = "black";
}

function tornaNormal() {

    this.style = "none";
}

strongs.forEach( strong => {
    
    strong.onmouseover = resaltar;
    strong.onmouseout = tornaNormal;
});