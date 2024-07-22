gsap.registerPlugin(ScrollTrigger);

function locomotiveAnimation() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

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
      }, 33);
    },
  });
  tl.to(".line h2", {
    animationName: "loaderanime",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 0,
  });

  // MAIN
  tl.from("#page1", {
    delay: 0.2,
    y: 1200,
    // opacity: 0,
    duration: 0.8,
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
  tl.from("#hero1,#page2 ", {
    opacity: 0,

  },"-=1");//ye phle chlaega timeline ko 
}

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
locomotiveAnimation();
loadingAnimation();
cursorAnimation();
