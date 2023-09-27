class Api::PostsController < ApplicationController

    wrap_parameters include: Post.attribute_names + [:photo]

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

    def update
        @post = Post.find(params[:id])
        if @post
            @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        render :show
    end

    private

    def post_params
        params.require(:post).permit(:body, :photo)
    end

end