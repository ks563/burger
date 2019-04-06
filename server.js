var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//middleware that deals with filepaths
app.use(express.static("public"));

//parses data from app body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sets handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//requires routes and gives server access
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//starts server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});