//RIFERIMENTI HTML
let play1: any = document.getElementById("number1") as HTMLInputElement;
let play2: any = document.getElementById("number2") as HTMLInputElement;
let buttonInvia = document.getElementById("invia") as HTMLButtonElement;
let buttonNumber = document.getElementById("number") as HTMLButtonElement;
let div = document.querySelector("numberDiv") as HTMLDivElement;

//SELEZIONO I VALORI INPUT
let value1: number;
let value2: number;
buttonInvia.addEventListener("click", function () {
  value1 = play1.value;
  value2 = play2.value;
  console.log(value1);
  console.log(value2);
});

//CICLO PER NUMERO CASUALE
let numberRandom: any | number;
buttonNumber.addEventListener("click", function () {
  numberRandom = Math.floor(Math.random() * (100 - 1)) + 1;
  console.log(numberRandom);
  // let newP: any = (document.createElement("p").textContent = numberRandom);
  // newP?.appendChild(div);

  //IF/ELSE COMPARAZIONE NUMERI
  if (value1 === numberRandom) {
    alert("Il giocatore n°1 ha vinto");
  } else if (value2 === numberRandom) {
    alert("Il giocatore n°2 ha vinto");
  } else if (value1 === numberRandom && value2 === numberRandom) {
    alert("Entrambi i giocatori hanno vinto");
  } else {
    if (Math.abs(value1 - numberRandom) > Math.abs(value2 - numberRandom)) {
      alert(" Nessuno ha vinto ma il giocatore n°2 si è avvicinato");
    } else if (
      Math.abs(value2 - numberRandom) > Math.abs(value1 - numberRandom)
    ) {
      alert("  Nessuno ha vinto ma il giocatore n°1 si è avvicinato");
    } else {
      alert("nessuno ha vinto ma entrambi i giocatori si sono avvicinati");
    }
  }
});
