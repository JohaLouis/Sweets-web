//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle('sticky', window.scrollY > 0);
});
const navSlide = () => {
    const cheeseburger = document.querySelector('.cheeseburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
   
    cheeseburger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        });
        //Burger Animation
        cheeseburger.classList.toggle('toggle'); 


    });
}

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);
navSlide();