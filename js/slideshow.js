function checkNav() {
    if ($('.active-slide').hasClass('first')) {
        $('.next').hide();
    } else if ($('.active-slide').hasClass('last')) {
        $('.next').show();
    } else {
        $('.next').show();
    }
}


var main = function () {
    checkNav();

    $('.next').click(function () {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next('.slide');

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        //scroll to top
        $(window).scrollTop(0);
        //if nextslide is last slide, go back to the first
        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentSlide.fadeOut(500, function () {
            currentSlide.removeClass('active-slide');
            nextSlide.fadeIn(1200).addClass('active-slide');
            checkNav();
        });

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

    });

    //prev slide function
    $('.prev').click(function () {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev('.slide');
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        //scroll to top
        $(window).scrollTop(0);
        //if prevslide is last slide, go back to the first
        if (prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }

        currentSlide.fadeOut(500, function () {
            currentSlide.removeClass('active-slide');
            prevSlide.fadeIn(1200).addClass('active-slide');
            checkNav();
        });


        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');


    });

    //dot click function

    $('ul.boxes li').click(function () {
        var num = $(this).index();
        var currentSlide = $('.active-slide');
        var nextSlide = $('.slide:eq(' + num + ')');
        var currentDot = $('.active-dot');
        var nextDot = $(this);
        //scroll to top
        $(window).scrollTop(0);

        currentSlide.fadeOut(500, function () {
            currentSlide.removeClass('active-slide');
            nextSlide.fadeIn(1200).addClass('active-slide');
            checkNav();
        });

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

        checkNav();

    })
};

$(document).ready(main);