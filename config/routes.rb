Rails.application.routes.draw do
  
  resources :users
  resources :concert_summaries
  resources :images
  resources :videos
  resources :venues
  resources :bands
  resources :concerts

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
