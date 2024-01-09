/* MENU BURGER */

document.querySelector(".menu-burger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".menu-nav-ul").classList.toggle("open");
});

/* SLIDER */

$('.slider').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: '_linear',
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
});

// Button click functions
$(".slider-btn-prew").click(function () {
    $(".slider").slick("slickPrev");
});

$(".slider-btn-next").click(function () {
    $(".slider").slick("slickNext");
});
