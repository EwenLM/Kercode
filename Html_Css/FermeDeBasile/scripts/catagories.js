$(document).ready(function () {
    $("#tout").addClass("on")

    $("#legume").click(function () {
        $(".tout").hide();
        $(".legume").show();
        $("#tout,#fruit,#noel").removeClass("on");
        $("#fruit").addClass("on");
    })

    $("#fruit").click(function () {
        $(".tout").hide();
        $(".fruit").show();
        $("#tout,#legume,#noel").removeClass("on");
        $("#legume").addClass("on");
    })
    
    $("#arrivage").click(function () {
        $(".tout").hide();
        $(".arrivage").show();
        $("#tout,#legume,#arrivage").removeClass("on");
        $("#legume").addClass("on");
    })

    $("#noel").click(function () {
        $(".tout").hide();
        $(".noel").show();
        $("#tout,#legume,#noel").removeClass("on");
        $("#legume").addClass("on");
    })

    $("#tout").click(function () {
        $(".tout").show();
        $("#legume,#fruit,#noel").removeClass("on");
        $("#tout").addClass("on");
        $(".on").css('background-color', 'bleu')
    })
})