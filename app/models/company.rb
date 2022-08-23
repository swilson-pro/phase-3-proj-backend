class Company < ApplicationRecord
    has_many :makeups
    has_many :favorites

end
