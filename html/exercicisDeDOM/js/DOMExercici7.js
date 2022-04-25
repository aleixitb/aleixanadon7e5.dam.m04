var createdTable = document.getElementById("createdTable");

function getRows() {

    let numRows = parseInt(prompt("Nombre de fil·les?"));
    return numRows;
}

function getColumns() {

    let numColumns =  parseInt(prompt("Nombre de columnes?"));
    return numColumns;
}

function createTable() {

    let numRows = getRows();
    let numColumns = getColumns();

    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");

    let k = 0;

    for (let i = 0; i < numRows; i++) {

        let row = document.createElement("tr");

        for (let j = 0; j < numColumns; j++) {

            let cell = document.createElement("td");
            let cellText = document.createTextNode(`Fila ${i} cel·la ${j}`);

            cell.appendChild(cellText);

            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    createdTable.appendChild(table).setAttribute("border", "1");
}

function deleteTable() {

    createdTable.innerHTML = "";
}

var createButton = document.getElementById("create");

function toggle() {

    let btn = createButton;

    if (btn.innerHTML == "Create table") {

        createTable()
        btn.innerHTML = "Delete table"

    } else {

        deleteTable();
        btn.innerHTML = "Create table";

    }
}

createButton.addEventListener("click", toggle);

