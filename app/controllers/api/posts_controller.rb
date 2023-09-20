class Api::PostsController < ApplicationController
def create 
    @post = Post.new(post_params)
    @post.author = current_user

    if @post.save
        render :show
    else
        render json: @post.errors.full_messages, status: 422
    end

end

def index
    @posts = Post.all

    render :index

end

    private

    def post_params
        params.require(:post).permit(:body)
    end
end