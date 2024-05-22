function show_text(idText) {
    idText.fadeIn(1000);
}

$(document).ready(function() {
    $("#header").hide();
    $("#welcomeText").hide();
    $("#menu").hide();
    $("#header").slideDown(1500);
    window.setTimeout(function() {
        show_text($("#welcomeText")); }
        , 2500);
    window.setTimeout(function() {
        show_text($("#menu")); }
        , 4000);
    $("#menu a").hover(function () {
            // over
            $(this).css("color", "blue");
        }, function () {
            // out
            $(this).css("color", "white");
        }
    );
});