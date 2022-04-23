import Swiper, { Navigation } from 'swiper'

const live = new Swiper('.liveSwiper', {
    modules: [Navigation],
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".live-next",
        prevEl: ".live-prev",
    },
    breakpoints: {
        478: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 5, 
        }
    }
});