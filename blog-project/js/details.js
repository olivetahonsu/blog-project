// Javascript for details.html

const id = new URLSearchParams(window.location.search).get('id');

const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');
const editBtn = document.querySelector('.edit');

// Function to render blog's details to the browser
const renderDetails = async ()=>{
    const res = await fetch("http://localhost:3000/posts/" + id);

    const post = await res.json();

    const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `
   container.innerHTML = template; 
}

// Function to delete post
const deletePost = async ()=>{
    const res = await fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
    })

    window.location.replace('/js/index.html')
}


//opening the edit page and passing the id of the data into it.
const openEditPostPage = ()=>{
    window.open(`/js/edit.html?${id}`, '_self');
}

//calling the 'openEditPostPage' function when the 'edit button' is clicked
editBtn.addEventListener('click', ()=>{openEditPostPage()});

deleteBtn.addEventListener('click', deletePost);
window.addEventListener('DOMContentLoaded', ()=>{renderDetails()});