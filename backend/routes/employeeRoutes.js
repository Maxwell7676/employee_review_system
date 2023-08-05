
// employeeController.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// GET all employees
router.get('/', employeeController.getAllEmployees);

//employee forrm
router.get('/employee_form', employeeController.employeeForm);


// // CREATE a new employee
router.post('/employee_form', employeeController.createEmployee);


//employee list
router.get('/employeeList', employeeController.getAllEmployeeList);




// GET a specific employee by ID
router.get('/:id/edit', employeeController.getEmployeeById);



// // UPDATE an existing employee by ID
router.post('/:id/update', employeeController.updateEmployee);

// // DELETE an employee by ID
router.post('/:id/delete', employeeController.deleteEmployee);


module.exports = router;


























//---------------------------------------------------------------------

// const express = require('express');
// const router = express.Router();
// const employeeController = require('../controllers/employeeController');

// // GET all employees
//     router.get('/', employeeController.getAllEmployees);

// // GET a specific employee by ID
// // router.get('/:id', employeeController.getEmployeeById);

// // // CREATE a new employee
// // router.post('/', employeeController.createEmployee);

// // // UPDATE an existing employee by ID
// // router.put('/:id', employeeController.updateEmployee);

// // DELETE an employee by ID
// // router.delete('/:id', employeeController.deleteEmployee);

//  module.exports = router;
