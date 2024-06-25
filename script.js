function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      //it's a default property
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          // grow++;
          // console.log(grow);
          h5timer.innerHTML = grow++;
        } else {
          // grow=100
          // console.log(grow)
          h5timer.innerHTML = grow;
        }
      }, 50);
    },
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  // tl.to("#line1-part1");

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 0,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.6,
    ease: Power4,
  });

  tl.to("#loader", {
    display: "none",
  });

  tl.from("#nav", {
    opacity: 0,
  });

  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 140,
    stagger: 0.2,
  });
}
loadingAnimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
      ease: "back.out(1.7)",
    });
  });
  Shery.makeMagnet("#nav-part2 h4", {});
}
// cursorAnimation();

