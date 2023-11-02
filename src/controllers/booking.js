const Truck = require('../models/truck');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeature');

exports.bookTruck = catchAsync(async (req, res, next) => {
  try {
    let body = req.body;
    const createdTruck = await Truck.create(body);
    return res.status(200).json({
      status: true,
      message: 'Truck booked successfully.',
      data: createdTruck,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      status: false,
      message: e.message,
    });
  }
});

exports.getAllBookings = catchAsync(async (req, res, next) => {
  try {
    let filter = {};
    let queryParams = req.query;
    if (queryParams.search && queryParams.search != '') {
      filter = {
        ...filter,
        name: {
          $regex: queryParams.search || '',
          $options: 'i',
        },
      };
    }

    const features = new APIFeatures(Truck.find(filter), queryParams)
      .filter()
      .sort()
      .limitFields()
      .paginate()
      .lean();

    let trucks = await features.query;

    let totalTrucks = await Truck.countDocuments(filter);
    return res.status(200).json({
      status: true,
      message: 'Trucks successfully fetched.',
      totalRecords: totalTrucks,
      data: trucks,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      status: false,
      message: e.message,
    });
  }
});

exports.updateTruck = catchAsync(async (req, res, next) => {
  try {
    let { _id, ...rest } = req.body;

    const updatedTruck = await Truck.findByIdAndUpdate(_id, rest, {
      new: true,
    });
    return res.status(200).json({
      status: true,
      message: 'Truck updated successfully.',
      data: updatedTruck,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
});

exports.deleteTruck = catchAsync(async (req, res, next) => {
  try {
    let body = req.body;

    await Truck.deleteOne({ _id: body._id });
    return res.status(200).json({
      status: true,
      message: 'Truck deleted successfully.',
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      status: false,
      message: e.message,
    });
  }
});

exports.getLynxFleets = catchAsync(async (req, res, next) => {
  try {
    let filter = {};
    let queryParams = req.query;
    if (queryParams.search && queryParams.search != '') {
      filter = {
        ...filter,
        name: {
          $regex: queryParams.search || '',
          $options: 'i',
        },
      };
    }

    const features = new APIFeatures(Truck.find(filter), queryParams)
      .filter()
      .sort()
      .limitFields()
      .paginate()

      .lean();

    let trucks = await features.query;

    let totalTrucks = await Truck.countDocuments(filter);
    return res.status(200).json({
      status: true,
      message: 'Trucks successfully fetched.',
      totalRecords: totalTrucks,
      data: trucks,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      status: false,
      message: e.message,
    });
  }
});

exports.getFleetsForBooking = catchAsync(async (req, res, next) => {
  try {
    let filter = {
      enabledForBooking: true,
    };
    let queryParams = req.query;
    if (queryParams.search && queryParams.search != '') {
      filter = {
        ...filter,
        name: {
          $regex: queryParams.search || '',
          $options: 'i',
        },
      };
    }

    const features = new APIFeatures(Truck.find(filter), queryParams)
      .filter()
      .sort()
      .limitFields()
      .paginate()

      .lean();

    let trucks = await features.query;

    let totalTrucks = await Truck.countDocuments(filter);
    return res.status(200).json({
      status: true,
      message: 'Trucks successfully fetched.',
      totalRecords: totalTrucks,
      data: trucks,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      status: false,
      message: e.message,
    });
  }
});
