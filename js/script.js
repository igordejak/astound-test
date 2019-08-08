// listener

window.onload = function () {
    document.getElementById("readmore-button").addEventListener('click', changeStyle);
    document.getElementById("prev-button").addEventListener('click', function () {
        plusSlides(-1)
    }, false);
    document.getElementById("next-button").addEventListener('click', function () {
        plusSlides(+1)
    }, false);

}

// read more button

function changeStyle() {
    document.getElementById('text-to-read-more').style.display = 'block';
    document.getElementById('readmore-button').style.display = 'none';
}


// slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("related-gallery-img");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}