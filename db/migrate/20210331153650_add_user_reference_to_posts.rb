class AddUserReferenceToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :user, index:true, null: false
  add_foreign_key :posts, :users
  end
end
