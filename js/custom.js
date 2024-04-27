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

