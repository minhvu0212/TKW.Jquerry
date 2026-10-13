$(document).ready(function () {
    $(".tab").on("click", function () {
        var tabId = $(this).data("tab");
        $(".tab").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").removeClass("active").hide();
        $("#" + tabId).addClass("active").show();
    });
});
