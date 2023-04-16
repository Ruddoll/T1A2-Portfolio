const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }