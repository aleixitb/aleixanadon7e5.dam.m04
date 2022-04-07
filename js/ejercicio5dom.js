var dateSpan = document.getElementById('date');
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
    
    dateSpan.innerHTML = getDate();
}

function hideDate() {

    dateSpan.innerHTML = "";
}