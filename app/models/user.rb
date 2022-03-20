class User < ApplicationRecord
  has_secure_password
  has_many :concerts
  has_many :videos, through: :concerts
  has_many :images, through: :concerts
  has_many :concert_summaries, through: :concerts
end
