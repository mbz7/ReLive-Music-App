class ConcertsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid,
              with: :render_unprocessable_entity_response

  def index
    render json: Concert.all.order('created_at')
  end

  def show
    concert = find_concert
    render json: concert, serializer: ConcertWithImageVideoCommentSerializerSerializer
  end

  def create
    user = User.find(session[:user_id])
    concert = user.concerts.create!(concert_params)
    render json: concert, status: :created
  end

  def update
    concert = find_concert
    concert.update!(concert_params)
    render json: concert, status: :accepted
  end

  def destroy
    concert = find_concert
    concert.destroy
    head :no_content
  end

  private

  def concert_params
    params.permit(:band_logo, :band, :venue, :location, :date)
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
