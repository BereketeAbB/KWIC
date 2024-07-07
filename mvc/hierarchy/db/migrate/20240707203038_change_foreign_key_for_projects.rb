class ChangeForeignKeyForProjects < ActiveRecord::Migration[7.1]
  def change
    rename_column :users, :user_id, :parent_id
  end
end
