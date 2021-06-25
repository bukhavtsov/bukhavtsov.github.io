$(function () {
    "use strict";

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();
    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "https://formspree.io/f/xvodqgdq";
            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: sent(),
                error: sent()
            });
            return false;
        }
    })
});

function sent(){
    var messageAlert = 'alert-success';
    var messageText = 'Message sent. Thank you!';
    // let's compose Bootstrap alert box HTML
    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
    // If we have messageAlert and messageText
    if (messageAlert && messageText) {
        // inject the alert to .messages div in our form
        $('#contact-form').find('.messages').html(alertBox);
        // empty the form
        $('#contact-form')[0].reset();
    }
}