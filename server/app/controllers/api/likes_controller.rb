class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
    render json: @likes
end


def create
  @like = Like.new(post_params)
  @like.save!
  puts @like.inspect
  
end

def destroy
  @like = Like.where(["user_id = ? and post_id= ?", "#{delete_params[:user_id]}", "#{params[:id]}"])
  @like.destroy_all
  
end


private

def post_params
  params.permit(
    :post_id,
    :user_id
  )
end

def delete_params
  params.permit(
    :user_id
  )
end




end
