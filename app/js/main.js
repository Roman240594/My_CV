
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((document.documentElement.scrollTop > animItemOffset - animItemPoint) && document.documentElement.scrollTop < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollTop = document.documentElement.scrollTop,
            scrollLeft = document.documentElement.scrollLeft;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 400)
}

$('.slider__column').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplaySpeed: 1000,
            }
        },
    ]
});

const navBtn = document.querySelector('.nav');
const navList = document.querySelector('.nav__list')
const navSlash = document.querySelector('.nav__slash')

navBtn.onclick = function () {
    navList.classList.toggle('nav__list_active');
    navSlash.classList.toggle('nav__slash_active')
}

