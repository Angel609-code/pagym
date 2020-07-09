$(document).ready(function(){
    $('.ac').click(function(e){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.categorias ul li').slideDown();
            $('.categorias ul li').addClass('active');
            $('.bgcatg').addClass('active');
        }else{
            $('.categorias ul li').slideUp();
            $('.categorias ul li').removeClass('active');
            $('.bgcatg').removeClass('active');
        }
    });

    function removeCatg(){
        $('.ac').removeClass('active');
        $('.categorias ul li').slideUp();
        $('.categorias ul li').removeClass('active');
        $('.bgcatg').removeClass('active');
    }

    /*For nav*/
    $('.sidemenu li:has(ul)').click(function(e){
        e.preventDefault();

        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).children('ul').slideUp();
        }else{
            $('.sidemenu li ul').slideUp();
            $('.sidemenu li').removeClass('active');
            $(this).addClass('active');
            $(this).children('ul').slideDown();
        }
    });

    $('.sidemenu li ul a').click(function(){
         window.location.href = $(this).attr("href");
    });

    $('.mcelular').on('click', clickAction);

	$('.close-btn').on('click', clickAction);

	$('.fade-bg').on('click', clickAction);

	function clickAction(){
		$('.sidenav').toggleClass('active');
        $('.fade-bg').toggleClass('active');
        $('.sidemenu li:has(ul)').removeClass('active');
        $('.sidemenu li:has(ul)').children('ul').slideUp();
    }
    
    function noved(){
        if($(document).width() <= 991){
            $('.row.wow.fadeIn.index').addClass('novedades');
            $('.card.index').addClass('pdt');
        }else{
            $('.row.wow.fadeIn.index').removeClass('novedades');
            $('.card.index').removeClass('pdt');
        }
        
    }
    noved();

    $(window).resize(function(){
        if($(document).width() > 961){
            $('.sidemenu li:has(ul)').removeClass('active');
            $('.sidemenu li:has(ul)').children('ul').slideUp();
            $('.sidenav').removeClass('active');
            $('.fade-bg').removeClass('active');

            $('.catg ul li').removeClass('active');
            $('.catg ul li').slideUp();
        }
        noved();
    });

    $('.submenu .catg .boton').click(function(e){
        e.preventDefault(); 
    });

    $('.fade-sm').click(function(){
        $('.catg ul li').removeClass('active');
        $('.catg ul li').slideUp();
        $('.fade-sm').removeClass('active');
    });

    $('.submenu .catg a').click(function(){
        if($('.catg ul li').hasClass('active')){
            $('.catg ul li').removeClass('active');
            $('.catg ul li').slideUp();
            $('.fade-sm').removeClass('active');
        }else{
            $('.catg ul li').addClass('active');
            $('.fade-sm').addClass('active');
        }
    });
    /*Fin nav*/

    $('.bgcatg').click(function(e){
        removeCatg();
    });

    $(window).resize(function(){
        removeCatg();
    });

    // stars jejeje
    function starsactive(value, id){
        for (let i = 1; i <= value; i++) {
            $('.s' + i + '.mg-' + id).css("color","#FFFF00");
        }
    }

    function starsinactive(id){
        for (let i = 1; i <= 5; i++) {
            $('.s' + i + '.mg-' + id).css("color","#ffffff");
        }
    }

    function sclr(tag, id){
        let value = $(tag).val();
        starsinactive(id);
        starsactive(parseInt(value), id);
    };

    $('.s1').click(function(e){
        let id = $(this).attr("ms");
        let tag = '.mg' + id;
        if($(tag).val() == '1'){ $(tag).val('0'); }else{ $(tag).val('1'); }
        
        sclr(tag, id);
    });

    $('.s2').click(function(e){
        let id = $(this).attr("ms");
        let tag = '.mg' + id;
        if($(tag).val() != '2'){ $(tag).val('2'); }else if($(tag).val() == '2'){ $(tag).val('1'); }
        
        sclr(tag, id);
    });

    $('.s3').click(function(e){
        let id = $(this).attr("ms");
        let tag = '.mg' + id;
        if($(tag).val() != '3'){ $(tag).val('3'); }else if($(tag).val() == '3'){ $(tag).val('2'); }
        
        sclr(tag, id);
    });

    $('.s4').click(function(e){
        let id = $(this).attr("ms");
        let tag = '.mg' + id;
        if($(tag).val() != '4'){ $(tag).val('4'); }else if($(tag).val() == '4'){ $(tag).val('3'); }

        sclr(tag, id);
    });
    
    $('.s5').click(function(e){
        let id = $(this).attr("ms");
        let tag = '.mg' + id;
        if($(tag).val() != '5'){ $(tag).val('5'); }else if($(tag).val() == '5'){ $(tag).val('4'); }

        sclr(tag, id);
    });

    // Back to top
    
    mbutton = document.getElementById("mbutton");

    window.onscroll = function(){scrollFunction()};

    function scrollFunction(){
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90){
            mbutton.style.display = "block";
        }else{
            mbutton.style.display = "none";
        }
    }

    $('#mbutton').on('click', totop);

    function totop(){
        document.body.scrollTop = 0;

        document.documentElement.scrollTop = 0;
    }
});