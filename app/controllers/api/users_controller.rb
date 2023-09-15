class Api::UsersController < ApplicationController

    before_action :require_logged_out, only: [:create]
    wrap_parameters :user, include: [:first_name, :last_name,:phone_number, :gender, :email, :password]
    
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :phone_number, :gender, :email, :password)
    end
end
