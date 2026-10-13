$(document).ready(function () {
    $("#fileInput").on("change", function () {
        var filePath = $(this).val();
        var fileName = filePath.split("\\").pop().split("/").pop();

        if (fileName === "") {
            $("#fileName").text("Chưa chọn tập tin");
            $("#fileExt").text("—");
            return;
        }

        var dotIndex = fileName.lastIndexOf(".");
        var extension = (dotIndex > 0) ? fileName.substring(dotIndex + 1) : "Không có";

        $("#fileName").text(fileName);
        $("#fileExt").text(extension);
    });
});
