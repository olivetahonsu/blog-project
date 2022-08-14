// javascript for create.html

const form = document.querySelector('form');


//Function to create post
const createPost = async (e)=>{
    e.preventDefault(); //to prevent the web page from reloading when the post is created

    const doc = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {'Content-Type': 'application/json'}
    });

    window.location.replace('/js/index.html'); //going back to the home page after the post has been created
}

form.addEventListener('submit', createPost);
