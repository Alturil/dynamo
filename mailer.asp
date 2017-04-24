<%
dim message
message=Request.Form("message")
dim nombre
nombre=Request.Form("nombre")
Set Mail = CreateObject("CDO.Message")
Mail.Subject = "Nuevo mensaje desde la web!"
Mail.From = "contacto@dynamoradio.com.ar"
Mail.To = "contacto@dynamoradio.com.ar"
Mail.TextBody = "De: " + nombre + " - Mensaje: " + message
Mail.HTMLBody = "<p><b>De:</b> " + nombre + "</p><p><br><b>Mensaje:</b> " + message + "</p>"
Mail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusing") = 1
'Name or IP of remote SMTP server
Mail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "mail.dynamoradio.com.ar"
'Server port
Mail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 587
Mail.Send
Response.Write "Muchas gracias por tu mensaje!"
set Mail = nothing
%>