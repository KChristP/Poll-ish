class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :body, null: false
      t.integer :pollish_id, null: false

      t.timestamps null: false
    end

    add_index :questions, :pollish_id
  end
end
