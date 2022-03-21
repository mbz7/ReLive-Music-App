class ImagesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid,
              with: :render_unprocessable_entity_response

  def index
    render json: Image.all
  end

  def show
    image = find_image
    render json: image
  end

  def create
    image = Image.create!(image_params)
    render json: image, status: :created
  end

  def destroy
    image = find_image
    image.destroy
    head :no_content
  end

  private

  def image_params
    params.permit(:image_url, :title, :concert_id)
  end

  def find_image
    Image.find(params[:id])
  end

  def render_not_found_response
    render json: { error: 'Image not found' }, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: {
             errors: exception.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
