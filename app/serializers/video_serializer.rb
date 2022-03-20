class VideoSerializer < ActiveModel::Serializer
  attributes :id, :video_url, :description, :concert_id
end
