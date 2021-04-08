var numKm = parseInt (prompt("Quanti KM devi percorrere?"));
// console.log(numKm);
var anniPasseggero = parseInt (prompt("Quanti anni ha il passeggero?"));
// console.log(anniPasseggero);

var prezzoAlKm = 0.21;

console.log(parseFloat(prezzoAlKm));

var prezzoBiglietto = numKm * prezzoAlKm;
console.log(prezzoBiglietto);

var passeggeroMinorenne = parseInt(17);
// console.log(parseInt(passeggeroMinorenne));

// var passeggeroMaggiorenne 
// console.log(parseInt(passeggeroMaggiorenne));

var passeggeroOver = parseInt(65);
// console.log(parseInt(passeggeroOver));



if(anniPasseggero<=passeggeroMinorenne){

    console.log("il passeggero è minorenne")
}
if(anniPasseggero>=passeggeroOver){

    console.log("il passeggero ha più di 65 anni")
}else {

    console.log("il passeggero non ha sconti sul biglietto")
}