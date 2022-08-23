class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.integer :makeup_id
      t.integer :company_id

      t.timestamps
    end
  end
end
