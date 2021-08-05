class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :user_name
      t.string :email
      t.string :password
      t.integer :phone
      t.string :city
      t.string :province
      t.string :photo

      t.timestamps
    end
  end
end
