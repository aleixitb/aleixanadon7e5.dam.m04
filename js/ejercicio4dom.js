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

    start(true);
    watchInput.innerHTML = getTime();
}

function hideWatch() {

    start(false);
    watchInput.innerHTML = "";
}

function start(bool) {

    if (bool == true) {
        myInterval = setTimeout(showWatch, 1000); 
    } else {
        myInterval = clearInterval(myInterval);
    }
}

var showIfClassButton = document.getElementById('showIfClass');
var showClass = document.getElementById('class');

showIfClassButton.addEventListener('click', function() {

    let button = showIfClassButton;

    if (button.innerHTML == "Mostrar") {

        showIfClass();
        button.innerHTML = "Ocultar";
        

    } else if (button.innerHTML == "Ocultar") {

        showClass.innerHTML = ""
        button.innerHTML = "Mostrar";
    }
});

// `Són les ${h}:${m} i tens classe de M04.`

function theresClass() {

    let now = new Date();
    
    let d = now.getDay()

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    if (d == 1) {
        if (h == 11) {
            if (m >= 15 && m <= 59) {
                return true
            } else {
                return false
            }
        } else if (h == 12) {
            if (m >= 0 && m <= 10) {
                return true
            } else {
                return false
            }
        }
    } else if (d == 5) {
        if (h == 8) {
            if (m >= 0 && m <= 59) {
                return true
            } else {
                return false
            }
        } else if (h == 9) {
            if (m >= 0 && m <= 50) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } 
}

function showIfClass() {
    
    let now = new Date();
    
    let d = now.getDay();

    let h = now.getHours();
    let m = now.getMinutes;
    let s = now.getSeconds();

    if (theresClass()) {

        showClass.innerHTML = `Són les ${getTime()} i estàs a classe de M04.`;

    } else {

        showClass.innerHTML = `Ara mateix no tens M04.`;
    }
}