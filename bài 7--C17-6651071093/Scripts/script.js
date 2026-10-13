$(document).ready(function () {
    $(".accordion-content").hide();

    $(".accordion-heading").on("click", function () {
        var content = $(this).next(".accordion-content");
        if (content.is(":visible")) {
            content.slideUp();
            $(this).removeClass("open");
        } else {
            $(".accordion-content").slideUp();
            $(".accordion-heading").removeClass("open");
            content.slideDown();
            $(this).addClass("open");
        }
    });
});
