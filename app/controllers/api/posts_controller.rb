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
    page_number = params[:page].to_i || 1
    per_page = 3

    @posts = Post.includes(:author, :likes, :comments).order(updated_at: :desc).paginate(page: page, per_page: per_page)
    @has_more_posts = @posts.total_pages > page
    
    render :index

end

    private

    def post_params
        params.require(:post).permit(:body)
    end
end