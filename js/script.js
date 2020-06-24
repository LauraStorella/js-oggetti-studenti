$(document).ready(function () {

// *************** OBJECTS ***************

/* 
Step #1 : Creare un oggetto che descriva uno studente con le 
seguenti proprietà: nome, cognome e età. Stampare a 
schermo attraverso il for in tutte le proprietà.

Step #2 : Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

Step #3 : Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.  
*/



// Step #1
//  ---> Creo oggetto e sue proprietà
var profiloStudente = {
  'nome': 'Sara',
  'cognome': 'Rossi',
  'eta': 19,
};

// modifico valore proprietà
profiloStudente.eta = 20;
// aggiungo nuova proprietà
profiloStudente.matricola = '12345XYZ';


//  ---> Stampo proprietà con ciclo for-in
console.log('Dati profilo Studente:');
// stampo tutte le proprietà dell'oggetto
for (var key in profiloStudente) {
  console.log(key + ': ' + profiloStudente[key]);
}


























}); // document ready
