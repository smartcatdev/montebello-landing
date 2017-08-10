jQuery(document).ready( function( $ ) {
   
    var viewport_height = $(window).height();
    $('#home.welcome_slider').height( viewport_height );
    $('#mobile-menu-panel').css( 'height', viewport_height + 'px !important' );
       
    $('#why-scroll-toggle').on( 'click', function() {
        $('html, body').animate({
            scrollTop: $("#why-section").offset().top + 2
        }, 800 ); 
        $('#infographic-image, #specdoc-image').fadeOut( 300, function(){
            $('#non-infographic').fadeIn( 300 );
        });
    });
    
    $('#mobile-menu-trigger, #menu-panel-close, #dimmer-switch').bigSlide({
        menu: '#mobile-menu-panel',
        menuWidth: '280px',
        side: 'right',
        easyClose: true
    }).on( 'click touchstart', function() {
        $('a#menu-panel-close img').fadeToggle( 300 );
        $( '#dimmer-switch').fadeToggle( 300 );
        $( '#social-header').fadeToggle( 300 );
    });
    
    if ( $("div#tubular-player").length ) {
            
        $('div#tubular-player').tubular({ 
            videoId: 'vJg-9uCeMJQ',
            repeat: true,
            mute: false,
            muteButtonClass: 'tubular-mute',
        });

//        $('#tubular-container').appendTo('#jumbotron-section');
//        $('#tubular-shield').appendTo('#jumbotron-section');
//        $(window).load(function () {
//            $('#tubular-container').delay(650).animate({
//                opacity: 1
//            }, 500 );
//        });

        $('div#tubular-container').delay(1000).animate({
            opacity: 1,
        }, 1000 );
        
    }

    $(window).on('resize', function(){

        if ( $(window).width() <= 768) { 
            $('iframe#tubular-player').height( viewport_height - $('header.nav-bar').height() );        
        }

        $('#home.welcome_slider').height( $('div#tubular-container').height() );
        
    });

    $('#infographic-trigger').on( 'click', function() {
        $('html, body').animate({
            scrollTop: $("#why-section").offset().top + 2
        }, 800); 
        $('#non-infographic, #specdoc-image').fadeOut( 300, function(){
            $('#infographic-image').fadeIn( 300 );
        });
    });

    $('#specdoc-trigger').on( 'click', function() {
        $('html, body').animate({
            scrollTop: $("#why-section").offset().top + 2
        }, 800); 
        $('#non-infographic, #infographic-image').fadeOut( 300, function(){
            $('#specdoc-image').fadeIn( 300 );
            $('map').imageMapResize();
        });
    });

    /**
     * Init ImageMap Resizer
     */
    $('map').imageMapResize();
    
    /**
     * Team Photo Hotspot Effect
     */
    $('div#specdoc-image map area').on( 'click', function() {
        
        $( '#spec-points' ).stop().fadeIn().find( '#' + $(this).attr('title') ).slideDown();

    });

    $('#spec-points').on('click', function(){
        $( '#spec-points' ).stop().fadeOut().find( '.table-wrap .inner  > div' ).slideUp();
    });
    
});
