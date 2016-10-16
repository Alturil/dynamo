$(document).ready(function(){

    var audio = $('<audio />', {
      // autoPlay : 'autoplay'        
    });

    var playing = 1;
     
    // Call our addSource function, and pass in the audio element
    // and the path(s) to your audio.
    addSource(audio, 'http://audio-mp3.ibiblio.org:8000/wcpe.mp3');
    addSource(audio, 'http://audio-ogg.ibiblio.org:8000/wcpe.ogg');
   
    audio.appendTo('body');
     
   // Adds a source element, and appends it to the audio element, represented 
   // by elem.
    function addSource(elem, path) {
      $('<source />').attr('src', path).appendTo(elem);
    }


    $("#volume").change(function(){
        //alert($("#volume").val() / 100);
        audio.prop("volume", $("#volume").val() / 100);
        //alert(audio.volume);
        //audio.pause();
        //alert($('#audio').id);
        //alert($("#volume").slider('values'););
        //alert( $('#audio').volume() );
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
        $("#links").toggleClass("menu-expand");        
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

    // $(window).resize(checkSize);

    // function checkSize() {

    //     // Desktop
    //     if ($(body).css("width") >= "1000px" ){
    //         alert("puto"});
    //         $("#links").removeClass('menu-expand');
    //     }

    // }

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
            url: 'mailer.php',
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
            $('#email').val('');
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