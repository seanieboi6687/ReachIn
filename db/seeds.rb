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
  Like.destroy_all

  puts "Resetting primary keys for all tables..."

  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('posts')
  ApplicationRecord.connection.reset_pk_sequence!('comments')
  ApplicationRecord.connection.reset_pk_sequence!('likes')
#   ApplicationRecord.connection.reset_pk_sequence!('posts')

  puts "Creating users..."

end

  demo = User.create!(
    first_name: "Demo",
    last_name: "User",
    phone_number: "9174853658",
    gender: "Prefer not to respond",
    bio: "This is demo's bio",
    email: 'demo@user.io', 
    password: 'password'
  )

  bob = User.create!(
    first_name: "Bob",
    last_name: "Ross",
    phone_number: "7185469856",
    gender: "Male",
    bio: "We don't laugh because we feel good, we feel good because we laugh.",
    email: 'bobross@gmail.com', 
    password: 'bobrossrox'
  )

  sean = User.create!(
    first_name: "Sean",
    last_name: "Jeun",
    phone_number: "9171234567",
    gender: "Male",
    bio: "Let's get this shmoney",
    email: 'seanj@gmail.com', 
    password: 'seanpassword'
  )

  dennis = User.create!(
    first_name: "Dennis",
    last_name: "Lee",
    phone_number: "7189654568",
    gender: "Prefer not to respond",
    bio: "I just want to graduate.",
    email: 'dennisl@gmail.com', 
    password: 'dennispassword'
  )

  kyle = User.create!(
    first_name: "Kyle",
    last_name: "Ginzburg",
    phone_number: "1111112222",
    gender: "Male",
    bio: "Hello! I'm a software engineer with a passion for React, Redux, and Rails. Prior to becoming a software engineer, I accrued a decade of work experience in the film and television industry as a Set Production Assistant.",
    email: 'kyleg@gmail.com', 
    password: 'kylepassword'
  )

  klodian = User.create!(
    first_name: "Klodian",
    last_name: "Behrami",
    phone_number: "7189654569",
    gender: "Male",
    bio: "CHECK INNNNN!!!!",
    email: 'klodianb@gmail.com', 
    password: 'klodianpassword'
  )

  puts "Creating posts..."
  post1 = Post.create!(
    body: "Hi there! My name is Sean and I am a new intern at SoftMicro! I am humbled and proud to announced that I have accepted a retrun offer from SoftMicro!",
    author_id: sean.id
  )
  post1.photo.attach(io: URI.open("https://reachin-seeds.s3.amazonaws.com/softmicro.png"),
  filename: "softmicro.png")

  post2 = Post.create!(
    body: "Hello network. Later this month, I will be hosting a paint night where we will get to paint and talk about our professional ambitions and goals! Make sure to come by!",
    author_id: bob.id
  )
  post2.photo.attach(io: URI.open("https://reachin-seeds.s3.amazonaws.com/bob-ross-trees.jpeg"),
  filename: "bob-ross-trees.jpeg")

  post3 = Post.create!(
    body: "I'm heartbroken to share that I was a part of the Foogle layoffs this morning. If you have any fitting opportunities, please feel free to reach out.",
    author_id: dennis.id
  )
  post3.photo.attach(io: URI.open("https://reachin-seeds.s3.amazonaws.com/pepecry.gif"),
  filename: "pepecry.gif")

  post4 = Post.create!(
    body: "I am so humbled and proud to share that I am now a proud owner of a brand new Lamborghini!!!",
    author_id: sean.id
  )
  post4.photo.attach(io: URI.open("https://reachin-seeds.s3.amazonaws.com/car.jpeg"),
  filename: "car.jpeg")

  post5 = Post.create!(
    body: "I was once asked what my last words would be if today was my last at App Academy. I would say 'Check in!!!!!!'",
    author_id: klodian.id
  )

  post6 = Post.create!(
    body: "I am so proud of all my students who are finally graduating from App Academy. If I have to give them words of advice; IDK, Test it out 🥽.",
    author_id: kyle.id
  )


  puts "Creating comments..."
  comment1 = Comment.create!(
    content: "You made your papa proud :)",
    commenter_id: kyle.id,
    post_id: post1.id
  )

  comment2 = Comment.create!(
    content: "Woohoo! LFG!!",
    commenter_id: klodian.id,
    post_id: post1.id
  )

  comment3 = Comment.create!(
    content: "I will be there Bob!",
    commenter_id: sean.id,
    post_id: post2.id
  )

  comment4 = Comment.create!(
    content: "Great opportunity! CFR!",
    commenter_id: klodian.id,
    post_id: post2.id
  )

  comment5 = Comment.create!(
    content: "We missed you, Bob!",
    commenter_id: kyle.id,
    post_id: post2.id
  )

  comment6 = Comment.create!(
    content: "CFR!",
    commenter_id: sean.id,
    post_id: post3.id
  )

  comment7 = Comment.create!(
    content: "Hey Dennis! We have a teaching opportunity for you at a/A! Reach out to me if you are interested.",
    commenter_id: kyle.id,
    post_id: post3.id
  )

  comment8 = Comment.create!(
    content: "Is this real chat?",
    commenter_id: dennis.id,
    post_id: post4.id
  )

  comment9 = Comment.create!(
    content: "Very funny Klodian. Very funny.",
    commenter_id: kyle.id,
    post_id: post5.id
  )

  comment10 = Comment.create!(
    content: "Yes sir!!!",
    commenter_id: sean.id,
    post_id: post6.id
  )

  comment11 = Comment.create!(
    content: "I will miss you Kyle!",
    commenter_id: dennis.id,
    post_id: post6.id
  )

  comment12 = Comment.create!(
    content: "WE MADE IT!",
    commenter_id: klodian.id,
    post_id: post6.id
  )

  puts "Creating likes..."
  like1 = Like.create!(
    liker_id: sean.id,
    post_id: post1.id
  )

  like2 = Like.create!(
    liker_id: sean.id,
    post_id: post2.id
  )

  like3 = Like.create!(
    liker_id: sean.id,
    post_id: post3.id
  )

  like4 = Like.create!(
    liker_id: sean.id,
    post_id: post4.id
  )

  like5 = Like.create!(
    liker_id: sean.id,
    post_id: post5.id
  )

  like6 = Like.create!(
    liker_id: sean.id,
    post_id: post6.id
  )

  like7 = Like.create!(
    liker_id: bob.id,
    post_id: post4.id
  )

  like8 = Like.create!(
    liker_id: kyle.id,
    post_id: post4.id
  )

  like9 = Like.create!(
    liker_id: dennis.id,
    post_id: post4.id
  )

  like10 = Like.create!(
    liker_id: klodian.id,
    post_id: post4.id
  )

  puts "Done!"