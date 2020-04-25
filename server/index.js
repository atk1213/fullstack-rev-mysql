const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const router = require('./router');

const server = express();
const port = 3000;

server.use(morgan('dev'));
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, '../client/dist')));
// refactor the following code through line 20 to use the provided router
// server.get('/api/students', (req, res) => {res.send('hello world')});
// server.post('/api/students', (req, res) => {res.send('refactor this code')});
// server.put('/api/students', (req, res) => {res.send('refactor this code')});
// server.post('/api/images', (req, res) => {res.send('refactor this code')});
// --------------------------------------
server.use('/api', router);

server.listen(port, () => console.log(`listening on ${port}`))