const { error } = require('console');
const Employee = require('../models/employee');

// GET all employees
  //   exports.getAllEmployees =  async (req, res) => {
  //   try {
  //     const employees = await Employee.find();
      
  //       res.render('viewEmployee', { employee: employees });

  //   } catch (err) {
  //     res.status(500).json({ error: 'Error fetching employees' });
  //   }
  // }


  //employee list
  exports.getAllEmployeeList = async (req, res) =>{
    try {

        const employees = await Employee.find();
      
        res.render('employeeList', { employees: employees });
        
    } catch (error) {
        console.log(error);
        
    }
  }

  

  //show me employee form

  exports.employeeForm = async (req, res) =>{
    try {
        res.render('addEmployee');
    } catch (error) {
        console.log(error);
    }
  }


// POST: Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const employees = await newEmployee.save();
    
    //res.render('employeeList', { employees: employees });
    res.redirect('/employees/employee_form');

  } catch (err) {
    res.status(400).json({ error: 'Error creating an employee' });
  }
}

// // GET: Get a specific employee by ID for edit
    exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        //console.log({employee});
       
        res.render('editEmployee', { employee });
    } catch (err) {
        console.log(error);
    }
    }

// // PUT: Update an existing employee
  
exports.updateEmployee = async (req, res) => {
    try {
      const { name, email, phone, department, dob } = req.body;
      const updatedEmployee = await Employee.findByIdAndUpdate(
        req.params.id,
        {
          name,
          email,
          phone,
          department,
          dob,
          
        },
        { new: true }
      );
  
     
      res.redirect('/employees/employeeList'); 
    } catch (err) {
      console.log(err); 
    
    }
  };



// // DELETE: Delete an employee by ID
exports.deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

   // console.log(deletedEmployee);

   //console.log('delete');
   
    res.redirect('/employees/employeeList'); 
  } catch (err) {
    console.log(error);
  }
}

