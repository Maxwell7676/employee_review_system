const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Property name should be 'title'
  employee: { type: String, required: true }, // Property name should be 'employee'
  comment: { type: String, required: true }, // Property name should be 'comment'
  ratings: { type: Number, min: 1, max: 5, required: true },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
