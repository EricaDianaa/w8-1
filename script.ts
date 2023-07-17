
//RIFERIMENTI HTML
let play1=document.getElementById("number1")as HTMLInputElement
let play2=document.getElementById("number2")as HTMLInputElement
let buttonInvia=document.getElementById("invia")as HTMLButtonElement
let buttonNumber=document.getElementById("number")as HTMLButtonElement
let div=document.querySelector("numberDiv")as HTMLDivElement


//SELEZIONO I VALORI INPUT
let value1:string
let value2:string
buttonInvia.addEventListener("click",function(){
    value1= play1.value
 value2= play2.value
console.log(value1)
console.log(value2)
})


//CICLO PER NUMERO CASUALE 
let numberRandom
buttonNumber.addEventListener("click", function(){ 
   numberRandom=(Math.floor(Math.random()*(100-1))+1).toString() 
  console.log(numberRandom)  
    // let newP= document.createElement("p").innerText=numberRandom
    // newP?.appendChild(div);
    // console.log(newP)


//IF/ELSE COMPARAZIONE NUMERI
if (value1===numberRandom) {
alert("Il giocatore n°1 ha vinto")
}
else if(value2===numberRandom){
alert("Il giocatore n°2 ha vinto")
}
else if(value1<numberRandom||value1>numberRandom){
    alert("Il giocatore n°1 si è avvicinato")
}
else if(value2==numberRandom){
     alert("Il giocatore n°2 si è avvicinato")
 }
else{
    alert("Nessuno è riuscito a indovinare ")
}
})









