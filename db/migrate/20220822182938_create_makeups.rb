class CreateMakeups < ActiveRecord::Migration[7.0]
  def change
    create_table :makeups do |t|
      t.string :brand
      t.string :name
      t.float :price
      t.string :image_link
      t.text :description
      t.integer :rating
      t.string :category
      t.string :product_type
      t.integer :company_id

      t.timestamps
    end
  end
end
