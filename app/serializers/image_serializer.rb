class ImageSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title, :concert_id
end
