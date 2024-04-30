// Mobel menu open/close
document.querySelector('.hamburger').addEventListener('click', () => {
    const navList = document.querySelector('.nav_list');
    const desktopOverlay = document.querySelector('.desktop_overlay');
    
    if (window.innerWidth <= 767) {
        navList.classList.toggle('nav_list_close');
    } else {
        desktopOverlay.classList.toggle('desktop_overlay_close');
    }
});


// Light/Dark Mode
const root = document.documentElement;
let currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
root.setAttribute('data-theme', currentTheme);

const themeSwitcherBtn = document.querySelector('.theme-btn');
themeSwitcherBtn.textContent = currentTheme === 'light' ? 'Dark' : 'Light';

themeSwitcherBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', currentTheme);
  themeSwitcherBtn.textContent = currentTheme === 'dark' ? 'Light' : 'Dark';
  localStorage.setItem('theme', currentTheme);
});




