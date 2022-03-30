class CreateConcertComments < ActiveRecord::Migration[6.1]
  def change
    create_table :concert_comments do |t|
      t.string :text_comment
      t.integer :concert_id

      t.timestamps
    end
  end
end
