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

    $('#js-form-name, #js-form-phone, #js-form-email, #js-form-message').unbind().blur( function(){

        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
        var id = $(this).attr('id');
        var val = $(this).val();
        switch(id)
        {
            case 'js-form-name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;
                if(val.length > 2 && val != '' && rv_name.test(val))
                {
                    $(this).addClass('not_error');
                }
                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $('.errors p').html('Введіть ім\'я')
                }
                break;
            case 'js-form-phone':
                if(val != '' && val.length > 2)
                {
                    $(this).addClass('not_error');
                }
                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $('.errors p').html('Введіть телефон')
                }
                break;
            // Проверка email
            case 'js-form-email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if(val != '' && rv_email.test(val))
                {
                    $(this).addClass('not_error');
                }
                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $('.errors p').html('Ведіть коректний email');
                }
                break;
            case 'js-form-message':
                if(val != '' && val.length < 5000)
                {
                    $(this).addClass('not_error');
                }
                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $('.errors p').html('Введітеь повідомлення')
                }
                break;
        }

    });
    $('#js-popup-form-name, #js-popup-form-phone, #js-popup-form-email, #js-popup-form-message').unbind().blur( function(){

        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
        var id = $(this).attr('id');
        var val = $(this).val();
        switch(id)
        {
            case 'js-popup-form-name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;
                if(val.length > 2 && val != '' && rv_name.test(val))
                {
                    $(this).addClass('not_error');
                }
                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $('.errors p').html('Введіть ім\'я')
                }
                break;
            case 'js-popup-form-phone':
                if(val != '' && val.length > 2)
                {
                    $(this).addClass('not_error');
                }
                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $('.errors p').html('Введіть телефон')
                }
                break;
            // Проверка email
            case 'js-popup-form-email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if(val != '' && rv_email.test(val))
                {
                    $(this).addClass('not_error');
                }
                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $('.errors p').html('Ведіть коректний email');
                }
                break;
            case 'js-popup-form-message':
                if(val != '' && val.length < 5000)
                {
                    $(this).addClass('not_error');
                }
                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $('.errors p').html('Введітеь повідомлення')
                }
                break;
        }

    });

    $('#ajax_form, #popup-ajax_form').submit(function(e) {
        e.preventDefault();
        if($('.not_error').length == 4) {
            $.ajax({
                type: 'POST',
                url: 'send.php',
                data: $(this).serialize(),
                success: function() {
                    $('#thanksModal').modal('show')
                },
                error: function(err) {
                    alert(err);
                }
            })
        } else {
            return false;
        }
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
