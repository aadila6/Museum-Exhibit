//Counter JavaScript
var countDownDate = new Date("May 10, 2020 17:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var res = Number(Math.floor(distance / 1000)).toLocaleString();
  document.getElementById("count").textContent = res;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").textContent = "EXPIRED";
  }
}, 1000);


//Slide Show JavaScript
var si = 1;
present(si);
function changeSlide(n) {
  present((si += n));
}
function curSlide(n) {
  present((si = n));
}
function present(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    si = 1;
  }
  if (n < 1) {
    si = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[si - 1].style.display = "block";
  dots[si - 1].className += " active";
}

