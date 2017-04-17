/**
 * Created by orlandogrodriguez on 4/11/17.
 */


$(function() {
    $("#startDate").draggable({containment:"parent"});
});

$(function() {
    $("#endDate").draggable({containment:"parent"});
});

$(function() {
    $("#startDate").mousedown(function() {
        $("#selectedRange").css("margin-left", $("#startDate").css("left") + "px");
    });
});

var position = $("#startDate").position();

alert($("#startDate").css("margin-left"));


