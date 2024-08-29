// TODO: Create a variable that selects the form element
const username = document.querySelector("#username");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const parError = document.querySelector("#error");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function writeComment (e) {
    e.preventDefault();
    if((username.value !== "") && (title.value !== "") && (content.value !== "")){
        const blogComments = readLocalStorage();
        blogComments.push({
          username: username.value,
          title: title.value,
          content: content.value,
        })
        storeLocalStorage(blogComments);
        redirectPage("./blog.html");
    }else{
        parError.textContent = "Please complete the form.";
    }
}


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
document.querySelector("form").addEventListener("submit", writeComment);