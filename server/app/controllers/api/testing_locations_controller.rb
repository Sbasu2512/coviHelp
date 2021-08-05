class Api::TestingLocationsController < ApplicationController
  def index
    render json: TestingLocation.new
  end

end
