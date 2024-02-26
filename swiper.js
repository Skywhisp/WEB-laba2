document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      swiper.slideNext();
    } else if (e.key === "ArrowLeft") {
      swiper.slidePrev();
    }
  });
});
