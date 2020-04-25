var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'hrlaStudents'
});

connection.connect();

module.exports = connection;