//treehouse fullstack javascript project 3: interactive form

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

//calculate total activity cost and disable checkboxes where time conflicts
let $total = 0;
$(".activities").append("<label for='total'></label>");
$(".activities input").change(function() {
    const $activity = $(this)
    const $activityName = $(this).attr("name");
    const $dataCost = parseInt($(this).attr("data-cost"));
    const $dayTime = $(this).attr("data-day-and-time");
    //add or subtract from total based on checkbox status
    if ($(this).prop("checked")) {
        $total += $dataCost;
    } else {
        $total -= $dataCost;
    }
    $("label[for='total']").text(`Total: $${$total}`);
    //loop through checkboxes to disable time conflicts
    $(".activities input").each(function() {
        $activityNameCheck = $(this).attr("name");
        $dayTimeCheck = $(this).attr("data-day-and-time");  
        if ($activityName != $activityNameCheck && $dayTime == $dayTimeCheck) {
            if ($activity.prop("checked")) {
                $(this).attr("disabled", true);
            } else {
                $(this).attr("disabled", false);
            }
        }
    });
});

//show and hide div based on payment method
$("#payment option[value='select method']").hide();
$("#payment").val("credit card").show();
$("#paypal").hide()
$("#bitcoin").hide()
$("#payment").change(function() {
    const $paymentMethod = $(this).val();
    if ($paymentMethod == "credit card") {
        $("#credit-card").show()
        $("#paypal").hide()
        $("#bitcoin").hide()
    } else if ($paymentMethod == "paypal") {
        $("#credit-card").hide()
        $("#paypal").show()
        $("#bitcoin").hide()
    } else if ($paymentMethod == "bitcoin") {
        $("#credit-card").hide()
        $("#paypal").hide()
        $("#bitcoin").show()
    }
});

//form validation and error messages
$("form").submit(function(event){
    //reset error count and remove error messages
    let $errorCount = 0;
    $(".error").remove();
    //name cannot be blank
    if ($("#name").val() == "") {
        if ($("#name-error").length == 0) {
            $("label[for='name']").append("<p class='error' id='name-error'></p>");
            $("#name-error").text("Name cannot be blank!");
        }
        $errorCount += 1;
    }
    //email must follow regex pattern
    const $mailCheck = /^[\w]+[@][\w]+[.][\w]+$/;
    if ($mailCheck.test($("#mail").val()) == false) {
        if ($("#mail-error").length == 0) {
            $("label[for='mail']").append("<p class='error' id='mail-error'></p>");
            $("#mail-error").text("Invalid email!");
        }
        $errorCount += 1;
    }
    //at least one activity must be selected
    const $activityChecked = false;
    $(".activities input").each(function() {
        if ($(this).prop("checked")) {
            $activityChecked = true;
        }
        if ($activityChecked == false) {
            if ($("#activity-error").length == 0) {
                $(".activities legend").append("<p class='error' id='activity-error'></p>");
                $("#activity-error").text("At least one activity must be selected!");
            }
            $errorCount += 1;
        }
    });

    //if any error, prevent form submission
    if ($errorCount > 0) {
        event.preventDefault();
    }
});
