const Booking = require('../models/booking');
const Truck = require('../models/truck');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeature');

exports.bookTruck = catchAsync(async (req, res, next) => {
  try {
    let body = req.body;
    const createdBooking = await Booking.create(body);
    return res.status(200).json({
      status: true,
      message: 'Booking booked successfully.',
      data: createdBooking,
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

    const features = new APIFeatures(Booking.find(filter), queryParams)
      .filter()
      .sort()
      .limitFields()
      .paginate()
      .lean();

    let trucks = await features.query;

    let totalBookings = await Booking.countDocuments(filter);
    return res.status(200).json({
      status: true,
      message: 'Bookings successfully fetched.',
      totalRecords: totalBookings,
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

exports.updateBooking = catchAsync(async (req, res, next) => {
  try {
    let { _id, ...rest } = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(_id, rest, {
      new: true,
    });
    return res.status(200).json({
      status: true,
      message: 'Booking updated successfully.',
      data: updatedBooking,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
});

exports.deleteBooking = catchAsync(async (req, res, next) => {
  try {
    let body = req.body;

    await Booking.deleteOne({ _id: body._id });
    return res.status(200).json({
      status: true,
      message: 'Booking deleted successfully.',
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

    const features = new APIFeatures(Booking.find(filter), queryParams)
      .filter()
      .sort()
      .limitFields()
      .paginate()

      .lean();

    let trucks = await features.query;

    let totalBookings = await Booking.countDocuments(filter);
    return res.status(200).json({
      status: true,
      message: 'Bookings successfully fetched.',
      totalRecords: totalBookings,
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
    const { body } = req;

    const fromDate = new Date(body.fromDate);
    const toDate = new Date(body.toDate);

    let filter = {
      allowExternalBooking: true,
      // $or: [
      //   { fromLocation: [body.fromLocation, null] },
      //   { toLocation: [body.toLocation, null] },
      // ],
      // fromDate: {
      //   $gte: fromDate,
      //   $lte: toDate,
      // },
      // toDate: {
      //   $gte: fromDate,
      //   $lte: toDate,
      // },
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

    console.log(filter, 'filter');

    const features = new APIFeatures(Booking.find(filter), queryParams)
      .filter()
      .sort()
      .limitFields()
      .paginate()
      .lean();

    let trucks = await features.query;

    console.log(trucks.length, 'length');

    let truckss = [];
    trucks.map(async (truck) => {
      let truckDetails = await Truck.findById(truck.truckId).lean();

      console.log(truckDetails, 'truckDetails');
      truckss.push({
        ...truck,
        ...truckDetails,
      });
    });

    // console.log(JSON.stringify(truckss), 'trucks');

    let totalBookings = await Booking.countDocuments(filter);
    return res.status(200).json({
      status: true,
      message: 'Bookings successfully fetched.',
      totalRecords: totalBookings,
      data: truckss,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      status: false,
      message: e.message,
    });
  }
});

exports.getCustomerBookings = catchAsync(async (req, res, next) => {
  try {
    const { body } = req;

    let filter = {
      customer: true,
      booked: true,
      // $or: [
      //   { fromLocation: [body.fromLocation, null] },
      //   { toLocation: [body.toLocation, null] },
      // ],
      // fromDate: {
      //   $gte: fromDate,
      //   $lte: toDate,
      // },
      // toDate: {
      //   $gte: fromDate,
      //   $lte: toDate,
      // },
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

    console.log(filter, 'filter');

    const features = new APIFeatures(Booking.find(filter), queryParams)
      .filter()
      .sort()
      .limitFields()
      .paginate()
      .lean();

    let trucks = await features.query;

    console.log(trucks.length, 'length');

    let truckss = [];

    for (let index = 0; index < trucks.length; index++) {
      const element = trucks[index];

      let truckDetails = await Truck.findById(element.truckId).lean();

      truckss.push({
        ...element,
        ...truckDetails,
      });
    }

    console.log(JSON.stringify(truckss), 'trucks-customer');

    let totalBookings = await Booking.countDocuments(filter);
    return res.status(200).json({
      status: true,
      message: 'Bookings successfully fetched.',
      totalRecords: totalBookings,
      data: truckss,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      status: false,
      message: e.message,
    });
  }
});
