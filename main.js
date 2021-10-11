
// ---------//
// Prima condizine
// ---------//
let distanza = prompt('Quanti km vuoi percorrere?');

if(isNaN(distanza)){
     alert('Occhio devi inserire un numero');
}

// ---------//
// Seconda condizione
// ---------//
let età = Number(prompt('Qual\'é l\'etá del viaggiatore?'));

if(isNaN(età)){
     alert('Occhio devi inserire un numero');
}

// ---------//
// calcolo prezzo biglietto
// ---------//

let prezzoBase = distanza * 0.21;


if (età < 18){
     var prezzoFinale = prezzoBase - (prezzoBase * 0.20);
     
}

else if (età > 65){
     var prezzoFinale = prezzoBase - (prezzoBase * 0.40);

}

else {
     var prezzoFinale = prezzoBase ;

}

document.getElementById("prezzo_biglietto").innerHTML = prezzoFinale;
























