// OBTENIR LA DATA D'AVUI
function obtenirData() {

    let today = new Date()

    // padStart(), quan el length no és el que poses, afegeix el caràcter que vulguis
    
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    
    let data = `${dd}/${mm}/${yyyy}`;

    let valorperdefecte = "dd/mm/yyyy";
    
    let contingut = document.getElementById('data').innerHTML;
    
    if (contingut == data) {

        document.getElementById('data').innerHTML = valorperdefecte;
    
    } else if (contingut == valorperdefecte) {

        document.getElementById('data').innerHTML = data
    }
}

// HI HA CLASSE DE M04 ARA MATEIX?
function hiHaClasse() {

    let daysOfWeek = ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"];

    let today = new Date()

    // Dia de la setmana en número
    let day = String(today.getDay());

    // Hora
    let hour = today.getHours();
    console.log("hour: " + hour)

    // Minuts
    let minutes = today.getMinutes();
    console.log("minutes: " + minutes)

    // Hauria de separar una mica les funcions
    if (day == 1 || day == 5) {
        if (day == 1) {
            if (hour == 11) {
                if (minutes >= 15 && minutes <= 59) {
                    console.log("a");
                    alert(`Són les ${hour}:${minutes} i tens classe de M04.`)
                } else {
                    alert(`A les ${hour}:${minutes} no es fa M04.`)
                }
            } else if (hour == 12) {
                if (minutes >= 0 && minutes <= 10) {
                    alert(`Són les ${hour}:${minutes} i tens classe de M04.`)
                } else {
                    alert(`A les ${hour}:${minutes} no es fa M04.`)
                }
            } else {
                alert(`A les ${hour}:${minutes} no es fa M04.`)
            }
        } else if (day == 5) {
            if (hour == 8) {
                if (minutes >= 0 && minutes <= 59) {
                    alert(`Són les ${hour}:${minutes} i tens classe de M04.`)
                } else {
                    alert(`A les ${hour}:${minutes} no es fa M04.`)
                }
            } else if (hour == 9) {
                if (minutes >= 0 && minutes <= 50) {
                    alert(`Són les ${hour}:${minutes} i tens classe de M04.`)
                } else {
                    alert(`A les ${hour}:${minutes} no es fa M04.`)
                }
            } else {
                alert(`A les ${hour}:${minutes} no es fa M04.`)
            }
        }
    } else if (day != 1 || day != 5) {
        alert(`Els ${daysOfWeek[day]} no es fa M04`);
    }
}

// DATA ACTUAL
function getDate() { return new Date() }
var now = getDate();
console.log("now: " + now);

// DIA ACTUAL
function getDay(now) { return now.getDate() }
var day = getDay(now);
console.log("day: " + day); 

// MES ACTUAL
function getMonth(now) { return now.getMonth() + 1 }
var month = getMonth(now);
console.log("month: " + month);

// ANY ACTUAL
function getYear(now) { return now.getFullYear() }
var year = getYear(now); 
console.log("year: " + year);

// DIES QUE TÉ EL MES ACTUAL
var getDaysInMonth = function(month, year) {
    return new Date(year, month, 0).getDate();
}
var numDays = getDaysInMonth(month, year);
console.log("daysInMonth: " + numDays);

// DIA DE L'ANIVERSARI
function getBirthday() {
    return 25;
}
var birthday = getBirthday();
console.log("birthday: "+ birthday);

// DIES FINS L'ANIVERSARI
function daysTillBirthday(day, birthday) {
    
    let count = 1;

    for (let i = day; i < birthday; i++) {

        count++
    }
    return count-1;
}
var daysTillBirthday = daysTillBirthday(day, birthday);
console.log("daysTillBirthday: " + daysTillBirthday); 

// SEGONS FINS L'ANIVERSARI
function secondsTillBirthday(daysTillBirthday) {
    return daysTillBirthday * 86400.001;
}
var secondsTillBirthday = secondsTillBirthday(daysTillBirthday);

