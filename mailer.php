<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.        
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient, subject, content and headers:
        $recipient = "alturil@gmail.com";
        $subject = "Nuevo mensaje para la radio!";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Mensaje:\n$message\n";
        $email_headers = "From: $email <$email>";
        
        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Gracias por tu mensaje!";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "500 - Ha ocurrido un error en el servidor... :(";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "403 - Operacion no autorizada";
    }

?>