var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burger_db", function (res) {
            cb(res)
        });
    },
    insertOne: function (arrOfVal, cb) {
        orm.insertOne("burger_db", arrOfVal, function (res) {
            cb(res);
        });
    },
    updateOne: function (updatedVal, colToUpdate, valofCol, cb) {
        orm.updateOne("burger_db", updatedVal, colToUpdate, valofCol, function (res) {
            cb(res);
        });
    }
}
module.exports = burger;