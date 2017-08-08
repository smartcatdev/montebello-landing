(function ($) {
    'use strict';

    // :: Index of jQuery Active Code ::

    // :: 1.0 Welcome Slider Active Code
    // :: 2.0 Testimonials Slider Active Code
    // :: 3.0 Product Slider Active Code
    // :: 4.0 Meanmenu Active Code
    // :: 5.0 Onepage Nav Active Code
    // :: 6.0 Magnific-Popup Video Active Code
    // :: 7.0 ScrollUp Active Code
    // :: 8.0 MatchHeight Active Code
    // :: 9.0 YouTube Video Active Code
    // :: 10.0 wow active code
    // :: 11.0 PreventDefault a Click
    // :: 12.0 Hover Effect Active Code
    // :: 13.0 Sticky Active Code
    // :: 14.0 Preloader active code

    // :: 1.0 Welcome Slider Active Code
    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="icofont icofont-swoosh-left"></i>', '<i class="icofont icofont-swoosh-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 500,
            autoplayHoverPause: false
        });
    }

    var owl = $('.welcome_slides');
    owl.owlCarousel();
    owl.on('translate.owl.carousel', function (event) {
        $('.owl-item .single_slide .welcome_text_area h2').removeClass('animated').hide();
        $('.owl-item .single_slide .welcome_text_area p').removeClass('animated').hide();
        $('.owl-item .single_slide .welcome_text_area .btn').removeClass('animated').hide();
    })
    owl.on('translated.owl.carousel', function (event) {
        $('.owl-item.active .single_slide .welcome_text_area h2').addClass('animated custom_slideInUp').show();
        $('.owl-item.active .single_slide .welcome_text_area p').addClass('animated custom_slideInUp_2').show();
        $('.owl-item.active .single_slide .welcome_text_area .btn').addClass('animated custom_slideInUp_btn_1').show();
    })

    // :: 2.0 Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".testimonials").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
    }

    // :: 3.0 Product Slider Active Code
    if ($.fn.owlCarousel) {
        $(".product_collection").owlCarousel({
            items: 4,
            margin: 15,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 700,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }

    // :: 4.0 Meanmenu Active Code
    $('.main_menu_area .mainmenu nav').meanmenu();

    // :: 5.0 Onepage Nav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'current_page_item',
            changeHash: false,
            scrollSpeed: 1500,
            scrollThreshold: 0.5,
            filter: '',
            easing: 'linear',
            begin: function () {},
            end: function () {},
            scrollChange: function ($currentListItem) {}
        });
    }

    // :: 6.0 Magnific-Popup Video Active Code
    $('.video_btn').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false
    });

    $('.product_big_thumb').magnificPopup({
        type: 'image'
    });

    // :: 7.0 ScrollUp Active Code
    $.scrollUp({
        scrollName: 'scrollUp',
        scrollDistance: 450,
        scrollFrom: 'top',
        scrollSpeed: 500,
        easingType: 'linear',
        animation: 'fade',
        animationSpeed: 200,
        scrollTrigger: false,
        scrollTarget: false,
        scrollText: '<i class="icofont icofont-long-arrow-up"></i>',
        scrollTitle: false,
        scrollImg: false,
        activeOverlay: false,
        zIndex: 2147483647
    });

    // :: 8.0 MatchHeight Active Code
    $('.item').matchHeight();

    // :: 9.0 YouTube Video Active Code
//    if ($.fn.mb_YTPlayer) {
//        $('.player').mb_YTPlayer();
//    }

    // :: 10.0 wow active code
    new WOW().init();

    // :: 11.0 PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 12.0 Hover Effect Active Code
    $('.single_benifits').on('mouseenter', function () {
        $('.single_benifits').removeClass('active');
        $(this).addClass('active');
    });

    // :: 13.0 Sticky Active Code
//    $(window).on('scroll', function () {
//        if ($(window).scrollTop() > 300) {
//            $('.main_header_area').addClass('sticky slideInDown');
//        } else {
//            $('.main_header_area').removeClass('sticky slideInDown');
//        }
//    });

    // :: 14.0 Preloader active code
    $(window).load(function () {
//        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);