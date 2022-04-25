var alertValuesButton = document.getElementById("alertValues");

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

function alertOption() {

    let opt = getOption();

    alert(opt);
}

alertValuesButton.addEventListener("click", alertOption)