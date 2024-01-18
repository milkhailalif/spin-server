const http = require("http");
const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);

app.use(cors());
//define the getRandom and getRotationDegrees function for rotation.

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    //The maximum is exclusive and the minimum is inclusive
};


// Create an endpoint to serve the getRandomInt function
app.get('/getRandomInt', (req, res) => {
    const min = 1;
    const max = 9;
    const result = getRandomInt(min, max);
    res.json({ result });
});

/**
 * test backend connect
 */
app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

