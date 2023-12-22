$(document).ready(function () {
    $("#tout").addClass("on")

    $("#jardin").click(function () {
        $(".tout").hide();
        $(".jardin").show();
        $("#tout,#foret").removeClass("on");
        $("#foret").addClass("on");
    })

    $("#foret").click(function () {
        $(".tout").hide();
        $(".foret").show();
        $("#tout,#jardin").removeClass("on");
        $("#jardin").addClass("on");
    })

    $("#tout").click(function () {
        $(".tout").show();
        $("#jardin,#foret").removeClass("on");
        $("#tout").addClass("on");
    })
})