const helper = require('../db/dbhelpers.js');

const controller = {
  students: {
    get: (req, res) => {
      res.send('hello from get')
    },
    post: (req, res) => {
      res.send("hello from name post")
    },
    update: (req, res) => {
      res.send("hello from update")
    }
  },

  images: {
    post: (req, res) => {
      res.send("hello from image post")
    },
  }
};

module.exports = controller