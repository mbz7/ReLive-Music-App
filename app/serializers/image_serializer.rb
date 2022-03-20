class ImageSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :band_name, :concert_id
end
