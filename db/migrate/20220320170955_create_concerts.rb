class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.integer :user_id
      t.string :band_logo
      t.string :band
      t.string :venue
      t.string :location
      t.string :date

      t.timestamps
    end
  end
end
