$(document).ready(function () {

// *************** OBJECTS ***************

/* 
Step #1 : Creare un oggetto che descriva uno studente con le 
seguenti proprietà: nome, cognome e età. Stampare a 
schermo attraverso il for in tutte le proprietà.

Step #2 : Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

Step #3 : Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.  
*/



// // Step #1
// //  ---> Creo oggetto e sue proprietà
// var profiloStudente = {
//   'nome': 'Sara',
//   'cognome': 'Rossi',
//   'eta': 19,
// },

// // modifico valore proprietà
// profiloStudente.eta = 20;
// // aggiungo nuova proprietà
// profiloStudente.matricola = '12345XYZ';


// //  ---> Stampo proprietà con ciclo for-in
// console.log('Dati profilo Studente:');
// // stampo tutte le proprietà dell'oggetto
// for (var key in profiloStudente) {
//   console.log(key + ': ' + profiloStudente[key]);
// }


// Step #2
//  ---> Creo array di oggetti (elenco studenti)
var elencoStudenti = [
  {
    'nome': 'Sara',
    'cognome': 'Rossi',
    'eta': 19,
  },

  {
    'nome': 'Marco',
    'cognome': 'Bianchi',
    'eta': 21,
  },

  {
    'nome': 'Gianna',
    'cognome': 'Verdi',
    'eta': 20,
  },

  {
    'nome': 'Alessio',
    'cognome': 'Neri',
    'eta': 30,
  },

  {
    'nome': 'Sandra',
    'cognome': 'Russo',
    'eta': 25,
  },
]


//  ---> Stampo proprietà con ciclo for
console.log('Elenco Studenti');
for (var i = 0; i < elencoStudenti.length; i++) {

  var singoloStudente = elencoStudenti[i];
  console.log(singoloStudente.nome + ' ' + singoloStudente.cognome);
}






















}); // document ready
