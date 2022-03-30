class ConcertCommentSerializer < ActiveModel::Serializer
  attributes :id, :text_comment, :concert_id
end
