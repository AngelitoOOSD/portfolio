const express = require("express");
const app = express();
const path = require('path');
const port = 8000;

app.use(express.static(path.join(__dirname, './views')));

app.listen(port, () => {
    console.log(`Portfolio listenting on port ${port}`);
});

app.get("/", (req, res) => {
    res.send();
    console.log("Main page");
});