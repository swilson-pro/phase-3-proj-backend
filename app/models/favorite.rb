class Favorite < ApplicationRecord
    belongs_to :company, optional: true
    belongs_to :makeup
end
