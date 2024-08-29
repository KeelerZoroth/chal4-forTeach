// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector("main");
const backButton = document.querySelector("#back");

// TODO: Create a function that builds an element and appends it to the DOM
function createNewPost(h2Text, blockquoteText, pText) {
    const articleEl = document.createElement("article");
    const h2El = document.createElement("h2");
    const blockquoteEl = document.createElement("blockquote");
    const pEl = document.createElement("p");
    
    h2El.textContent = h2Text;
    blockquoteEl.textContent = blockquoteText;
    pEl.textContent = "Posted by: " + pText;

    articleEl.appendChild(h2El);
    articleEl.appendChild(blockquoteEl);
    articleEl.appendChild(pEl);

    mainElement.appendChild(articleEl);
};


// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogs(){
    mainElement.textContent = "No Blog posts yet...";
};


// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blogComments = readLocalStorage();
    if(blogComments.length > 0){
        for(let i = 0; i < blogComments.length; i++){
            createNewPost(blogComments[i].title, blogComments[i].content, blogComments[i].username);
        }
    }else {
        noBlogs();
    }
};


// TODO: Call the `renderBlogList` function
renderBlogList();


// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked


backButton.addEventListener("click", function() {
    redirectPage("./index.html");
});