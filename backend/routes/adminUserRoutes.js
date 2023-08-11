const express = require('express');
const router = express.Router();
const adminUserController = require('../controllers/adminUserController');



  //admin dashboard 
  router.get('/home', async (req, res) => {
    try {
      //const employees = await Employee.find();
      res.render('admin_dashboard');
    } catch (error) {
      console.log(error);
    //   res.status(500).send('Server Error');
    }
  });



  //for test
  // router.get('/assign', (req, res)=>{
  //   res.render('adminAssignEmployee');
  // })


  //for employee review acces to employee



// Sign in routes
router.get('/signIn', adminUserController.signIn);
router.post('/signIn', adminUserController.verifySignIn);


// Sign up routes
router.get('/signUp', adminUserController.signUp);
router.post('/signUp', adminUserController.signUpDoc);


// Sign out route
router.get('/signOut', adminUserController.signOut);


// send data to manage mployee page
router.post('/reviewTable/toManage/:id', adminUserController.employeeManage);


//router.get('/manageEmployee', adminUserController.manageEmployee);
router.get('/toManageEmployeeList', adminUserController.employeeManageList);


router.post('/employeeManage/:id', adminUserController.deleteEmployeeManageList);












//admin assign page render







module.exports = router;