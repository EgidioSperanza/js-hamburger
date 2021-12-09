const hamburger = document.querySelector('.fa-bars');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const close = document.querySelector('.close');
const showMore = document.getElementById('show_more');
const showMoreFooter = document.querySelector('.show_more_footer');
const closeFooter = document.querySelector('.foot_close');

addClass(hamburger, 'click', hamburgerMenu, 'active')
removeClass(close, 'click', hamburgerMenu, 'active')
addClass(showMore, 'click', showMoreFooter, 'active')
removeClass(closeFooter, 'click', showMoreFooter, 'active')

function addClass(listener, listen,  x, myClass){
    listener.addEventListener(listen, ()=>{
        x.classList.add(myClass);
    });
}
function removeClass(listener, listen,  x, myClass){
    listener.addEventListener(listen, ()=>{
        x.classList.removeClass(myClass);
    });
}