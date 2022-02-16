$(function () {
    'use strict';

    // type js start
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });
    // type js end



    // menu fix start
    let menuOff = $('#menu').offset().top;

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop()

        if (scrolling > menuOff) {
            $('#menu').addClass('fix_menu')
        } else {
            $('#menu').removeClass('fix_menu')
        }
    });
    // menu fix end




    // back to top button start
    $('#bc_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000)
    });


    $(window).scroll(function () {
        let scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $('#bc_top').fadeIn()
        } else {
            $('#bc_top').fadeOut()
        }
    });
    // back to top button end





    // slider part start
    $('.instagram_img').slick({
        centerMode: false,
        leftMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    // slider part end




});