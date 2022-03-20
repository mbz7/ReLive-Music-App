class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :image_url
      t.string :title
      t.integer :concert_id

      t.timestamps
    end
  end
end
