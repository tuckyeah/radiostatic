function randomPosition() {
    var h = $(window).height() - 15;
    var w = $(window).width() - 15;

    var newHeight = Math.floor(Math.random() * h);
    var newWidth = Math.floor(Math.random() * w);

    return [newHeight, newWidth];
}

function randomSize() {
    return Math.round(Math.random() * 2) + 5;
}

function checkColor() {
    if ($('.colorChange').is(':visible')) {
        $('body').animate({
            backgroundColor: "#000"
        }, 'slow');
    }
}

function addStars() {
    var starLimit = 30;

    for (var i = 0; i <= starLimit; i++) {
        $('.wrapper').append($('<div/>', {
            'id': i,
            'class': 'star'
        }))
    }
    $('.star').each(function (index) {
        var newPosition = randomPosition();
        var newSize = randomSize();

        $(this).css({
            'margin-left': newPosition[1] + 'px',
            'margin-top': newPosition[0] + 'px',
            'width': newSize + 'px',
            'height': newSize + 'px'
        });
        $(this).delay(800 * index).fadeIn('slow')
    });
}


$(document).ready(function () {
    var n = 0;
    $('.fadeIn').hide();

    $(document).on('click', function () {
        //check if all fadeIn elements are visible
        if ($('.section-' + n + ' .fadeIn:visible').length === $('.section-' + n + ' .fadeIn').length) {
            //if so, fadeOut that section, increment n, fade in first fadeIn of next section   
            $('.section-' + n + ':not(:last-child)').fadeOut('slow', function () {
                n += 1;
                $('.section-' + n).find('.fadeIn:first').fadeIn('slow', function () {
                    if ($('.section-' + n).hasClass('complete')) {
                        $('.preWrapper').addClass('wrapper');
                        $('.header').hide();
                        addStars();
                    }
                });
                checkColor();
            });
            //if not, fade in next hidden fadeIn element
        } else {
            $('.section-' + n).find('.fadeIn:hidden:first').fadeIn('slow', function () {
                $("html, body").animate({
                    scrollTop: $("body")[0].scrollHeight
                }, 1000);
            });
        }
    }).click()

    $('#candy').on('click', function () {
        $('.sign').fadeOut('slow', function () {
            $('.neontubing').fadeIn('slow');
            $('.sign').removeClass('fadeIn');
        });
    });


    //hover function
    $('.mouseOver').hover(function () {
        $('.hover').fadeOut('slow');
    });
    //star function
    var starLimit = 30;

    for (var i = 0; i <= starLimit; i++) {
        $('.wrapper').append($('<div/>', {
            'id': i,
            'class': 'star'
        }))
    }
    $('.star').each(function (index) {
        var newPosition = randomPosition();
        var newSize = randomSize();

        $(this).css({
            'margin-left': newPosition[1] + 'px',
            'margin-top': newPosition[0] + 'px',
            'width': newSize + 'px',
            'height': newSize + 'px'
        });
        $(this).delay(800 * index).fadeIn('slow')
    });



});