<%
Set myMail = CreateObject("CDO.Message")
myMail.Subject = "Sending email with CDO"
myMail.From = "mymail@mydomain.com"
myMail.To = "contacto@dynamoradio.com.ar"
myMail.TextBody = "This is a message."
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2
'Name or IP of remote SMTP server
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "mail.dynamoradio.com.ar"
'Server port
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 587
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusername") = "contacto@dynamoradio.com.ar"
myMail.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "Password132"
myMail.Configuration.Fields.Update
myMail.Send
set myMail = nothing
%>