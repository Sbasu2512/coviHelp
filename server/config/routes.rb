Rails.application.routes.draw do
  namespace :api do
    resources :testing_locations, only: [:index] 
    resources :users, only: [:index]
    resources :symptoms, only: [:index]
    resources :posts, only: [:index]
    resources :surveys, only: [:index]
  end
end
