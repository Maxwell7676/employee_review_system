const mongoose = require('mongoose');

const employeeManageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  employee: { type: String, required: true }, 
  rating: { type: Number, default: 0 }, 
  comment: { type: String, required: true }
});

module.exports = mongoose.model('employeeManage', employeeManageSchema);
