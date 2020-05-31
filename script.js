var buttonThing = document.querySelector('.convert-button');
var URLThing = document.querySelector('.URL-input');

var soundButtonThing = document.querySelector('.sound-button');


soundButtonThing.addEventListener('click', () => {
    console.log(`URL: ${URLThing.value}`);
    sendURLsound(URLThing.value);
})

function sendURLsound(URL) {
    window.location.href = `http://localhost:4000/downloadSound?URL=${URL}`;
}

buttonThing.addEventListener('click', () => {
    console.log(`URL: ${URLThing.value}`);
    sendURL(URLThing.value);
});

function sendURL(URL) {
    // send the youtube video in mp4 to your computer
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}