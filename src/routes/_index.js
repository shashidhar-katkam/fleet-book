const baseRouter = require('express').Router();

const truckRouter = require("./truck");
const bookingRouter = require("./booking");




baseRouter.use("/truck", truckRouter);

baseRouter.use("/bookings", bookingRouter);


module.exports = baseRouter