var slideshow = document.getElementById('slideshow');
var slides = slideshow.getElementsByTagName('img');
var idx = 0;
function changeSlide() {
    slides[idx].style.display = 'none';
    idx = (idx + 1) % slides.length;
    slides[idx].style.display = 'block';
}
setInterval(changeSlide, 3000);