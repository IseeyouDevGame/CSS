const eye = document.getElementById("eye");

document.addEventListener("mousemove", function (event) {
  const outerCircle = eye.parentElement;

  const rect = outerCircle.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const deltaX = event.clientX - centerX;
  const deltaY = event.clientY - centerY;

  const angle = Math.atan2(deltaY, deltaX);

  const maxDistance = rect.width / 4;

  const eyeX = Math.cos(angle) * maxDistance;
  const eyeY = Math.sin(angle) * maxDistance;

  eye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
});
document.addEventListener("DOMContentLoaded", () => {
  const outerCircle = document.querySelector(".outer-circle");
  const homeButton = document.getElementById("homeButton");
  const UpButton = document.getElementById("UpButton");
  const DownButton = document.getElementById("DownButton");
  const otherButtons = document.getElementById("otherButtons");
  const eyelidTop = document.getElementById("eyelid-top");
  const eyelidBottom = document.getElementById("eyelid-bottom");

  document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    homeButton.classList.remove("show");
    otherButtons.classList.remove("show");
    UpButton.classList.remove("show");
    DownButton.classList.remove("show");

    // Mostrar los botones
    if (mouseX > screenWidth / 2) {
      homeButton.classList.add("show");
    } else if (mouseX < screenWidth / 2) {
      otherButtons.classList.add("show");
    }

    if (mouseY < screenHeight / 2) {
      UpButton.classList.add("show");
    } else if (mouseY > screenHeight / 2) {
      DownButton.classList.add("show");
    }
  });

  // Simulación de parpadeo y movimiento de los párpados
  setInterval(() => {
    eyelidTop.classList.add("closed");
    eyelidBottom.classList.add("closed");

    setTimeout(() => {
      eyelidTop.classList.remove("closed"); // Abrir el ojo después de 0.3s
      eyelidBottom.classList.remove("closed"); // Abrir el ojo
    }, 300); // Mantener los párpados cerrados por 0.3s
  }, 3000); // Repetir el parpadeo cada 3 segundos
});
