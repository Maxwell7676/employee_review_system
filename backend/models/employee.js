const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String }, // Add the phone number field
  department: { type: String }, // Add the department field
  dob: { type: Date } // Add the date of birth field
  
});

module.exports = mongoose.model('Employee', employeeSchema);
