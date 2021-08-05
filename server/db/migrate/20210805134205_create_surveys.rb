class CreateSurveys < ActiveRecord::Migration[5.2]
  def change
    create_table :surveys do |t|
      t.date :time_diagnozed
      t.references :user, index: true, foreign_key: true 
      t.references :symptom, index: true, foreign_key: true

      t.timestamps
    end
  end
end
