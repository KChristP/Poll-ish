class CreatePollishes < ActiveRecord::Migration
  def change
    create_table :pollishes do |t|
      t.integer :group_id, null: false
      t.boolean :live, null: false, default: false

      t.timestamps null: false
    end

    add_index :pollishes, :group_id
  end
end
