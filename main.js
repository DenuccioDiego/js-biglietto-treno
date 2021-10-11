// ---------//
// Prima condizine
// ---------//

let distanza = 0

while(isNaN(distanza)){
     alert('Occhio devi inserire un numero');
     distanza = Number(prompt('Quanti km vuoi percorrere?'))
}

// ---------//
// Seconda condizione
// ---------//
let età = 0

while(isNaN(età)){
     alert('Occhio devi inserire un numero');
     età = Number(prompt('Qual\'é l\'etá del viaggiatore?'));
}

// ---------//
// calcolo prezzo biglietto
// ---------//

let prezzoBase = distanza * 0.21;
let prezzoFinale = 0

if (età < 18){
     prezzoFinale = prezzoBase - (prezzoBase * 0.20);
     
}

else if (età > 65){
     prezzoFinale = prezzoBase - (prezzoBase * 0.40);

}

else {
     prezzoFinale = prezzoBase;

}

document.getElementById("prezzo_biglietto").innerHTML = prezzoFinale.toFixed(2);
























