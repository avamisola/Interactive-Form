//treehouse fullstack javascript project 3: inteactive form

//put name field in focus state
$("#name").focus();

//show optional text input if "other" job role selected
$("#other-title").hide();
$("#title").change(function() {
    if ($(this).val() == "other") {
        $("#other-title").show();
    } else {
        $("#other-title").hide();
    }
});

//make shirt color options dependent on selected shirt design
$("label[for='color']").text("Please select a T-shirt theme");
$("#color").hide();
$("#design").change(function() {
    if ($(this).val() == "js puns") {
        $("label[for='color']").text("Color:");
        $("#color option").show();
        $("#color").val("cornflowerblue").show();
        $("#color option[value='tomato']").hide();
        $("#color option[value='steelblue']").hide();
        $("#color option[value='dimgrey']").hide();
    } else if ($(this).val() == "heart js") {
        $("label[for='color']").text("Color:");
        $("#color option").show();
        $("#color").val("tomato").show();
        $("#color option[value='cornflowerblue']").hide();
        $("#color option[value='darkslategrey']").hide();
        $("#color option[value='gold']").hide();
    } else {
        $("label[for='color']").text("Please select a T-shirt theme");
        $("#color").hide();
    }
});

//
let $total = 0;
$(".activities").append("<label for='total'></label>");
$(".activities input").change(function() {
    const $activityName = $(this).attr("name");
    const $dataCost = parseInt($(this).attr("data-cost"));
    const $dayTime = $(this).attr("data-day-and-time");
    if ($(this).prop("checked")) {
        $total += $dataCost;
    } else {
        $total -= $dataCost;
    }
    $("label[for='total']").text(`Total: $${$total}`);
    $(".activities input").each(function() {
        
    });
    console.log($dayTime);
});


//$(".activities").append("<label for='total'>"+`Total: $${$total}`+"</label>");