$(document).ready(function () {

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 1400,
        autoplay: 1500
    });

    // 

    var main = 0;
    var about = $(window).height();
    var service = ($('.ab-sec').height() + $('.mn-sec').height());
    var price = ($('.ab-sec').height() + $('.mn-sec').height() + $('.service-wrp').height());
    var projects = ($('.ab-sec').height() + $('.mn-sec').height() + $('.service-wrp').height() + $('.price-section').height());
    var contact = ($('.of-sec').height() + $('.ab-sec').height() + $('.mn-sec').height() + $('.service-wrp').height() + $('.price-section').height() + $('.serv').height());
    var office = ($('.ab-sec').height() + $('.mn-sec').height() + $('.service-wrp').height() + $('.price-section').height() + $('.serv').height() - 150);

    //main
    $('#main').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    //about
    $('#about, .more').on('click', function () {
        $('html, body').animate({
            scrollTop: about
        }, 1000);
    });
    //service
    $('#service').on('click', function () {
        $('html, body').animate({
            scrollTop: service
        }, 1000);
    });
    //price
    $('#price').on('click', function () {
        $('html, body').animate({
            scrollTop: price
        }, 1000);
    });
    //projects
    $('#projects').on('click', function () {
        $('html, body').animate({
            scrollTop: projects
        }, 1000);
    });
    //office
    $('#office, .cl-off').on('click', function () {
        $('html, body').animate({
            scrollTop: office
        }, 1000);
    });
    //contact
    $('#contact, .ic-message').on('click', function () {
        $('html, body').animate({
            scrollTop: contact
        }, 1000);
    });
    // scroll top 
    $('.sc-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        4
    });
    // active menu
    $('.mn-li span').on('click', function () {
        $('.mn-li span').removeClass('active');
        $(this).addClass('active');
    });


    // fixed
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    // price slider
    $('.prc-sel-1').on('click', function () {
        $('.prc-sel-2, .prc-sel-3').children('.prc-ic, .prc').removeClass('active')
        $(this).children('.prc-ic, .prc').addClass('active')
        $('.prc1, .sl-ttl-3').addClass('active');
        $('.prc2, .prc3').removeClass('active');
    });
    $('.prc-sel-2').on('click', function () {
        $('.prc-sel-1, .prc-sel-3').children('.prc-ic, .prc').removeClass('active')
        $(this).children('.prc-ic, .prc').addClass('active')
        $('.prc2, .sl-ttl-3').addClass('active');
        $('.prc1, .prc3').removeClass('active');
    });
    $('.prc-sel-3').on('click', function () {
        $('.prc-sel-1, .prc-sel-2').children('.prc-ic, .prc').removeClass('active')
        $(this).children('.prc-ic, .prc').addClass('active')
        $('.prc3, .sl-ttl-3').addClass('active');
        $('.prc2, .prc1').removeClass('active');
    });

    // map view
    $('.map .bg-gr').on('click', function () {
        $(this).fadeOut();
    });

    //
    $('.img-3, .img-2').mouseover('click', function () {
        $(this).children('.img-info').addClass('active');
        $(this).children('img').addClass('hover');
    });
    $('.img-3, .img-2').mouseleave('click', function () {
        $(this).children('.img-info').removeClass('active');
        $(this).children('img').removeClass('hover');
    });

    // map

    // show map
    $('.map-wrp .bg-gr').on('click', function () {
        $(this).hide();
    });

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 10,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(41.7730341, 44.7846196), // Tbilisi

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "all",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "gamma": 0.5
                }]
            }]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);


        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(41.7730341, 44.7846196),
            map: map,
            icon: 'http://icons.iconarchive.com/icons/elegantthemes/beautiful-flat-one-color/32/pin-icon.png'
        });
    }

    // office image zoom

    $('.resize').on('click', function () {
        $('.zoom-wrp').show();
        $(this).siblings('img').clone().appendTo('.im-wrp').addClass('zoomed');
        $(this).siblings('img').addClass('start-to');
    });

    $('.close').on('click', function () {
        $('.zoom-wrp').hide();
        $(this).siblings('img').remove();
        $('.img-gal').removeClass('start-to');
    });


    // menu

    $('.menu').on('click', function () {
        $('.header').toggleClass('active');
    });


    // parallax.js
    $('body').parallaxify({
        verticalParallax: false,
        mouseMotionType: 'natural'
    });


});














































































