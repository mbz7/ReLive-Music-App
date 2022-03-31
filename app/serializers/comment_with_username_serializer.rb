class CommentWithUsernameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :text_comment, :concert_id
end
