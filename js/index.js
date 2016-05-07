$(function() {
    var priorButton;

    $(".bodies").hide();
    $("h1").hide();

    $("#face").delay(800).animate({ opacity: .25 }, 2500);
    $("#face").delay().animate({ opacity: 0 }, 500);
    $("#face").delay(200).animate({ opacity: 1 }, .5);

    $("h1").delay(300).slideDown(1500, function() {});
    $("#nav").delay(1000).slideDown(2000, function() {});

    setTimeout(function() { $("#nav").removeClass('tan').addClass('red'); }, 4550);
    setTimeout(function() { $("#nav").removeClass('red').addClass('tan'); }, 4700);
    setTimeout(function() { $("#nav").removeClass('tan').addClass('red'); }, 4750);
    setTimeout(function() { $("#nav").removeClass('red').addClass('tan'); }, 4800);
    setTimeout(function() { $("#nav").removeClass('tan').addClass('red'); }, 4850);
    setTimeout(function() { $("#nav").removeClass('red').addClass('tan'); }, 5000);
    setTimeout(function() { $("#nav").removeClass('tan').addClass('red'); }, 5100);
    setTimeout(function() { $("#nav").removeClass('red').addClass('black'); }, 5900);

    function screenClick(event) {
        var button = event.target;
        $(".all").hide();
        $(priorButton).removeClass('red');
        $(button).addClass('red');
        priorButton = button;
        console.log(button);
    }

    $("#bio").click(function(event) {

        screenClick(event);
        $("#bioLong").hide();
        $("#bioShort").show();
        // $("#moreButton").show();
        $("#lessButton").hide();
        $("#bioDiv").delay().slideDown(2000, function() {});
    });

    $("#projekts").click(function(event) {
        screenClick(event);
        $(".projDiv").delay().slideDown(2000, function() {});
    });

    $("#resume").click(function(event) {
        screenClick(event);
        $("#resDiv").delay().slideDown(2000, function() {});
    });

    $("#kontakt").click(function(event) {
        screenClick(event);
        $("#konDiv").delay().slideDown(2000, function() {});
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

});
