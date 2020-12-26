import express from "express";
const app = express();
const port = 3000;

function handleListening(){
    console.log(`Listening on: http://localhost:${port}`);
}

const handleHome = (req, res) => res.send("Hello, who are you");

const handleProfile = (req, res) => res.send("who are you");

const between = (req, res, next) => {
    console.log("Between");
    next();
}

app.use(between);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(port, handleListening);