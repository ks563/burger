var express = require("express");

var router = express.Router();

//imports burger models to use database functions
var burger = require("../models/burger.js");

//creates routes and sets up logic for routes
//used catsController.js as a guide for routes
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("api/burgers", function (req, res) {
    const data = req.body;
    burger.insertOne([
        "name", "devoured"
    ], [
            req.body.name, req.body.devoured
        ], function (result) {
            console.log(result);
            res.json({ id: result.insertID });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end()
        } else {
            res.status(200).end();
        }
    });
});

//exports routes to server
module.exports = router;
