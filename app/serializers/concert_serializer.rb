class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :band, :venue, :location, :date
end
