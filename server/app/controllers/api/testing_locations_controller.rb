class Api::TestingLocationsController < ApplicationController
  def show
    puts 'Hi'
    redirect_to '/'
  end
end
