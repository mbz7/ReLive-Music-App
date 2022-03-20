class CreateConcertSummaries < ActiveRecord::Migration[6.1]
  def change
    create_table :concert_summaries do |t|
      t.string :text_summary
      t.integer :concert_id

      t.timestamps
    end
  end
end
