let init = false;

function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiper = new Swiper(".swiper", {
                direction: "horizontal",
                slidesPerView: "auto",
                centeredSlides: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}

swiperCard();

window.addEventListener("resize", swiperCard);