const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
}, {
    timestamps: true, strict: false
});


truckSchema.index({
    createdBy: 1, orgId: 1, name: 1
});

module.exports = mongoose.models.Truck || mongoose.model('Truck', truckSchema);