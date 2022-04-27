$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
    $("#btn2").click(function() {
        $("#myModal").modal();
    });

    function kiemtraTen() {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#tbName").val() == "") {
            $("#tbName").html("Khong de trong");
            return false;
        }
        if (!mauKT.test($(#Name).val())) {
            $("#tbName").html(" Moi ky tu dau viet hoa khong su dung so");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemtraTen);

    function kiemtrasoAo() {
        var mauKT = /^\d*$/;
        if ($("#tbAo").val() == "") {
            $("#tbAo").html("Khong de trong");
            return false;
        }
        if (!mauKT.test($("#Ao").val())) {
            $("#tbAo").html("Dung so tu 1 den 100");
            return false;
        } else {
            var soAO = $("#Ao").val();
            if (soAO < 1 || soAO > 100) {
                $(
                    "#tbAo"
                ).html("tu 1 den 100");
            } else {
                $("#tbName").html("*");
                return true
            }
        }
    }
    $("#Ao").blur(kiemtrasoAo);

    function kiemtraDiaChi() {
        var MauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#DC").val() == "") {
            $("#tbDC").html("Khong de trong");
            return false;
        }
        if (!mauKT.test($("#DC").val())) {
            $("#tbDC").html("Moi ky tu dau viet hoa khong su dung so");
            return true;
        }
        $("#tbDC").html("*");
        return true;
    }
    $("#DC").blur(kiemtraDiaChi);

    function kiemtraNTT() {
        if ($("#NTT").val() == "") {
            $("#tbNTT").html(" khong de trong");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ntt) {
            $("#tbNTT").html("Phai sau hien tai 7 ngay");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(kiemtraNTT);

    function kiemtraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html(" khong de trong");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dang");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemtraSDT);
    $("Save").click(function() {
            if (kiemtraTen() == true && kiemtrasoAo() == true && kiemtraSDT() == true && kiemtraNTT() == true && kiemtraDiaChi() == true) {
                row = "<tr>";
                row += "<th>" + (i++) + "</th>";
                row += "<th>" + $("#Name").val() + "</th>";
                row += "<th>" + $("#Ao").val() + "</th>";
                row += "<th>" + $("#DC").val() + "</th>";
                row += "<th>" + $("#NTT").val() + "</th>";
                row += "<th>" + $("#SDT").val() + "</th>";
                row += "<th>" + $("#ADD").val() + "</th>";
                $("danhSach").append(row);
                $("myModal").modal("hide");
            }
        })
        // Viết code vào

})