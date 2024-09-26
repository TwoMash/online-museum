export function heroBanner() {
  const images = gsap.utils.toArray(".hero-readers_image");
  if (images.length > 0) {
    document.addEventListener("DOMContentLoaded", () => {
      images.forEach((image, index) => {
        gsap.from(image, {
          x: `${(Math.random() - 0.5) * 100}vw`,
          y: "100vh",
          rotate: `${Math.random() * 90}deg`,
          duration: 2,
          ease: "power2.out",
          delay: index * 0.35,
          onComplete: () => {
            //   mousemove = true;
            gsap.to(".hero-readers_image-wrapper", {
              duration: 2,
              ease: "power2.out",
              opacity: 0.2,
              delay: images.length * 0.35,
            });
            gsap.to(".hero-readers_header-wrapper", {
              duration: 2,
              ease: "power2.out",
              opacity: 1,
              delay: images.length * 0.35,
            });
          },
        });
      });
    });

    images.forEach((image, index) => {
      gsap.to(image, {
        x: `${(Math.random() - 0.5) * 100}vw`,
        y: `${(Math.random() + 1) * 70}vh`,
        rotate: `${Math.random() * 20}deg`,
        scale: Math.random() / 3,
        scrollTrigger: {
          trigger: ".readers-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  } else {
    gsap.to(".hero-readers_header-wrapper", {
      duration: 2,
      ease: "power2.out",
      opacity: 1,
      delay: images.length * 0.35,
    });
  }
}
