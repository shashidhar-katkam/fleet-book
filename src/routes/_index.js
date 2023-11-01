const baseRouter = require('express').Router();

const truckRouter = require("./truck");



baseRouter.use("/truck", truckRouter);


module.exports = baseRouter