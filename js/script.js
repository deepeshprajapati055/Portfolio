
// active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    } );

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Hamburger
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// To-Top-Icon
const scrollToTopButton = document.getElementById('scrollTop');
    scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
// foot-icon-to-top
const footerIconTop = document.querySelector('.footer-iconTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        footerIconTop.style.display = 'block';
    } else {
        footerIconTop.style.display = 'none';
    }
});

// Displaying-name
const nameElement = document.getElementById("typing-name");
const nameText = "Deepesh Prajapati";
let index = 0;

function typeAnimation() {
nameElement.textContent = nameText.slice(0, index); // Display partial text
index++;

    // Reset animation when it's finished
if (index > nameText.length) {
    index = 0;
    setTimeout(typeAnimation, 1000); // Delay before restarting
} else {
    setTimeout(typeAnimation, 150); // Speed of typing
}
}
typeAnimation();


