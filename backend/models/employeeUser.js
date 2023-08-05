const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});




const employeeUser = mongoose.model('employeeUser', employeeSchema);
module.exports = employeeUser;