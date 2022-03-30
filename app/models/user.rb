class User < ApplicationRecord
  has_many :concerts
  has_many :videos, through: :concerts
  has_many :images, through: :concerts
  has_many :concert_comments, through: :concerts
  has_secure_password
end
