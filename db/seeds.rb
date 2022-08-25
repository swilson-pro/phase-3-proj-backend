# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'rest-client'

Makeup.destroy_all
Company.destroy_all
Favorite.destroy_all

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

makeupbrands_array = Makeup.all.pluck(:brand).uniq
clean_brands = makeupbrands_array.compact

clean_brands.each do |brand|
    Company.create!(name: brand)
end

makeups_array.each do |makeup|
    a = rand(0..1)
    if a == 1 then
    Favorite.create(
        makeup_id: Makeup.all.sample.id, # The error came from when we changed this to makeup.id
        company_id: Company.all.sample.id
    )
    else puts "no favorite here"
    end
end



puts "🌱 Done seeding!"