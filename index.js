const express = require('express');
const app = express();
const port = 3000;

function handleListening(){
    console.log(`Listening on: http://localhost:${port}`);
}

function handleHome(req, res){
    res.send("Hello, Homepage");
}

function handleProfile(req, res){
    res.send("who are you");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(port, handleListening);