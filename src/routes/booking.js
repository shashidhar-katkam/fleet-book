const bookingRouter = require('express').Router();
const bookingController = require('../controllers/booking');

bookingRouter.post('/book', bookingController.bookTruck);
bookingRouter.post('/all', bookingController.getAllBookings);



bookingRouter.post('/get-fleets', bookingController.getLynxFleets);
bookingRouter.post(
  '/get-fleet-for-booking',
  bookingController.getFleetsForBooking
);

bookingRouter.post(
  '/customer',
  bookingController.getCustomerBookings
);

module.exports = bookingRouter;
