import { progressBarText } from "./progressBar.js";

export function secondHorizontalScroll() {
  //   //2nd horizontal scroll
  //   const secondHorizontalScrollContainer = document.querySelector(
  //     ".second-horizontal-scroll-container"
  //   );
  //   const secondHorizontalScrollSections = gsap.utils.toArray(
  //     secondHorizontalScrollContainer.querySelectorAll("section")
  //   );
  //   const totalWidth = secondHorizontalScrollSections
  //     .slice(0, -1)
  //     .reduce((acc, section) => {
  //       return acc + section.offsetWidth;
  //     }, 0);
  //   const secondHorizontalAnimation = gsap.to(secondHorizontalScrollContainer, {
  //     x: -totalWidth,
  //     ease: "none",
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: secondHorizontalScrollContainer,
  //       start: "top top",
  //       end: `+=${totalWidth * 1.5}`,
  //       pin: true,
  //       scrub: 0.3,
  //     },
  //   });
  //   // Progress bar text
  //   secondHorizontalScrollSections.forEach((section) => {
  //     gsap.to(section, {
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "20% center",
  //         end: "80% center",
  //         containerAnimation: secondHorizontalAnimation,
  //         onEnter: () => {
  //           gsap.from(".time-line_label-name-text", {
  //             filter: "blur(15px)",
  //             duration: 3,
  //             ease: "power4.out",
  //           });
  //           const prevText = section.getAttribute("data-timeline-prev-name");
  //           const presentText = section.getAttribute(
  //             "data-timeline-present-name"
  //           );
  //           const nextText = section.getAttribute("data-timeline-next-name");
  //           progressBarText(prevText, presentText, nextText);
  //         },
  //         onEnterBack: () => {
  //           gsap.from(".time-line_label-name-text", {
  //             filter: "blur(15px)",
  //             duration: 3,
  //             ease: "power4.out",
  //           });
  //           const prevText = section.getAttribute("data-timeline-prev-name");
  //           const presentText = section.getAttribute(
  //             "data-timeline-present-name"
  //           );
  //           const nextText = section.getAttribute("data-timeline-next-name");
  //           progressBarText(prevText, presentText, nextText);
  //         },
  //       },
  //     });
  //   });
  //   //nateble
  //   //   gsap.to("[data-photo-in-bottom]", {
  //   //     x: "100vw",
  //   //     rotateZ: Math.random() * 45,
  //   //     opacity: 0,
  //   //     ease: "power4.out",
  //   //     duration: 1,
  //   //     scrollTrigger: {
  //   //       trigger: "[data-section-with-bottom-photo]",
  //   //       start: "right 90%",
  //   //       end: "right 30%",
  //   //       scrub: 1,
  //   //       toggleActions: "play none reverse play",
  //   //       containerAnimation: secondHorizontalAnimation,
  //   //     },
  //   //   });
  //   //   gsap.to("[data-photo-in-bottom]", {
  //   //     x: `${
  //   //       document.querySelector("[data-section-from-bottom-photo]").clientWidth *
  //   //       0.8
  //   //     }`,
  //   //     rotateZ: Math.random() * 45,
  //   //     opacity: 1,
  //   //     ease: "power4.out",
  //   //     duration: 1,
  //   //     scrollTrigger: {
  //   //       trigger: "[data-section-from-bottom-photo]",
  //   //       start: "left center",
  //   //       end: "left left",
  //   //       scrub: 1,
  //   //       toggleActions: "play none reverse play",
  //   //       containerAnimation: secondHorizontalAnimation,
  //   //     },
  //   //   });
  //   //2nd horizontal typography animation
  //   const secondAnimatedHeading = document.querySelectorAll(
  //     "[second-heading-animated]"
  //   );
  //   const secondAnimatedParagraph = document.querySelectorAll(
  //     "[second-paragraph-animated]"
  //   );
  //   secondAnimatedHeading.forEach((heading) => {
  //     const personHeadings = new SplitType(heading, {
  //       type: "chars",
  //     });
  //     function shuffleArray(array) {
  //       for (let i = array.length - 1; i > 0; i--) {
  //         const j = Math.floor(Math.random() * (i + 1));
  //         [array[i], array[j]] = [array[j], array[i]];
  //       }
  //       return array;
  //     }
  //     // Перемешиваем буквы
  //     const shuffledChars = shuffleArray([...personHeadings.chars]);
  //     gsap.from(shuffledChars, {
  //       opacity: 0,
  //       scale: 2,
  //       duration: 3,
  //       stagger: 0.015,
  //       filter: "blur(5px)",
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: heading,
  //         start: "left 80%",
  //         containerAnimation: secondHorizontalAnimation,
  //         toggleActions: "play none none none",
  //       },
  //     });
  //   });
  //   secondAnimatedParagraph.forEach((paragraph) => {
  //     gsap.from(paragraph, {
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power4.in",
  //       scrollTrigger: {
  //         trigger: paragraph,
  //         start: "left 80%",
  //         containerAnimation: secondHorizontalAnimation,
  //         toggleActions: "play none none none",
  //       },
  //     });
  //   });
}
