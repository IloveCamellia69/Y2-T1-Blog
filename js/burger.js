var burgerMenu = document.querySelector('.burger-menu');
var mNav = document.querySelector('.menu');

burgerMenu.addEventListener('click', function(){
    burgerMenu.classList.toggle('open'); 
    mNav.classList.toggle('m-nav');
    mNav.classList.toggle('display-flex');
})