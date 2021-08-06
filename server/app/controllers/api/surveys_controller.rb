class Api::SurveysController < ApplicationController
  def index
    @surveys = Survey.all
    render json: @surveys 
  end
  
  def create
    @survey = Survey.new(survey_params)
    @survey.save!
    puts @survey
    
    
  end

  private

  def survey_params
    params.permit(
      :user_id,
      :symptom_id,
      :time_diagnozed
    )
  end


end
