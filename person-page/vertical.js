import { progressBarText } from "./progressBar.js";

export function vertical() {
  //video block

  gsap.from("[data-video]", {
    height: 0,
    width: 0,
    scrollTrigger: {
      trigger: "[data-video]",
      start: "top 10vh",
      end: "+=100%",
      scrub: true,
    },
  });

  gsap.fromTo(
    "[data-video-animated-paragraph='on']",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 1,
      height: 0,
      width: 0,
      ease: "power4.in",
      scrollTrigger: {
        trigger: "[data-video-section-wrapper]",
        start: "top 10vh",
        end: "+=500",
        scrub: true,
      },
    }
  );

  //Early career animation
  gsap.from("[data-left-image-wrapper='vertical']", {
    x: "50vw",
    rotateZ: Math.random() * 45,
    opacity: 0,
    ease: "power4.out",
    duration: 1,
    scrollTrigger: {
      trigger: "[data-left-image-wrapper='vertical']",
      start: "top 90%",
      end: "top 60%",
      scrub: 1,
      toggleActions: "play none reverse restart",
    },
  });
  gsap.from("[data-second-content-block='vertical']", {
    x: "40vw",
    scrollTrigger: {
      trigger: ".early-career",
      start: "top 30%",
      end: "center center",
      scrub: true,
      toggleActions: "play none reverse restart",
    },
  });

  //recognition
  gsap.to("[data-photo-in-center]", {
    opacity: 0,
    rotateZ: Math.random() * 15,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "[data-photo-in-center]",
      start: "center center",
      scrub: true,
      end: "+=800",
      toggleActions: "play none reverse play",
    },
  });

  gsap.to("[data-video-in-center]", {
    opacity: 0,
    scale: 0.3,
    ease: "power4.out",
    zIndex: -1,
    scrollTrigger: {
      trigger: "[data-video-in-center]",
      start: "center 30%",
      scrub: true,
      end: "+=500",
      toggleActions: "play none reverse play",
    },
  });

  gsap.from("[data-photo-in-center-paragraphs-wrapper]", {
    height: 0,
    opacity: 0,
    duration: 1,
    ease: "power4.in",
    scrollTrigger: {
      trigger: "[data-section-photo-in-center]",
      start: "center center",
      end: "+=2000",
      scrub: 0.5,
      toggleActions: "play none reverse play",
    },
  });

  const personalLifeWrappers = gsap.utils.toArray("[data-multiimages-wrapper]");
  personalLifeWrappers.forEach((wrapper) => {
    const images = gsap.utils.toArray(
      wrapper.querySelectorAll(".personal-life_image")
    );
    images.forEach((image, index) => {
      gsap.from(image, {
        scale: 0.5 + (images.length - index - 1) * 0.1, // Уменьшаем от самого маленького к оригинальному размеру
        x: 100 * (index - images.length / 2),
        ease: "power4.in",
        scrollTrigger: {
          trigger: wrapper,
          start: "center 80%",
          end: "center 60%",
          scrub: 0.5,
          toggleActions: "play none reverse play",
        },
      });
    });
  });

  const personalLifeMainImage = document.querySelector(
    "[data-personal-life-single-images]"
  );

  gsap.fromTo(
    personalLifeMainImage,
    {
      opacity: 1,
      zIndex: 100,
      scale: 2,
      rotateZ: Math.random() * 40,
    },
    {
      scale: 1,
      opacity: 0.4,
      zIndex: -1,
      rotateZ: Math.random() * 15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: personalLifeMainImage,
        start: "top 95%",
        end: "top 30%",
        scrub: 4,
      },
    }
  );

  // Progress bar text
  const verticalScrollSections = gsap.utils.toArray(
    "section:not(.first-horizontal-scroll-container section)"
  );

  function progressVerticalBarText(section) {
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

  verticalScrollSections.forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "20% center",
        end: "80% center",
        onEnter: () => {
          progressVerticalBarText(section);
        },
        onEnterBack: () => {
          progressVerticalBarText(section);
        },
      },
    });
  });

  //vertical scroll typography animation
  const verticalAnimatedHeading = document.querySelectorAll(
    "[heading-animated='vertical']"
  );
  const verticalAnimatedParagraph = document.querySelectorAll(
    "[paragraph-animated='vertical']"
  );

  verticalAnimatedHeading.forEach((heading) => {
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
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  verticalAnimatedParagraph.forEach((paragraph) => {
    gsap.from(paragraph, {
      opacity: 0,
      duration: 1,
      ease: "power4.in",
      scrollTrigger: {
        trigger: paragraph,
        start: "top 65%",
        toggleActions: "play none none none",
      },
    });
  });
}
