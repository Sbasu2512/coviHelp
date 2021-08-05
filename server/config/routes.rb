Rails.application.routes.draw do
  namespace :api do
    resource 'testing_locations', only: [:show] 
    resources :users, only: [:index]
    resources :symptoms, only: [:index]
    resources :posts, only: [:index]
    resources :surveys, only: [:index]
  end
end
