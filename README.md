# Nerd-Lounge

https://nerd-lounge.herokuapp.com/

Welcome to Nerd Lounge

Are you wizard waiting for your letter or a hero trying to defend the world? Maybe you are looking for life on a desserted island or a far far away planet. Nerd Lounge is a community where nerds of all fandoms can gather to disuss thier passions, learn about new worlds and meet new companions.

Nerd Lounge will be a discussion forum app that will allow uses to post and discuss different topics around their favorite fandoms. I will have 5 different forums when the app is completed.

It is comprised of  2 models. One for the user and one for the Post.

There will be 2 route for the home page
GET /(this will host the link to register/sign in)
GET /home (once signed in this will show the index of forums)

The user route will have the below:
GET /user/register
GET /user/signin
GET /user/signout

Each Forum has the below routes:
INDEX - GET /"forum name" - Main forum. List all posts
SHOW - GET /"forum name"/:id - This will allow a user to enter into a specific post.
NEW - GET /"forum name"/new - This will allow a user to create a post
CREATE - POST /"forum name" - This will allow a user to post the post
EDIT - GET /"forum name"/:id/edit - This will allow a user to edit a post
UPDATE - PUT /"forum name"/:id - This will allow a user to post the update
DELETE - GET /"forum name"/:id - This will allow a user to delete a post

User Stories:
As a user I enjoy being able to discuss what i love about my fandoms with other fellow nerds. Nerd Lounge allows me to meet and talk with others who have the same passions as me.

Examples of completed App
![Screen Shot 2021-10-02 at 6 50 27 AM](https://user-images.githubusercontent.com/85913543/135719733-a01aa428-90b9-4241-8814-d7e3be336bd4.png)
![Screen Shot 2021-10-02 at 6 50 55 AM](https://user-images.githubusercontent.com/85913543/135719772-e8e6bf14-6cab-4da0-be21-769bade18838.png)
![Screen Shot 2021-10-02 at 6 51 20 AM](https://user-images.githubusercontent.com/85913543/135719776-3c6fc9b5-81c8-4ba1-8d02-88556b5e729b.png)
![Screen Shot 2021-10-02 at 6 51 35 AM](https://user-images.githubusercontent.com/85913543/135719779-427ea222-478f-4485-9ba9-96d97397d324.png)
![Screen Shot 2021-10-02 at 6 51 49 AM](https://user-images.githubusercontent.com/85913543/135719781-215e1f7f-d75d-4225-a214-5c2ea49fe7c0.png)
![Screen Shot 2021-10-02 at 6 51 59 AM](https://user-images.githubusercontent.com/85913543/135719784-72a17dea-38ed-439d-b7f9-18e12ee9f602.png)
![Screen Shot 2021-10-02 at 6 52 20 AM](https://user-images.githubusercontent.com/85913543/135719788-d1c32226-66fa-4322-98fb-b8ee54d64567.png)
![Screen Shot 2021-10-02 at 6 52 51 AM](https://user-images.githubusercontent.com/85913543/135719792-8d9af447-2dda-4226-8417-eea9edd6d6ce.png)
![Screen Shot 2021-10-02 at 6 53 04 AM](https://user-images.githubusercontent.com/85913543/135719795-dea07118-f24d-4c55-99f2-ab0f06d083ff.png)


