export function hobbyImage() {
  const hobbyImages = document.querySelectorAll("[hobby-image]");
  let currentIndex = 0;

  function cycleImages() {
    hobbyImages.forEach((image, index) => {
      if (index === currentIndex) {
        image.style.width = "70vw";
      } else {
        image.style.width = "10vw";
      }
    });

    currentIndex = (currentIndex + 1) % hobbyImages.length;
  }

  setInterval(cycleImages, 5000);
}
