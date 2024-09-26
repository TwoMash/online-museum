import { utilityAnimation } from "../utilityAnimation.js";
import { navBar } from "../navbar.js";
import { loader } from "./loader.js";
import { textBlock } from "./text-block.js";
import { footerAnimation } from "./footer.js";
import { heroAnimation } from "./heroAnimation.js";
import { rotateScreen } from "../rotateScreen.js";

utilityAnimation();
navBar();
textBlock();
footerAnimation();
rotateScreen();

if (window.location.hash) {
  heroAnimation();
  const target = document.getElementById(window.location.hash.substring(1));
  if (target) {
    gsap.to(window, {
      scrollTo: target,
      duration: 1,
      onComplete: () => ScrollTrigger.refresh(),
    });
  }
} else {
  loader();
}
