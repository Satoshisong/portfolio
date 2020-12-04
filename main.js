'use strict';

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () =>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

//click navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }
    scrollIntoView(link);
});

//handle click 'contact me'

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})

//Make home fade out scrolls down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show arrow-up-Btn
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

//Handle click on arrow up
arrowUp.addEventListener('click', () =>{
    scrollIntoView('#home');
})



function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}