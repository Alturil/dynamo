<?php
if(isset($_POST["email"]) && isset($_POST["message"]) ){
    $to = "alturil@gmail.com";
    $subject = "Nuevo mensaje!";    
    $contenido .= "Email: ".$_POST["message"]."\n\n";    
    $header = "From: ".$_POST["email"]."\n";
    $header .= "Mime-Version: 1.0\n";
    $header .= "Content-Type: text/plain";

        if(mail($to, $subject, $contenido, $header)){
        echo "Graciela por tu mensaje!";
        }
}
?>