class ConcertWithImageVideoCommentSerializerSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :band_logo, :band, :venue, :location, :date
  has_many :images
  has_many :videos
  has_many :concert_comments
end
