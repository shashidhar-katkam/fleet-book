const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
}, {
    timestamps: true, strict: false
});


bookingSchema.index({
    createdBy: 1, orgId: 1, name: 1
});

module.exports = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);