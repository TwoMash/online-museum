import { progressBarText } from "./progressBar.js";

export function firstHorizontalScroll() {
  //1st horizontal scroll
  const firstHorizontalScrollContainer = document.querySelector(
    ".first-horizontal-scroll-container"
  );
  const firstHorizontalScrollSections = gsap.utils.toArray(
    firstHorizontalScrollContainer.querySelectorAll("section")
  );

  firstHorizontalScrollSections[
    firstHorizontalScrollSections.length - 1
  ].style.minWidth = "100vw";

  const totalWidth = firstHorizontalScrollSections
    .slice(0, -1)
    .reduce((acc, section) => {
      return acc + section.offsetWidth;
    }, 0);

  const firstHorizontalAnimation = gsap.to(firstHorizontalScrollContainer, {
    x: -totalWidth,
    ease: "none",
    duration: 1,
    scrollTrigger: {
      trigger: firstHorizontalScrollContainer,
      start: "top top",
      end: `+=${totalWidth * 1.5}`,
      pin: true,
      scrub: 0.3,
    },
  });

  // Progress bar text
  function progresHorizontalBarText(section) {
    gsap.fromTo(
      ".time-line_label-name-text",
      {
        filter: "blur(15px)",
      },
      {
        filter: "blur(0px)",
        duration: 3,
        ease: "power4.out",
      }
    );
    const prevText = section.getAttribute("data-timeline-prev-name");
    const presentText = section.getAttribute("data-timeline-present-name");
    const nextText = section.getAttribute("data-timeline-next-name");
    progressBarText(prevText, presentText, nextText);
  }

  firstHorizontalScrollSections.forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "20% center",
        end: "80% center",
        containerAnimation: firstHorizontalAnimation,
        onEnter: () => {
          progresHorizontalBarText(section);
        },
        onEnterBack: () => {
          progresHorizontalBarText(section);
        },
      },
    });
  });

  //   // Motion path animation
  //   const pathHeadings = document.querySelectorAll("[data-motion-path-heading]");
  //   pathHeadings.forEach((pathHeading, word) => {
  //     const alongPathHeadings = new SplitType(pathHeading, {
  //       type: "chars",
  //     });
  //     const alongPathChars = alongPathHeadings.chars;
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: pathHeading,
  //         start: `left right`,
  //         end: "right center",
  //         containerAnimation: firstHorizontalAnimation,
  //         scrub: 1,
  //       },
  //     });
  //     const dur = 5;
  //     const each = dur * 0.015;
  //     function animateLetters() {
  //       let progress = tl.progress();
  //       tl.totalProgress(0).clear();
  //       alongPathChars.forEach((char, i) => {
  //         let timeOffset = i * each,
  //           startTime = dur / 2 + timeOffset,
  //           pathOffset = startTime / dur;
  //         tl.to(
  //           char,
  //           {
  //             motionPath: {
  //               path: `#data-motion-path-${word + 1}`,
  //               align: `#data-motion-path-${word + 1}`,
  //               alignOrigin: [0.5, 0.5],
  //               autoRotate: true,
  //               start: pathOffset,
  //               end: 1 + pathOffset,
  //             },
  //             immediateRender: true,
  //             ease: "none",
  //           },
  //           0
  //         );
  //       });
  //       tl.progress(progress);
  //     }
  //     animateLetters();
  //   });

  // Words reveal animation
  const wordsReveal = document.querySelectorAll("[data-words-reveal]");
  const wordRevealWidth = document.querySelector(
    ".early-career-heading"
  ).offsetWidth;

  wordsReveal.forEach((word, index) => {
    gsap.from(word, {
      //   filter: "blur(50px)",
      opacity: 0,
      ease: "power4.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: word,
        start: "left 90%",
        end: `right 80%`,
        containerAnimation: firstHorizontalAnimation,
        toggleActions: "play none none reverse",
      },
    });
  });

  const photoReveal = document.querySelectorAll(
    "[data-early-career_headings-media]"
  );
  photoReveal.forEach((photo, index) => {
    gsap.fromTo(
      photo,
      {
        x: `${index * (Math.random() - 0.5) * 40}vw`,
        y: `${index * (Math.random() - 0.5) * 100}vh`,
        rotateZ: `${index * (Math.random() - 0.5) * 20}deg`,
      },
      {
        x: "0%",
        y: "0%",
        rotateZ: `${index * (Math.random() - 0.5) * 10}deg`,
        ease: "power4.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: "[early-career-heading]",
          start: "left 50%",
          end: "center center",
          scrub: 1,
          toggleActions: "play none reverse restart",
          containerAnimation: firstHorizontalAnimation,
        },
      }
    );
  });

  //Early career animation
  gsap.from("[data-left-image-wrapper='horizontal']", {
    x: "50vw",
    rotateZ: Math.random() * 45,
    opacity: 0,
    ease: "power4.out",
    duration: 1,
    scrollTrigger: {
      trigger: "[data-left-image-wrapper='horizontal']",
      start: "left 90%",
      end: "left 60%",
      scrub: 1,
      toggleActions: "play none reverse restart",
      containerAnimation: firstHorizontalAnimation,
    },
  });
  gsap.from("[data-second-content-block='horizontal']", {
    x: "40vw",
    scrollTrigger: {
      trigger: ".early-career",
      start: "left 30%",
      end: "center center",
      scrub: true,
      toggleActions: "play none reverse restart",
      containerAnimation: firstHorizontalAnimation,
    },
  });

  // photos from hero
  gsap.to("[data-person-hero-photos-wrapper]", {
    x: "30vw",
    ease: "power4.out",
    scrollTrigger: {
      trigger: firstHorizontalScrollSections[1],
      start: "left 90%",
      end: "+=120%",
      containerAnimation: firstHorizontalAnimation,
      scrub: 4,
    },
  });

  //1st Typography animation function
  const firstAnimatedHeading = document.querySelectorAll(
    "[heading-animated='horizontal']"
  );
  const firstAnimatedParagraph = document.querySelectorAll(
    "[paragraph-animated='horizontal']"
  );
  firstAnimatedHeading.forEach((heading) => {
    const personHeadings = new SplitType(heading, {
      type: "chars",
    });
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    // Перемешиваем буквы
    const shuffledChars = shuffleArray([...personHeadings.chars]);
    gsap.from(shuffledChars, {
      opacity: 0,
      scale: 2,
      duration: 3,
      stagger: 0.015,
      //   filter: "blur(5px)",
      ease: "power4.out",
      scrollTrigger: {
        trigger: heading,
        start: "left 80%",
        containerAnimation: firstHorizontalAnimation,
        toggleActions: "play none none none",
      },
    });
  });
  firstAnimatedParagraph.forEach((paragraph) => {
    gsap.from(paragraph, {
      opacity: 0,
      duration: 1,
      ease: "power4.in",
      scrollTrigger: {
        trigger: paragraph,
        start: "left 90%",
        containerAnimation: firstHorizontalAnimation,
        toggleActions: "play none none none",
      },
    });
  });
}
