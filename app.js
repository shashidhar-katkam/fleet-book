'use strict';
const serverless = require('serverless-http');

var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
var compression = require('compression');
var bodyParser = require('body-parser');
var path = require('path');
const app = express();
const baseRouter = require('./src/routes/_index');
const { setCustomCors } = require('./src/utils');
const truck = require('./src/models/truck');
require('dotenv').config();

const MONGODB_CON_URL = process.env.MONGODB_CON_URL;
console.log(MONGODB_CON_URL, 'MONGODB_CON_URL');
app.use(compression());
app.use(setCustomCors);
app.use(cors());

app.use(bodyParser.json({ strict: false, limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/api', baseRouter);
app.get('/', async (req, res) => {
  let data = require('./trucks.json');

  for (let i = 1; i < 100; i++) {
    let va = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    data.forEach(async (d) => {
      d.name += ` ${i}`;
      d.licensePlateNumber += ` ${i}`;
      d.age += va;
      (d.fuelType = Math.floor(Math.random() * 2) ? 'Diesel' : 'Petrol'),
        await truck.create(d);
    });
  }

  res.send('ping done');
});

mongoose.Promise = global.Promise;
let isConnected;

const connectToDatabase = () => {
  try {
    if (isConnected) {
      console.log('=> using existing database connection');
      return Promise.resolve();
    }
    console.log('=> using new database connection');
    return mongoose
      .connect(MONGODB_CON_URL, {
        serverSelectionTimeoutMS: 5000,
      })
      .then((db) => {
        isConnected = db.connections[0].readyState;
      });
  } catch (e) {
    console.log('connectToDatabase', e);
    connectToDatabase();
  }
};

connectToDatabase();

module.exports.handler = serverless(app);
