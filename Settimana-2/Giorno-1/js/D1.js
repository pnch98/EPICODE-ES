/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 */

/* 
  1.Number: comprende ogni tipo di dato numerico (interi, negativi, decimali)
  2.String: delimitato da apici (singoli o doppi), può contenere frasi, parole, lettere, numeri, caratteri speciali...
  3.Boolean: dato booleano che può assumere come valore solo true | false
  4.Null: vuoto (diverso da zero o stringa vuota). Accetta come valore solo null
  5.Undefined: rappresenta un valore non ancora definito. Accetta come valore solo undefined
  6.Oggetto: tipo di dato complesso (array, funzioni...) caratterizzato da metodi e proprietà
 */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = "Alfonso";
console.log("Es.2: " + name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
var sum = 12 + 20;
console.log("Es.3: " + sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;
console.log("Es.4: " + x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Cecere";
console.log("Es.5: " + name);
const NAME = "Alfonso";
console.log("Es.5 - const: " + NAME);
/* NAME = "Cecere";
console.log("Es.5 - const: " + NAME); */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x = 12;
sum = 4 - x;
console.log("Es.6: " + sum);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = "john";
var name2 = "John";

console.log("Es. 7 - a: " +  name1 + " "  + name2);
(name1 != name2)?console.log("Sono diversi"):console.log("Sono uguali")

console.log("Es. 7 - b: " +  name1 + " "  + name2.toLowerCase());
(name1 != name2.toLowerCase())?console.log("Sono diversi"):console.log("Sono uguali")

