class Makeup < ApplicationRecord
    has_many :favorites
    has_many :companies, through: :favorites
    belongs_to :company, optional: true
    paginates_per 20
end
