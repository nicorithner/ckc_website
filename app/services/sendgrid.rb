require 'sendgrid-ruby'

include SendGrid

class Sendgrid
  def self.send_mail(name, email, message)
    mail = mail(name, email, message)
    mail.reply_to = SendGrid::Email.new(email: email)

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
    sg.client.mail._('send').post(request_body: mail.to_json)
  end

  private

  def self.mail(name, email, message)
    from = SendGrid::Email.new(email: 'info@coloradokettlebellclub.com')
    to = SendGrid::Email.new(email: 'ckc.contact@gmail.com')
    subject = "CKC contact form message from: #{name} - #{email}"
    content = SendGrid::Content.new(type: 'text/plain', value: message)
    SendGrid::Mail.new(from, subject, to, content)
  end
end
