Rails.application.routes.draw do
  resources :courses
  resources :topics
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
end
