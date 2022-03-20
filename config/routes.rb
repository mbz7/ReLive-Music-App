Rails.application.routes.draw do
  
  resources :users, only: [:index, :show, :create]
  resources :concert_summaries, only: [:index, :show, :create]
  resources :images, only: [:index, :show, :create, :destroy]
  resources :videos, only: [:index, :show, :create, :destroy]
  resources :concerts, only: [:index, :show, :create, :destroy]

  # log in
  post '/login', to: 'sessions#create'

  # log out
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'

  get '/me', to: 'users#show'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
