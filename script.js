//RIFERIMENTI HTML
var play1 = document.getElementById("number1");
var play2 = document.getElementById("number2");
var buttonInvia = document.getElementById("invia");
var buttonNumber = document.getElementById("number");
var div = document.querySelector("numberDiv");
//SELEZIONO I VALORI INPUT
var value1;
var value2;
buttonInvia.addEventListener("click", function () {
    value1 = play1.value;
    value2 = play2.value;
    console.log(value1);
    console.log(value2);
});
//CICLO PER NUMERO CASUALE
var numberRandom;
buttonNumber.addEventListener("click", function () {
    numberRandom = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(numberRandom);
    var newP = (document.createElement("p").textContent = numberRandom);
    newP === null || newP === void 0 ? void 0 : newP.appendChild(div);
    //IF/ELSE COMPARAZIONE NUMERI
    if (value1 === numberRandom) {
        alert("Il giocatore n°1 ha vinto");
    }
    else if (value2 === numberRandom) {
        alert("Il giocatore n°2 ha vinto");
    }
    else {
        if (Math.abs(value1 - numberRandom) > Math.abs(value2 - numberRandom)) {
            alert(" Nessuno ha vinto ma il giocatore n°2 si è avvicinato");
        }
        else {
            Math.abs(value2 - numberRandom) > Math.abs(value1 - numberRandom);
            alert("  Nessuno ha vinto ma il giocatore n°1 si è avvicinato");
        }
    }
});
