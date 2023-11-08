// tre cose 
// 1. funzione che fa addTask
// 2. funzione che gestisce attachComplete (riga sbarrata)
// 3. una funzione che attachDelete (cancella)
const handleSubmit = function (e) {
    e.preventDefault()              // evita il comportamento di default 

    const btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener('click', addTask);

    // const pComplete = document.querySelectorAll("p");
    // pComplete.addEventListener('click', attachComplete);

    attachDelete()
}




const addTask = function () {
    let div = document.createElement("div");
   
    div.innerHTML = `<p onclick="attachComplete()">${document.getElementById("inputField").value}</p>
                    <i class="fas fa-trash-alt"></i>`

    document.querySelector("main").appendChild(div);
    // stampare l'html necessario per aggiungere il value del mio campo input inputField.value
    // ogni task che aggiungo aggiunge html -> +=
}


const attachComplete = function () {
    const allP = document.querySelectorAll("p");
    allP.forEach(p => {
        if(p.value === this.value){
            p.classList.toggle("taskCompleted");
        }
    })
    
    // aggancia gli elementi html
    // li ciclo ad esempio con for
    // all'elemento che seleziono aggiunge|toglie una classe (toggle)
    // https://www.w3schools.com/js/js_this.asp this per leggere il contenuto
    // css ->   text-decoration: line-through;
}

const attachDelete = function () {
    // aggancia gli elementi html
    // ciclo for
    // metodo per rimuovere qualcosa .remove
}

window.onload = function () {
    let form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}