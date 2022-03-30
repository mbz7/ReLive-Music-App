class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :band_logo, :band, :venue, :location, :date
end
