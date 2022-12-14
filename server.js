/*
    The most basic Express web server running locally
*/

const express = require("express");
const bodyParser = require("body-parser"); // If we get data in a POST, this will parse it for us


// Creates an Express application: https://expressjs.com/en/4x/api.html#app
// Returns the Express application object
const app = express();
const port = 3000;

// Tell express where to find your CSS, JS, and images
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use(bodyParser.json());


// A route definition
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

// Route to boardMaker
app.get("/boardMaker", (req, res) => {
    res.sendFile(__dirname + '/views/boardMaker.html');
})

// Route to character
app.get("/character", (req, res) => {
    res.sendFile(__dirname + '/views/character.html');
})

// Route to spell
app.get("/Spell", (req, res) => {
    res.sendFile(__dirname + '/views/Spell.html');
})

// Post to server
app.post("/postingThis", (req, res) => {
    console.log(req.body);
    res.json({ text: "Successful" });
})

// starts web server listening on localhost at port 3000
app.listen(port, () => {
    console.log('Listening on port 3000...');
})
