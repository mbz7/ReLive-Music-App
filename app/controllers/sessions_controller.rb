class SessionsController < ApplicationController
  # skip_before_action :authorized, only: :create

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: 'Invalid Username or Password' }, status: :forbidden
    end
  end

  def destroy
    user = User.find_by(username: params[:username])
    session[:user_id] = nil
    head :no_content
  end

  private
end
