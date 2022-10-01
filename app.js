require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
// defining the express app
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

const adsRouter = require('./routes/ads');
app.use('/ads', adsRouter);

app.listen(3001, () => {
  console.log('listening at port 3001');
});
