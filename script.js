const menuButton = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
var menuOpen = false;

menuButton.addEventListener('click', () =>{
 if(!menuOpen) {
     menuButton.classList.add('open');
     menuOpen = true;
     navLinks.classList.add('mobile-toggle')
     navLinks.classList.add('pointer-events')
 } else {
     menuButton.classList.remove('open');
     menuOpen = false;
     navLinks.classList.remove('mobile-toggle')
     navLinks.classList.remove('pointer-events')
 }
})