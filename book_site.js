$("#search-btn").click(function() {
    $(".search-box").css("display", "inline-block");
    $(this).css("display", "none");
});


$("#dark-icon-off").click(function() {
    $(this).html('<i class="fas fa-toggle-on" aria-hidden="true"></i>');
    $("body").css("background-color", "black");
    $("body").css("color", "white");

});