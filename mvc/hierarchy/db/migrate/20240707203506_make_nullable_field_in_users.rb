class MakeNullableFieldInUsers < ActiveRecord::Migration[7.1]
  def change
    change_column("users", "user_id", :string, null: true)
  end
end
