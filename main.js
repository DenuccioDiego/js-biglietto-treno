// ---------//
// Prima condizine
// ---------//

// let distanza = Number(prompt('Quanti km vuoi percorrere?'))

// while ( (isNaN(distanza)) || (distanza <= 0) ) {
//      alert('Occhio devi inserire un numero');
//      distanza = Number(prompt('Quanti km vuoi percorrere?'))  
// }

// // ---------//
// // Seconda condizione
// // ---------//
// let età = Number(prompt('Qual\'é l\'etá del viaggiatore?'));

// while( (isNaN(età)) || (età <= 0) ) {
//      alert('Occhio devi inserire un numero');
//      età = Number(prompt('Qual\'é l\'etá del viaggiatore?'));
// }



//-----------------------------------------------------------------------------------------------//

const fullNameInputElement = document.getElementById("full-name");
const distanceInputElement = document.getElementById("distance");
const ageInputElement = document.getElementById("age");

const generateButtonElement = document.getElementById("generate");
const cancelButtonElement = document.getElementById("cancel");

generateButtonElement.addEventListener("click", calcolo_prezzo )


// ---------//
// calcolo prezzo biglietto
// ---------//
function calcolo_prezzo() {

const fullName = fullNameInputElement.value;
const distanza = distanceInputElement.value;
const età = ageInputElement.value; 

let prezzoBase = distanza * 0.21;
let prezzoFinale = 0

if(isNaN(distanza)) {
     alert("Per favore inserisci un numero")
     }

     else if (età == "minorenne"){
          prezzoFinale = prezzoBase - (prezzoBase * .2)
          document.getElementById("tipo_offerta").innerHTML = "Offerta ragazzi"
     }

     else if (età == "over65"){
          prezzoFinale = prezzoBase - (prezzoBase * .4);
          document.getElementById("tipo_offerta").innerHTML = "Offerta nonni"
     }

     else  {
          prezzoFinale = prezzoBase;
          document.getElementById("tipo_offerta").innerHTML = "Offerta Standard"     
     }

document.querySelector(".blocco_nascosto").style.display = "block" ;
document.getElementById("costo_biglietto").innerHTML = prezzoFinale.toFixed(2) ; 
document.getElementById("nome_passegero").innerHTML = fullNameInputElement.value ;
document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 50) ;
document.getElementById("codice_casuale").innerHTML = Math.floor(Math.random() * 100000) ;

}


cancelButtonElement.addEventListener('click', function (){
     
     document.querySelector(".blocco_nascosto").style.display = "none"  ; 
     fullNameInputElement.value = "";
     ageInputElement.value = 'minorenne';
     distanceInputElement.value = '';
     });




