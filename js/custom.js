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
const themeIcon = document.querySelector('.theme-icon');

// Set the initial icon
updateThemeIcon();

themeSwitcherBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
  localStorage.setItem('theme', currentTheme);
});

function updateThemeIcon() {
  const iconSrc = currentTheme === 'dark' ? 'images/icons/sun.svg' : 'images/icons/moon.svg';
  themeIcon.src = iconSrc;
  themeIcon.alt = currentTheme === 'dark' ? 'Moon' : 'Sun';
}




