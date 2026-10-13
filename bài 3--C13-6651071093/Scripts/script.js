$(document).ready(function () {
    $("#togglePassword").on("click", function () {
        var input = $("#password");
        if (input.attr("type") === "password") {
            input.attr("type", "text");
            $("#passwordStatus").text("Mật khẩu đang được hiển thị.");
            $(this).text("🙈").attr("aria-label", "Ẩn mật khẩu");
        } else {
            input.attr("type", "password");
            $("#passwordStatus").text("Mật khẩu đang được ẩn.");
            $(this).text("👁").attr("aria-label", "Hiện mật khẩu");
        }
    });
});
