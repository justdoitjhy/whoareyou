import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

function handleListening(){
    console.log(`Listening on: http://localhost:${port}`);
}

const handleHome = (req, res) => res.send("Hello, who are you");

const handleProfile = (req, res) => res.send("who are you");

// middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(helmet());
app.use(morgan("dev"));


app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(port, handleListening);