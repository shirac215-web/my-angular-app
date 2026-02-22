const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  date: String,
  time: String,
  treatmentType: String,
  isAvailable: { type: Boolean, default: true }
});

const collection = mongoose.model('colection', slotSchema);