document.addEventListener("DOMContentLoaded", () => {
  const personaje = document.getElementById("personaje");
  const buttons = document.querySelectorAll(".power");

  // Marcar un botón como activo (opcional)
  const setActive = (btn) => {
    buttons.forEach(b => b.setAttribute("aria-pressed", "false"));
    btn.setAttribute("aria-pressed", "true");
  };

  // Pre-carga simple (opcional) para evitar parpadeos
  const preload = (src) => {
    const img = new Image();
    img.src = src;
  };

  // Registrar listeners
  buttons.forEach(btn => {
    const newImg = btn.dataset.img;
    const newBg  = btn.dataset.bg;

    // precarga
    preload(newImg);
    preload(newBg);

    btn.addEventListener("click", () => {
      // Cambiar imagen principal
      personaje.src = newImg;

      // Cambiar fondo de la página
      document.body.style.backgroundImage = `url("${newBg}")`;

      // Activar estado visual del botón
      setActive(btn);
    });
  });

  // Estado inicial (opcional: ninguno activo)
  // Si quieres que inicie con el primero activo:
  // buttons[0].click();
});