class Video < ApplicationRecord
    belongs_to :concert
    belongs_to :user, through: :concert
end
