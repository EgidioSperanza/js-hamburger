const hamburger = document.querySelector('.fa-bars');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const close = document.querySelector('.close');
hamburger.addEventListener('click', ()=>{
    hamburgerMenu.classList.add('active');
});
close.addEventListener('click', ()=>{
    hamburgerMenu.classList.remove('active');
});