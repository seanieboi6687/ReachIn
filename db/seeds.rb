# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

ApplicationRecord.transaction do 
  puts "Destroying tables..."

  User.destroy_all
  Post.destroy_all
  Comment.destroy_all

  puts "Resetting primary keys for all tables..."

  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('posts')
  ApplicationRecord.connection.reset_pk_sequence!('comments')
#   ApplicationRecord.connection.reset_pk_sequence!('posts')

  puts "Creating users..."

end

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

  user3 = User.create!(
    first_name: "Sean",
    last_name: "Jeun",
    phone_number: "9171234567",
    gender: "Male",
    bio: "I just want to graduate.",
    email: 'seanj@gmail.com', 
    password: 'seanpassword'
  )

  puts "Creating posts..."
  post1 = Post.create!(
    body: "Hello from post1",
    author_id: user1.id
  )

  post2 = Post.create!(
    body: "Today, we are gonna give our trees little frends",
    author_id: user2.id
  )

  post3 = Post.create!(
    body: "THIS ACTUALY WORKS?!?!?!",
    author_id: user3.id
  )

  post1.photo.attach(io: URI.open("https://reachin-seeds.s3.amazonaws.com/testing.png"),
  filename: "testing.png")

  post2.photo.attach(io: URI.open("https://reachin-seeds.s3.amazonaws.com/bob-ross-trees.jpeg"),
  filename: "bob-ross-trees.jpeg")

  post3.photo.attach(io: URI.open("https://reachin-seeds.s3.amazonaws.com/mind-blown.gif"),
  filename: "mind-blow.gif")

  puts "Creating comments..."
  comment1 = Comment.create!(
    content: "Let's give the tree fwends!",
    commenter_id: user1.id,
    post_id: post2.id
  )

  comment2 = Comment.create!(
    content: "Woohoo, it works!",
    commenter_id: user2.id,
    post_id: post1.id
  )

  puts "Done!"