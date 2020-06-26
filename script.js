const menuButton = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const eachLink = navLinks.querySelectorAll(".link");

var menuOpen = false;

menuButton.addEventListener('click', () =>{
 if(!menuOpen) {
     menuButton.classList.add('open');
     menuOpen = true;
     navLinks.classList.add('mobile-toggle')
 } else {
     menuButton.classList.remove('open');
     menuOpen = false;
     navLinks.classList.remove('mobile-toggle')
 }
})

for( var i = 0; i < eachLink.length; i++){
    eachLink[i].addEventListener('click', closeMenu)
}

function closeMenu(){
    if(!menuOpen) {
     menuButton.classList.add('open');
     menuOpen = true;
     navLinks.classList.add('mobile-toggle')
 } else {
     menuButton.classList.remove('open');
     menuOpen = false;
     navLinks.classList.remove('mobile-toggle')
 }
}

