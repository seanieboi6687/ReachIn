class UpdateUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :gender, :string, null: false
  end
end
