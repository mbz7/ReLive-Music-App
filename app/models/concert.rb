class Concert < ApplicationRecord
  belongs_to :user
  belongs_to :band
  belongs_to :venue
  has_many :videos
  has_many :images
  has_many :concert_summaries
end
