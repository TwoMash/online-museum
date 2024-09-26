export function photoChanger() {
  const photoPlace = document.querySelector("[img-place]");
  const photoSource = document.querySelectorAll("[img-source]");

  photoSource.forEach((text) => {
    gsap.to(text, {
      scrollTrigger: {
        trigger: text,
        start: "top 90%",
        end: "bottom 90%",
        onEnter: () => {
          const img = text.getAttribute("img-source");
          gsap.to(photoPlace, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              photoPlace.style.backgroundImage = `url(${img})`;
              gsap.to(photoPlace, { opacity: 1, duration: 0.5 });
            },
          });
        },
        onEnterBack: () => {
          const img = text.getAttribute("img-source");
          gsap.to(photoPlace, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              photoPlace.style.backgroundImage = `url(${img})`;
              gsap.to(photoPlace, { opacity: 1, duration: 0.5 });
            },
          });
        },
      },
    });
  });
}
