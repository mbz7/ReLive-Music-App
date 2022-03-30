class Concert < ApplicationRecord
  has_many :videos, dependent: :destroy
  has_many :images, dependent: :destroy
  has_many :concert_comments, dependent: :destroy

  validates :band, presence: true
end
