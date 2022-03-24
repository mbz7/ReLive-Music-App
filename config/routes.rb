Rails.application.routes.draw do
  # resources :users, only: [:show, :create, :update]
  resources :users
  resources :concert_summaries, only: %i[index show create destroy]
  resources :images, only: %i[index show create destroy]
  resources :videos, only: %i[index show create destroy]
  resources :concerts, only: %i[index show create destroy]

  # log in
  post '/login', to: 'sessions#create'

  # post '/images', to: 'images#create'

  # log out
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'

  get '/me', to: 'users#show'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
