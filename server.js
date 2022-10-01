require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => {
  console.log(error);
});

db.once('open', () => {
  console.log('Connection started');
});

app.use(express.json());

const todoRouters = require('./routes/todos');
app.use('/todos', todoRouters);

app.listen(3000, () => {
  console.log('Server listening at port 3000');
});
