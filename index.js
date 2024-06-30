const slides = document.querySelectorAll(".slides img")
let slideIndex = 0
let intervalId = null;

document.addEventListener("DOMContentLoaded",initializeSlider);
function initializeSlider(){
    /// populate with first image
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide")

    }

}
function showSlide(index){
    if (index >= slides.length){
        slideIndex = 0;
    }
    else if (index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide")

}
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex)
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
ADVERTISEMENT
