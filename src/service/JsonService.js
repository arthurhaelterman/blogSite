/**
 * Created by Arthur Haelterman on 29/12/2016.
 */

export function getBlogs() {
    var path = '/api/blogs';
    fetch( path, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        console.log("succes! " + response);
    }).catch((error) => {
        console.error("Unable to retrieve blogs " + path);
        console.error(error);
    });
}

export function getBlogsDummy() {
    return require('../../public/data/blogs.json');
}

export function postBlog(blog){
    var payload = JSON.stringify(blog);
    var path = '/api/blog';
    fetch( path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:  payload
    }).then((response) => {
        console.log("succes! " + response);
    }).catch((error) => {
        console.error("Unable to post to: " + path);
        console.error(error);
    });
}