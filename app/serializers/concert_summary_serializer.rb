class ConcertSummarySerializer < ActiveModel::Serializer
  attributes :id, :text_summary, :concert_id
end
