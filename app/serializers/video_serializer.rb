class VideoSerializer < ActiveModel::Serializer
  attributes :id, :video_url, :title, :concert_id
end
