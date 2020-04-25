const helper = require('../db/dbhelpers.js');

const controller = {
  students: {
    get: (req, res) => {
      helper.students.getStudent((err, data) => {
        if(err) {console.log(err)}
        res.send(data)
      })
    },
    post: (req, res) => {
      helper.students.postName(req.body.name, (err, data) => {
        if(err) {console.log(err)}
        res.status(200).send('successful post')
      })
    },
    update: (req, res) => {
      var obj = {
        id: req.params.id,
        newName: req.body.name
      }
      helper.students.updateName(obj, (err, data) => {
        if(err) {console.log(err)}
        res.status(200).send('successful update')
      })
    }
  },

  images: {
    post: (req, res) => {
      helper.images.postImg(req.body, (err, data) => {
        if(err) {console.log(err)}
        res.status(200).send('successful post')
      })
    },
  }
};

module.exports = controller