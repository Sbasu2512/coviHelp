class Api::PostsController < ApplicationController
  def index
  @posts = Post.joins(:user).select('users.*, posts.*')
  render json: @posts 
  end

  def create
    @post = Post.new(post_params)
    @post.save!
    puts @post.inspect
    
  end

  def destroy
    @post = Post.where(["id = ?", "#{params[:id]}"])
    puts @post.inspect
    @post.destroy_all
  end
  

  private

  def post_params
    params.permit(
      :user_id,
      :symptom_id,
      :content,
      :reply_to
    )
  end


end
