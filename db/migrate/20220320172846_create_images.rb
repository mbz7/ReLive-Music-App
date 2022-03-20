class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :image_url
      t.string :band_name
      t.integer :concert_id

      t.timestamps
    end
  end
end
