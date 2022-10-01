require('dotenv').config();
const express = require('express');
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

// const todoRouters = require('./routes/todos');

// defining the express app
const app = express();

// defining an array to work as the database
const ads = [{ title: 'Hello, World (again)!' }];

module.exports = ads;

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objecgs
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

const adsRouter = require('./routes/ads');
app.use('/ads', adsRouter);

app.listen(3001, () => {
  console.log('listening at port 3001');
});
