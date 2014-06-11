$(document).ready(function () {
    // Smooth Scrolling
    $('.scroll').click(function () {
        //event.preventDefault();
        $('html,body').stop().animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
        return false;
    });


    //make carousel responsive 
    $('.carousel').css({
        'height': $(window).height()
    });

    $(window).resize(function () {
        $('.carousel').css({
            'height': $(window).height()
        });
    });

    // Start carousel on page load
    $('.carousel').carousel('cycle');

    // Initiate Magnific Popup
  $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
      }
  });


    //NAVIGATION BAR ANIMATIONS
    //Shrink header and img + hide text when scrolling begins
    $('#shade').data('size', 'big');

    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) //|| $(window).width() < 1125
        {
            if ($('#shade').data('size') === 'big') {
                $('#shade').data('size', 'small');
                $('#shade').stop().animate({
                    height: '80px'
                }, 600);
                $('#icon').stop().animate({
                    height: '70px' /*image has the same effect like the header*/
                }, 600);
                $('#jrctext').stop().fadeOut('slow', function () {
                    //animation complete
                });
                $('#jrctext').stop().animate({
                    'top': '-120px'
                }, 800);
                $('.header').find('ul').stop().animate({
                    'margin-top': '6px'
                }, 600);
                $('#selected').stop().animate({
                    'top': '40px'
                }, 600);
            }
        } else {
            if ($('#shade').data('size') === 'small') {
                $('#shade').data('size', 'big');
                $('#shade').stop().animate({
                    height: '145px'
                }, 600);
                $('#icon').stop().animate({
                    height: '135px' /*image has the same effect like the header*/
                }, 600);
                $('#jrctext').stop().fadeIn('fast', function () {
                    //animation complete
                });
                $('#jrctext').stop().animate({
                    'top': '10px'
                }, 800);
                $('.header').find('ul').stop().animate({
                    'margin-top': '36px'
                }, 600);
                $('#selected').stop().animate({
                    'top': '70px'
                }, 600);
            }
        }
    });

    //  $('#gallery .service').hide();
    //  $('#gallery #kitchens').show();

    // $('#bathroom-icon').click(function () {
    //     $('#gallery .service').hide();
    //     $('#bathrooms').show();
    // });

    // $('.service').click(function () {
    // console.log( $(this).attr('id') );
    // });

    // Gallery Tab.js
    // $('#services-content li').click(function (e) {
    //     e.preventDefault();
    //     var active = $(this).attr('id');
    //     $("#tab-content a[href='#' + active]").tab('show');
    // });



    // Toggle bio sections 
    // Start by hiding all except Joe p1 
    $('.bio').hide();
    $('#joep1').show();
    $('#joe .teamshade').hide();

    $('#joe').hover(function () {
        $('.employee').find('.name').removeClass('highlight');
        $('.employee').find('.role').removeClass('highlight');
        $('.employee').find('img').removeClass('border-select');
        $(this).find('.name').addClass('highlight');
        $(this).find('.role').addClass('highlight');
        $(this).find('img').addClass('border-select');
        $('.employee .teamshade').show();
        $('#joe').find('.teamshade').hide();
        $('.bio').hide();
        $('#joep1').toggle();
        $('.moreButton').show();
    });

    $('#barbara').hover(function () {
        $('.employee').find('.name').removeClass('highlight');
        $('.employee').find('.role').removeClass('highlight');
        $('.employee').find('img').removeClass('border-select');
        $(this).find('.name').addClass('highlight');
        $(this).find('.role').addClass('highlight');
        $(this).find('img').addClass('border-select');
        $('.employee .teamshade').show();
        $('#barbara').find('.teamshade').hide();
        $('.bio').hide();
        $('#barbBio').toggle();
        $('.moreButton').hide();
        $('.lessButton').hide();
    });

    $('#bryan').hover(function () {
        $('.employee').find('.name').removeClass('highlight');
        $('.employee').find('.role').removeClass('highlight');
        $('.employee').find('img').removeClass('border-select');
        $(this).find('.name').addClass('highlight');
        $(this).find('.role').addClass('highlight');
        $(this).find('img').addClass('border-select');
        $('.employee .teamshade').show();
        $('#bryan').find('.teamshade').hide();
        $('.bio').hide();
        $('#bryanBio').toggle();
        $('.moreButton').hide();
        $('.lessButton').hide();
    });

    $('#jerry').hover(function () {
        $('.employee').find('.name').removeClass('highlight');
        $('.employee').find('.role').removeClass('highlight');
        $('.employee').find('img').removeClass('border-select');
        $(this).find('.name').addClass('highlight');
        $(this).find('.role').addClass('highlight');
        $(this).find('img').addClass('border-select');
        $('.employee .teamshade').show();
        $('#jerry').find('.teamshade').hide();
        $('.bio').hide();
        $('#jerryBio').toggle();
        $('.moreButton').hide();
        $('.lessButton').hide();
    });

    $('.active .name').addClass('highlight');
    $('.active .title').addClass('highlight');


    $('.lessButton').hide();

    $('.moreButton').click(function () {
        $('#joep2').show();
        $('#joep2').addClass('wow bounceInDown');
        $('.moreButton').hide();
        $('.lessButton').show();
    });

    $('.lessButton').click(function () {
        $('#joep2').hide();
        $('.moreButton').show();
        $('.lessButton').hide();
    });


    // On mouseIn, show the selected bar
    // $('#nav ul li a').each(function () {
    //     $(this).hover(function () {
    //         var leftPos = $(this).position().left;
    //         var setWidth = $(this).find('h2').width(); 

    //         $('#selected').stop().animate({
    //             left: leftPos,
    //             width: setWidth,
    //         }, 400, function () {
    //             //animate callback
    //             $('#selected').removeClass('hide');
    //             $('#selected').stop().fadeIn(400);  
    //         }, 
    //         function () {
    //             // mouseout callback
    //             if ($(window).scrollTop() < $('#services').position().top) {
    //                 $('#selected').addClass('hide');
    //                 $('#selected').stop().fadeOut(400);   
    //             }
    //             else {
    //                 $('#selected').removeClass('hide');
    //                 $('#selected').stop().fadeIn(400); 
    //             }
    //         }); //animate
    //     }); // hover
    // }); //each
    // If on Home section, hide it on mouseOut
    // On any other section, slide it back to current nav link on mouseOut




    // //Rollover feedback on nav bar 
    // // For each link in the nav bar
    // $('#nav ul li a').each(function () {
    //     // Upon hover
    //     $(this).hover(function () {
    //     //Get left position and width of current li 
    //         var leftPos = $(this).position().left;
    //         var setWidth = $(this).find('h2').width(); 

    //         //Style the #selected bar to match the attributes of current li 
    //         $('#selected').stop().animate({
    //             left: leftPos,
    //             width: setWidth,
    //         }, 400, function () {
    //             $('#selected').removeClass('hide');
    //             $('#selected').stop().fadeIn(400);   

    //             // if the window is not scrolled past the first section
    //             if ($(document).scrollTop() === 0) {
    //                // $('#selected').addClass('hide');
    //                // $('#selected').stop().fadeOut(400);   
    //                 $('#selected').css({'top' : '70' + 'px'});
    //             }
    //             });
    //     }, //animate callback
    //     function () {
    //         // mouseout 
    //         // if the window is not scrolled past the first section
    //         // hide the #selected bar + set the hash (on mouseout!)
    //         if ($(window).scrollTop() < $('#services').position().top) {
    //             $('#selected').addClass('hide');
    //             $('#selected').stop().fadeOut(400);
    //         } //if
    //         else { // if page is scrolled past first section
    //             $('#selected').css({'top' : '40' + 'px'});
    //             // slide the bar back to current page when not being hovered upon (on mouseout!)
    //             $('#nav ul li a').each(function () {
    //                 // Get current nav link
    //                 var pathnameArray = $(this).attr('href').split('#');
    //                 var pathnameHash = pathnameArray[pathnameArray.length-1];
    //                 // Get the hash
    //                 var url = window.location.href;
    //                 var urlArray = url.split('#');
    //                 var currentPage= urlArray[urlArray.length-1];
    //                 // Check if they are the same and that home section is not active, if so
    //                 if (pathnameHash === currentPage && window.location.hash !== 'home') {
    //                     // Get the width and leftPos of current link + set #selected to those settings, then show it
    //                     var origWidth = $(this).find('h2').width();
    //                     var origLeft = $(this).position().left;
    //                         $('#selected').stop().animate({
    //                             left: origLeft,
    //                             width: origWidth,
    //                         }, 400, function () {
    //                         //animation complete
    //                         $('#selected').removeClass('hide');
    //                         $('#selected').stop().fadeIn(400);
    //                     }); // callback
    //                 } // if  
    //              }); //each 
    //              } // else
    //         }); // mouseout fn
    //     });// hover

    // // force event to fire first time
    // $('#nav').trigger('mouseout');


}); // doc ready


