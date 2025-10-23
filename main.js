let emptyA = $('#empty') ;
let aScroll = $('#about').offset().top;
let hScroll = $('#home').offset().top;

var typed = new Typed('.element', {
    strings: ["Frontend Web Developer","Specialized In React.js","UI/UX Designer"],
    typeSpeed: 40,
    backSpeed: 20,
    startDelay: 20,
    showCursor: false,
    loop: true,
    loopCount: Infinity,
});

$('#btnUp').click(function () {
    $('html,body').animate({scrollTop:hScroll},1000)
})

$(document).ready(function () {
    $('#loading .sk-chase').fadeOut(750,function () {
        $('html,body').animate({scrollTop:hScroll},0)
        $('#loading').fadeOut(1000,function () {
            $('body').css('overflow-y','auto');
            $('#loading').remove();
            
        })
    })
})

$("a[href^='#']").click(function (e) {
    $(e.target).css('border-bottom','solid #FEE715 3px');
    $(e.target).parent().siblings().children().css('border-bottom','none');
    let linkHref = $(e.target).attr('href');
    let section = $(linkHref).offset().top;
    $('html,body').animate({scrollTop:section},1000)
})



$(window).scroll(function (){
    let mainNav = $('#mainNav');
    let Wscroll = $(window).scrollTop();
    if (Wscroll > aScroll  -50) {

        mainNav.css('backgroundColor','rgba(0,0,0,0.8)');
        mainNav.css('padding','20px');
        $('#btnUp').fadeIn(500)
    }
    else {
        mainNav.css('backgroundColor','transparent');
        mainNav.css('padding','10px 5px');
        $('#btnUp').fadeOut(500);
    }
})


