var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        });
    },
    insertOne: function (arrOfVal, cb) {
        orm.insertOne("burgers", arrOfVal, function (res) {
            cb(res);
        });
    },
    updateOne: function (updatedVal, colToUpdate, valofCol, cb) {
        orm.updateOne("burgers", updatedVal, colToUpdate, valofCol, function (res) {
            cb(res);
        });
    }
}
module.exports = burger;