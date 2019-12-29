//

//put name field in focus state
$("#name").focus();

//show optional text input if "other" job role selected
$("#other-title").hide();
$("#title").change(function() {
    if ($(this).val() == "other"){
        $("#other-title").show();
    } else {
        $("#other-title").hide();
    }
});

//
