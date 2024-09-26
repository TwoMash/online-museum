export function photoScale() {
  const workImage = document.querySelector("[work-image]");

  if (workImage) {
    gsap.from(workImage, {
      scale: 1.75,
      y: "-50vh",
      scrollTrigger: {
        trigger: "[work_paragraph]",
        start: "top bottom",
        end: "top 75%",
        scrub: 1,
      },
    });
  }
}
