//mario è bello
//alfonso è gay
//quello sopra l'ha scritto valerio

const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
        //alessio was here
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The macOS operating system is based on a Linux kernel.",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "HTTP protocol stands for 'Hypertext Transfer Protocol'",
      correct_answer: "True",
      incorrect_answers: ["False"]
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "RAM stands for 'Read-Only Memory'",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Is HTML a programming language?",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "facile",
      question: "What is the name of the most popular open-source database management system?",
      correct_answer: "MySQL",
      incorrect_answers: ["SQLite", "PostgreSQL", "Oracle"]
    }
  ];

  var shuffle = [];

  let i = 0;
  let risposteCorrette = 0;
  let timeLimit;
  var clock;

  let timerChart;

  //funzione che disegna il grafico usato per il timer
  function drawChart(clock, timeLimit) {
    //prendo il canvas sull'HTML
    const ctx = document.getElementById('myTimer').getContext('2d');

    //creo plugin
    const doughnutLabel = {
      id: "doughnutLabel",
      //prima di disegnare
      beforeDatasetsDraw(chart, args, pluginOptions) {
        const {ctx, data} = chart;

        ctx.save();
        //prendo le ascisse del centro del grafico
        const xCoord = chart.getDatasetMeta(0).data[0].x;
        //prendo le ordinate del centro del grafico
        const yCoord = chart.getDatasetMeta(0).data[0].y;
        //settings per il font interno
        ctx.font = '40px sans-serif';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        //con fillText riempiamo il centro del grafico con il testo scelto
        //il testo ussato sarà il countdown che coincide con il secondo elemento dell'array data[]
        ctx.fillText(data.datasets[0].data[1], xCoord, yCoord + 2);
      }
    }

    const doughnutLabel2 = {
      id: "doughnutLabel2",
      //prima di disegnare
      beforeDatasetsDraw(chart, args, pluginOptions) {
        const {ctx, data} = chart;

        ctx.save();
        //prendo le ascisse del centro del grafico
        const xCoord = chart.getDatasetMeta(0).data[0].x;
        //prendo le ordinate del centro del grafico
        const yCoord = chart.getDatasetMeta(0).data[0].y;
        //settings per il font interno
        ctx.font = '10px sans-serif';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        //con fillText riempiamo il centro del grafico con il testo scelto
        //il testo ussato sarà il countdown che coincide con il secondo elemento dell'array data[]
        ctx.fillText("SECONDS", xCoord, yCoord - 25);
        ctx.fillText("REMAINING", xCoord, yCoord + 30);
      }
    }

    //ombra per il timer
    const ShadowPlugin = {
      beforeDraw: (chart, args, options) => {
      const { ctx } = chart;
      ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      },
  };

    //config del grafico
    const config = {
      type: "doughnut",
      data: {
        datasets: [{
        backgroundColor: [    
          "rgba(255, 255, 255, 0.2)",
          "#00FFFF",  // colori 
          ],
          //variabili usate per le proporzioni sul grafico
        data: [clock, timeLimit],
        borderColor: "transparent",
        //spessore del grafico
        cutout: '80%',
        radius: '93%'
        }]
      },
      options: {
        //rimuove ogni evento col mouse (over)
        events: []
      },
      //permette di usare le configurazioni sopra
      plugins: [doughnutLabel, doughnutLabel2, ShadowPlugin]
    }

    //creiamo il chart
    timerChart = new Chart(ctx, config)
  }
  

  //aggiorna il chart con i nuovi valori
  function updateChart(chart, elapsed, clock) {
    chart.data.datasets[0].data[0] = elapsed;
    chart.data.datasets[0].data[1] = clock;
    chart.update();
  }


  //funzione principale delle domande
  function getQuestion(shuffle) {
    //dichiariamo elapsedTime che parte da 0
    var elapsedTime = 0;

    //mi assicuro che la funzione di disegnare il graficoavvenga solo alla prima domanda
    if(i == 0){
      drawChart(elapsedTime, timeLimit-elapsedTime);
    }

    //condizione di uscita, siamo oltre l'ultima domanda
    if(i == shuffle.length) {
      //salviamo i dati punteggio e numero di domande che ci serviranno nella pagina js successiva
      localStorage.setItem('punteggio', risposteCorrette);
      localStorage.setItem('nDomande', shuffle.length);
      //apriamo la pagina dei risultati
      window.open('risultati.html', '_self');
      return 1;
    }
    
    //prendiamo il tempo all'avvio della pagina
    let startTime = Date.now();

    //creiamo una funzione intervallo per contare i secondi che passano
    const interval = setInterval(function () {
      //clock è countdown, ovvero timeLimit che è il tempo massimo meno elapsedTime che è il tempo passato
      clock = timeLimit - Math.floor(elapsedTime);
      
      //aggiorniamo il grafico con i nuovi valori di elapsedTime e clock
      updateChart(timerChart, Math.round(elapsedTime), clock);

      //elapsedTime si aggiorna: prendiamo il tempo attuale e gli sottraiamo il tempo preso all'inizio
      elapsedTime = (Date.now() - startTime)/1000;

      //condizione: se il countdown arriva a zero
      if(clock == 0){
          //aumento i per passare alla prossima domanda
          i++;
          //rimuovo l'intervallo ancora in corso
          clearInterval(interval);
          //svuoto l'html degli elementi usati così da reinserirci le prossime risposte 
          divRisposte.innerHTML = '';
          //richiamo la stessa funzione per rifare il procedimento
          getQuestion(shuffle);
      }
    }, 1000); //100 is the time interval in milliseconds

    //prendiamo l'elemento question in basso
    const counter = document.getElementById('numberQuestion');
    //ci inseriamo il numero della domanda a cui stiamo rispondendo i+1 e il numero di domande shuffle.length
    counter.innerHTML=`<span>QUESTION ${i+1} </span> <span id="pink">/ ${shuffle.length}</span>`

    //prendiamo l'elemento html dove va inserita la domanda
    const domanda = document.getElementById('domanda');
    //inseriamo la domanda attuale suffle[i].question 
    domanda.innerHTML = shuffle[i].question;

    //prendiamo il div delle risposte
    const divRisposte = document.getElementById('risposte');

    //prendiamo le risposte incorrette di questions
    const arrayRisposte = Array.from(shuffle[i].incorrect_answers);
    //ci aggiungiamo la risposta corretta
    arrayRisposte.push(shuffle[i].correct_answer);

    //lo randomizziamo usando il metodo di ordinamento sort, ma dandogli una funzione che ordina in modo casuale
    const shuffleRisposte = arrayRisposte.sort(answer => Math.random() - 0.5);

    //per ogni risposta creiamo un button con classe risposta e ci inseriamo il valore di risposta
    shuffleRisposte.forEach(risposta => {
      divRisposte.innerHTML += `<button class='risposta'><b>${risposta}</b></button>`;
    });

    //riprendiamo tutte le risposte generate
    const risposte = document.getElementsByClassName('risposta');
    //per ogni risposta colleghiamo un event listener
    Array.from(risposte).forEach(risposta => {
        risposta.addEventListener('click', function selectAnswer() {
          //quando una risposta viene cliccata, si aggiunge la classe selected a quella risposta
            risposta.classList.add('selected');
            //disabilitiamo tutti i button così da non poter premere nient'altro
            Array.from(risposte).forEach(risposta => {
              risposta.disabled = true;
            })

            //se la risposta selezionata è corretta, aggiungiamo un punto al punteggio finale
            if(risposta.innerText === shuffle[i].correct_answer){        
                risposteCorrette++;
                //gli diamo una formattazione unica
                risposta.classList.add('correctAnswer');
            }
            //una volta risposto, libero l'intervallo, incremento i per andare alla prossima domanda nell'array
            //svuoto il divrisposte per poterci mettere le nuove nel prossimo ciclo
            //richiamo questa stessa funzione per ripetere tutto il procedimento da capo
            clearInterval(interval);
            function wait(){
              i++;
              divRisposte.innerHTML = '';
              getQuestion(shuffle);
            }
            //timeout per apprezzare la bellissima classe delle risposte giuste creata dal magnifico manuel
            setTimeout(wait,1000);
        });
    })
  }


  function startQuiz() {
    //prendo l'elemento html con classe domanda
    //chiedo all'utente il tipo di difficoltà
    const difficolta = document.getElementById('domanda');
    difficolta.innerText = "Choose the difficulty";

    //prendo il div risposte e inserisco due button: easy e difficult
    const divScelte = document.getElementById('risposte');
    divScelte.innerHTML = `
    <button class='risposta'><b>Easy</b></button>
    <button class='risposta'><b>Difficult</b></button>
    `

    //riprendo le risposte
    const scelte = document.querySelectorAll('.risposta');
    //collego un event listener per ogni button
    //a seconda del button premuto l'event listener setta la difficoltà cambiando il tempo a disposizione per rispodere
    scelte[0].addEventListener('click', function () {
      timeLimit = 30;
      //scuoto i div per poterci inserire domande e risposte
      difficolta.innerText = '';
      divScelte.innerHTML = '';
      //chiamo la funzione nQuestions
      nQuestions();
    })
    scelte[1].addEventListener('click', function () {
      timeLimit = 10;
      //scuoto i div per poterci inserire domande e risposte
      difficolta.innerText = '';
      divScelte.innerHTML = '';
      //chiamo la funzione nQuestions
      nQuestions();
    })
  }

  function nQuestions() {
    //questa funzione mi genera l'array randomico di domande e lascia decidere all'utente 
    //a quante domande vuole rispondere

    //randomizzo l'array con lo stesso procedimento usato per le risposte
    shuffle = Array.from(questions).sort(question => Math.random() - 0.5);


    //come sopra prendo gli elementi html delle domande e risposte
    const difficolta = document.getElementById('domanda');
    difficolta.innerText = "Choose the number of questions";
    const divScelte = document.getElementById('risposte');
    //inserisco tre button per il numero di domande
    divScelte.innerHTML = `
    <button class='risposta'><b>5</b></button>
    <button class='risposta'><b>10</b></button>
    <button class='risposta'><b>15</b></button>
    `

    //riprendo i button
    const scelte = document.querySelectorAll('.risposta');
    //per ogni button aggiungo event listener
    scelte.forEach(scelta => {
      scelta.addEventListener('click', function() {
        //al click svuota i div
        difficolta.innerText = '';
        divScelte.innerHTML = '';
        //limitiamo la lunghezza dell'array delle domande a seconda della scelta dell'utente
        shuffle.length = scelta.innerText;
        //richiamo getQuestion per dare il via alle domande
        getQuestion(shuffle);
      })
    })
  }

window.onload = function () {
  //appena viene caricata la pagina chiamo la funzione startQuiz
  startQuiz();
}

