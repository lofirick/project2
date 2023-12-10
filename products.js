function showSlides(n) {
    let slides = document.querySelectorAll('.slideshow img');
    console.log(n);
    if(n == slideIndex.length - 1){
        console.log("end has been reached");
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}
