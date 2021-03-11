# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Course.destroy_all
Topic.destroy_all
User.destroy_all

@ruby = User.create!(username: "ruby", email: "ruby@email.com", password:"123456")

puts "#{User.count} users created"

@topic1 =Topic.create!(category: 'Dancing')
@topic2 = Topic.create!(category: 'Cooking')
@topic3 = Topic.create!(category: 'Technology')

puts "#{Topic.count} topics created"

Course.create!(title: "Covid Dancing", info: 'Learn to dance while keeping socially distanced.  Also includes breathing techniques to not pass out from wearing a mask while trying to dance', topic: @topic1, img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uXd0Qgf6THO9_1LWCHP4YchxIB-zq7aGQQ&usqp=CAU', price: 20,  user: @ruby)
Course.create!(title: "Traditional Sichuan Cooking", info: 'Learn to cook traditional Sichuan style dishes including the main course, Sichuan style prawns.  You need a wok at home for this course.', topic: @topic2 , img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VZT1A8XaUGRP_7yzi4TgK-ON3q9IAxEI0Q&usqp=CAU', price: 20, user: @ruby)
Course.create!(title: "Advanced Excel Course", info: 'This course teaches how to automate and better structure you data in this advanced excel crashcourse. Be prepared for a fast paced learning environment with mock exercises to simulate a work environment.', topic: @topic3, img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZp9P43gY1QW459yGtFutPwMPFJOvCPhPSLg&usqp=CAU', price:20, user: @ruby)

puts "#{Course.count} courses created"

