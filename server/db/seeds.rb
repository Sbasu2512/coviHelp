# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating Users!"
User.destroy_all



User.create(first_name: 'Labber', user_name: '@Labber', last_name: 'Labber',  email: 'john@mail.ru', password: 'password', phone: 647111, city: 'Toronto', province: 'Ontario', photo: 'https://cdn.pixabay.com/photo/2021/07/25/07/50/man-6491148__480.png')
User.create(first_name: 'Richie', last_name: 'Doe', user_name: '@akula', email: 'richie@mail.ru', password: 'password', phone: 647111, city: 'Toronto', province: 'Ontario', photo: 'https://cdn.pixabay.com/photo/2016/03/31/20/27/avatar-1295773__480.png')
User.create(first_name: 'David', last_name: 'Doe',  user_name: '@vorobey', email: 'david@mail.ru', password: 'password', phone: 647111, city: 'Toronto', province: 'Ontario', photo: 'https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914__480.png')
User.create(first_name: 'Tico', last_name: 'Doe', user_name: '@lev', email: 'richie@mail.ru', password: 'password', phone: 647111, city: 'Toronto', province: 'Ontario', photo: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429__480.png')
User.create(first_name: 'Frank', last_name: 'Doe',  user_name: '@mangust', email: 'david@mail.ru', password: 'password', phone: 647111, city: 'Toronto', province: 'Ontario', photo: 'https://cdn.pixabay.com/photo/2021/07/03/10/54/naruto-6383640__480.jpg')


puts "Creating Symptoms!"
Symptom.destroy_all


Symptom.create(name: 'Difficulty breathing or shortness of breath')
Symptom.create(name: 'Tiredness or fatigue')
Symptom.create(name: 'Difficulty thinking or concentrating')
Symptom.create(name: 'Cough')
Symptom.create(name: 'Chest or stomach pain')
Symptom.create(name: 'Headache')
Symptom.create(name: 'Rash')
Symptom.create(name: 'Mood changes')
Symptom.create(name: 'Change in smell or taste')
Symptom.create(name: 'Changes in period cycles')

puts "Creating Posts!"
Post.destroy_all


Post.create!(user_id: 1, symptom_id: 1 , content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 2, symptom_id: 1 , content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 3, symptom_id: 1 , content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 1, symptom_id: 2, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 2, symptom_id: 2, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 3, symptom_id: 2 , content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 1, symptom_id: 3, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 2, symptom_id: 3, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 4, symptom_id: 3, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 4, symptom_id: 3, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 5, symptom_id: 3, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 1, symptom_id: 4, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 2, symptom_id: 4, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create(user_id: 3, symptom_id: 4, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 4, symptom_id: 4, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 1, symptom_id: 5, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 2, symptom_id: 5, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 3, symptom_id: 6, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 4, symptom_id: 6, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 1, symptom_id: 7, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create(user_id: 2, symptom_id: 7, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 3, symptom_id: 7, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 4, symptom_id: 7, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 2, symptom_id: 8, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create(user_id: 3, symptom_id: 8, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 4, symptom_id: 8, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 5, symptom_id: 8, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 2, symptom_id: 9, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 3, symptom_id: 9, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 4, symptom_id: 9, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 5, symptom_id: 9, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 2, symptom_id: 10, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 3, symptom_id: 10, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 4, symptom_id: 10, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")
Post.create!(user_id: 5, symptom_id: 10, content:  "Proin efficitur pharetra sodales. 
Nam vitae semper nibh. Phasellus pulvinar, ipsum nec tempus auctor, nunc risus 
gravida velit, sed gravida tellus dui in ante. Donec eu nunc vel ex consequat 
ultrices. Etiam non convallis justo. Phasellus in enim ex. Aliquam tristique 
dolor eget semper maximus. Fusce consequat massa eu congue")


puts "Creating Surveys!"
Survey.destroy_all

Survey.create(time_diagnozed: '2020-05-05', user_id: 3, symptom_id: 1)
Survey.create(time_diagnozed: '2020-12-04', user_id: 2, symptom_id: 2)
Survey.create(time_diagnozed: '2021-02-02', user_id: 1, symptom_id: 3)
Survey.create(time_diagnozed: '2021-03-11', user_id: 3, symptom_id: 4)

puts "Creating testing locations!"
TestingLocation.destroy_all
path = File.join Rails.root, 'db', 'seed_data', 'locations.json'
puts ".....Loading from #{path}"
file = File.read(path)
puts ".....Parsing data"
locations = JSON.parse file
puts ".....Feeding db"
locations.each {|location| TestingLocation.create location}
puts "-> Created #{locations.length()} locations"

puts "Creating likes!"
Like.destroy_all

Like.create(post_id: 1)
Like.create(post_id: 2)
Like.create(post_id: 3)
Like.create(post_id: 4)







