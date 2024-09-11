var SLIDER = {
    slideBannerIndex: function() {
        if(typeof document.querySelector(".slider-banner__index") ==="undefined")
            return;
        const swiperBanner = new Swiper(".slider-banner__index", {
            slidesPerView: 1,
            disableOnInteraction: true,
            speed: 600,
            spaceBetween: 8,
            watchSlidesProgress: true,
            autoplay: {
                delay:6000,
                disableOnInteraction: false,
            },
            Loop:true,
        });
    },
    init: function () {
        SLIDER.slideBannerIndex();
    },
};
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function () {
        SLIDER.init();
    }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
const toggleButton = document.getElementById('toggleButton');
const content = document.getElementById('content');

toggleButton.addEventListener('click', () => {
    content.classList.toggle('hihi');
});
});