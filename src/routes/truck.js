const truckRouter = require('express').Router()
const truckController = require('../controllers/truck')



truckRouter.post('/save', truckController.saveTruck);
truckRouter.post('/all', truckController.getAllTruck);
truckRouter.post('/update', truckController.updateTruck);
truckRouter.post('/delete', truckController.deleteTruck);

module.exports = truckRouter;