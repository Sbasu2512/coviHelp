Rails.application.routes.draw do
  resources :dashboards
  namespace :api do
    resources :testing_locations, only: [:index] 
    resources :vaccination_locations, only: [:index] 
    resources :users, only: [:index]
    resources :symptoms, only: [:index]
    resources :posts
    resources :surveys
    resources :likes
  end
end
