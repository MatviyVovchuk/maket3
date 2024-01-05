// MENU BURGER

document.querySelector('.menu-burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.menu-nav-ul').classList.toggle('open');
});

// SLIDER

$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
        easing:'_linear',
        infinite:true,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:1000,

    });
});