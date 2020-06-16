class UsersController < ApplicationController
    #   before_action :authorized, only: [:show]
    
    def index 
        @users = User.all 
        json_response(@users)
    end 

    def new 
    @user = User.new
    end 

    def create 
        @user = User.create(user_params)
        if  @user.save 
            redirect_to user_path(@user)
        else 
            render 'new' 
        end 
    end 

    def show 
        @user = User.find(params[:id])
    end 

    def user_cars
        @user = User.find(params[:id])
        @user_cars = @user.cars 
        json_response(@user_cars)
    end 

    private
    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
