const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const getCurrentTransform = () => {
    const computedStyle = window.getComputedStyle(card);
    return computedStyle.transform;
  };

  let initialTransform = getCurrentTransform();

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const rotateX = (deltaY / rect.height) * 40;
    const rotateY = (deltaX / rect.width) * -40;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = initialTransform;
  });
});
