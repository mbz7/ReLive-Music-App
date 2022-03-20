class User < ApplicationRecord
    has_many :concerts
    has_many :videos, through: :concerts
    has_many :images, through: :concerts
    has_many :concert_summaries, through: :concerts
    has_secure_password
  # validations
end
