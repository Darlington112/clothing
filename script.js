const bar = document.getElementById('hamburger');
const navBar = document.getElementById('nav-list');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        navBar.classList.add('open')
    })
}

if (close) {
    close.addEventListener('click', () => {
        navBar.classList.remove('open')
    })
}