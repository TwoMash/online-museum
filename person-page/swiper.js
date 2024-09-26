import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export function swiper() {
  const swiperCards = new Swiper(".swiper.is-product-03", {
    direction: "horizontal",
    speed: 1000,
    effect: "coverflow",
    coverflowEffect: {
      scale: 0.85,
      slideShadows: false,
    },
    loop: true,
    speed: 300,
    centeredSlides: true,
    spaceBetween: 32,
    breakpoints: {
      1920: {
        slidesPerView: 3,
      },
      1140: {
        slidesPerView: 1,
      },
      550: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
    freeMode: false,
    navigation: {
      nextEl: ".product_03_swiper-button-next",
      prevEl: ".product_03_swiper-button-prev",
    },
  });
}

export function swiperCards() {
  console.log("swiperCards");
  const swiperCards2 = new Swiper(".swiper.conference", {
    direction: "horizontal",
    effect: "cards",
    cardsEffect: {
      perSlideOffset: 4,
      perSlideRotate: 6,
      slideShadows: false,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 2000,
    freeMode: false,
  });
}
