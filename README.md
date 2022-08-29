# Simple website where anyone can read and write blogs<br />
BlogSite is a simple Node.js web application for static content that includes a blog. It was created as the basis for my nodejs p[ractice, but everyone is welcome to 
use it. The implementation is very simple and free of unnecessary dependencies.<br />
<br />
#GOALS<br />
An easy way to create a simple, secure website with a blog<br />
Support for text-based and photo-based blog formats<br />
Easy authoring in HTML, Markdown (with code formatting), or JSON<br />
Ordering of posts by publish date or content date<br />
<br />
#STRUCTURE<br />
/app.js- Entry point for the application, configures the server and static content<br />
/api.json- Database for the application, stores the blog's content<br />
/post.js- Defines the basic API's for interaction between database and backend<br />
/package.json- Schema for the data to be stored in json format<br />
/index.html- Landing page of the website<br />
/post.html- Blog page or the page where we can see the already existing blogs full content<br />
/newPost.html- Defines frontend for the page where one can enter data to create new blog<br />
/js- This contains all the javaScript files required for all three pages of the application<br />
/style- Contains the CSS files<br /> 
/assets- Sample photo blog<br />
<br />
#INSTRUCTIONS<br />
1.Install Node.js <br />
2.Fork and clone repository<br />
3.Create directory under /sites or use one of the samples<br />
4.npm install<br />
5.npm run compile<br />
6.npm start<br />
7.Open app.js http://localhost:3000/ and verify<br />
8.Open index.html on browser<br />
9.Deploy repository to hosting service<br />
<br />
#Landing-Page<br />
![image](https://user-images.githubusercontent.com/58119582/187153318-2210f822-7321-4ce9-ba02-cd3d8fb8002d.png)
<br />
#Blog-Page<br />
![blog](https://user-images.githubusercontent.com/58119582/187153460-944c339a-fbfa-4a10-b92b-ee0ca4580ff8.png)
<br />
#Create Blog-Page<br />
![image](https://user-images.githubusercontent.com/58119582/187153579-1728b003-f53b-40f9-8697-070a882c5f3e.png)

