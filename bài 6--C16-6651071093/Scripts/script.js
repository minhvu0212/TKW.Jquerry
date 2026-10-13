$(document).ready(function () {
    $("#personForm").on("submit", function (event) {
        event.preventDefault();

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var birthdate = $("#birthdate").val();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "" || email === "" || birthdate === "") {
            $("#formMessage").text("Vui lòng nhập đầy đủ thông tin.");
            return;
        }
        if (!emailPattern.test(email)) {
            $("#formMessage").text("Email không hợp lệ.");
            $("#email").focus();
            return;
        }

        var row = $("<tr></tr>");
        row.append($("<td></td>").append($("<input type='checkbox' class='rowCheck'>")));
        row.append($("<td></td>").text(name));
        row.append($("<td></td>").text(email));
        row.append($("<td></td>").text(birthdate));
        $("#peopleTable").append(row);

        this.reset();
        $("#formMessage").text("Đã thêm dòng thành công.");
    });

    $("#deleteRows").on("click", function () {
        var selected = $("#peopleTable .rowCheck:checked");
        if (selected.length === 0) {
            $("#formMessage").text("Hãy chọn ít nhất một dòng để xóa.");
            return;
        }
        selected.each(function () {
            $(this).closest("tr").remove();
        });
        $("#formMessage").text("Đã xóa các dòng được chọn.");
    });
});
