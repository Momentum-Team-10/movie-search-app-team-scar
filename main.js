const root = document.getElementById("root");
const form = document.getElementById("inputForm");
const url = "http://localhost:3000/movies";
const movieList = document.getElementById("movieList");


//event listener for submit button
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(document.getElementById("inputField").value);
    const inputField = document.getElementById("inputField").value;
    createMovie(inputField);
    form.reset();
});
//create movie notecard - POST info to JSON
function createMovie(input) {
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: input,
            added_at: moment().format(),
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            renderMovieCard(data);
        });
}

//edit feature

//true/false button to say whether or not it has been watched

//render movie card text and buttons/dates (title, watched-true/false, added_at-moment, watched_at-moment)

function renderMovieCard(movieInfo) {
    const movieItem = document.createElement("li");
    movieItem.id = movieInfo.id;
    renderCardContents(movieItem, movieInfo);
    movieList.appendChild(movieItem);
    console.log(movieInfo);
}
//radio button functionality pause, need to finish later
function renderCardContents(li, cardText) {
    li.innerHTML = `
    <p>${cardText.title}</p>
    <p>Added on ${moment(cardText.added_at).format("MMM DD, YYYY")}</p>
<form> 
<input style='-webkit-appearance: radio' type="radio" id="${cardText.title}">
<label>  Click if Watched </label>
</form>
<i class="deleteButton fas fa-trash-alt" ></i >
<i class="editButton fas fa-edit" ></i>
    `;
}

movieList.addEventListener("click", (event) => {
    const movieCard = document.getElementById("inputField").value;
    if (event.target.classList.contains("deleteButton")) { deleteMovie(event.target) }
    if (event.target.classList.contains("editButton")) { editMovie(event.target) }
    
})


function listMovieCard() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            for (let item of data) {
                renderMovieCard(item);
            }
        });
}

function deleteMovie(movieCard) {
    fetch(url + "/" + `${movieCard.parentElement.id}`, {
        method: "DELETE",
    }).then(() => movieCard.parentElement.remove());
}

function editMovie(movieCard) {
    const input = document.getElementById("inputField").value
    fetch(url + "/" + `${movieCard.parentElement.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: input,
        })
    })
        .then((res) => res.json())
        .then((data) => {
            renderCardContents(movieCard.parentElement, data)
        })
}

listMovieCard();

//movie card button features
