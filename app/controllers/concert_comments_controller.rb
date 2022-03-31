class ConcertCommentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid,
              with: :render_unprocessable_entity_response

  def index
    render json: ConcertComment.all
  end

  def show
    comment = find_comment
    render json: comment
  end

  def create
    comment = ConcertComment.create!(comment_params)
    render json: comment, status: :created
  end

  def destroy
    comment = find_comment
    comment.destroy
    head :no_content
  end

  private

  def comment_params
    params.permit(:text_comment, :concert_id)
  end

  def find_comment
    ConcertComment.find(params[:id])
  end

  def render_not_found_response
    render json: { error: 'Concert comment not found' }, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: {
             errors: exception.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
