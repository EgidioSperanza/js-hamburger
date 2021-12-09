const hamburger = document.querySelector('.fa-bars');
const showMore = document.getElementById('show_more');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const showMoreFooter = document.querySelector('.show_more_footer');
const close = document.querySelector('.close');
const closeFooter = document.querySelector('.foot_close');
hamburger.addEventListener('click', ()=>{
    hamburgerMenu.classList.add('active');
});
close.addEventListener('click', ()=>{
    hamburgerMenu.classList.remove('active');
});
showMore.addEventListener('click', ()=>{
    showMoreFooter.classList.add('active');
});
closeFooter.addEventListener('click', ()=>{
    showMoreFooter.classList.remove('active');
});
