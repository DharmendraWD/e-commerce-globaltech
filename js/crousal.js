const crousalUpperMyslide = document.querySelectorAll(".crousalUpper-myslide"),
  crousalUpperDot = document.querySelectorAll(".crousalUpper-dot");
let crousalUpperCounter = 1;
crousalUpperSlideFun(crousalUpperCounter);

let crousalUpperTimer = setInterval(crousalUpperAutoSlide, 8000);

function crousalUpperAutoSlide() {
  crousalUpperCounter += 1;
  crousalUpperSlideFun(crousalUpperCounter);
}

function crousalUpperPlusSlides(n) {
  crousalUpperCounter += n;
  crousalUpperSlideFun(crousalUpperCounter);
  crousalUpperResetTimer();
}

function crousalUpperCurrentSlide(n) {
  crousalUpperCounter = n;
  crousalUpperSlideFun(crousalUpperCounter);
  crousalUpperResetTimer();
}

function crousalUpperResetTimer() {
  clearInterval(crousalUpperTimer);
  crousalUpperTimer = setInterval(crousalUpperAutoSlide, 8000);
}

function crousalUpperSlideFun(n) {
  let i;
  for (i = 0; i < crousalUpperMyslide.length; i++) {
    crousalUpperMyslide[i].style.display = "none";
  }
  for (i = 0; i < crousalUpperDot.length; i++) {
    crousalUpperDot[i].className = crousalUpperDot[i].className.replace(
      " crousalUpper-active",
      ""
    );
  }
  if (n > crousalUpperMyslide.length) {
    crousalUpperCounter = 1;
  }
  if (n < 1) {
    crousalUpperCounter = crousalUpperMyslide.length;
  }
  crousalUpperMyslide[crousalUpperCounter - 1].style.display = "block";
  crousalUpperDot[crousalUpperCounter - 1].className += " crousalUpper-active";
}
