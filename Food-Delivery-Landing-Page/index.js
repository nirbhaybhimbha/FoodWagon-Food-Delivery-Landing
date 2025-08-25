// Renposive toggle Manu 

const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// jQury slider 
$(document).ready(function () {
    $('.items-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false, // Disable default arrows
        autoplay: true, // Enable auto-slide
        autoplaySpeed: 2000, // Set interval to 2 seconds (2000 milliseconds)
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    });

    // Custom navigation buttons
    $('.custom-prev').on('click', function () {
        $('.items-slider').slick('slickPrev');
    });

    $('.custom-next').on('click', function () {
        $('.items-slider').slick('slickNext');
    });
});


// jQuery second slider 
$(document).ready(function () {
    const $foodSlider = $('.custom-food-slider');

    $foodSlider.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true, // Enable auto slide
        autoplaySpeed: 2000, // Time between slides in milliseconds (2000 = 2 seconds)
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    });

    $('#food-next').click(function () {
        $foodSlider.slick('slickNext');
    });

    $('#food-prev').click(function () {
        $foodSlider.slick('slickPrev');
    });
});
