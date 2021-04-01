# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comment.destroy_all
Post.destroy_all
Profile.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'adming@email.com', password: '12345678')

puts "#{User.count} users created"

@first=Post.create!(title:"hi", user: @admin, description:"great", img_url:"http://www.google.com")

Comment.create!(comment_text: "thisisgood", post:@first, user: @admin)
@profile=Profile.create!(img_url:"this is profile pic", user: @admin)
