$(document).ready(function () {
    var n = 0;
    $('.fadeIn').hide();

    $(document).on('click', function () {
        //check if all fadeIn elements are visible
        if ($('.section-' + n + ' .fadeIn:visible').length === $('.section-' + n + ' .fadeIn').length) {
            //if so, fadeOut that section, increment n, fade in first fadeIn of next section   
            $('.section-' + n + ':not(:last-child)').fadeOut('slow', function () {
                n = n + 1;
                $('.section-' + n).find('.fadeIn:first').fadeIn('slow');
            });
            //if not, fade in next hidden fadeIn element
        } else {
            $('.section-' + n).find('.fadeIn:hidden:first').fadeIn('slow', function () {
                $("html, body").animate({
                    scrollTop: $("body")[0].scrollHeight
                }, 1000);
            });
        }
    }).click();

    $('#candy').on('click', function () {
        $('.sign').fadeOut('slow', function () {
            $('.neontubing').fadeIn('slow');
            $('.sign').removeClass('fadeIn');
        });
    });
});