class Api::V1::ContactFormController < ApplicationController
protect_from_forgery with: :null_session, only: [:create]
    def index;end

    def new;end
    
    def create
        name = params[:name]
        email = params[:email]
        message = params[:message]
        Sendgrid.send_mail(name, email, message)
        # redirect_to root_path, status: :created
    end
end