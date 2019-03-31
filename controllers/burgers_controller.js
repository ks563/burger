var express = require("express");
var router = express.Router();

//imports burger models
var burger = require("../models/burger.js");

//creates routs and sets up logic for routes

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("api/burgers", function (req, res) {
    burger.create([
        "name", "devoured"
    ], [
            req.body.name, req.body.devoured
        ], function (result) {
            res.json({ id: result.insertID });
        });
});

module.exports = router;
