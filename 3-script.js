setInterval(function rescale() {
var decorbox = $(".decor-box");
var indexh = $(".index").height();
var circle1 = $(".circle1");
var circle2 = $(".circle2");
var circle3 = $(".circle3");

decorbox.height(decorbox.width());
circle1.height(circle1.width());
circle2.height(circle2.width());

$("#box5").css("top", 0.8 * indexh - decorbox.width());
$("#box6").css("top", 0.8 * indexh - decorbox.width());
$("#box7").css("top", 0.8 * indexh - decorbox.width());
$("#box8").css("top", 0.8 * indexh - 2 * decorbox.width());
$("#box9").css("top", 0.8 * indexh - 2 * decorbox.width());
$("#box10").css("top", 0.8 * indexh - 3 * decorbox.width());
$("#box11").css("top", - decorbox.width());
$("#box12").css("top", - decorbox.width());
$("#box12").css("left", decorbox.width());
$("#box13").css("top", - 2 * decorbox.width());
$("#box15").css("bottom", - decorbox.width());
$("#box16").css("bottom", - 2 * decorbox.width());
$("#box17").css("bottom",  0);
$("#box18").css("bottom", - decorbox.width());
$("#box18").css("left", decorbox.width());
$("#box19").css("bottom", - decorbox.width());
$("#box20").css("bottom", - 2 * decorbox.width());
$("#box21").css("bottom",  0);
$("#box22").css("bottom", - decorbox.width());
$("#box22").css("right", decorbox.width());
}, 500);

$("#toexperience").click(function() {
            $(".circle2").addClass("blur-in");
            $(".circle2").css("animation-duration","0.75s");
            $(".circle1").addClass("blur-in");
            $(".circle1").css("animation-duration","1.5s");
            $(".exp-header").addClass("blur-in");
            $(".exp-header").css("animation-duration","2.25s");
        if(screen.width > 1023) {
            $(".exp-chula").addClass("raise-up-desktop");
            $(".exp-chula").css("animation-duration","1s");
            $(".exp-itd").addClass("raise-up-desktop");
            $(".exp-itd").css("animation-duration","1.5s");
            $(".exp-beca").addClass("raise-up-desktop");
            $(".exp-beca").css("animation-duration","2s");
        } else {
            $(".exp-chula").addClass("blur-in");
            $(".exp-chula").css("animation-duration","2s");
            $(".exp-itd").addClass("blur-in");
            $(".exp-itd").css("animation-duration","2.5s");
            $(".exp-beca").addClass("blur-in");
            $(".exp-beca").css("animation-duration","3s");
        }
    })

    $("#toskill").click(function() {
        $(".skill-header").addClass("blur-in");
        $(".skill-header").css("animation-duration","1s");
        $(".skill-container").addClass("left-swipe");
        $(".skill-container").css("animation-duration","1.5s");
        $(".myskill").addClass("blur-in");
        $(".myskill").css("animation-duration","3s");
})
