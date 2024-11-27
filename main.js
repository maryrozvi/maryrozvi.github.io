var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Siempre se puede lograr!')
    .pauseFor(2500)
    //caracteres que se borraránn
    .deleteChars(7)
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start();