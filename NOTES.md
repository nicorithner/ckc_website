Sendgrid
Good Response:
`Sendgrid.send_mail("nico", "nicorithner@gmailcom", "testing this form")`
=> #<SendGrid::Response:0x00007f9d8d2f9838 @status_code="202", @body="", @headers={"server"=>["nginx"], "date"=>["Tue, 02 Feb 2021 17:24:45 GMT"], "content-length"=>["0"], "connection"=>["close"], "x-message-id"=>["OgOotlHIR0yiF-16baPbAg"], "access-control-allow-origin"=>["https://sendgrid.api-docs.io"], "access-control-allow-methods"=>["POST"], "access-control-allow-headers"=>["Authorization, Content-Type, On-behalf-of, x-sg-elas-acl"], "access-control-max-age"=>["600"], "x-no-cors-reason"=>["https://sendgrid.com/docs/Classroom/Basics/API/cors.html"]}>

Missing message response:
`Sendgrid.send_mail("nico", "nicorithner@gmailcom", "")`
#<SendGrid::Response:0x00007f9d873d3750 @status_code="400", @body="{\"errors\":[{\"message\":\"The content value must be a string at least one character in length.\",\"field\":\"content.0.value\",\"help\":\"http://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/errors.html#message.content.value\"}]}", @headers={"server"=>["nginx"], "date"=>["Tue, 02 Feb 2021 17:37:20 GMT"], "content-type"=>["application/json"], "content-length"=>["219"], "connection"=>["close"], "access-control-allow-origin"=>["https://sendgrid.api-docs.io"], "access-control-allow-methods"=>["POST"], "access-control-allow-headers"=>["Authorization, Content-Type, On-behalf-of, x-sg-elas-acl"], "access-control-max-age"=>["600"], "x-no-cors-reason"=>["https://sendgrid.com/docs/Classroom/Basics/API/cors.html"]}>

Response in pry:

[1] pry(#<RSpec::ExampleGroups::Sendgrid::SendgridConnection>)> response
=> #<SendGrid::Response:0x00007fc0eac089a8
 @body="",
 @headers=
  {"server"=>["nginx"],
   "date"=>["Tue, 02 Feb 2021 18:36:52 GMT"],
   "content-length"=>["0"],
   "connection"=>["close"],
   "x-message-id"=>["apltDwLaR527Fpr6o0BRfQ"],
   "access-control-allow-origin"=>["https://sendgrid.api-docs.io"],
   "access-control-allow-methods"=>["POST"],
   "access-control-allow-headers"=>["Authorization, Content-Type, On-behalf-of, x-sg-elas-acl"],
   "access-control-max-age"=>["600"],
   "x-no-cors-reason"=>["https://sendgrid.com/docs/Classroom/Basics/API/cors.html"]},
 @status_code="202">


 Pry for mail method:

 pry(#<RSpec::ExampleGroups::Sendgrid::SendgridConnection>)> response
=> #<SendGrid::Mail:0x00007ffc35abb218
 @asm=nil,
 @attachments=[],
 @batch_id=nil,
 @categories=[],
 @contents=[{"type"=>"text/plain", "value"=>"testing this form"}],
 @custom_args={},
 @from=#<SendGrid::Email:0x00007ffc35ac01a0 @email="info@coloradokettlebellclub.com", @name=nil>,
 @headers={},
 @ip_pool_name=nil,
 @mail_settings=nil,
 @personalizations=[{"to"=>[{"email"=>"ckc.contact@gmail.com"}]}],
 @reply_to=nil,
 @sections={},
 @send_at=nil,
 @subject="CKC contact form message from: nico - nicorithner@gmail.com",
 @template_id=nil,
 @tracking_settings=nil>

