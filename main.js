// ---------//
// Prima condizine
// ---------//

let distanza = Number(prompt('Quanti km vuoi percorrere?'))

while ( (isNaN(distanza)) || (distanza <= 0) ) {
     alert('Occhio devi inserire un numero');
     distanza = Number(prompt('Quanti km vuoi percorrere?'))  
}

// ---------//
// Seconda condizione
// ---------//
let età = Number(prompt('Qual\'é l\'etá del viaggiatore?'));

while( (isNaN(età)) || (età <= 0) ) {
     alert('Occhio devi inserire un numero');
     età = Number(prompt('Qual\'é l\'etá del viaggiatore?'));
}

// ---------//
// calcolo prezzo biglietto
// ---------//

let prezzoBase = distanza * 0.21;
let prezzoFinale = 0

if (età < 18){
     prezzoFinale -= prezzoBase * .2
     
}

else if (età > 65){
     prezzoFinale -= prezzoBase * .4;

}

else {
     prezzoFinale = prezzoBase;

}

document.getElementById("prezzo_biglietto").innerHTML = prezzoFinale.toFixed(2);
























