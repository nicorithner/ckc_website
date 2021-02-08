class ContactFormController < ApplicationController

    def index;end

    def create
        name = params[:contact][:name]
        email = params[:contact][:email]
        message = params[:contact][:message]
        SendGrid.send_mail(name, email, message)
    end
end