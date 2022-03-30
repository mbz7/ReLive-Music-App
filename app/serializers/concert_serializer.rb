class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :band_logo, :band, :venue, :location, :date
end
