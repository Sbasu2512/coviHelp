class CreateVaccinationLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :vaccination_locations do |t|
      
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
