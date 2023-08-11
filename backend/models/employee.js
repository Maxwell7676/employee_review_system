const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String }, 
  department: { type: String },   
  dob: { type: Date } 
  
});

module.exports = mongoose.model('Employee', employeeSchema);
