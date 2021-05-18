import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/scss/bootstrap.scss';
import '../styles/style.scss';

const upBtn = document.querySelector('#up-button');

upBtn.addEventListener('click', () => scrollToTop());

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}