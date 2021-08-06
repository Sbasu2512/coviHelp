class Api::PostsController < ApplicationController
  def index
  @posts = Post.joins(:user).select('users.*, posts.*')
  render json: @posts 
  end
end
