
const handleMouseMove = (e) => {
    const cards = document.querySelectorAll(".flip-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
  
      const rotateX = (deltaY / rect.height) * -9; // Ajustar la rotación en el eje X
      const rotateY = (deltaX / rect.width) * 9; // Ajustar la rotación en el eje Y
  
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  };
  
  // Restablecer el efecto de inclinación cuando el mouse sale del área de la tarjeta
  const handleMouseLeave = () => {
    const cards = document.querySelectorAll(".flip-card");
    cards.forEach((card) => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  };
  
  // Adjuntar oyentes de eventos para el movimiento y salida del mouse
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseleave", handleMouseLeave);
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });
  
  const flipCards = document.querySelectorAll(".flip-card");
  flipCards.forEach((card) => {
    observer.observe(card);
  });
  