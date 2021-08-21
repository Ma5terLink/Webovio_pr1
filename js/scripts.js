$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#up']").click(function () { 
    var _href = $(this).attr("href");  
    $("html, body").animate({scrollTop: '0'});
    return false;
});

$(document).ready(function() {
    $('.FS_slider').slick({
        arrows: false, 
        dots: false, 
        autoplay: true,
        autoPlaySpeed: 500,
    });
    $('.FS_slider2').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoPlaySpeed: 800,
    });
});

