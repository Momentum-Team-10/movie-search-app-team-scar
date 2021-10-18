const root = document.getElementById('root');
const form = document.getElementById('inputForm')

//event listener for submit button 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(document.getElementById('inputField').value);
    const inputField = document.getElementById('inputField').value;
    createMovie(inputField);
})
//create movie notecard - POST info to JSON
function createMovie(input) {

}

//edit feature 

//true/false button to say whether or not it has been watched

//render movie card text and buttons/dates (title, watched-true/false, added_at-moment, watched_at-moment)

//