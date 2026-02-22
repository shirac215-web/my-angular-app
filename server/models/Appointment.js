const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  date: String,
  time: String,
  treatmentType: String,
  isAvailable: { type: Boolean, default: true },
  customerName: { type: String, default: "" },
  phone: { type: String, default: "" }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);