export function utilityAnimation() {
  //Cursor
  const cursorBorder = document.querySelector(".cursor-border");
  const cursorCenter = document.querySelector(".cursor-center");
  const pageLinks = document.querySelectorAll("a");

  pageLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(cursorCenter, {
        scale: 5,
        duration: 1.5,
        ease: "power4.out",
      });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(cursorCenter, {
        scale: 1,
        duration: 1,
        ease: "power4.out",
      });
    });
  });

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursorBorder, {
      x: e.clientX - cursorBorder.offsetWidth / 2,
      y: e.clientY - cursorBorder.offsetHeight / 2,
      duration: 0.8,
      ease: "power1.out",
    });
    gsap.to(cursorCenter, {
      x: e.clientX - cursorCenter.offsetWidth / 2,
      y: e.clientY - cursorCenter.offsetHeight / 2,
      duration: 0.2,
      ease: "power4.out",
    });
  });

  gsap.to(".noises", {
    opacity: 1,
    duration: 3,
    ease: "power4.in",
  });
}
