class Userproduct < ApplicationRecord
    has_many favorites
    has_many companies, through: favorites #many companies can favorite it
    belongs_to company # created by this company
    belongs_to makeup
end
