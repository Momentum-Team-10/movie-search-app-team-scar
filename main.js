const root = document.getElementById('root');
const form = document.getElementById('inputForm')
const url = "http://localhost:3000/movies"

//event listener for submit button 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(document.getElementById('inputField').value);
    const inputField = document.getElementById('inputField').value;
    createMovie(inputField);
    form.reset();
})
//create movie notecard - POST info to JSON
function createMovie(input) {
    fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
            title: input,
            added_at: moment().format() 
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderMoviecard(data)
    }
    )
}

//edit feature 

//true/false button to say whether or not it has been watched

//render movie card text and buttons/dates (title, watched-true/false, added_at-moment, watched_at-moment)

//