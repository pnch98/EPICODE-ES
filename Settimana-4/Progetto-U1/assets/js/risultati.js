const punteggio = localStorage.getItem('punteggio');
const nDomande = localStorage.getItem('nDomande');

const correctDiv = document.getElementById('correct');
const percentCorrect = punteggio*100/nDomande;
correctDiv.innerHTML += `<h2 class="titoli">${percentCorrect.toFixed(1)}%</h2>
                            <p>${punteggio}/${nDomande} questions</p>`

const wrongDiv = document.getElementById('wrong');
const percentWrong = (nDomande-punteggio)*100/nDomande;
wrongDiv.innerHTML += `<h2 class="titoli">${percentWrong.toFixed(1)}%</h2>
                        <p>${nDomande-punteggio}/${nDomande} questions</p>`

const grafico = document.getElementById('graficoSuccess');
if(percentCorrect >= 60) {
    grafico.innerHTML = `<h4 class="titoli">Congratulations!</h4> <p id="inBlue">You passed the exam.<br></p><!--ringraziare manuel per questo voto-->
    <p id="piccolo">We'll send you the certificate<br> in few minutes.<br>
                    Check your email (including<br> promotions/spam folder)</p>`
}else {
    grafico.innerHTML = `<h4 class="titoli">YOU SUCK!</h4> <p id="pink">You failed the exam!<br></p><!--ringraziare manuel per questo voto-->
    <p id="piccolo">We'll send you NOTHING.<br>
                    SHAME ON YOU<br> (including free insults on email)</p>`
}


const btnRate = document.getElementById('btnRate');
btnRate.addEventListener('click', ultimaPagina);


function ultimaPagina() {
    window.open('ultima_pagina.html', '_self');
}

const ShadowPlugin = {
    beforeDraw: (chart, args, options) => {
    const { ctx } = chart;
    ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    },
};

var yValues = [percentWrong, percentCorrect ];       // valori percentuale

var barColors = [    
"#d20094",
"#00FFFF",  // colori 
];

new Chart("myChart", {
type: "doughnut",
data: {
    datasets: [{
    backgroundColor: barColors,
    data: yValues,
    borderColor: "transparent",
    cutout: '70%',
    hoverOffset: 20,
    radius: '93%'
    }]
},
plugins:[ShadowPlugin],
});