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
app.get('/api/students', (req, res) => {res.send('refactor this code')});
app.post('/api/students', (req, res) => {res.send('refactor this code')});
app.update('/api/students', (req, res) => {res.send('refactor this code')});
app.post('/api/images', (req, res) => {res.send('refactor this code')});
// --------------------------------------

server.listen(port, () => console.log(`listening on ${port}`))