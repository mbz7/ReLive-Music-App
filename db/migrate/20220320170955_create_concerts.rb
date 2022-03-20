class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.integer :user_id
      t.integer :band_id
      t.integer :venue_id
      t.string :location
      t.integer :date

      t.timestamps
    end
  end
end
