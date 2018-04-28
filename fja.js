var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function produziti() {

    if (document.getElementById("lokacija").style.display == "block") {
        document.getElementById("lokacija").style.display = 'none';
        document.getElementById("lokacija").style.visibility = 'none';
    } else {
        document.getElementById("lokacija").style.display = 'block';
        document.getElementById("lokacija").style.visibility = 'visible';
    }




}

function produziti2() {
    if (document.getElementById("lokacija2").style.display == "block") {
        document.getElementById("lokacija2").style.display = 'none';
        document.getElementById("lokacija2").style.visibility = 'none';
    } else {
        document.getElementById("lokacija2").style.display = 'block';
        document.getElementById("lokacija2w").style.visibility = 'visible';
    }
}

function produziti3() {
    if (document.getElementById("lokacija3").style.display == "block") {
        document.getElementById("lokacija3").style.display = 'none';
        document.getElementById("lokacija3").style.visibility = 'none';
    } else {
        document.getElementById("lokacija3").style.display = 'block';
        document.getElementById("lokacija3").style.visibility = 'visible';
    }
}

function produziti4() {
    if (document.getElementById("lokacija4").style.display == "block") {
        document.getElementById("lokacija4").style.display = 'none';
        document.getElementById("lokacija4").style.visibility = 'none';
    } else {
        document.getElementById("lokacija4").style.display = 'block';
        document.getElementById("lokacija4").style.visibility = 'visible';
    }
}