
//sliding images implementation
let currentSlide = 0;

function changeSlide(n) {
    currentSlide += n;
    showSlides();
}

function showSlides() {
    const slides = document.querySelector('.carousel');
    if (currentSlide > slides.children.length - 1) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.children.length - 1;
    }

    const transformValue = -currentSlide * 167 + '%';
    slides.style.transform = 'translateX(' + transformValue + ')';
}