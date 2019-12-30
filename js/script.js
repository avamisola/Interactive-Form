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
    if ($(this).prop("checked")) {
        $total += $dataCost;
    } else {
        $total -= $dataCost;
    }
    $("label[for='total']").text(`Total: $${$total}`);
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

//
$("form").submit(function(event){
    let $errorCount = 0;
    console.log($("#name-error").length);
    if ($("#name").val() == "") {
        if ($("#name-error").length == 0) {
            $("label[for='name']").append("<p class='error' id='name-error'></p>");
            $("#name-error").text("Name cannot be blank!");
        }
        $errorCount += 1;
    }
    if ($("#mail").val() == "") {
        $("label[for='mail']").append("<p class='error' id='blank-email-error'></p>");
        $("#blank-email-error").text("Email cannot be blank!");
        $errorCount += 1;
        //console.log($("#mail").val());
    } else {
        const $mailCheck = /^[\w]+[@][\w]+[.][\w]+$/;
        //console.log($mailCheck.test($("#mail")));
        if ($mailCheck.test($("#mail") = false)) {
            $("label[for='mail']").append("<p class='error' id='invalid-email-error'></p>");
            $("#invalid-email-error").text("Invalid email!");
            $errorCount += 1;
        }
    }

    if ($errorCount > 0) {
        event.preventDefault();
        
    }


});
