class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized
  def authorized
    unless session.include? :user_id
      return render json: { error: 'Not Authorized' }, status: :unauthorized
    end
  end
end
