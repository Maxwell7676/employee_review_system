        const Feedback = require('../models/feedback');
        const Employee = require('../models/employee');
        const PerformanceReview = require('../models/performanceReview');



        // // GET all feedbacks
        exports.getAllFeedbacks = async (req, res) => {
            try {
            const feedbacks = await Feedback.find();
            res.render('addFeedback', { feedbacks }); // Pass feedbacks data to the "viewFeedback.ejs" template
            } catch (error) {
            res.status(500).json({ message: 'Failed to fetch feedbacks.', error: error.message });
            }
        };
        

        exports.createFeedback = async (req, res) => {
        try {
            const { performanceReview, feedbackBy, feedbackText } = req.body;
            const newFeedback = new Feedback({ performanceReview, feedbackBy, feedbackText });
            await newFeedback.save();
            res.redirect('/'); // Redirect to the root route after successfully creating the feedback
        } catch (error) {
            res.status(500).json({ message: 'Failed to create feedback.', error: error.message });
        }
        };

        exports.getFeedbackById = async (req, res) => {
        try {
            const feedback = await Feedback.findById(req.params.id);
            if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found.' });
            }
            res.render('singleFeedback', { feedback }); // Render the "singleFeedback.ejs" template with the feedback data
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch feedback.', error: error.message });
        }
        };

        exports.updateFeedback = async (req, res) => {
        try {
            const { performanceReview, feedbackBy, feedbackText } = req.body;
            const updatedFeedback = await Feedback.findByIdAndUpdate(
            req.params.id,
            { performanceReview, feedbackBy, feedbackText },
            { new: true }
            );
            if (!updatedFeedback) {
            return res.status(404).json({ message: 'Feedback not found.' });
            }
            res.redirect('/'); // Redirect to the root route after successfully updating the feedback
        } catch (error) {
            res.status(500).json({ message: 'Failed to update feedback.', error: error.message });
        }
        };

        exports.deleteFeedback = async (req, res) => {
        try {
            const deletedFeedback = await Feedback.findByIdAndRemove(req.params.id);
            if (!deletedFeedback) {
            return res.status(404).json({ message: 'Feedback not found.' });
            }
            res.redirect('/'); // Redirect to the root route after successfully deleting the feedback
        } catch (error) {
            res.status(500).json({ message: 'Failed to delete feedback.', error: error.message });
        }
        };



        //assign employee

     





// Display form to assign employees to performance review


  
  











  exports.assignEmployees = async (req, res) => {
    try {
     
        const feedback = await PerformanceReview.findById(req.params.id);

        //console.log(feedback);

        res.render('employeeReview', {data : feedback});

        //res.redirect('/feedback/employeeManage')
  
    } catch (error) {
      console.log(error);
    }
  };


  //--------------------


// // this is for employee access the review page
//   exports.copyAssignEmployees = async (req, res) => {
//     try {
//       const performanceReview = await PerformanceReview.findById(req.params.id);
//       console.log(performanceReview);

//       Result.push(performanceReview);

//       console.log(Result);
     
//       //res.render('adminAssignEmployee', { Result });

//      // const test = 

//       res.render('employeeReview', { data : performanceReview });

//     } catch (error) {
//       console.log(error);
//     }
//   };


  //--------------------------
  

  exports.employeeManage = async (req, res) => {
    try {
  
  
      const { title, employee, comment, ratings } = req.body;
     
          
      const newFeedback = new Feedback({
        title: title,
        employee: employee,
        comment: comment, 
        ratings: ratings,
      });
  
      const savedFeedback = await newFeedback.save();

      res.redirect('/feedback/employeeManage');
  
      console.log('Feedback saved successfully');
    } catch (error) {
      console.log(error);
      // Handle any internal server error
      // For example, you can render an error page or send a custom response
    }
  };
  


  //list employee manage list

  exports.employeeManageList = async (req, res) => {
    try {
      const feedbackData = await Feedback.find();
     // console.log(feedbackData);
      res.render('employeeManage', { Result: feedbackData }); // Pass the 'feedbackData' object to the view
    } catch (error) {
      console.log(error);
    }
  };




// ----------------




  //admin assign form render



//asign page table



