// Prima condizine
let distanza = prompt('Quanti km vuoi percorrere?');

if(isNaN(distanza)){
     alert('Occhio devi inserire un numero');
}


// Seconda condizione
let età = Number(prompt('Qual\'é l\'etá del viaggiatore?'));

if(isNaN(età)){
     alert('Occhio devi inserire un numero');
}


let prezzoBase = distanza * 0.21;

if (età < 18){
     let prezzoScontatoUnder18 = prezzoBase - (prezzoBase * 0.20)
     
}






























