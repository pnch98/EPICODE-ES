/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("Es. A:");
const sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("Es. B:");
const random = Math.round(Math.random() * 20);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("Es. C:");
const me = {
  name: 'Alfonso',
  surname: 'Cecere',
  age: 25
}
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("Es. D:");
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("Es. E:");
me.skills = ['C', 'Java', 'GDScript', 'Javascript'];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("Es. F:");
me.skills.push('Linguaggio G');
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("Es. G:");
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("Es. 1:");
const dice = function () {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("Es. 2:");
const whoIsBigger = function (a, b) {
  return (a>b)?a:b;
}
console.log(whoIsBigger(12,31));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("Es. 3:");
const splitMe = function (string) {
  return string.split(' ');
}
console.log(splitMe('I love coding'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("Es. 4:");
const deleteOne = function (string, bool) {
  if (bool){
    return string.slice(1);
  }
  return string.slice(0, -1);
}
console.log(deleteOne('I love coding', false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("Es. 5:");
const onlyLetters = function (string) {
  // rimuovo ogni numero dalla stringa
  let newStr = string.replace(/[0,1,2,3,4,5,6,7,8,9]/g, ''); // risultato "I have  dogs"

  // extra
  // rimuovo lo spazio in più
  // divido la stringa dove trovo spazi creando un array di stringhe
  const split = newStr.split(' '); // ['I', 'have', '', 'dogs']
  // svuoto newStr
  newStr = '';
  // monto di nuovo newStr con le nuove sottostringhe scartando la stringa vuota dovuta al doppio spazio
  split.forEach(element => {
    // scarto la stringa vuota
    if(element != '')
      newStr += element + ' ';
  });
  return newStr;
}
console.log(onlyLetters('I have 4 dogs'));


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("Es. 6:");

const isThisAnEmail = function (string) {
  // controllo quante volte è presente il simbolo @ nella stringa
  let count = 0;
  for(let i=0; i < string.length; i++){
    if(string.charAt(i) === '@'){
      count++;
    }
  }
  // se non è presente o è presente più di una volta, ritorna false
  if(count!=1){
    return false;
  }
  
  // divido la stringa in due parti
  const split = string.split('@');    // se la stringa termina per @ allora avrò che split[1] = '', che non va bene
                                      // analogamente se inizia per @ avrò split[0] = ''
  // se la stringa non contiene spazi e split[1]!=''
  return (!string.includes(' ')  && !split.includes(''))?true:false;
}

console.log(isThisAnEmail('asd@asd'));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("Es. 7:");
const whatDayIsIt = function () {
  const data = new Date();
  const giorniSettimana = [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato'
  ]
  return giorniSettimana[data.getDay()]; 
}

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("Es. 8:");
const rollTheDices = function (number) {
  const values = [];
  let total = 0;

  for(let i=0; i < number; i++){
    const rolled = dice();
    console.log("Numero uscito: " + rolled);
    values.push(rolled);
    total += rolled;
  }

  return `{sum: ${total}, values: [${values}]}`;
}
console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("Es. 9:");

const howManyDays = function (string) {
  // mi divido in variabili leggibili la data nella stringa
  const dateInput = new Date(string);
  const getYear = dateInput.getFullYear();
  const getMonth = dateInput.getMonth();
  const getDate = dateInput.getDate();

  // prendo in varaibili leggibili la data corrente
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const currentDate = new Date(currentYear, currentMonth, currentDay);



  switch(true){
    case (currentDate<dateInput):
      return "Quel giorno non è ancora arrivato";   // non metto break; perché il return esce già dalla funzione
    case (currentDate==dateInput):
      return "È oggi.";
    case (currentDate>dateInput):
      const left = parseInt((currentDate-dateInput)/(1000 * 60 * 60 * 24));
      return left;
    }
}
console.log(howManyDays("2022-9-27"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("Es. 10:");
const isTodayMyBirthday = function (string){
  const split = string.split('/')
  const birthDay = parseInt(split[0]);
  const birthMonth = parseInt(split[1]);

  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();

  return (birthDay === currentDay && birthMonth === currentMonth+1)?true:false;
}
console.log(isTodayMyBirthday("01/07"));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("Es. 11:");

const deleteProp = function (object, prop){
   delete object[prop];
   return object;
}

const user = {
  name: 'Alfonso',
  surname: 'Cecere',
  age: 25
}
console.log(deleteProp(user, 'age'));;

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

/*-------------------*/
/*---------------- TUTTE LE FUNZIONI CON MOVIES LE CHIAMO IN FONDO AL FILE DOPO L'ARRAY MOVIES ---------------*/
/*-------------------*/

const newestMovie = function (movies) {
  const movieYears = [];
  movies.forEach(movie => {
    movieYears.push(parseInt(movie.Year));
  })

  const max = Math.max(...movieYears);
  const indexMovie = movieYears.indexOf(max);
  
  return movies[indexMovie];
}


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function (movies) {
  return movies.length;
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function (movies) {
  const movieYears = [];
  movies.forEach(movie => {
    movieYears.push(parseInt(movie.Year));
  })

  return movieYears;
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function (movies) {
  return movies.filter(movie => movie.Year < 2000);
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function (movies) {
  let total = 0;
  movies.forEach(movie => total += parseInt(movie.Year))
  return total;
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (movies, string) {
  const moviesFound = [];
  const lowString = string.toLowerCase();

  movies.forEach(movie => {
    const lowMovie = movie.Title.toLowerCase();
    if(lowMovie.includes(lowString)){
      moviesFound.push(movie)
    }
  })

  return moviesFound;
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (movies, string) {
  const remainingMovies = [];
  const moviesFound = [];
  const lowString = string.toLowerCase();
  const result = {
    found: [],
    others: []
  }

  movies.forEach(movie => {
    const lowMovie = movie.Title.toLowerCase();
    if(lowMovie.includes(lowString)){
      result['found'].push(movie);
    }else {
      result['others'].push(movie);
    }
  })

  return result;
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function (movies, index) {
  const moviesDue = [...movies];
  moviesDue.splice(index, 1);
  return moviesDue;
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const container = document.getElementById('container');

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const tdAll = document.querySelectorAll('td');

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
for(let i=0; i < tdAll.length; i++){
  console.log(tdAll[i].innerHTML);
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const links = document.querySelectorAll('a');

for(let i=0; i < links.length; i++){
  links[i].style.backgroundColor = 'red';
}

// ESERCIZI COMMENTATI POICHE' GENERAVANO ERRORI NON ESSENDO PRESENTI I RISPETTIVI ELEMENTI NEL DOM

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
// const ul = document.getElementById('myList');
// const li = document.createElement('li');
// ul.appendChild(li);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

// const ul2 = document.getElementById('myList');
// ul2.innerHTML = '';

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
// const trAll = document.querySelectorAll('tr');
// for(let i=0; i < trAll.length; i++){
//   trAll[i].classList.add('test');
// }

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("Es. 27: ");
const halfTree = function (number) {
  let message = '';
  for(let i=0; i < number; i++){
    message += '*';
    console.log('\n', message);
  }
}
halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("Es. 28: ");
const tree = function (number) {
  // number*2-1 è il numero di caratteri che stampa nell'ultima riga
  const digits = number*2 - 1;
  let message = ""

  // ciclo for per fare le prime number-1 righe
  for(let i=1; i < number; i++){
    // spaces è il numero di spazi che ho ogni singola riga
    let spaces = digits - (i*2 - 1);
    // prendo la metà e la concateno a message
    let halfSpace = spaces/2;
    for(let j=0; j < halfSpace; j++){
      message += " ";
    }
    // passo al numero di * da stampare che sarà i*2 - 1
    for(let z=0; z < (i*2 - 1); z++){
      message += '*';
    }
    console.log(message);
    message = '';
  }
  // alla fine faccio un ultimo ciclo for per stampare l'ultima riga che avrà sempre (number*2 - 1) di *
  for(let i=0; i<digits; i++){
    message += '*';
  }
  console.log(message);

}
tree(5);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("Es. 29: ");
const isItPrime = function (number) {
  
  if(parseInt(number) !== number){
    return "Non è un numero intero";
  }

  console.log(number);
  switch(number){
    case 1:
      case 2:
        case 3:
          case 5:
            case 7:
              case 11:
                case 13:
                  return "È un numero primo"; // non metto break dopo return poiché, uscendo dalla funzione, non verrebbe mai letto 
    case 0:
      case 4:
        case 6:
          case 8:
            case 9: 
              case 10:
                return "Non è un numero primo";
    default:
      // parto da 2 poiché è inutile dividerlo per 1 dato che un numero primo è divisibile per 1 e sé stesso
      // controllo fino alla radice quadrata del numero stesso poiché è il più grande divisore intero 
      // che possa darmi il numero stesso
      for(let i=2; i <= Math.sqrt(number); i++){
        if(number%i === 0){
          return "No, non è un numero primo";
        }
      }
      return "Sì, è un numero primo";
  }
}
console.log(isItPrime(163));

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

console.log("Es. 12: \n", newestMovie(movies));
console.log("Es. 13: \n", countMovies(movies));
console.log("Es. 14: \n", onlyTheYears(movies));
console.log("Es. 15: \n", onlyInLastMillennium(movies));
console.log("Es. 16: \n", sumAllTheYears(movies));
console.log("Es. 17: \n", searchByTitle(movies, "lord"));
console.log("Es. 18: \n", searchAndDivide(movies, "lord"));
console.log("Es. 19: \n", removeIndex(movies, 13));