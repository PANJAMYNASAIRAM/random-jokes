let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");

function jokechange() {
    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/jokes/random";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {

            let result = jsonData.value;
            jokeText.textContent = result;
        })
}

jokeBtn.addEventListener("click", jokechange);