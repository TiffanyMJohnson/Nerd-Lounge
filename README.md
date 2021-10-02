# Nerd-Lounge

Welcome to Nerd Lounge

Are you wizard waiting for your letter or a hero trying to defend the world? Maybe you are looking for life on a desserted island or a far far away planet. Nerd Lounge is a community where nerds of all fandoms can gather to disuss thier passions, learn about new worlds and meet new companions.

Nerd Lounge will be a discussion forum app that will allow uses to post and discuss different topics around their favorite fandoms. I will have 5 different forums when the app is completed.

It is comprised of  2 models. One for the user and one for the Post.

Each Forum has the below routes:

INDEX - GET /"forum name" - Main forum. List all posts
SHOW - GET /"forum name"/:id - This will allow a user to enter into a specific post.
NEW - GET /"forum name"/new - This will allow a user to create a post
CREATE - POST /"forum name" - This will allow a user to post the post
EDIT - GET /"forum name"/:id/edit - This will allow a user to edit a post
UPDATE - PUT /"forum name"/:id - This will allow a user to post the update
DELETE - GET /"forum name"/:id - This will allow a user to delete a post

