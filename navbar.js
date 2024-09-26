export function navBar() {
  //NavbarReveal
  document.querySelector(".nav-bar").style.top = "0";

  //Burger
  const burger = document.querySelector(".menu-button");
  const fullMenu = document.querySelector(".menu-full_wrapper");
  const anchors = document.querySelectorAll(".menu-full_anchor-text");

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    fullMenu.classList.toggle("is-active");
    document.body.classList.toggle("no-scroll");
  });

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      burger.classList.remove("is-active");
      fullMenu.classList.remove("is-active");
      document.body.classList.remove("no-scroll");
    });
  });

  //Audio
  const audioURL = document.querySelector(".audio-url").textContent;

  const musicButton = document.querySelector(".music-switch");

  const audio = new Audio(audioURL);

  audio.loop = true;
  audio.volume = 0.35;
  document.body.addEventListener("click", (e) => {
    if (audio.paused && audio.currentTime === 0) {
      audio.play();
      musicButton.classList.add("is-active");
      handleAnimateMusicLevels();
    } else if (e.target.classList.contains("music-switch") && !audio.paused) {
      audio.pause();
      musicButton.classList.remove("is-active");
      handleAnimateMusicLevels();
    } else if (e.target.classList.contains("music-switch") && audio.paused) {
      audio.play();
      musicButton.classList.add("is-active");
      handleAnimateMusicLevels();
    }
  });

  function animateMusicLevels() {
    if (document.querySelector(".is-active .music-levels")) {
      gsap.to(".is-active .music-levels", {
        height: () => Math.random() * 5,
        duration: 0.35,
        onComplete: animateMusicLevels,
      });
    }
  }

  function handleAnimateMusicLevels() {
    if (musicButton.classList.contains("is-active")) {
      animateMusicLevels();
    }
  }
}
