// Función para alternar entre el tema claro y oscuro
function toggleTheme() {
  const htmlElement = document.documentElement; // Selecciona el elemento <html>
  const currentTheme = htmlElement.classList.toggle('dark');

  // Cambia el icono del botón según el tema
  const icon = document.getElementById('theme-toggle').querySelector('i');
  icon.classList.toggle('fa-sun', !currentTheme);
  icon.classList.toggle('fa-moon', currentTheme);

  // Almacena la preferencia del tema en el localStorage
  localStorage.setItem('theme', currentTheme ? 'dark' : 'light');
}
