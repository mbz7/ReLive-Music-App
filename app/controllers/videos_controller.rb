class VideosController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid,
              with: :render_unprocessable_entity_response

  def index
    render json: Video.all
  end

  def show
    video = find_video
    render json: video
  end

  def create
    video = Video.create!(video_params)
    render json: video, status: :created
  end

  def destroy
    video = find_video
    video.destroy
    head :no_content
  end

  private

  def video_params
    params.permit(:video_url, :title, :concert_id)
  end

  def find_video
    Video.find(params[:id])
  end

  def render_not_found_response
    render json: { error: 'Video not found' }, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: {
             errors: exception.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
