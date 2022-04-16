var form = document.getElementById("formulari1");

form.addEventListener("submit", prenValorForm);

function prenValorForm(e) {
    
    var collection = document.getElementsByTagName("input");
    
    // event.preventDefault() is deprecated but when you pass it as parameter, it works (?)
    e.preventDefault();   
    
    for (let i = 0; i < collection.length-1; i++) {
        console.log(`${collection[i].name}: ${collection[i].value}`);
    } 
}