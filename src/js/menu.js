const nav = document.getElementById('menu-toggle');
const menu = document.getElementById('main-nav');
nav.addEventListener('click', () => {
  menu.classList.toggle('show');
  nav.classList.toggle('show');
  console.log('hdsjs');
});

