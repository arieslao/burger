// #### Config Setup

// 1. Inside your `burger` directory, create a folder named `config`.
// 2. Create a `connection.js` file inside `config` directory.
//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.
//    * Export the connection.



// Set up MySQL connection.
var mysql = require("mysql");

// heroku deployment
if (process.env.JAWS_DB) {
  connection = mysql.createConnection (process.env.JAWS_DB);
} else {

var connection = mysql.createConnection({
  // port: 8889, //updated per MAMP
  host: "localhost",
  user: "root", //updated per MySQL Workbench
  password: "root", 
  database: "burgers_db"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;