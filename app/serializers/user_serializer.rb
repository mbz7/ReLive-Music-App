class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :profile_image_url, :email, :username, :password_digest
end
