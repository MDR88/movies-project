// Created the h1 title.
const h1El = document.createElement("h1");
h1El.setAttribute("id", "main-title")
h1El.textContent = "My Movie List";

//I gave the main div an ID and created it storing in the variable mainContainerDiv.
const mainContainerDiv = document.querySelector(".div--MainContainer");


//I created the tag elements for my form.
const artEl = document.createElement("article");

//Created a section for my form.
const sectEl = document.createElement("section");
sectEl.setAttribute("id", "section1");


//Created my input fields The first is for the Movie Title
const movieTitleinput = document.createElement("input");
movieTitleinput.setAttribute("id", "movieTitleInput");
movieTitleinput.type = "text";
movieTitleinput.placeholder = "Movie Title"

//Input Field for Genre
const genreInput = document.createElement("input");
genreInput.setAttribute("id", "genreInput");
genreInput.type = "text";
genreInput.placeholder = "Genre";

// Input Field for Dirctor
const directorInput = document.createElement("input");
directorInput.setAttribute("id", "directorInput");
directorInput.type = "text";
directorInput.placeholder = "Director";





// Created a submit button
const subBtn = document.createElement("button");
subBtn.setAttribute("id", "submit-button");
subBtn.textContent = "Submit";




//This appends elements under the main "large container" so it will appear on the DOM.
mainContainerDiv.appendChild(artEl);
mainContainerDiv.appendChild(sectEl);
mainContainerDiv.appendChild(h1El);
mainContainerDiv.appendChild(movieTitleinput);
mainContainerDiv.appendChild(genreInput);
mainContainerDiv.appendChild(directorInput);
mainContainerDiv.appendChild(subBtn);

// ADD EVENT LISTNER

subBtn.addEventListener("click", myFunction);


const movieDatabase = []
    // movieDatabase.movieTitleinput.value = []
    // movieDb.genreInput.value = []
    // directorInput.value = []

//Create a function that holds an object and empty array that will capture the input values to local storage and then will write to the DOM

function myFunction() {
    console.log(movieTitleinput.value, genreInput.value, directorInput.value);

    const movie = {
        title: movieTitleinput.value,
        genre: genreInput.value,
        director: directorInput.value,

    }

    movieDatabase.push(movie)
    console.log(movieDatabase)
    saveDatabase(movieDatabase, "movie")
}


//Create an empty object and array to push in the text values of Movie title, Director and genreInput.