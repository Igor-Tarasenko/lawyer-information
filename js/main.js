$(document).ready(function() {
    //scroll to current position
    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    let myHash = location.hash;
    location.hash = '';
    if(myHash[1] != undefined){
        $('html, body').animate({scrollTop: $(myHash).offset().top}, 700);
    }

    $('#js-submit-form').click(function(e) {
        e.preventDefault();
        // Your validation here!
        const data = {
            name: $('#js-form-name').val(),
            phone: $('#js-form-phone').val(),
            message: $('#js-form-message').val()
        }
        $.ajax({
            type: 'POST',
            url: 'send.php',
            data: data,
            success: function() {
                $('#thanksModal').modal('show')
            },
            error: function(err) {
                alert(err);
            }
        })
    });
    $('#js-popup-submit-form').click(function(e) {
        e.preventDefault();
        // Your validation here!
        const data = {
            name: $('#js-popup-form-name').val(),
            phone: $('#js-popup-form-phone').val(),
            message: $('#js-popup-form-message').val()
        };
        $.ajax({
            type: 'POST',
            url: 'send.php',
            data: data,
            success: function() {
                $('#thanksModal').modal('show')
            },
            error: function(err) {
                alert(err);
            }
        })
    });



    $(".slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".first-slider").slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(".navbar-toggler").click(function () {
        $(".navbar-collapse").addClass("active");
    });
    $(document).mouseup(function (e) {
        var div = $(".navbar-collapse");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass("active");
        }
    });
    $('.question-js').click(function () {
        var blockClose = $(this).children('.question_title');
        $(this).find('.answer').slideToggle();
        if (blockClose.hasClass('active')) {
            blockClose.removeClass('active')
        } else {
            blockClose.addClass('active');
        }
    });
    $('.show-hidden-question-js').click(function () {
        $('.hidden-question').slideToggle();
    });

    $('.phone').mask('+38 (999) 999-99-99');
});
