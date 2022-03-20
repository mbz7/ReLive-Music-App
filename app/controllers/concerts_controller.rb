class ConcertsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid,
              with: :render_unprocessable_entity_response

  def index
    render json: Concert.all
  end

  def show
    concert = find_concert
    render json: concert
  end

  def create
    concert = Concert.create!(concert_params)
    render json: concert, status: :created
  end

  private

  def concert_params
    params.permit(:user_id, :band, :venue, :location, :date)
  end

  def find_concert
    Concert.find(params[:id])
  end

  def render_not_found_response
    render json: { error: 'Concert not found' }, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: {
             errors: exception.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
