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

// Button slider navigation
$(".slider-btn-prew").click(function () {
    $(".slider").slick("slickPrev");
});

$(".slider-btn-next").click(function () {
    $(".slider").slick("slickNext");
});

/* SUBCATEGORY DROPDOWN */

$(document).ready(function() {
    // Hide subcategory dropdowns by default
    $('.subcategory-dropdown').hide();

    // Add click event to category items
    $('.category-item').click(function(event) {
        event.preventDefault();

        // Toggle the display of the subcategory-dropdown with sliding animation
        $(this).find('.subcategory-dropdown').slideToggle();
    });
});