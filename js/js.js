$(document).ready(function(){

    var audio = $("#audio");
    var playing;

    if (/Mobi/.test(navigator.userAgent)) {
        playing = 0;
        $("#playPause").removeClass("fa-pause-circle-o").addClass("fa-play-circle-o");
    }
    else{        
        audio.attr('autoplay', 'autoplay');
        playing = 1;
    }     

    $("#volume").change(function(){     
        audio.prop("volume", $("#volume").val() / 100);        
    });

    $("#playPause").click(function(){
        togglePlay(this);
    });

    function togglePlay(element){        
        if ( playing == 0 ) {
            audio.trigger("play");
            $(element).removeClass("fa-play-circle-o").addClass("fa-pause-circle-o");
            playing = 1;
        }
        else
        {
            audio.trigger("pause");            
            $(element).removeClass("fa-pause-circle-o").addClass("fa-play-circle-o");
            playing = 0;
        }
    }

    $("#menuIcon i").click(function(){        
        $("#links").toggleClass("menu-expand");        s
    });

    $("#links a").click(function(){        
        $("#links").toggleClass("menu-expand");        
    });

    $(".form-messages span").click(function(){
        hideFormMessages();
    });

    var hideFormMessages = function() {
       $(".form-messages").addClass('hidden');
       $("#ajax-contact").removeClass('hidden');
    }

    var showFormMessages = function(text) {
       $(".form-messages p").html(text);
       $(".form-messages").removeClass('hidden');
       $("#ajax-contact").addClass('hidden');
    }

    // - METADATA ********************

    var getMetadata = function()
    {
        $.ajax({
            type: 'GET',
            url: 'http://server4.veemesoft.com.ar:26948/7',            
            dataType: 'text/plain',
            Origin: "http://dynamoradio.com.ar"
        })
        .done(function(response) {
            $("#metadata-artist").html(response.toString());        
            // alert(response);
        });
    }

/*
    function getMetadata() {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                $("#metadata-artist").html(this.responseText);
            }
    };
    xhttp.open("GET", "http://server4.veemesoft.com.ar:26948/7", true);
    xhttp.send();
}
*/
    getMetadata();

    // --------------------- FORM

    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: 'mailer.asp',
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            //$(formMessages).removeClass('error');
            //$(formMessages).addClass('success');

            // Set the message text.
            // $(formMessages).text(response);
            showFormMessages(response);

            // Clear the form.            
            $('#nombre').val('');
            $('#message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            //$(formMessages).removeClass('success');
            //$(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                // $(formMessages).text(data.responseText);
                showFormMessages(data.responseText);
            } else {
                $(formMessages).text('Error!');
            }
        });

    });


});