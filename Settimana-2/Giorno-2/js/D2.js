/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log("Es. 1:")

let a = 8, b = 6;
if (a>b){
  console.log(a + " è maggiore di " + b);
}else if(a==b) {
  console.log("sono uguali");
}else {
  console.log(b + " è maggiore di " + a);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log("Es. 2:")

let x = 6;
if (x!=5){
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("Es. 3:")

x = 15;
if(x%5 == 0){
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("Es. 4:")

a = 10;
b = 2;
if (a==8){console.log("Il primo numero è 8")}
else if (b==8){console.log("Il secondo numero è 8")}
else if (a+b == 8){console.log("La loro somma è 8")}
else if (a-b == 8 || b-a == 8){console.log("La loro differenza è 8")};

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("Es. 5:")

var totalShoppingCart = 48, shippingFee = 10, finalCost;

if (totalShoppingCart > 50){
  finalCost = totalShoppingCart;
  console.log("Spedizione gratuita! Il costo finale è " + finalCost)
}else {
  finalCost = totalShoppingCart + shippingFee;
  console.log("Il costo finale è: " + totalShoppingCart + "+" + shippingFee +"(spedizione)= "+ finalCost)
};

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("Es. 6:")

console.log("Sconto Black-Friday! Nuovo costo totale: " + (finalCost*0.8).toFixed(2));

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("Es. 7:")

a = 4, b = 5, c = 7;
if(a>=b){
  if(a>c){
    console.log("Il numero maggiore è: " + a)
  }else {
    console.log("Il numero maggiore è: " + c)
  }
}else if(b>c){
    console.log("Il numero maggiore è: " + b)
  }else {
    console.log("Il numero maggiore è: " + c)
  }

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log("Es. 8:")

x = "pippo";

if(typeof(x)=="number"){
  console.log(x + " è un numero")
}else console.log(x + " non è un numero");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("Es. 9:")

x = 17;

if(typeof(x)!="number"){
  console.log(x + " non è un numero")
}else if(x%2 == 0){
  console.log(x + " è pari")
}else console.log(x + " è dispari");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

console.log("Es. 10:");

let val = 13;
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
console.log("Es. 11:");

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

console.log("Es. 12:");

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log("Es. 13:");

console.log(me.skills);
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log("Es. 14:");

let myArray = [];

// myArray.push(1);
// myArray.push(2);
// myArray.push(3);
// myArray.push(4);
// myArray.push(5);
// myArray.push(6);
// myArray.push(7);
// myArray.push(8);
// myArray.push(9);
// myArray.push(10);
// console.log(myArray);

for (let i = 0; i < 10; i++) {
  myArray[i] = i+1;
}
console.log(myArray);



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

console.log("Es. 15:");

myArray[myArray.length - 1] = 100;
console.log(myArray);

