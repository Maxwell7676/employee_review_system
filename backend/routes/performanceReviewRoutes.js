const express = require('express');
const router = express.Router();
const performanceReviewController = require('../controllers/performanceReviewController');

//view performances
router.get('/view', performanceReviewController.viewPerformance);


// performance adding form
router.get('/', performanceReviewController.addPerformanceReviewsForm);

//for edit performance review
router.post('/edit/:id', performanceReviewController.getPerformanceReviewById);

// CREATE a new performance review
router.post('/', performanceReviewController.createPerformanceReview);

// UPDATE an existing performance review by ID
router.post('/update/:id', performanceReviewController.updatePerformanceReview);

// DELETE a performance review by ID
router.post('/delete/:id', performanceReviewController.deletePerformanceReview);



//get assign form
router.get('/performanceAssign', performanceReviewController.getAssignForm)


// Display form to assign employees to performance review
router.post('/performanceAssign/:id', performanceReviewController.getAssignEmployeesForm);


//add to table
router.post('/performanceAssign', performanceReviewController.assignToTable)


 module.exports = router;
