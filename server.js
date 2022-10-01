require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => {
  console.log(error);
});

db.once('open', () => {
  console.log('Connection started');
});

const todoRouters = require('./routes/todos');

// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/todos', todoRouters);
app.use(express.json);
app.listen(3000, () => {
  console.log('Server listening at port 3000');
});
