class AddReplyToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :reply_to, :integer
  end
end
