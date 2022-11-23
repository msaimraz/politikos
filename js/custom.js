AOS.init();

$('.nav-list').click(function() {

    //console.log("Clicked");
    $('.nav li').removeClass('active');
    $(this).addClass('active');
});