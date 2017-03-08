/*global console, alert, jQuery, $*/
/*jslint plusplus:true, evil:true*/

$(function () {
    'use strict';
    
//    using nice scroll
    
    $("html").niceScroll({
        cursorcolor: "#6c9ce4",
        cursorwidth: "10px",
        scrollspeed: "80"
    });//    using nice scroll
 
//    change page colors
    
    $('.tools span').click(function () {
        if ($('link[href*="theme"]').attr('href') !== $(this).attr('data-value')) {
            if ($('h1 span').hasClass('blue')) {
                $('.blue').each(function () {
                    $(this).addClass('red');
                    $(this).removeClass('blue');
                });
                $('img[src*="vcss"]').show();
                $('img[src*="vcss-blue"]').hide();
                $(".nicescroll-cursors").css('background-color', '#dd153d');
            } else {
                $('.red').each(function () {
                    $(this).addClass('blue');
                    $(this).removeClass('red');
                });
                $('img[src*="vcss"]').hide();
                $('img[src*="vcss-blue"]').show();
                $(".nicescroll-cursors").css('background-color', "#6c9ce4");
            }
        }
        $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
    });//    change page colors
    
//    carousel
    
    var currentHolder,
        carousel,
        timer,
        itemset = $('.itemset-1'),
        i = 0;

    function carouselFunc() {//add parameter
        var current = itemset.children('div').children('.active'),
            currentIndex = current.attr('data-value');
        current.removeClass('active');
        currentIndex++;
        if (currentIndex > itemset.children('div').children('.item').length) {
            currentIndex = 1;
        }
        itemset.children().children('.item[data-value=' + currentIndex + ']').addClass('active');
        $('.indicator').eq(i).children('.active').removeClass('active');
        $('.indicator').eq(i).children('li[data-target=' + currentIndex + ']').addClass('active');
    }// carousel function
    function stopCarousel() {
        clearInterval();
        clearTimeout();
    }//stop carousel
    function continueCarousel() {
        setTimeout(function () {
            carousel();
        }, 1000);
    }//continue carousel

    carousel = setInterval(function () {
        carouselFunc();
    }, 4000); // start
    
    $('.carousel').mouseenter(function () {
        stopCarousel();
    });//mouse enter stop
    
    $('.carousel').mouseleave(function () {
        continueCarousel();
    });//mouse leave start
    $('.work li').click(function () {
        if (!$(this).hasClass('active')) {
            stopCarousel();
            i = $(this).index();
            console.log(i);
            $('.work .active').removeClass('active');
            $(this).addClass('active');
            itemset = $('.carousel').children($(this).attr('data-value'));
            $('.carousel > .active').removeClass('active');
            itemset.addClass('active');
            itemset.children().children('.item:first-of-type').addClass('active');
            itemset.children('ul').children('.active').removeClass('active');
            itemset.children('ul').children('li:first-of-type').addClass('active');
            continueCarousel();
        }
    });  // change carousel
//    indicators
    
    $('.indicator li').click(function () {
        var current = $(this),
            currentIndex = $(this).attr('data-target');
        if (!current.hasClass('active')) {
            $(this).siblings('.active').removeClass('active');
            current.addClass('active');
            itemset.children().children('.item.active').removeClass('active');
            itemset.children().children('.item[data-value=' + currentIndex + ']').addClass('active');
        }
    });// indicators
    
//    controls
    
    $('.right').click(function () {
        var current = itemset.children().children('.item.active'),
            currentIndex = current.attr('data-value');
        current.removeClass('active');
        currentIndex++;
        if (currentIndex === itemset.children().children('.item').length + 1) {
            currentIndex = 1;
        }
        itemset.children().children('.item[data-value=' + currentIndex + ']').addClass('active');
        $('.indicator .active').removeClass('active');
        $('.indicator li[data-target=' + currentIndex + ']').addClass('active');
    });// right control
    
    $('.left').click(function () {
        var current = itemset.children().children('.item.active'),
            currentIndex = current.attr('data-value');
        current.removeClass('active');
        currentIndex--;
        if (currentIndex === 0) {
            currentIndex = itemset.children().children('.item').length;
        }
        itemset.children().children('.item[data-value=' + currentIndex + ']').addClass('active');
        $('.indicator .active').removeClass('active');
        $('.indicator li[data-target=' + currentIndex + ']').addClass('active');
    });// left control
    
//    start theatre mode
    
    $('.carousel img').click(function () {
        $(this).parents('.item-holder').parent().addClass('theatre');
        $('.carousel .close').show();
        $('body').css('overflow', 'hidden');
        $(".theatre").niceScroll();
    });//start  theatre mode
    
//    close theatre mode
    
    $('.carousel .close').click(function () {
        $('.theatre').removeClass('theatre');
        $('.carousel .close').hide();
        $('body').css('overflow', 'scroll');
    });//close theatre mode
    
//    specify skill bar length
    
    $('.chart div').children('span').each(function () {
        $(this).width($(this).attr('data-value') + "%");
        $(this).children('span').text($(this).attr('data-value') + "%");
    });// skill length
    
//    form fix
    
    $('form .ico').click(function () {
        $('form').submit();
    });//submit form
    
//    back to top button
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $('.ico.top').show(10, function () {
                $(this).click(function () {
                    $('html,body').animate({scrollTop: 0}, 400);
                });
            });
        } else {
            $('.ico.top').hide();
        }
    });//back to top
});

// loading screen
$(window).load(function () {
    'use strict';
    setTimeout(function () {
        document.getElementsByClassName('loading')[0].style.opacity = 0;
        setTimeout(function () {
            document.getElementsByClassName('loading')[0].style.display = 'none';
        }, 1000);
    }, 1000);
});