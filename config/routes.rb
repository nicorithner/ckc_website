Rails.application.routes.draw do
  root to: 'pages#index'

  post '/', to: 'contact_form#create'
end
