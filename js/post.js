const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL= "http://localhost:3000/";

window.onload = () => {
    getPost();  
}

const getPostId = () => {
    const querystring  = window.location.search;
    const urlParam = new URLSearchParams(querystring);
    return urlParam.get("id");
}

const getPost = () => {
    const postId = getPostId();
    const url =`${API_URL}/${postId}`;
    fetch(url, {
        method: 'GET'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        buildPost(data);
    })
}

const buildPost = (data) => { 
    const postDate = new Date(parseInt(data.added_date)).toDateString();
    const postImage = `${API_BASE_URL}${data.post_image}`;
    document.querySelector("header").style.backgroundImage = `url(${postImage})`;
    document.getElementById("individual-post-title").innerText= data.title;
    document.getElementById("individual-post-date").innerText= `Published on ${postDate}`;
    document.getElementById("individual-post-content").innerText= data.content;
}
