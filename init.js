import app from "./app";

const port = 5000;

const handleListening = () => console.log(`Listening on: http://localhost:${port}`);

app.listen(port, handleListening);