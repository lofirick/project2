let slideIndex = 0;

function nextSlide() {
    showSlides(slideIndex+=1);
}

function prevSlide() {
    showSlides(slideIndex-=1);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slideshow img');
    console.log(slideIndex);
    if(n == slideIndex.length-1){
        console.log("end has been reached");
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}
