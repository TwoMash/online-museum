import { navBar } from "../navbar.js";
import { heroBanner } from "./heroBanner.js";
import { firstHorizontalScroll } from "./firstHorizontal.js";
import { secondHorizontalScroll } from "./secondHorizontal.js";
import { vertical } from "./vertical.js";
import { progressBar } from "./progressBar.js";
import { colorChange } from "./colorChange.js";
import { utilityAnimation } from "../utilityAnimation.js";
import { swiper } from "./swiper.js";
import { rotateScreen } from "../rotateScreen.js";

navBar();
heroBanner();
firstHorizontalScroll();
secondHorizontalScroll();
vertical();
progressBar();
colorChange();
utilityAnimation();
swiper();
rotateScreen();

// AutoAlpha
document.body.style.opacity = 1;
