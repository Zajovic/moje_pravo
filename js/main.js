//  Slick Slider
$(document).ready(function(){
    $(".carousel-container").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    })
})

//  Display menu on small screen
$(document).ready(function(){
    $(".hamburger-icon-div").click(function(){
        $(".menu").animate({height:'toggle'},400);
    });
    $(".menu_close-button").click(function(){
        $(".menu").animate({height:'toggle'},400);
    });
});

//  MODAL
//  Display modal form
$(document).ready(function(){
    $("#mail-aside-icon").click(function() {
        $(".modal").attr( "style", "display: flex;" );
        $(".aside-icons").attr( "style", "display: none;" );
    });
});

//  Close modal form  
$(document).ready(function(){
    $(".modal_close-button").click(function() {
        $(".modal").attr( "style", "display: none;");
        $(".aside-icons").show();
    });
});

//   Prevent default on form submit
$("#mail-form").submit(function(e){
    return false;
});

//  Tuzbe page article slide down
$(document).ready(function(){
    $(".text-article_subtitle-h2--see-more").click(function(){
        $(this).siblings("p").slideDown("1000");
    });
});