// Javascript for edit.html

const form = document.querySelector('form');

//receiving the data passed from the details page
const id = location.search.substring(1);


//function to submit the edited post
const submitEditedPost = async (e)=>{
    e.preventDefault();

    const doc = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    await fetch('http://localhost:3000/posts/' + id, {
        method: 'PUT', 
        body: JSON.stringify(doc),
        headers: {'Content-Type': 'application/json'}
    });

    //going back to the edit page when the editting is done and submitted
    window.location.replace(`/js/details.html?id=${id}`); 
}

//function to re-render post in the edit window
const reRenderPost = async ()=>{

    const res = await fetch('http://localhost:3000/posts/' + id);
    const showPost = await res.json();

    form.title.value = showPost.title;
    form.body.value = showPost.body;
}

window.addEventListener('DOMContentLoaded', ()=>{reRenderPost()});

form.addEventListener('submit', submitEditedPost);