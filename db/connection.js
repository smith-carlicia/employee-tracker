const util = require("util");
const mysql = require("mysql2");



var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "nschs0912",
    database: "employeetracker_db",

    // Promise
    // Promise: "db",
  });

  connection.connect();

  connection.query = util.promisify(connection.query);

  module.exports = connection;