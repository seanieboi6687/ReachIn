class Api::PostsController < ApplicationController

    def create 
        @post = Post.new(post_params)
        @post.author = current_user
        if @post.save
            render :index
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
            render :index
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        render :index
    end

    private

    def post_params
        params.require(:post).permit(:body)
    end

end