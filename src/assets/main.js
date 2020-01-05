var slideIndexs = 1;
showSlides(slideIndexs);
function plusSlides(n) {
  showSlides(slideIndexs += n);
}
function currentSlide(n) {
  showSlides(slideIndexs = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexs = 1}
  if (n < 1) {slideIndexs = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndexs-1].style.display = "block";
}

var slideIndexs = 0;
showSlidesAuto();

function showSlidesAuto() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexs++;
  if (slideIndexs > slides.length) {slideIndexs = 1}
  slides[slideIndexs-1].style.display = "block";
  setTimeout(showSlidesAuto, 3000); // Change image every 2 seconds
}