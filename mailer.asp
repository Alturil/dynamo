<%
dim message
message=Request.Form("message")
Set Mail = CreateObject("CDO.Message")
Mail.Subject = "Nuevo mensaje desde la web!"
Mail.From = "contacto@dynamoradio.com.ar"
Mail.To = "contacto@dynamoradio.com.ar"
Mail.TextBody = message
Mail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusing") = 1
'Name or IP of remote SMTP server
Mail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "mail.dynamoradio.com.ar"
'Server port
Mail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 587
Mail.Send
set Mail = nothing
%>