$(document).ready(function() {
    
    $('.header-nav .parent').click(function() {
        $('#sub-menu1').slideUp();
        $('#sub-menu2').slideUp();              
        $('#sub-menu3').slideUp();      
    });

    $('#btn-menu-item1').click(function() {
        $('#sub-menu1').slideToggle();
    });
    $('#btn-menu-item2').click(function() {
        $('#sub-menu3').slideUp();        
        $('#sub-menu2').delay(400).slideToggle();        
    });
    $('#btn-menu-item3').click(function() {
        $('#sub-menu2').slideUp();        
        $('#sub-menu3').delay(400).slideToggle();        
    });
    
    
    $('.bars').click(function() {
        $('.header-nav').fadeToggle();
    });

});

$(".go-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
});

$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:7,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
})

function myFunction(x) {
    x.classList.toggle("change");
}