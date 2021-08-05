class CreateTestingLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :testing_locations do |t|

      t.string :$active
      t.string :$temporarily_closed
      t.string :$location_id
      t.string :$pharmacy
      t.string :$community_lab
      t.string :$assessment_centre
      t.string :$location_name
      t.string :$location_name_fr
      t.string :$operated_by
      t.string :$operated_by_fr
      t.string :$city
      t.string :$address
      t.string :$address_fr
      t.string :$postal_code
      t.string :$province
      t.string :$latitude
      t.string :$longitude
      t.string :$phu_id
      t.string :$phu
      t.string :$phu_fr
      t.string :$phone
      t.string :$website
      t.string :$email
      t.string :$monday
      t.string :$tuesday
      t.string :$wednesday
      t.string :$thursday
      t.string :$friday
      t.string :$saturday
      t.string :$sunday
      t.string :$after_hours
      t.string :$appointments
      t.string :$online_appointments
      t.string :$phone_appointments
      t.string :$walk_ins
      t.string :$symptomatic
      t.string :$drive_through
      t.string :$general_population
      t.string :$children_under_2
      t.string :$age_threshold
      t.string :$weeks_pregnant
      t.string :$french_language_services
      t.string :$accessible
      t.string :$asl_interpretation
      t.string :$first_nations
      t.string :$free_parking
      t.string :$paid_parking
      t.string :$public_transit
      t.string :$additional_information
      t.string :$additional_information_fr
      
      t.timestamps
    end
  end
end
