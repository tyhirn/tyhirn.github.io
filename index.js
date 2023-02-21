// JavaScript source code
// Navigation toggle
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav__menu--active');
});

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const target = document.querySelector(link.getAttribute('href'));
    const offsetTop = target.offsetTop;

    window.scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  });
});
