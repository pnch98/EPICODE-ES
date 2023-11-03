/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log("Es. 1:");

for(i in pets)
  console.log(pets[i]);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("Es. 2:");

console.log(pets.sort());


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("Es. 3:");

// metodo for
for(let i=pets.length-1; i>=0; i--)
  console.log(pets[i]);

// metodo alternativo
console.log(pets.sort().reverse());


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Es. 4:");

// metodo 1
console.log(pets);
pets.splice(pets.length, 0, pets[0]);
pets.splice(0, 1);
console.log(pets);

console.log("\n");

// metodo 2
console.log(pets);
pets.push(pets.shift());
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
console.log("Es. 5:");

// metodo 1
cars.forEach(element => {element.licensePlate = "ID" + cars.indexOf(element)});
console.log(cars);

console.log("\n");

// metodo 2
/*
cars[0].licensePlate = "GG420EZ"
cars[1].licensePlate = "WP696FY"
cars[2].licensePlate = "NT000LL"
*/

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto. 
*/
console.log("Es. 6:");

cars.push(
  {
    brand: 'Dacia',
    model: 'Duster',
    color: 'blue',
    trims: ['life', 'style', 'r-line'],
    licensePlate: "ID3"
  }
);

cars.forEach(element => (element.trims.pop()));
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
console.log("Es. 7:");

cars.forEach(element => (justTrims.push(element.trims[0])));
console.log(justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("Es. 8:");

cars.forEach(element => {
  if (element.color.charAt(0) === 'b'){
    console.log("Fizz")
  }else console.log("Buzz");
})

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
console.log("Es. 9:");

let n=0;
while(numericArray[n] !== 32){
  console.log(numericArray[n]);
  n++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
console.log("Es. 10:");

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'z'];

const posChar = [];

charactersArray.forEach(element => {
  for(let i=0; i<alfabeto.length; i++){
    if(element.toLowerCase() === alfabeto[i]){
      posChar.push(i+1);
    }
  }
});

console.log(charactersArray + "  => " + posChar);