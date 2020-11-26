function fnScrollTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}
 function menuScroll() {
            const menu = document.getElementById('menu');
          
            let prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                const currentScrollPos = window.pageYOffset;
             
                
                if (menu) {
                    if (menu.style.top !== "0px" && prevScrollpos > currentScrollPos) {
                        menu.style.top = "0px";
                        menu.style.position = "absolute";
                    }
                    if (
                        menu.style.top !== "1px" &&
                        prevScrollpos < currentScrollPos &&
                        currentScrollPos > 2
                    ) {
                        menu.style.top = "1px";
                        menu.style.position = "fixed";
                    }
                    prevScrollpos = currentScrollPos;
                }
            };
        }
        menuScroll();
var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1.61,
      centeredSlides: true,
        spaceBetween: 30,
       loop: true,
      pagination: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
      ]);
    });
    document.querySelector('.prepend-slide').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
    });
    document.querySelector('.append-slide').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
    });
    document.querySelector('.append-2-slides').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
        '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
      ]);
    });

