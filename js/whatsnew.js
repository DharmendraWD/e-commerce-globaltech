function homePageAnimation() {
  gsap.set(".slidesm", { scale: 5 });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });

  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  )
    .to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )
    .to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    )
    .to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );
}
function realPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottm",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power4,
  });
}
function teamAnimation() {
  document.querySelectorAll(".listelem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });

    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}

function capsuleAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}

document.querySelectorAll(".section").forEach(function (e) {
  ScrollTrigger.create({
    trigger: e,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: function () {
      document.body.setAttribute("theme", e.dataset.color);
    },
    onEnterBack: function () {
      document.body.setAttribute("theme", e.dataset.color);
    },
  });
});

homePageAnimation();
realPageAnimation();
teamAnimation();
capsuleAnimation()(
  //  locomotive js
  function () {
    const locomotiveScroll = new LocomotiveScroll();
  }
)();
