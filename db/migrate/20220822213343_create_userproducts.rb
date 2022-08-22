class CreateUserproducts < ActiveRecord::Migration[7.0]
  def change
    create_table :newproducts do |t|
      t.string :brand
      t.string :name
      t.float :price
      t.string :image_link
      t.text :description
      t.integer :rating
      t.string :product_type

      t.timestamps
    end
  end
end
