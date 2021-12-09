const hamburgerMenu = document.querySelector('.hamburger_menu');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const footerMenu = document.querySelector('.footer_menu');
const sitemap = document.querySelector('.sitemap');
const closeFooter = document.querySelector('.close_sitemap');
const jumboMenuMobile = document.querySelector('.jumbo_menu');
const showMoreJumbo = document.querySelector('.show_more_jumbo');
const main = document.querySelector('main');


function addClass(listener, listen,  x, myClass){
    listener.addEventListener(listen, ()=>{
        x.classList.add(myClass);
    });
}
function removeClass(listener, listen,  x, myClass){
    listener.addEventListener(listen, ()=>{
        x.classList.remove(myClass);
    });
}
function toggleClass(listener, listen,  x, myClass,  y , show){
    listener.addEventListener(listen, ()=>{
        const response=x.classList.toggle(myClass);
        if(!response){
            y.classList.remove(show);
            listener.textContent=("Show More");
        } else{
            y.classList.add(show);
            listener.textContent=("Show Less");
        }
    });
}

addClass(hamburgerMenu, 'click', hamburger, 'active');
removeClass(close, 'click', hamburger, 'active');
addClass(footerMenu, 'click', sitemap, 'active');
removeClass(closeFooter, 'click', sitemap, 'active');
toggleClass(jumboMenuMobile, 'click', main, 'jumbo_mobile', showMoreJumbo, 'show')

