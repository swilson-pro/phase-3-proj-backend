class Company < ApplicationRecord
    has_many :makeups
    has_many :favorites
    # has_many :favorite_makeups, through: :favorites, source: :makeup

end
