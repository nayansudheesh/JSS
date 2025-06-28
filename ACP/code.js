function getrandom() {
    var random = Math.floor(Math.random()*10)+1
    document.getElementById('random').innerHTML = "The random number is " + random
}
function roundrandom() {
    var random = Math.floor(Math.random() * 10) + 1
    if (random >= 5) {
        randomrounded = 10}

    else {
        randomrounded = random
    }
    document.getElementById('rounded').innerHTML = "The random number is " + random + " the random rounded number is " + randomrounded

}
function date() {
    var day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    document.getElementById("date").innerHTML = "Today is " + day;
}