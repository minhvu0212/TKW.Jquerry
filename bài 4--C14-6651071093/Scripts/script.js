$(document).ready(function () {
    function updateTheme() {
        if ($("#themeSwitch").is(":checked")) {
            $("body").removeClass("dark-theme").addClass("light-theme");
            $("#themeStatus").text("Chế độ sáng đang bật.");
        } else {
            $("body").removeClass("light-theme").addClass("dark-theme");
            $("#themeStatus").text("Chế độ tối đang bật.");
        }
    }

    $("#themeSwitch").on("change", updateTheme);
    updateTheme();
});
