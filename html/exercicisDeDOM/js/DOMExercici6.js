// source: https://plnkr.co/edit/GJlVn2ir1dhNilFc?p=preview&preview

var createdTable = document.getElementById("createdTable");

// CREATE A TABLE AND INSERT IT ON THE P ID 
// EVERY CELL HAS ITS OWN ID

function createTable() {

    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");
    
    let k = 0;

    for (let i = 0; i <= 1; i++) {

        let row = document.createElement("tr");

        for (let j = 0; j <= 1; j++) {

            let cell = document.createElement("td");
            let cellText = document.createTextNode(`Fila ${i} cel·la ${j}`);

            cell.appendChild(cellText);

            row.appendChild(cell);
            
            // SET AN ID FOR EVERY CELL IN THE TABLE
            cell.setAttribute("id", k);
            k++
        }
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    createdTable.appendChild(table).setAttribute("id", "table");
}

createTable();

table.onclick = function(event) {
    
    let editingTd;

    let target = event.target.closest('.edit-cancel, .edit-ok, td');

    if (!table.contains(target)) return;

    if (target.className == 'edit-cancel') {

        finishTdEdit(editingTd.elem, false);

    } else if (target.className == 'edit-ok') {

        finishTdEdit(editingTd.elem, true);

    } else if (target.nodeName == 'TD') {

        if (editingTd) return; // already editing

        makeTdEditable(target);
    }
}

function makeTdEditable(td) {

    editingTd = {
        elem: td,
        data: td.innerHTML
    };

    let textArea = document.createElement("textarea");

    textArea.style.width = (td.clientWidth + 25) + 'px';
    textArea.style.height = (td.clientHeight + 25) + 'px';

    textArea.className = "edit-area";

    textArea.value = td.innerHTML;
    td.innerHTML = '';

    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML("beforeEnd",
        `
        <div class="edit-controls">
            <button class="edit-ok">
                OK
            </button>
            <button class="edit-cancel">
                CANCEL
            </button>
        </div>
        `
    );
}

function finishTdEdit(td, isOk) {

    if (isOk) {
      
        td.innerHTML = td.firstChild.value;
    
    } else {
      
        td.innerHTML = editingTd.data;
    }
    
    td.classList.remove('edit-td');
    
    editingTd = null;
}