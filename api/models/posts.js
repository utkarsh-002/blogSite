const fs= require('fs')
const PATH="./api.json";
class Post{

    get(){
        return this.readData();
    }

    getIndividual(postId) {
        const posts= this.readData();
        const foundPost = posts.find((post)=> post.id== postId);
        return foundPost;
    }

    add(newPost){
        const currposts = this.readData();
        currposts.unshift(newPost);
        this.storeData(currposts);
    }

    readData() {
        let rawdata = fs.readFileSync(PATH);
        let posts= JSON.parse(rawdata);
        return posts;
    }

    storeData(rawdata) {
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH,data);
    }

}

module.exports=Post;