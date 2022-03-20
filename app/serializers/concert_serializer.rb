class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :band, :venue, :location, :date
  has_one :user
end
