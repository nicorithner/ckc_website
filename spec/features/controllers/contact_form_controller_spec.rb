require 'rails_helper'

RSpec.describe 'ContactFormController' do
  describe "Contact Form Controller" do
    xit "requests" do
      email_params = ({
        name: "nico",
        email: "nicorithner@gmail.com",
        message: "testing this form"
      })
      post "/api/v1/create", params: email_params
      rsp = JSON.parse(response.body, symbolize_name: true)
      binding.pry
      expect(response).to be_successful
      expect(response.status_code).to eq("202")
    end
  end
end