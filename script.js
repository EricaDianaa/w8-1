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
    alert("Il numero estratto è" + numberRandom);
    // let newP: any = (document.createElement("p").textContent = numberRandom);
    // newP?.appendChild(div);
    //IF/ELSE COMPARAZIONE NUMERI
    if (value1 === numberRandom) {
        alert("Il giocatore n°1 ha vinto");
    }
    else if (value2 === numberRandom) {
        alert("Il giocatore n°2 ha vinto");
    }
    else if (value1 === numberRandom && value2 === numberRandom) {
        alert("Entrambi i giocatori hanno vinto");
    }
    else {
        if (Math.abs(value1 - numberRandom) > Math.abs(value2 - numberRandom)) {
            alert(" Nessuno ha vinto ma il giocatore n°2 si è avvicinato");
        }
        else if (Math.abs(value2 - numberRandom) > Math.abs(value1 - numberRandom)) {
            alert("  Nessuno ha vinto ma il giocatore n°1 si è avvicinato");
        }
        else {
            alert("nessuno ha vinto ma entrambi i giocatori si sono avvicinati");
        }
    }
});
