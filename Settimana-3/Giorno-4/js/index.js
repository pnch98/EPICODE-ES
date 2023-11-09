const handleSubmit = function (e) {
    e.preventDefault();
    const numberOfTabelline = getNumberOfTabelline();
    generateTabelline(numberOfTabelline);
}

const numbersSelected = [];

const generateTable = function () {
    const tabellone = document.getElementById('tabellone');
    for(let i=0; i < 90; i++) {
        const numberCell = document.createElement('div');
        numberCell.classList.add('numberCell');
        numberCell.innerHTML = `<span>${i+1}</span>`;
        tabellone.appendChild(numberCell);
    } 
}

const addSelected = function (selectedNumber) {
    addSelectedTabellone(selectedNumber);
    addSelectedTabelline(selectedNumber);
}

const addSelectedTabellone = function (selectedNumber) {
    // aggiungo il numero all'array di numeri già usciti
    numbersSelected.push(selectedNumber);
    // prendo tutte le celle dei numeri
    const numberCells = document.querySelectorAll('.numberCell');
    // aggiungo alla cella con indice interessato la classe selected
    numberCells[selectedNumber-1].classList.add('selected'); 
    
    const lastNumber = document.getElementById('lastNumber');
    lastNumber.innerText = "Numero: " + selectedNumber;
}

const addSelectedTabelline = function (selectedNumber) {
    const tabelline = document.querySelectorAll('.singolaTabellina');
    for(let i=0; i < tabelline.length; i++){
        const tabellinaCells = tabelline[i].querySelectorAll('.numberCell span')
        tabellinaCells.forEach(span => {
            if(parseInt(span.innerHTML) === (selectedNumber)){
                span.parentNode.classList.add('selected')
            }
        })
        const selectedCells = tabelline[i].querySelectorAll('.selected')
        console.log(selectedCells.length);

        if(selectedCells.length === 15){
            alert('Gioco terminato!');
            location.reload();
        }
    }
}

const generateNumber = function () {
    // uso la funzione generateAndControl per creare numero random non uscito
    const selectedNumber = generateAndControl(numbersSelected);
    // uso la funzione addSelected per aggiungere i selected
    addSelected(selectedNumber);
}

const getNumberOfTabelline = function () {
    // ritorno il valore scritto nel form parsato in intero
    return parseInt(document.getElementById('numberTabelline').value);
}

function generateAndControl(numbers){
    let randNumber = Math.floor(Math.random()*90) + 1;
    if(numbers.includes(randNumber)) {
        randNumber = generateAndControl(numbers);
    }
    return randNumber;
}

// genero una singola tabellina
const generateTabellina = function () {
    const numbersTabellina = [];
    const tabellina = document.createElement('div');
    tabellina.classList.add('singolaTabellina');

    for(let i=0; i<15; i++){
        const numberCell = document.createElement('div');
        numberCell.classList.add('numberCell');

        const numberGenerated = generateAndControl(numbersTabellina);
        numbersTabellina.push(numberGenerated); 

        numberCell.innerHTML = `<span>${numberGenerated}</span>`;
        tabellina.appendChild(numberCell);
    }

    return tabellina;
}

const generateTabelline = function (number) {
    const divTabelline = document.getElementById('tabelline');
    const tabelline = [];

    for(let i=0; i < number; i++){
        const singolaTabellina = generateTabellina();
        divTabelline.appendChild(singolaTabellina);
    }

}

const generateNumberButton = document.getElementById('generateNumber');
generateNumberButton.addEventListener('click', generateNumber);

window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
    generateTable();
}
