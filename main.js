var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('IQ & Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo sueñas, se puede lograr!')
    .pauseFor(2500)
    //caracteres que se borraránn
    .deleteChars(7)
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();