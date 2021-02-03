require 'rails_helper'

RSpec.describe Sendgrid do
  describe "Sendgrid connection" do
    it "Mail method sends the correct information" do
      mail = Sendgrid.mail("nico", "nicorithner@gmail.com", "testing this form")
      expect(mail.from["email"]).to eq("info@coloradokettlebellclub.com")
      expect(mail.personalizations[0]["to"][0]["email"]).to eq("ckc.contact@gmail.com")
      expect(mail.subject).to eq("CKC contact form message from: nico - nicorithner@gmail.com")
    end

    it "Response is 202" do
      response = Sendgrid.send_mail("nico", "nicorithner@gmail.com", "testing this form")
      expect(response.status_code).to eq("202")
    end
  end
end
