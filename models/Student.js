const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    gender: String,
    dob: Date,
    contactDetails: String,
    feesPaid: Number,
    assignedClass: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
});

module.exports = mongoose.model('Student', studentSchema);