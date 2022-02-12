# Dev Tech Blog

## Description
My challenge was to build a CMS-style blog site where developers can publish their blog posts and comment on other's posts. 

## Built With
* Nodejs
* JavaScript
* Express
* Sequelize

## Dependencies

Npm packages used:
* Sequelize
* Express
* bcrypt
* Express-session
* Handlebars JS
* dotenv
* connect-session-sequelize

run the command 'npm install' for all the packages required.

## Deployed site

[Link here to Dev Tech blog]()

## Hardships
For a long time I couldn't figure out how to get the comments to show on the dashboard for editing. It turned out, I didn't account for the fact that I was pushing posts' info through. Once I fixed the variable names used, the edit comment button sent me to the edit post page. I hadn't changed the url route for where we'd go to edit the comment. Once I changed that, I ran into the issue of the save/delete buttons for the comment not working and the comment post textarea didn't prefill with the original comment. I managed to get delete to work, though I'm not completely sure what the issue was with it. With the comment not prefilling with the original comment for edit and not saving it, I just had typos in my comment-routes.js. Once fixed, everything worked!