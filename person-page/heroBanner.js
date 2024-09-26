export function heroBanner() {
  const photosFromCollection = gsap.utils.toArray(
    "[data-person-hero-image-wrapper]"
  );
  let lastIndex = 0;
  let prevIndex = 1;
  let prevPrevIndex = 2;

  function animateRandomPhoto() {
    
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * photosFromCollection.length);
    } while (
      randomIndex === lastIndex ||
      randomIndex === prevIndex ||
      randomIndex === prevPrevIndex
    );
    prevPrevIndex = prevIndex;
    prevIndex = lastIndex;
    lastIndex = randomIndex;
    const photo = photosFromCollection[randomIndex];
    // }
    const tl = gsap.timeline({
      repeat: 0,
    });

    tl.from(photo, {
      x: Math.random() * 500 - 250,
      y: Math.random() * 500 - 250,
      rotateZ: Math.random() * 45,
      scale: 0.1,
      opacity: 0,
      duration: Math.random() * 2 + 3,
      onComplete: animateRandomPhoto,
    })
      .to(photo, {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 0.5,
        rotateZ: Math.random() * 45,
        duration: Math.random() * 2 + 3,
        ease: "none",
      })
      .to(photo, {
        x: Math.random() * 500 - 250,
        y: Math.random() * 500 - 250,
        rotateZ: Math.random() * 45,
        opacity: 0,
        duration: Math.random() * 3 + 3,
        ease: "none",
      });
  }
  animateRandomPhoto();
}
