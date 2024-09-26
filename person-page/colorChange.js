export function colorChange() {
  gsap.to(document.body, {
    backgroundColor: "white",
    color: "black",
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "[data-color='light']",
      start: "top center",
      endTrigger: "[data-color='dark']",
      end: "top center",
      toggleActions: "play reverse play reverse",
      onEnter: () => {
        gsap.to("[tmplayer-init]", {
          filter: "invert(1)",
        });
      },
      onLeave: () => {
        gsap.to("[tmplayer-init]", {
          filter: "invert(0)",
        });
      },
      onEnterBack: () => {
        gsap.to("[tmplayer-init]", {
          filter: "invert(1)",
        });
      },
      onLeaveBack: () => {
        gsap.to("[tmplayer-init]", {
          filter: "invert(0)",
        });
      },
    },
  });
}
