function show_popup() {
    $("#welcomeText").fadeIn(1000);
}

$(document).ready(function() {
    $("#header").hide();
    $("#welcomeText").hide();
    $("#header").slideDown(1500);
    window.setTimeout(show_popup, 2500);
});