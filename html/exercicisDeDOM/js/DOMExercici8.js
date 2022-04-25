var deleteFromListButton = document.getElementById("deleteFromList");
var select = document.querySelector("select");
var log = document.getElementById("log");

function getOption() {

        let opt;

        for ( let i = 0, len = select.options.length; i < len; i++ ) {

            opt = select.options[i];

            if ( opt.selected === true ) {
                
                break;
            }
        }

        return opt;
}

function deleteOption() {

    let opt = getOption();

    select.remove(opt.index);
    
    log.innerHTML = ` ${opt.value} deleted`;
}

deleteFromListButton.addEventListener("click", deleteOption);