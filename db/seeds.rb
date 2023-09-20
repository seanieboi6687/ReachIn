# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
  puts "Destroying tables..."

  User.destroy_all

  puts "Resetting primary keys..."

  ApplicationRecord.connection.reset_pk_sequence!('users')
#   ApplicationRecord.connection.reset_pk_sequence!('posts')

  puts "Creating users..."
  user1 = User.create!(
    first_name: "Demo",
    last_name: "User",
    phone_number: "9174853658",
    gender: "Prefer not to respond",
    bio: "This is demo's bio",
    email: 'demo@user.io', 
    password: 'password'
  )

  user2 = User.create!(
    first_name: "Bob",
    last_name: "Ross",
    phone_number: "7185469856",
    gender: "Male",
    bio: "We don't laugh because we feel good, we feel good because we laugh.",
    email: 'bobross@gmail.com', 
    password: 'bobrossrox'
  )

  post1 = Post.create!(
    body: "Hello from post1",
    author_id: user1.id
  )

  post2 = Post.create!(
    body: "Today, we are gonna give our trees little frends",
    author_id: user2.id
  )

  # More users
#   10.times do 
#     User.create!({
#       username: Faker::Internet.unique.username(specifier: 3),
#       email: Faker::Internet.unique.email,
#       password: 'password'
#     }) 
#   end

  puts "Done!"
end