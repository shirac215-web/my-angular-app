const mongoose = require('mongoose');

const TreatmentSchema = new mongoose.Schema({
    name: { type: String, required: true }, // שם הטיפול
    description: String,                   // תיאור קצר
    duration: Number,                      // זמן בדקות (למשל 30)
    price: Number                          // מחיר
});

module.exports = mongoose.model('Treatment', TreatmentSchema);