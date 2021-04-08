var numKm = parseInt (prompt("Quanti KM devi percorrere?"));
// console.log(numKm);
var anniPasseggero = parseInt (prompt("Quanti anni ha il passeggero?"));
// console.log(anniPasseggero);

var prezzoAlKm = 0.21;

console.log(parseFloat(prezzoAlKm));

var prezzoBiglietto = numKm * prezzoAlKm;
console.log(prezzoBiglietto.toFixed(2));

var passeggeroMinorenne = parseInt(17);
// console.log(parseInt(passeggeroMinorenne));

// var passeggeroMaggiorenne 
// console.log(parseInt(passeggeroMaggiorenne));

var passeggeroOver = parseInt(65);
// console.log(parseInt(passeggeroOver));



if(anniPasseggero<=passeggeroMinorenne){

    console.log("Il prezzo del tuo biglietto è " + (prezzoBiglietto-((prezzoBiglietto*20)/100)).toFixed(2) +" euro")
}
else if(anniPasseggero>=passeggeroOver){

    console.log("Il prezzo del tuo biglietto è " + (prezzoBiglietto-((prezzoBiglietto*40)/100)).toFixed(2) +" euro")
}
else {

    console.log("Il prezzo del tuo biglietto è " + prezzoBiglietto +" euro" )
}