class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :band_id, :venue_id, :location, :date
  has_one :user
end
