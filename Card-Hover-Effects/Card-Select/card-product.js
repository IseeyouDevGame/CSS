const images = ["images/Camisa.png", "images/Camisa2.png", "images/Camisa3.png"];
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar con la imagen y los círculos correspondientes al índice 0
    changeImage(0);
});

function changeImage(direction) {
    if (direction === 'left') {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    } else if (direction === 'right') {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    } else if (typeof direction === 'number') {
        currentImageIndex = direction;
    }
    
    // Cambiar la imagen después de un pequeño retraso para que coincida con la animación de la flecha
    setTimeout(() => {
        document.getElementById("image").src = images[currentImageIndex];
        updateIndicators(currentImageIndex);
    }, 200); // Retraso de 200ms
}

function updateIndicators(index) {
    const indicators = document.querySelectorAll('.indicator');
    // Restablecer todos los círculos a color gris
    indicators.forEach(indicator => {
        indicator.style.backgroundColor = '#ccc';
        indicator.style.boxShadow = 'none';
    });

    // Establecer el color y el efecto del círculo correspondiente al índice actual
    if (index === 0) {
        indicators[0].style.backgroundColor = 'black';
        indicators[1].style.backgroundColor = 'blue';
        indicators[2].style.backgroundColor = 'red';
        indicators[0].style.boxShadow = '0 0 1px 3px rgba(0, 0, 0, 0.5)';
    } else if (index === 1) {
        indicators[0].style.backgroundColor = 'black';
        indicators[1].style.backgroundColor = 'blue';
        indicators[2].style.backgroundColor = 'red';
        indicators[1].style.boxShadow = '0 0 1px 3px rgba(0, 0, 0, 0.5)';
    } else if (index === 2) {
        indicators[0].style.backgroundColor = 'black';
        indicators[1].style.backgroundColor = 'blue';
        indicators[2].style.backgroundColor = 'red';
        indicators[2].style.boxShadow = '0 0 1px 3px rgba(0, 0, 0, 0.5)';
    }
}
