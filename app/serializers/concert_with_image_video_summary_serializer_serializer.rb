class ConcertWithImageVideoSummarySerializerSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :band, :venue, :location, :date
  has_many :images
  has_many :videos
  has_many :concert_summaries
end
