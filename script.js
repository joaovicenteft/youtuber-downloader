var buttonThing = document.querySelector('.convert-button');
var URLThing = document.querySelector('.URL-input');


buttonThing.addEventListener('click', () => {
    console.log(`URL: ${URLThing.value}`);
    sendURL(URLThing.value);
});

function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}