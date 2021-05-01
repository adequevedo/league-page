const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var cors = require('cors')

const app = express();
app.use(cors()) // Use this after the variable declaration

const conn = mysql.createPool({
  host     : '34.73.18.56',
  user     : 'remote-league',
  port     : '3306',
  password : 'mypass',
  database : 'league',
  queueLimit : 0, // unlimited queueing
  connectionLimit : 0 // unlimited connections
});


// We're still in routes.js! Right below everything else.

// Starting our app.


// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
    // Connecting to the database.
    conn.getConnection(function (err, connection) {
      if (err) {
        console.log(err)
        return res.send("Error creating connection...");
      }

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM yearly_stats', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      console.log("got it")
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3001, () => {
 console.log('Go to http://localhost:3001/users so you can see the data.');
});