// DISPLAY DELS SEGONS
function showSecondsTillBirthday(secondsTillBirthday) {
    
    let content = document.getElementById('seconds').innerHTML;
    let data = secondsTillBirthday + " segons";
    let valorperdefecte = ""; 

    if (content == "") {
        document.getElementById('seconds').innerHTML = data;
    } else if (content != valorperdefecte) {
        document.getElementById('seconds').innerHTML = valorperdefecte;
    }
}

// MINUTS FINS L'ANIVERSARI
function minutesTillBirthday(daysTillBirthday) {
    return daysTillBirthday * 60;
}
var minutesTillBirthday = minutesTillBirthday(daysTillBirthday);

// DISPLAY DELS MINUTS
function showMinutesTillBirthday(minutesTillBirthday) {
    let content = document.getElementById('minutes').innerHTML;
    let data = minutesTillBirthday + " minutes";
    let valorperdefecte = ""; 

    if (content == "") {
        document.getElementById('minutes').innerHTML = data;
    } else if (content != valorperdefecte) {
        document.getElementById('minutes').innerHTML = valorperdefecte;
    }
}

// HORES FINS L'ANIVERSARI
function hoursTillBirthday(daysTillBirthday) {
    return daysTillBirthday * 24;
}
var hoursTillBirthday = hoursTillBirthday(daysTillBirthday);

// DISPLAY DE LES HORES
function showHoursTillBirthday(daysTillBirthday) {
    let content = document.getElementById('hours').innerHTML;
    let data = hoursTillBirthday + " hores";
    let valorperdefecte = ""; 

    if (content == "") {
        document.getElementById('hours').innerHTML = data;
    } else if (content != valorperdefecte) {
        document.getElementById('hours').innerHTML = valorperdefecte;
    }
}

// DISPLAY DELS DIES
function showDaysTillBirthday(daysTillBirthday) {
    let content = document.getElementById('days').innerHTML;
    let data = daysTillBirthday + " dies";
    let valorperdefecte = ""; 

    if (content == "") {
        document.getElementById('days').innerHTML = data;
    } else if (content != valorperdefecte) {
        document.getElementById('days').innerHTML = valorperdefecte;
    }
}

function diaDeLaMerce() {

    let daysOfWeek = ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous","Divendres", "Dissabte"];
    
    let listDaysSS = [];
    let listDaysNotSS = [];
    
    let countDaysSS = 0;
    let countDaysNotSS = 0;

    let dayOfWeek;
    for (let i = 2022; i < 2060; i++) {

        let day = new Date(i, 09, 24);
        dayOfWeek = day.getDay();

        if (dayOfWeek == 0 || dayOfWeek == 6) {
            listDaysSS.push([day.getFullYear() + " - " + daysOfWeek[day.getDay()]]);
            countDaysSS++
        } else if (dayOfWeek != 0 || dayOfWeek != 6) {
            listDaysNotSS.push([day.getFullYear() + " - " + daysOfWeek[day.getDay()]]);
            countDaysNotSS++
        }
    }

    //console.log(listDaysSS);
    //console.log(listDaysNotSS);

    let daySS = listDaysSS;
    let dayNotSS = listDaysNotSS;

    //console.log("daySS: " + daySS);
    //console.log("dayNotSS: " + dayNotSS);

    let content = document.getElementById('countDaySS').innerHTML;
    let data = countDaysSS;
    let valorperdefecte = ""; 

    if (content == "") {

        document.getElementById('countDaySS').innerHTML = countDaysSS;
        document.getElementById('daySS').innerHTML = daySS; 

        document.getElementById('countDayNotSS').innerHTML = countDaysNotSS;
        document.getElementById('dayNotSS').innerHTML = dayNotSS;

        document.getElementById('merceButton').value = "Ocultar";

    } else if (content == data) {

        document.getElementById('countDaySS').innerHTML = valorperdefecte;
        document.getElementById('daySS').innerHTML = valorperdefecte; 

        document.getElementById('countDayNotSS').innerHTML = valorperdefecte;
        document.getElementById('dayNotSS').innerHTML = valorperdefecte;

        document.getElementById('merceButton').value = "Mirar";
    }    
}