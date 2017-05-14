$(document).ready(function() {
    $(".nav1").click(function() {
        $(".spcl").show();
        $(".gallery").hide();
        $(".newt").hide();
    });
    $(".nav2").click(function() {
        $(".newt").show();
        $(".spcl").hide();
        $(".gallery").hide();
    });
    $("nav3").click(function() {
        $(".gallery").show();
        $(".newt").hide();
        $(".spcl").hide();
    });
});
