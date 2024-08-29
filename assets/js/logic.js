// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const themeToggle = document.querySelector("#toggle");
const rootElement = document.querySelector(":root");


const circleThemeColors = {
  dark: "#00b100",
  light: "#ffb100"
};

const themeSymbles = {
  dark: "☾",
  light: "𖤓"
};

if(JSON.parse(localStorage.getItem("setTheme")) !== null){
  const nextTheme = JSON.parse(localStorage.getItem("setTheme"));
  rootElement.classList = nextTheme;
  themeToggle.textContent = themeSymbles[nextTheme];
  rootElement.style.setProperty('--circle-color', circleThemeColors[nextTheme]);
}

themeToggle.addEventListener("click", function(){
  const readTheme = JSON.parse(localStorage.getItem("setTheme"));
  let nextTheme;
  if(readTheme === "dark"){
    nextTheme = "light";
  }else{
    nextTheme = "dark";
  }
  localStorage.setItem("setTheme", JSON.stringify(nextTheme));
  rootElement.classList = nextTheme;
  themeToggle.textContent = themeSymbles[nextTheme];
  rootElement.style.setProperty('--circle-color', circleThemeColors[nextTheme]);
});



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage() {
  const readContent = JSON.parse(localStorage.getItem("posts"));

  // if(readContent !== null){
  //   return readContent
  // }else{
  //   return []
  // }

  return readContent || [];
};


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(objectToStore) {
  localStorage.setItem("posts", JSON.stringify(objectToStore));
};


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

