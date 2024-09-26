export function footerAnimation() {
  const footerAuthor = gsap.utils.toArray("[class*='footer-author']");
  footerAuthor.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      rotateX: 40,
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
        end: "top 85%",
        scrub: true,
      },
    });
  });

  //Footer cursor send
  const footerSendTl = gsap.timeline({
    repeat: 0,
    paused: true,
  });

  const footerSend = document.querySelector(".footer-wrapper");
  footerSend.addEventListener("mouseenter", () => {
    footerSendTl
      .set(".cursor-center", {
        opacity: 0,
        duration: 0.2,
      })
      .to(".cursor-send", {
        opacity: 1,
        duration: 0.2,
      })
      .to(".cursor-border", {
        scale: 3,
        duration: 1,
      })
      .play();

    footerSend.addEventListener("mouseleave", () => {
      footerSendTl.reverse();
    });
  });
}
