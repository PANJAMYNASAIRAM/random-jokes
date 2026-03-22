##Project Description

his project is a Random Joke Generator Web App built using JavaScript. It fetches jokes from an external API and displays them dynamically on the webpage when the user clicks a button.

The app demonstrates how to work with APIs, handle asynchronous operations using fetch(), and update the UI in real-time.

##Features

😂 Fetches random jokes from an API 

🔄 Generates a new joke on every button click 

⚡ Uses asynchronous fetch() for data retrieval 

📡 Real-time API integration 

🎯 Simple and interactive UI

🧠 Demonstrates promise handling (then())

##Technologies Used

HTML5 – Structure (button & text display)

CSS3 – Styling (optional UI design)

JavaScript (ES6) – API calls, DOM manipulation

REST API – External jokes API

##Installation Steps

1. Clone the repository git clone https://github.com/PANJAMYNASAIRAM/random-jokes.git
2. Go to project folder "cd random-jokes"
3. Install dependencies "npm install"
4. Start the project "npm start"

##Live Demo

https://PANJAMYNASAIRAM.github.io/random-jokes   

##How It Works 

User clicks the "Get Joke" button
jokechange() function is triggered
A request is sent to the API using fetch()
API returns a random joke in JSON format
The joke text is extracted (jsonData.value)
The UI is updated with the new joke
📷 Output
Each click displays a new random joke like:
“Why don’t programmers like nature? Too many bugs 🐛”
🔧 Future Enhancements
🔄 Add loading spinner while fetching data
❌ Handle API errors (try/catch)
❤️ Add “Save Favorite Joke” feature
🔊 Add text-to-speech for jokes
🎨 Improve UI with animations
🚀 Use Cases
Fun entertainment app 😂
Learning API integration
Beginner JavaScript project
Portfolio mini project
💡 Bonus Improvement (Optional Upgrade)

Use async/await for cleaner code:

async function jokechange() {
    let url = "https://apis.ccbp.in/jokes/random";

    let response = await fetch(url);
    let jsonData = await response.json();

    jokeText.textContent = jsonData.value;
}


