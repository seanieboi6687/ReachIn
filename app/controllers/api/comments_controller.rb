class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render :index
    end

    private
    def comment_params
        params.require(:comment).permit(:content)
    end
end