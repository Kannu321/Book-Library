// $("#grid-btn").click(function () {
//     window.location.href = "book_site.html";
// })
var flag = true;

$("#dark-icon-off").click(function () {

    if (flag == "true") {
        $(this).html("<i class='fas fa-toggle-on'></i>");
        flag = false;
    }

    else {
        $(this).html("<i class='fas fa-toggle-off'></i>");
        flag = true;
    }

});

$("#search-btn").click(function () {
    $(this).html("<div class='search'> <i class='fa fa-search'></i> <input type='text'class='form-control search-input' > </div>");
    // $(this).
});


// $("#dark-icon-on").click(function () {

//     $(this).html("<i class='fas fa-toggle-off' id = 'dark-icon-off'></i>");
// });