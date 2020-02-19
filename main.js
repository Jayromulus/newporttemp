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


// $(window).scroll(function(){            
//     $("div").css("margin-top", $(window).scrollTop())   
// });

// console.log($(window).width);

function a() {
    document.getElementById('ghibliText').classList.toggle('textBackground');
    // console.log(document.getElementById('ghibliText').classList)
    // console.log("Hello")
}
document.getElementById('ghibliHover').addEventListener('mouseenter', a)
document.querySelector('#ghibliHover').addEventListener('mouseleave', a)

function b() {
    document.getElementById('storefrontText').classList.toggle('textBackground');
    // console.log(document.getElementById('ghibliText').classList)
    // console.log("Hello")
}
document.getElementById('storefrontHover').addEventListener('mouseenter', b)
document.querySelector('#storefrontHover').addEventListener('mouseleave', b)

function c() {
    document.getElementById('mashrText').classList.toggle('textBackground');
    // console.log(document.getElementById('ghibliText').classList)
    // console.log("Hello")
}
document.getElementById('mashrHover').addEventListener('mouseenter', c)
document.querySelector('#mashrHover').addEventListener('mouseleave', c)

function d() {
    document.getElementById('netflixText').classList.toggle('textBackground');
    // console.log(document.getElementById('ghibliText').classList)
    // console.log("Hello")
}
document.getElementById('netflixHover').addEventListener('mouseenter', d)
document.querySelector('#netflixHover').addEventListener('mouseleave', d)