var db = require('./');

module.exports = {

  students: {
    getStudent: function (callback) {
      // fetch all students and images
      var queryStr = 'SELECT students.id, name, imgurl FROM students INNER JOIN images ON students.id = images.id';
      db.query(queryStr, function(err, results){
        if(err) {callback(err)}
        else {callback(null, results)}
      })
    },
    postName: function (studentInfo, callback) {
      // add a student name
      var queryStr = `INSERT INTO students(name) VALUES ('${studentInfo}')`;
      db.query(queryStr, function(err, results){
        if(err) {callback(err)}
        else {callback(null, results)}
      })
    },
    updateName: function ({id, newName}, callback) {
      var queryStr = `UPDATE students SET name = '${newName}' WHERE id = ${id}`;
      db.query(queryStr, function(err, results){
        if(err) {callback(err)}
        else {callback(null, results)}
      })
    }
  },

  images: {
    postImg: function (studentInfo, callback) {
      // add a student image
      var queryStr = `INSERT INTO images(imgurl) VALUES ('${studentInfo.imgurl}')`;
      db.query(queryStr, function(err, results){
        if(err) {callback(err)}
        else {callback(null, results)}
      })
    }
  }
};

