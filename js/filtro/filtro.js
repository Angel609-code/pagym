$('.a1').click(function(e){
    e.preventDefault();

    if ($('.ul1').hasClass('active')){
        $('.ul1').removeClass('active');
        $('.ul1').slideUp();
        $('.a1 i').removeClass('active');

    }else{
        $('.ul1').slideDown();
        $('.ul1').addClass('active');
        $('.a1 i').addClass('active');

        $('.ul2').removeClass('active');
        $('.ul2').slideUp();
        $('.a2 i').removeClass('active');
        
        $('.ul3').removeClass('active');
        $('.ul3').slideUp();
        $('.a3 i').removeClass('active');
    }

});

$('.a2').click(function(e){
    e.preventDefault();

    if ($('.ul2').hasClass('active')){
        $('.ul2').removeClass('active');
        $('.ul2').slideUp();
        $('.a2 i').removeClass('active');
    }else{
        $('.ul2').slideDown();
        $('.ul2').addClass('active');
        $('.a2 i').addClass('active');

        $('.ul1').removeClass('active');
        $('.ul1').slideUp();
        $('.a1 i').removeClass('active');
        
        $('.ul3').removeClass('active');
        $('.ul3').slideUp();
        $('.a3 i').removeClass('active');
    }    
});

$('.a3').click(function(e){
    e.preventDefault();

    if ($('.ul3').hasClass('active')){
        $('.ul3').removeClass('active');
        $('.ul3').slideUp();
        $('.a3 i').removeClass('active');
    }else{
        $('.ul3').slideDown();
        $('.ul3').addClass('active');
        $('.a3 i').addClass('active');

        $('.ul1').removeClass('active');
        $('.ul1').slideUp();
        $('.a1 i').removeClass('active');
        
        $('.ul2').removeClass('active');
        $('.ul2').slideUp();
        $('.a2 i').removeClass('active');

    }    
});
