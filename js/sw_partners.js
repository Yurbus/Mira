
const swiper_main = new Swiper(".mainSwiper", {
slidesPerView: 5,
grid: {
        rows: 2,
    },
    autoplay: {
        delay: 1500,
    },
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2, 
            grid: {
                rows: 2,
            }       
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            }
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            grid: {
                rows: 2,
            }
        },
        768: {
            slidesPerView: 5,
            grid: {
                rows: 2,
            }
        }
    }
});

const swiper_about = new Swiper(".aboutSwiper", {
    slidesPerView: 5,
    grid: {
        rows: 2,
    },
    autoplay: {
        delay: 1500,
    },
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2, 
            grid: {
                rows: 2,
            }       
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            }
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            grid: {
                rows: 2,
            }
        },
        768: {
            slidesPerView: 5,
            grid: {
                rows: 2,
            }
        }
    }
});


