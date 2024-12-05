document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
      item.addEventListener('click', () => {
        const position = item.getAttribute('data-position'); 
        carousel.style.setProperty('--position', position); 
  
        // Actualizar la clase activa
        items.forEach(el => el.classList.remove('active')); 
        item.classList.add('active'); 
      });
    });
  
    items[0].classList.add('active');
  });
  