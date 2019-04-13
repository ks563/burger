//sets up connection to myswl
var mysql = require("mysql");

var connection =
    
    if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    
        mysql.createConnection({
            host: "127.0.0.1",
            port: 3306,
            user: "root",
            password: "password",
            database: "burgers_db",
        });
};


//establishes connection

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//makes this connection available for use
module.exports = connection;