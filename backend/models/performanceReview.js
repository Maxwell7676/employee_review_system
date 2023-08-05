const mongoose = require('mongoose');

const performanceReviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  employee: { type: String, required: true }, // Store the name of the employee as a string
});

module.exports = mongoose.model('PerformanceReview', performanceReviewSchema);
