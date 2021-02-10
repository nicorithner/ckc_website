Rails.application.routes.draw do
  root to: 'pages#index'

  namespace :api do
    namespace :v1 do
      get '/new', to: 'contact_form#new'
      post '/create', to: 'contact_form#create'
    end
  end
end
