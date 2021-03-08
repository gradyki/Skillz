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
@topic3 = Topic.create!(category: 'Singing')

puts "#{Topic.count} topics created"

Course.create!(title: "Dancing", info: 'learn to dance', topic: @topic1, img_url: 'https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/157562965_433947704558961_36440051690548463_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=4vJR6bowIgUAX_rujG5&oh=f8ecbdcaeb75b1b3cec00b442916b950&oe=606DF50B', price: 20,  user: @ruby)
Course.create!(title: "Cooking", info: 'learn to cook', topic: @topic2 , img_url: 'https://scontent.cdninstagram.com/v/t51.2885-15/e35/149013595_416578309623717_1169643301252790182_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=Uni-ZBNtWG8AX-jHgZg&oh=e72d816474b9d550dcb38339280370fd&oe=60488884', price: 20, user: @ruby)
Course.create!(title: "Wine Making", info: 'learn to sing', topic: @topic3, img_url: 'https://scontent.cdninstagram.com/v/t51.2885-15/e35/p480x480/157802495_2562810797357039_3566495144566105831_n.jpg?tp=1&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=5zUc1g_1wHQAX9z9RzA&oh=e8b7ce7bc89fffc8ef4229104e99d06a&oe=60718A20', price:20, user: @ruby)

puts "#{Course.count} courses created"

