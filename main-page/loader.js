import imagesLoaded from "https://cdn.skypack.dev/imagesloaded";
import { navBar } from "../navbar.js";
import { heroAnimation } from "./heroAnimation.js";

export function loader() {
  gsap.set("body", { overflow: "hidden" });
  gsap.set(".loader-wrap", { display: "flex" });

  //indicator
  const start = performance.now();
  const imgLoad = new imagesLoaded(
    "body",
    { background: true },
    onImagesLoaded
  );
  const numImages = imgLoad.images.length;

  imgLoad.on("progress", function (instance, image) {
    const progress = instance.progressedCount / numImages;

    document.querySelector(".loader-percent").textContent = `${Math.round(
      progress * 100
    )} %`;

    // gsap loader animation shows progress of images loading
    gsap.to(".progress-bar", {
      scaleX: progress,
      scaleY: progress,
      duration: progress * 2,
      ease: "power3.easeInOut",
    });
  });

  function onImagesLoaded() {
    const end = performance.now();

    const MIN_TIME = 1000;
    const duration = end - start;
    const remainingTime = Math.max(MIN_TIME - duration, 0);

    //loader text

    gsap.set("[loader-text]", {
      opacity: 1,
    });
    const loaderTextWords = new SplitType("[loader-text]", {
      type: "chars",
    });

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    // Перемешиваем буквы
    const shuffledChars = shuffleArray([...loaderTextWords.chars]);

    const loaderTl = gsap.timeline();
    loaderTl
      .from(shuffledChars, {
        opacity: 0,
        scale: 2,
        duration: 2,
        stagger: 0.015,
        // filter: "blur(5px)",
        ease: "power4.out",
      })
      .set("body", {
        overflow: "auto",
        onComplete: () => {
          window.scrollTo(0, 0);
        },
      })
      .to(".loader-wrap", {
        delay: remainingTime / 350,
        scale: 3,
        duration: 2,
        ease: "power4.inOut",
        transformOrigin: "center",
        opacity: 0,
      })
      .to(
        ".film-noise-overlay",
        {
          opacity: 0.3,
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => {
            heroAnimation();
            navBar();
          },
        },
        "-=2"
      )
      .to(
        ".film-noise-overlay",
        {
          opacity: 0.2,
          duration: 1,
          ease: "power4.inOut",
        },
        ">"
      );
  }
}
