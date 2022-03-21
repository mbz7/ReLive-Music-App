class UsersController < ApplicationController
    # skip_before_action :authorized, only: %i[show create update]
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_params
  
    # def index
    #   render json: User.all
    # end
  
    def show
      current_user = User.find([:user_id])
      render json: current_user, status: :ok
    end
  
    def create
      user = User.create!(user_params)
      render json: user, status: :created
    end
    
    def update
      user = User.find(params[:id])
      
      user.update(user_params)
      render json: user, status: :ok
    end
    def destroy
      user = User.find(params[:id])
      user.destroy
      head :no_content
    end
    private
  
    #errors
    def invalid_params(invalid)
      render json: {
               errors: invalid.record.errors.full_messages,
             },
             status: :unprocessable_entity
    end
  
    # params
    def user_params
      params.permit(:username, :password)
    end
  end
  