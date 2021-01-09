'use strict'

function scrollRight(){
    let navbar = document.getElementById('navbar');
    navbar.style.left= '0px';
    navbar.style.transition = 'all 1s'
}

function scrollLeft(){
    let navbar = document.getElementById('navbar');
    navbar.style.left= '-1000px';
    navbar.style.transition = 'all 2s'
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('menu').addEventListener("click", scrollRight);    
    document.getElementById('closeCross').addEventListener("click", scrollLeft);    

});

