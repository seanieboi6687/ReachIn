class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.commenter_id = current_user.id
        if @comment.save
            render :show
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment.commenter_id == current_user.id
            @comment.destroy
            render :show
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:content, :post_id, :commenter_id)
    end
end