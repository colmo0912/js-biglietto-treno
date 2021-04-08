

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

if(numKm,anniPasseggero !== Number){
    alert("Inserisci caratteri numerici per specificare numero di km ed età")
} else {



if(anniPasseggero<=passeggeroMinorenne){

    document.write("Usufruisci dello sconto del 20%! Il prezzo del tuo biglietto è " + (prezzoBiglietto-((prezzoBiglietto*20)/100)).toFixed(2) +" euro")
}
else if(anniPasseggero>=passeggeroOver){

    document.write("Usufruisci dello sconto del 40%! Il prezzo del tuo biglietto è " + (prezzoBiglietto-((prezzoBiglietto*40)/100)).toFixed(2) +" euro")
}
else {

    document.write("Il prezzo del tuo biglietto è " + prezzoBiglietto +" euro" )
}

}