export function stickyBlocks() {
  const stickyText = new SplitType("[data-sticky]", {
    type: "chars",
  });

  gsap.from(stickyText.chars, {
    y: -100,
    zRotate: 100,
    opacity: 0,
    scale: 2,
    stagger: 0.015,
    filter: "blur(5px)",
    ease: "power4.out",
    scrollTrigger: {
      trigger: "[data-sticky-wrapper]",
      start: "top center",
      end: "bottom bottom",
      scrub: true,
    },
  });
}
