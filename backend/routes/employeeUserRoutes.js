const express = require('express');
const router = express.Router();
const employeeUserController = require('../controllers/employeeUserController.js');


 
router.get('/dashboard', (req, res)=>{

 

  res.render('employeeDashboard');

})

// Sign in routes
router.get('/signIn', employeeUserController.signIn);
router.post('/signIn', employeeUserController.verifySignIn);


// Sign up routes
router.get('/signUp', employeeUserController.signUp);
router.post('/signUp', employeeUserController.signUpDoc);



//table pending for review 

router.get('/reviewTable', employeeUserController.pendingReviewPerformanceTable);

//router.post('/employeeUser/reviewTable/vieew')


router.post('/reviewTable/:id', employeeUserController.employeeReviewPage);




module.exports = router;

