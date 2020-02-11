// document.getElementsByClassName('nav-item')

// $(window).scroll(function() {

//     //After scrolling 100px from the top...
//     if ( $(window).scrollTop() >= 100 ) {
//         $('#logo').css('display', 'none');
//         $('#menuheader').css('margin', '65px auto 0');

//     //Otherwise remove inline styles and thereby revert to original stying
//     } else {
//         $('#logo, #menuheader').attr('style', '');

//     }
// });


$(window).scroll(function(){            
    $("div").css("margin-top", $(window).scrollTop())   
});

console.log($(window).width);