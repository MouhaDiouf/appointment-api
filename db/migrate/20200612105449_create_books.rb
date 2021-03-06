# frozen_string_literal: true

class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.integer :user_id
      t.integer :car_id
      t.string :date
      t.string :city
      t.timestamps
    end
    add_index :books, %i[user_id car_id], unique: true
end
end
