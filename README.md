# Welcome to ReachIn!

[ReachIn Live](https://reachin-webservice.onrender.com)

# Introduction

ReachIn is a full-stack clone of widely used professional social media, LinkedIn. It's a platform for professionals to connect and share their interests and passion for all things related to careers and opportunities.

<img width="1724" alt="Loginpage" src="https://github.com/seanieboi6687/ReachOut/assets/101304652/2395a4e3-c289-4fa6-b116-8f2316a22c6d">
<img width="1714" alt="Screenshot 2023-09-28 at 4 27 10 PM" src="https://github.com/seanieboi6687/ReachOut/assets/101304652/19aea057-5ab2-4491-9819-8f868cd60b46">

# Technology
- Languages: Javascript, JSX, Ruby, HTML, CSS
- Frontend and State management: React, React, Redux
- Database: PostgreSQL
- Hosting: Render
- Asset Storage: AWS S3

# Features
## User Auth
While not logged in, users cannot access the website and will be redirected to the sign-in/sign-up page.

## Newsfeed
Users can access all posts and comments via newsfeed.

## Posts
Users have the ability to create, edit, and delete **their own** posts. The application will not allow users to edit/delete anything that was not created by them.

![CreatingPost](https://github.com/seanieboi6687/ReachOut/assets/101304652/f4260fa3-264c-48ab-bc5f-edae65be0467)

## Comments
Users have the ability to create, edit, and delete **their own** comments. The application will not allow users to edit/delete anything that was not created by them.

![Commenting](https://github.com/seanieboi6687/ReachOut/assets/101304652/deb649c2-6b30-4f29-ae15-779fb1c680d0)

# Code Snippets
## Posts Index
Post index dynamically renders all posts within the application. Depending on who is signed in, elements on the page, such as edit/delete buttons, will dynamically render. Also, EditPostModal/UpdateForm/PostDeleteModal/Comments are integrated into the PostsIndex modularly.

![postindex1](https://github.com/seanieboi6687/ReachOut/assets/101304652/383795a8-af42-48d5-a390-5ec5829a5d12)
![postindex2](https://github.com/seanieboi6687/ReachOut/assets/101304652/db229caf-e60f-4ec0-877e-9c3d75a3d3f2)
![postindex3](https://github.com/seanieboi6687/ReachOut/assets/101304652/10e88edf-5e0f-4aeb-917f-a4633f6dbc9c)
![postindex4](https://github.com/seanieboi6687/ReachOut/assets/101304652/afb2fc6b-b765-4f8b-ae7c-9fd9c31056df)

# Future Implementations
- Connections request/acceptance/denial
- Job postings with option collaborators
- Users/Posts/Jobs Search
- Live Chat with other users
- Notifications
