var table = document.getElementById("table");

var buttonBeggining = document.getElementById("buttonBeggining");
var buttonEnd = document.getElementById("buttonEnd");

buttonBeggining.addEventListener("click", toggleBeggining);
buttonEnd.addEventListener("click", toggleEnd);

function toggleBeggining() {

    let button = buttonBeggining;
    
    if (button.innerHTML == "Inserta fila al principi") {

        insertCellBeggining();
        button.innerHTML = "Esborrar fila"

    } else if (button.innerHTML == "Esborrar fila") {

        deleteCellBeggining();
        button.innerHTML = "Inserta fila al principi"
    }
}

function insertCellBeggining() {

    let row = table.insertRow(0);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = "Fila 0 cel·la 1";
    cell2.innerHTML = "Fila 0 cel·la 2";
}

function deleteCellBeggining() {

    let row = document.querySelector("#table > tr:first-child");
    table.deleteRow(row);
}

function toggleEnd() {

    let button = buttonEnd;

    if (button.innerHTML == "Insertar fila al final") {

        insertCellEnd();
        button.innerHTML = "Esborrar fila";

    } else if (button.innerHTML == "Esborrar fila") {

        deleteCellEnd();
        button.innerHTML = "Insertar fila al final"
    }
}

function insertCellEnd() {

    let row = table.insertRow(-1);

    let cell1 = row.insertCell(-1);
    let cell2 = row.insertCell(-1);

    cell1.innerHTML = "Fila 3 cel·la 1";
    cell2.innerHTML = "Fila 3 cel·la 2";
}

function deleteCellEnd() {

    let rowCount = table.rows.length;
    table.deleteRow(rowCount - 1);
}