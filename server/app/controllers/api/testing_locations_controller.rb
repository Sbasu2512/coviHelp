class Api::TestingLocationsController < ApplicationController
  
  def index
    
    render json: TestingLocation.all
  end

end
