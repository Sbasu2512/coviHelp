class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :content
      t.references :user, index: true, foreign_key: true 
      t.references :symptom, index: true, foreign_key: true
      

      t.timestamps
    end
  end
end
