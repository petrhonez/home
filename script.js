document.getElementById('map').addEventListener('click', function (event) {
    const mascot = document.getElementById('mascot');
    
    // Pegando as coordenadas clicadas
    const x = event.clientX - this.getBoundingClientRect().left - (mascot.clientWidth / 2);
    const y = event.clientY - this.getBoundingClientRect().top - (mascot.clientHeight / 2);

    // Movendo o mascote para as coordenadas clicadas
    mascot.style.left = `${x}px`;
    mascot.style.top = `${y}px`;
});

