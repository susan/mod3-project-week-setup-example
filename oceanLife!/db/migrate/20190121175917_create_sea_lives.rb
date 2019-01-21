class CreateSeaLives < ActiveRecord::Migration[5.2]
  def change
    create_table :sea_lives do |t|
      t.string :name
      t.boolean :isMyFavorite
      t.string :image
      t.integer :ocean_id

      t.timestamps
    end
  end
end
