$(function() {
    $(".bodies").hide();
    $("h1").hide();

    $("#face").delay(800).animate({ opacity: .25 }, 2500);
    $("#face").delay().animate({ opacity: 0 }, 500);
    $("#face").delay(200).animate({ opacity: 1 }, .5);

    $("h1").delay(300).slideDown(1500, function() {});
    $("#nav").delay(1000).slideDown(2000, function() {});

    setTimeout(function() { $(".blink").css('color', 'red'); }, 4550);
    setTimeout(function() { $(".blink").css('color', '#ffe4c2'); }, 4700);
    setTimeout(function() { $(".blink").css('color', 'red'); }, 4750);
    setTimeout(function() { $(".blink").css('color', '#ffe4c2'); }, 4800);
    setTimeout(function() { $(".blink").css('color', 'red'); }, 4850);
    setTimeout(function() { $(".blink").css('color', '#ffe4c2'); }, 5000);
    setTimeout(function() { $(".blink").css('color', 'red'); }, 5100);
    setTimeout(function() { $(".blink").css('color', 'black'); }, 5900);

    console.log("hello");

    function screenClick() {
        var button = event.target;
        $(".all").hide();
        $(".blink").css("color", "black");
        $(button).css('color', 'red');

    }

    $("#bio").click(function() {
        screenClick();
        $("#bioLong").hide();
        $("#bioShort").show();
        // $("#moreButton").show();
        $("#lessButton").hide();
        $("#bioDiv").delay().slideDown(2000, function() {});
    });

    $("#moreButton").click(function() {
        $(event.target).unbind('mouseleave');
        $("#bioShort").hide();
        $("#moreButton").hide();
        $("#moreButton").css("color", "black");
        // $("#lessButton").show();
        $("#bioLong").slideDown(2000, function() {});
    });

    //     $("#lessButton").click(function() {
    //         $("#bioLong").hide();
    //         $("#lessButton").hide();
    //         $("#moreButton").show();
    //         $("#bioShort").slideDown(2000, function() {});
    // });

    $("#projekts").click(function() {
        screenClick();
        $(".projDiv").delay().slideDown(2000, function() {});
    });

    $("#resume").click(function() {
        screenClick();
        $("#resDiv").delay().slideDown(2000, function() {});
    });

    $("#kontakt").click(function() {
        screenClick();
        $("#konDiv").delay().slideDown(2000, function() {});
    });


});
