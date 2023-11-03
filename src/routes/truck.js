const truckRouter = require('express').Router()
const truckController = require('../controllers/truck')



truckRouter.post('/save', truckController.saveTruck);
truckRouter.post('/all', truckController.getAllTruck);
truckRouter.post('/update', truckController.updateTruck);
truckRouter.post('/delete', truckController.deleteTruck);


truckRouter.post('/get-fleets', truckController.getLynxFleets);
truckRouter.post('/get-fleet-for-booking', truckController.getFleetsForBooking);

module.exports = truckRouter;