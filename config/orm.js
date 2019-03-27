//imports mysql connection
var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw (err);
            console.log(result);
        });
    },
    insertOne: function(table, arrOfVal) {
        var queryString = "INSERT INTO ?? (?)";
        connection.query(queryString, [table, arrOfVal], function (err, result) {
            if (err) throw (err);
            console.log(result);
        });
    },
    updateOne: function (table, updatedVal, colToUpdate, valofCol) {
        var queryString = "UPDATE ?? SET ?? WhHERE ?? = ?";
        connection.query(queryString, [table, updatedVal, colToUpdate, valofCol], function (err, result) {
            if (err) throw (err);
            console.log(result);
        })
    }

}


module.exports = orm;