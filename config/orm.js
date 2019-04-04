//imports mysql connection
var connection = require("../config/connection.js");

//helper fuction for sql syntax from catApp
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
      arr.push("?");
    }

    return arr.toString();
}

//helper function to convert object key/value pairs to SQL syntax
//from catsApp
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw (err);
            cb(result);
        });
    },
    insertOne: function (table, arrOfVal, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(arrOfVal.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, arrOfVal, function (err, result) {
            if (err) throw (err);
            cb(result);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) throw (err);
            cb(result);

        })
    }

}


module.exports = orm;