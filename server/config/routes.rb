Rails.application.routes.draw do
  namespace :api do
    resource 'testing_locations', only: [:show] 
  end
end
