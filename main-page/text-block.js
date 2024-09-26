export function textBlock() {
  document.addEventListener("DOMContentLoaded", function () {
    // select static and aniamted elements
    const greatAnimated = document.querySelector("#great-animated");
    const greatStatic = document.querySelector("#great-static");
    const ofAnimated = document.querySelector("#of-animated");
    const ofStatic = document.querySelector("#of-static");
    const accomplishmentsAnimated = document.querySelector(
      "#accomplishments-animated"
    );
    const accomplishmentsStatic = document.querySelector(
      "#accomplishments-static"
    );
    const womanAnimated = document.querySelector("#woman-animated");
    const womanStatic = document.querySelector("#woman-static");

    // set the elements that will animate positions to same location as
    // their static partners
    function matchLocation(staticEl, animatedEl) {
      let boundsRel = staticEl.getBoundingClientRect();
      let boundsAbs = animatedEl.getBoundingClientRect();

      gsap.set(animatedEl, {
        x: "+=" + (boundsRel.left - boundsAbs.left),
        y: "+=" + (boundsRel.top - boundsAbs.top),
      });
    }

    // set positions
    matchLocation(greatStatic, greatAnimated);
    matchLocation(accomplishmentsStatic, accomplishmentsAnimated);
    matchLocation(womanStatic, womanAnimated);
    matchLocation(ofStatic, ofAnimated);

    // hide static elments, make animated elements visible.
    // avoids flashing of content
    gsap.set(greatAnimated, { visibility: "visible" });
    gsap.set(accomplishmentsAnimated, { visibility: "visible" });
    gsap.set(ofAnimated, { visibility: "visible" });
    gsap.set(womanAnimated, { visibility: "visible" });
    gsap.set(greatStatic, { visibility: "hidden" });
    gsap.set(accomplishmentsStatic, { visibility: "hidden" });
    gsap.set(ofStatic, { visibility: "hidden" });
    gsap.set(womanStatic, { visibility: "hidden" });

    // declare a timeline outside createTimeline scope
    // so we can access it in our resize function
    let tl;

    // splite the text into words as spans
    const textBlock = new SplitType("#paragraph-main", {
      types: "words",
    });

    function createTimeline() {
      // if a timeline exists, save its progress and kill it
      let progress = tl ? tl.progress() : 0;
      tl && tl.progress(0).kill();

      // create our timeline
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".text-block_scroll-track",
          start: "top top", // when top of trigger div is at top of viewport
          end: "bottom bottom", // when bottom of trigger div is at bottom of viewport
          scrub: 1, // link to scroll
        },
      });

      // create the timeline
      tl.to(textBlock.words, {
        // whooshing words
        opacity: 0,
        rotationZ: 30,
        rotationX: 40,
        yPercent: -300,
        xPercent: 100,
        stagger: 0.05,
        //   filter: "blur(40px)",
      })
        // start sending animated text to its original position in x direction
        .to(
          [greatAnimated, accomplishmentsAnimated, womanAnimated, ofAnimated],
          {
            x: 0,
            duration: 2,
          }
        )
        // start aniamting in the y direction
        // adding ease to this creates nice curved motion.
        // https://codepen.io/snorkltv/pen/dyoxXaQ
        .to(
          [greatAnimated, accomplishmentsAnimated, womanAnimated, ofAnimated],
          { y: 0, ease: "sine.in", duration: 1 },
          ">-1" // 1 second from end of previous to
        );

      // new tween created with updated location, set progress.
      tl.progress(progress);
    }
    // create timeline on initial load.
    createTimeline();

    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Вызов функции matchLocation для обновления расположения объектов
      matchLocation(greatStatic, greatAnimated);
      matchLocation(accomplishmentsStatic, accomplishmentsAnimated);
      matchLocation(womanStatic, womanAnimated);
      matchLocation(ofStatic, ofAnimated);
    }

    window.addEventListener("resize", handleResize);
  });
}
