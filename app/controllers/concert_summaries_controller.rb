class ConcertSummariesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid,
              with: :render_unprocessable_entity_response

  def index
    render json: ConcertSummary.all
  end

  def show
    summary = find_summary
    render json: summary
  end

  def create
    summary = ConcertSummary.create!(summary_params)
    render json: summary, status: :created
  end

  def destroy
    summary = find_summary
    summary.destroy
    head :no_content
  end

  private

  def summary_params
    params.permit(:text_summary, :concert_id)
  end

  def find_summary
    ConcertSummary.find(params[:id])
  end

  def render_not_found_response
    render json: { error: 'Concert summary not found' }, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: {
             errors: exception.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
