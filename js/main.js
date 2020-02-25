//  Slick Slider
$(document).ready(function () {
    $(".carousel-container").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    })
})

//  Display menu on small screen
$(document).ready(function () {
    $(".hamburger-icon-div").click(function () {
        $(".menu").animate({ height: 'toggle' }, 400);
    });
    $(".menu_close-button").click(function () {
        $(".menu").animate({ height: 'toggle' }, 400);
    });
});

//  MODAL
//  Display modal form
$(document).ready(function () {
    $("#mail-aside-icon").click(function () {
        $(".modal").attr("style", "display: flex;");
        $(".aside-icons").attr("style", "display: none;");
        console.log("cao")
    });
});

//  Close modal form  
$(document).ready(function () {
    $(".modal_close-button").click(function () {
        $(".modal").attr("style", "display: none;");
        $(".aside-icons").show();
    });
});

//   Prevent default on form submit
$("#mail-form").submit(function (e) {
    return false;
});

//  Tuzbe page article slide down
$(document).ready(function () {
    $(".text-article_subtitle-h2--see-more").click(function () {
        $(this).siblings("p").slideDown("1000");
    });
});

//   Device/OS test
$(document).ready(function () {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)) {
            console.log("Kak da aktivira link");
    } else {
        console.log(navigator.userAgent);
        console.log("ne printa else islov")
    }
});