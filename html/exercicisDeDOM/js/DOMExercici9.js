var alertValuesButton = document.getElementById("alertValues");
var select = document.querySelector("select");

function getOptions() {

    let listOfOptions = [];

    for ( let i = 0, len = select.options.length; i < len; i++ ) {

        listOfOptions.push(select.options[i]);
    }

    return listOfOptions;
}

function alertOption() {

    // ARRAY
    let listOfOptions = getOptions();

    let str = "";

    let optAttributes;

    for (let i = 0; i < listOfOptions.length; i++) {

        optAttributes = listOfOptions[i].getAttributeNames();

        str += `${listOfOptions[i].getAttributeNames()}: `

        for (let j = 0; j < optAttributes.length; j++) {

            str += `${listOfOptions[i].getAttribute(optAttributes[j])}`;
        }

        str += "\n"
    }

    alert(str);

}

alertValuesButton.addEventListener("click", alertOption);