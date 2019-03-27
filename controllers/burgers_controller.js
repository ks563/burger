var express = require("express");
var router = express.Router();

//imports burger models
var burger = require("../models/burger.js");

//creates routs and sets up logic for routes

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    })
})
