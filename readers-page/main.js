import { navBar } from "../navbar.js";
import { heroBanner } from "./heroBanner.js";
import { utilityAnimation } from "../utilityAnimation.js";
import { vertical } from "../person-page/vertical.js";
import { swiper, swiperCards } from "../person-page/swiper.js";
import { photoChanger } from "./photoChanger.js";
import { photoScale } from "./photo-scale.js";
import { hobbyImage } from "./hobbyImage.js";
import { stickyBlocks } from "./stickyBlocks.js";

navBar();
heroBanner();
utilityAnimation();
vertical();
swiper();
photoChanger();
photoScale();
swiperCards();
hobbyImage();
stickyBlocks();

// AutoAlpha
document.body.style.opacity = 1;
