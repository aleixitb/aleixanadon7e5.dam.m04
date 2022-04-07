var dateInput = document.getElementById('date');
var showDateButton = document.getElementById('showDate');

showDateButton.addEventListener("click", function() {

    let button = showDateButton;

    if (button.innerHTML == "Mostrar fecha") {

        showDate();
        button.innerHTML = "Ocultar fecha";

    } else if (button.innerHTML == "Ocultar fecha") {

        hideDate();
        button.innerHTML = "Mostrar fecha";

    }
});

function getWeekday(day) {

    let days = ["Diumenge", "Dilluns", "Dimars", "Dimecres", "Dijous", "Divendres", "Dissabte"];

    return days[day];
}

function getDate() {

    var now = new Date();

    let weekDay = getWeekday(now.getDay());
    
    let day = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth()).padStart(2, "0");
    let year = now.getFullYear();

    return `${weekDay}, ${day}/${month}/${year}`
}

function showDate() {
    
    dateInput.innerHTML = getDate();
}

function hideDate() {

    dateInput.innerHTML = "";
}

var watchInput = document.getElementById('watch');
var showWatchButton = document.getElementById('showWatch');

showWatchButton.addEventListener("click", function() {

    let button = showWatchButton;

    if (button.innerHTML == "Mostrar reloj") {

        showWatch();
        button.innerHTML = "Ocultar reloj";

    } else if (button.innerHTML == "Ocultar reloj") {

        hideWatch();
        button.innerHTML = "Mostrar reloj";

    }
});

var myInterval;

function getTime() {

    let now = new Date();

    let h = String(now.getHours()).padStart(2, "0");
    let m = String(now.getMinutes()).padStart(2, "0");
    let s = String(now.getSeconds()).padStart(2, "0");

    return `${h}:${m}:${s}`
}

function showWatch() {

    watchInput.style.display = "";
    watchInput.innerHTML = getTime();

    start(true);
}

function hideWatch() {

    start(false);
    watchInput.style.display = "none";
}

function start(bool) {

    if (bool == true) {
        myInterval = setTimeout(showWatch, 1000); 
    } else {
        myInterval = clearInterval(myInterval);
    }
}