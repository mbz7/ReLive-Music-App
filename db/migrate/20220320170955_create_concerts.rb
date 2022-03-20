class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.integer :user_id
      t.integer :band
      t.integer :venue
      t.string :location
      t.integer :date

      t.timestamps
    end
  end
end
