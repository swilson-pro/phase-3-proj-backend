# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'rest-client'

Makeup.destroy_all
puts "seeding data..."

    url = "https://makeup-api.herokuapp.com/api/v1/products.json"
    response = RestClient.get(url)
    makeups_array = JSON.parse(response)

    makeups_array.each do |makeup|
        Makeup.create!(
            name: makeup["name"],
            brand: makeup["brand"],
            price: makeup["price"],
            image_link: makeup["image_link"],
            description: makeup["description"],
            rating: makeup["rating"],
            product_type: makeup["product_type"]
        )
    end

    Company.create!([
       {name: "Chanel"}, {name: "colourpop"}, {name: "maybelline"}
])

puts "🌱 Done seeding!"