// javascript for index.html


//Grabbing the element where the blogs will be displayed
const container = document.querySelector(".blogs");

const searchForm = document.querySelector('.search');


const renderPosts = async (term)=>{
    let url = 'http://localhost:3000/posts?_sort=likes&_order=desc'; //sorting the data got in descending order of likes

    if(term){
        url += `&q=${term}`;
    }
    
    const res = await fetch(url); //fetching the data
    const posts = await res.json(); // converting the data form json to javascript object

   let template = '';

   //Cycling through the posts - objects in the array, from the db.json file
   //And adding them up to the 'template' variable
   posts.forEach(post=>{
    template += `
    <div class = "post">
    <h2>${post.title}</h2> 
    <p><small>${post.likes} likes</small></p>
    <p>${post.body.slice(0, 199)}</p>
    <a href="/js/details.html?id=${post.id}">read more...</a>
    </div> `

   });

   //Injecting the 'template' variable into the 'container'.
   container.innerHTML = template;
}


searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    renderPosts(searchForm.term.value.trim());

});

//Making the 'window' to run a function when it loads up its contents
window.addEventListener('DOMContentLoaded', ()=>{renderPosts()});