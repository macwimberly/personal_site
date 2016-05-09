$(function() {

    var priorButton;

    var a = "color1";
    var b = "color2";
    var c = "color3";


    $(".bodies").hide();
    $("h1").hide();

    $("#face").delay(800).animate({ opacity: .25 }, 2500);
    $("#face").delay().animate({ opacity: 0 }, 500);
    $("#face").delay(200).animate({ opacity: 1 }, .5);

    $("h1").delay(300).slideDown(1500, function() {});
    $("#nav").delay(1000).slideDown(2000, function() {});

    function navBlink(x, y, t) {
        setTimeout(function() { $("#nav").removeClass(x).addClass(y); }, t);
    }

    navBlink(a, b, 4550);
    navBlink(b, a, 4700);
    navBlink(a, b, 4750);
    navBlink(b, a, 4800);
    navBlink(a, b, 4850);
    navBlink(b, a, 5000);
    navBlink(a, b, 5100);
    navBlink(b, c, 5900);

    function screenClick(event, slider) {
        var button = event.target;
        $(".all").hide();
        $(priorButton).removeClass('color2');
        $(button).addClass('color2');
        priorButton = button;
        $(slider).delay().slideDown(2000, function() {});
    }

    $("#bio").click(function(event) {
        screenClick(event, "#bioDiv");
        $("#bioLong").hide();
        $("#bioShort").show();
        // $("#moreButton").show();
        $("#lessButton").hide();
    });

    $("#projekts").click(function(event) {
        screenClick(event, '.projDiv');
    });

    $("#resume").click(function(event) {
        screenClick(event, '#resDiv');
    });

    $("#kontakt").click(function(event) {
        screenClick(event, "#konDiv");
    });

});








    // $("#moreButton").click(function() {
    //     $(event.target).unbind('mouseleave');
    //     $("#bioShort").hide();
    //     $("#moreButton").hide();
    //     $("#moreButton").css("color", "black");
    //     // $("#lessButton").show();
    //     $("#bioLong").slideDown(2000, function() {});
    // });

    //     $("#lessButton").click(function() {
    //         $("#bioLong").hide();
    //         $("#lessButton").hide();
    //         $("#moreButton").show();
    //         $("#bioShort").slideDown(2000, function() {});
    // });
