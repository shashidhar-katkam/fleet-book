var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
var compression = require('compression');
var bodyParser = require('body-parser');
var path = require('path');
const app = express();
const baseRouter = require('./src/routes/_index');
require('dotenv').config();
// app.use(compression())
const truck = require('./src/models/truck');

var port = process.env.PORT || 7777;
var MONGODB_CON_URL = process.env.MONGODB_CON_URL;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Content-Type, X-Auth-Token, If-Match'
  );
  res.header('Access-Control-Expose-Headers', 'ETag');
  res.set('Cache-Control', 'no-store');
  next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, '/public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + './index.html'));
// });

app.use('/api', baseRouter);

app.get('/', async (req, res) => {
  let data = require('./trucks.json');

  for (let i = 1; i < 100; i++) {
    let va = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let load = Math.floor(Math.random() * (100 - 40 + 1)) + 1;
    data.forEach(async (_d) => {
      let d = { ..._d };
      d.name += ` ${i}`;
      d.licensePlateNumber += ` ${i}`;
      d.age += va;
      d.load += load;
      (d.inventoryStatus += d.fuelType =
        Math.floor(Math.random() * 2) ? 'Diesel' : 'Electric'),
        await truck.create(d);
    });
  }

  res.send('ping done');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

var server = app.listen(port, function () {
  console.log('server started at  ' + port);
  console.log('Please Navigate to http://localhost:' + port.toString());
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
