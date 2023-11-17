const form = document.querySelector('form');
form.addEventListener('submit', openDomande);

function openDomande(event) {
    event.preventDefault();
    window.open('domande.html', '_self');
}