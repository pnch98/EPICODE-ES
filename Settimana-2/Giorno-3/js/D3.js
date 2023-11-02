const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '277',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: '178',
    mass: '120',
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: '165',
    mass: '75',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: '97',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: '183',
    mass: '84',
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/

var characters = [];

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters". 
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "characters"
  creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
// for ( ; ; ) { singolo in collezione, inserire in array metodo push, per accedere dot notation }
// per controllare console.log

console.log("Es. 2:");
for(i in starWarsCharacters){
  characters.push(starWarsCharacters[i].name);
}
console.log(characters);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno
  tutti gli oggetto femminili, CON QUESTA STRUTTURA: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/
// nuovo array, ciclo, if accedo alla proprietà e verifico (genere -> female) { costruisco un oggetto con i tre dati riga 120}
// push dentro all'array nuovo

console.log("Es. 3:");

var femaleCharacters= [];

for(i in starWarsCharacters){
  if(starWarsCharacters[i].gender == "female"){
    var data = [];
    data.name = starWarsCharacters[i].name;
    data.hair_color = starWarsCharacters[i].hair_color;
    data.eye_color = starWarsCharacters[i].eye_color;
    femaleCharacters.push(data);
  }
}
console.log(femaleCharacters);


/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/
// creo un oggetto {[], [], [], []}

console.log("Es. 4:")

let eye_color = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  'blue-gray': [],
};
console.log(eye_color);

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
// switch (leggo le caratteristiche di eye color e in ciascun array array vuoto inserisco (push))

console.log("Es.5:");

for(i in starWarsCharacters){
  switch(starWarsCharacters[i].eye_color){
    case 'blue':
          eye_color.blue.push(starWarsCharacters[i]);
          break;
    case 'yellow':
          eye_color.yellow.push(starWarsCharacters[i]);
          break;
    case 'brown':
          eye_color.brown.push(starWarsCharacters[i]);
          break;
    case 'red':
          eye_color.red.push(starWarsCharacters[i]);
          break;
    case 'blue-gray':
          eye_color['blue-gray'].push(starWarsCharacters[i]);
          break;
  }
}
console.log(eye_color);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
// uso while {qui dentro sommo tutte le proprietà mass e le metto nella variabile crewMass}
// tip: ParseInt

console.log("Es.6:");

var i = 0, crewMass = 0;
while(i<starWarsCharacters.length){
  crewMass += parseInt(starWarsCharacters[i].mass);
  i++;
}
console.log("La massa totale è:", crewMass);

/* ESERCIZIO 7
  Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, 
  di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters"
  (sei in difficoltà? cerca su un motore di ricerca switch case e conditionals)

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è uguale a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
// faccio uno switch e verifico il valore di crewMass in quale case finisce

console.log("Es.7:");

// crewMass = 200;

switch(true){ 
  case (crewMass>=1000):
        console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
        break;
  case (crewMass>900):
        console.log("Critical Load: Over 900");
        break;
  case (crewMass>700):
        console.log("Warning: Load is over 700");
        break;
  case (crewMass>=500 && crewMass<=700):
          console.log("Ship is half loaded");
          break;
  case (crewMass<500):
        console.log("Ship is under loaded");
        break;
}


/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" 
  (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/
// for () posso fare un nuovo array oppure if (gender è qualcosa) {riassegno quel valore}

console.log("Es. 8:");

for(i in starWarsCharacters){
  if(starWarsCharacters[i].gender == 'n/a') {
    starWarsCharacters[i].gender = 'robot';
    console.log(starWarsCharacters[i])
  }
}

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Usa uno più for loop per raggiungere il risultato
  (tip: cerca un metodo degli array per rimuovere un elemento)
  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/
// metodo splice

console.log("Es. 9:");

for(i=0; i < femaleCharacters.length; i++){
  for(j=0; j < characters.length; j++){
    if(femaleCharacters[i].name == characters[j]){
      characters.splice(j, 1)
    }
  }
}
console.log(characters);

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
// metodi matematici sono floor, random

console.log("Es. 10:");

var rand = Math.floor(Math.random() * 10);

var selectedCharacter = starWarsCharacters[rand];

console.log(
  "Character name: " + selectedCharacter.name + ";\n" +
  "Height: " + selectedCharacter.height  + ";\n" +
  "Mass: " + selectedCharacter.mass  + ";\n" +
  "Hair color: " + selectedCharacter.hair_color  + ";\n" +
  "Skin color: " + selectedCharacter.skin_color  + ";\n" +
  "Eye color: " + selectedCharacter.eye_color  + ";\n" +
  "Birth year: " + selectedCharacter.birth_year  + ";\n" +
  "Gender: " + selectedCharacter.gender  + ";\n"
  );