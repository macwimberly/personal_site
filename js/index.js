$(function() {
    $(".container").off();
    $(".bodies").hide();
    $("h1").hide();
    $("#nav").hide();

    $("#face").delay(800).animate({ opacity: .25 }, 2500);
    $("#face").delay().animate({ opacity: 0 }, 500);
    $("#face").delay(200).animate({ opacity: 1 }, .5);

    $("h1").delay(300).slideDown(1500, function() {});
    $("#nav").delay(1000).slideDown(2000, function() {});

    setTimeout(function() { $("#nav").css('color', '#ffe4c2'); }, 4600);
    setTimeout(function() { $("#nav").css('color', 'black'); }, 4850);
    setTimeout(function() { $("#nav").css('color', '#ffe4c2'); }, 4900);
    setTimeout(function() { $("#nav").css('color', 'black'); }, 5000);
    setTimeout(function() { $("#nav").css('color', '#ffe4c2'); }, 5200);
    setTimeout(function() { $("#nav").css('color', 'black'); }, 5600);

    function screenClick() {
        var button = event.target;
        $(button).unbind('mouseleave');
        $(".all").hide();
        $("#bio").css("color", "black");
        $("#projekts").css("color", "black");
        $("#resume").css("color", "black");
        $("#kontakt").css("color", "black");
        $(button).css('color', 'red');

    }

    $("#bio").hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "black");
    });

    $("#projekts").hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "black");
    });

    $("#resume").hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "black");
    });

    $("#kontakt").hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "black");
    });

    $("#bio").click(function() {
        screenClick();
        $("#bioLong").hide();
        $("#bioShort").show();
        $("#moreButton").show();
        // $("#lessButton").hide();
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

            $("#moreButton").hover(function() {
                $(this).css("color", "red");
            }, function() {
                $(this).css("color", "black");
            });

        //     $("#lessButton").click(function() {
        //         $("#bioLong").hide();
        //         $("#lessButton").hide();
        //         $("#moreButton").show();
        //         $("#bioShort").slideDown(2000, function() {});
        // });

    $("#projekts").click(function() {
        screenClick();
        $("#projDiv").delay().slideDown(2000, function() {});
    });

    $("#resume").click(function() {
        screenClick();
        $("#resDiv").delay().slideDown(2000, function() {});
    });

    $("#kontakt").click(function() {
        screenClick();
        $("#konDiv").delay().slideDown(2000, function() {});
    });

    $(".fa").hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "black");
    });

    $(".email").hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "black");
    });

}); //doc ready
