const express = require("express");
const app = express();
var multer= require('multer');
const Post = require("./api/models/posts");
const postsData = new Post();


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'./assets1/')
    }, 
    filename: function(req, file, cb){
        cb(null,`${file.fieldname}-${Date.now()}${getExt(file.mimetype)}`) 
    }  
});

const getExt = (mimetype) => {
    switch(mimetype){
        case "image/png": return '.png';
        case "image/jpeg": return '.jpg';
    }
}
var upload = multer({storage: storage});


app.use(express.json());

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
});

app.use('/assets1',express.static('assets1'));

app.get("/api/posts",(req, res)=>{   
     res.status(200).send(postsData.get());
});

app.get("/api/posts/:postId",(req, res)=>{
    const postId = req.params.postId;
    const foundPost =postsData.getIndividual(postId);
    if(foundPost){
        res.status(200).send(foundPost);
    }
    else{
        res.status(404).send("Not Found");
    }
});

app.post("/api/posts", upload.single("post-image"),(req, res) =>{
    const newPost={
        "id": `${Date.now()}`,
        "title": req.body.title,
        "content": req.body.content,
        "post_image": `${req.file.destination}${req.file.filename}`,
        "added_date": `${Date.now()}`
    }
    // console.log(newPost);
    postsData.add(newPost);
    res.status(201).send(newPost);
})

app.listen(3000, ()=>console.log("Listening on http://localhost:3000"));