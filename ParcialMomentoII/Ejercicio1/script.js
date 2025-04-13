window.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".bar-fill");
    bars.forEach(bar => {
      const width = bar.getAttribute("data-width");
      setTimeout(() => {
        bar.style.width = width;
      }, 100); // pequeño delay para el efecto suave
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('input');
    toggle.addEventListener('change', () => {
        document.body.classList.toggle('modo-oscuro');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('input');

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('modo-claro');
    });
});