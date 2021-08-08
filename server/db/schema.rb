# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_08_165624) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "likes", force: :cascade do |t|
    t.bigint "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["post_id"], name: "index_likes_on_post_id"
  end

  create_table "posts", force: :cascade do |t|
    t.text "content"
    t.bigint "user_id"
    t.bigint "symptom_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "reply_to"
    t.index ["symptom_id"], name: "index_posts_on_symptom_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "surveys", force: :cascade do |t|
    t.date "time_diagnozed"
    t.bigint "user_id"
    t.bigint "symptom_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["symptom_id"], name: "index_surveys_on_symptom_id"
    t.index ["user_id"], name: "index_surveys_on_user_id"
  end

  create_table "symptoms", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "testing_locations", force: :cascade do |t|
    t.string "active"
    t.string "temporarily_closed"
    t.string "location_id"
    t.string "pharmacy"
    t.string "community_lab"
    t.string "assessment_centre"
    t.string "location_name"
    t.string "location_name_fr"
    t.string "operated_by"
    t.string "operated_by_fr"
    t.string "city"
    t.string "address"
    t.string "address_fr"
    t.string "postal_code"
    t.string "province"
    t.string "latitude"
    t.string "longitude"
    t.string "phu_id"
    t.string "phu"
    t.string "phu_fr"
    t.string "phone"
    t.string "website"
    t.string "email"
    t.string "monday"
    t.string "tuesday"
    t.string "wednesday"
    t.string "thursday"
    t.string "friday"
    t.string "saturday"
    t.string "sunday"
    t.string "after_hours"
    t.string "appointments"
    t.string "online_appointments"
    t.string "phone_appointments"
    t.string "walk_ins"
    t.string "symptomatic"
    t.string "drive_through"
    t.string "general_population"
    t.string "children_under_2"
    t.string "age_threshold"
    t.string "weeks_pregnant"
    t.string "french_language_services"
    t.string "accessible"
    t.string "asl_interpretation"
    t.string "first_nations"
    t.string "free_parking"
    t.string "paid_parking"
    t.string "public_transit"
    t.string "additional_information"
    t.string "additional_information_fr"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "user_name"
    t.string "email"
    t.string "password"
    t.integer "phone"
    t.string "city"
    t.string "province"
    t.string "photo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "likes", "posts"
  add_foreign_key "posts", "symptoms"
  add_foreign_key "posts", "users"
  add_foreign_key "surveys", "symptoms"
  add_foreign_key "surveys", "users"
end
