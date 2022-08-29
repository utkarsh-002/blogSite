# Simple website where anyone can read and write blogs
BlogSite is a simple Node.js web application for static content that includes a blog. It was created as the basis for my nodejs p[ractice, but everyone is welcome to 
use it. The implementation is very simple and free of unnecessary dependencies.

#GOALS
An easy way to create a simple, secure website with a blog<br />
Support for text-based and photo-based blog formats
Easy authoring in HTML, Markdown (with code formatting), or JSON
Ordering of posts by publish date or content date

#STRUCTURE
/app.js- Entry point for the application, configures the server and static content
/api.json- Database for the application, stores the blog's content
/post.js- Defines the basic API's for interaction between database and backend
/package.json- Schema for the data to be stored in json format
/index.html- Landing page of the website
/post.html- Blog page or the page where we can see the already existing blogs full content
/newPost.html- Defines frontend for the page where one can enter data to create new blog
/js- This contains all the javaScript files required for all three pages of the application
/style- Contains the CSS files 
/assets- Sample photo blog

#INSTRUCTIONS
1.Install Node.js 
2.Fork and clone repository
3.Create directory under /sites or use one of the samples
4.npm install
5.npm run compile
6.npm start
7.Open app.js http://localhost:3000/ and verify
8.Open index.html on browser
9.Deploy repository to hosting service

#Landing-Page
![image](https://user-images.githubusercontent.com/58119582/187153318-2210f822-7321-4ce9-ba02-cd3d8fb8002d.png)

#Blog-Page
![blog](https://user-images.githubusercontent.com/58119582/187153460-944c339a-fbfa-4a10-b92b-ee0ca4580ff8.png)

#Create Blog-Page
![image](https://user-images.githubusercontent.com/58119582/187153579-1728b003-f53b-40f9-8697-070a882c5f3e.png)

