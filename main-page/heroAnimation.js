export function heroAnimation() {
  //Hero Imgs
  const heroTopImages = gsap.utils.toArray(".hero-img.is-top");
  const heroRightTopImages = gsap.utils.toArray(".hero-img.is-right");
  const heroRightBottomImages = gsap.utils.toArray(".hero-img.is-right-bottom");
  const heroBottomImages = gsap.utils.toArray(".hero-img.is-bottom");
  const heroLeftBottomImages = gsap.utils.toArray(".hero-img.is-left");
  const heroLeftTopImages = gsap.utils.toArray(".hero-img.is-left-top");
  const heroImgs = document.querySelector(".imgs-wrapper");
  const heroContent = document.querySelector(".hero-content");
  let zIndex = 10000;

  function rotateAlongPath(elements, section) {
    // Hero Reveal

    gsap.to(heroImgs, {
      scale: 1,
      opacity: 1,
      duration: 3,
      ease: "power4.easeInOut",
    });
    gsap.to(heroContent, {
      scale: 1,
      opacity: 1,
      duration: 3,
      ease: "power4.easeInOut",
    });

    const mainTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
    });

    mainTimeline.set(
      elements,
      {
        motionPath: {
          start: section / 6,
          path: "#hero-path",
          align: "#hero-path",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        scale: 1,
        opacity: 0,
        rotateX: 50,
      },
      0
    );

    elements.forEach((element, index) => {
      const elementTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
      });

      elementTimeline
        .to(
          element,
          {
            motionPath: {
              start: section / 6,
              end: section / 6 + 0.1,
              path: "#hero-path",
              align: "#hero-path",
              autoRotate: true,
              alignOrigin: [0.5, 1],
            },
            duration: 4,
            opacity: 0.5,
            ease: "none",
            scale: 0.6,
          },
          0
        )
        .to(element, {
          scale: 0,
          opacity: 0,
          duration: 3 + Math.random() / 2,
          ease: "power1.in",
          rotateX: 90,
          rotateY: Math.random() * 60,
          motionPath: {
            path: [{ x: 0, y: 0 }],
            align: "self",
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
          },
          onComplete: function () {
            zIndex -= 1;
            element.style.zIndex = zIndex;
          },
        });
      mainTimeline.add(elementTimeline, index);

      //hero reveal
      mainTimeline.timeScale(8);
      gsap.to(mainTimeline, {
        timeScale: 1,
        duration: 3,
        ease: "power1.inOut",
      });
    });

    //Hero Leave
    gsap.to(".all-imgs-wrapper", {
      scale: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top",
        end: "center top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          mainTimeline.timeScale(1 + 15 * progress);
        },
        onComplete: () => {
          gsap.to(".all-imgs-wrapper", {
            display: "none",
          });
        },
      },
    });
  }

  rotateAlongPath(heroTopImages, 0);
  rotateAlongPath(heroRightTopImages, 1);
  rotateAlongPath(heroRightBottomImages, 2);
  rotateAlongPath(heroBottomImages, 3);
  rotateAlongPath(heroLeftBottomImages, 4);
  rotateAlongPath(heroLeftTopImages, 5);

  window.addEventListener("resize", rotateAlongPath());

  //Parallax
  window.addEventListener("mousemove", function (e) {
    const x = e.pageX / window.innerWidth - 0.5;
    const y = e.pageY / window.innerHeight - 0.5;
    heroImgs.style.transform = `translate3d(${x * 30}px, ${y * 30}px, 0)`;
    heroContent.style.transform = `translate3d(${x * 10}px, ${y * 60}px, 0)`;
  });
}
