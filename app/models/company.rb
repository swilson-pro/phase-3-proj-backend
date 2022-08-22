class Company < ApplicationRecord
    has_many makeups


    # but it also has many makeups, through: userproducts
end
