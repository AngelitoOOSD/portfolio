const express = require("express");
const app = express();
const path = require('path');
const port = 8000;

//mongodb local connection string: mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false

app.use(express.static(path.join(__dirname, './views')));
app.set("view engine", "html");

app.listen(port, () => {
    console.log(`Portfolio listenting on port ${port}`);
});

app.get('/', (req, res) => {
    res.render("index");
    console.log("Main page");
});

app.get('/websites', (req, res) => {
    res.render("websites");
    console.log("Websites page");
});

app.get('/androidapps', (req, res) => {
    res.render("androidapps");
    console.log("Android apps page");
});

