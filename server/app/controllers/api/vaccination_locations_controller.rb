class Api::VaccinationLocationsController < ApplicationController

  def index
    
    render json: VaccinationLocation.all
  end


end
