//const performanceReview = require('../models/performanceReview');
const PerformanceReview = require('../models/performanceReview')
const Employee = require('../models/employee');


//view performance
exports.viewPerformance = async (req, res)=>{

    try {
        
        const performanceReview = await PerformanceReview.find();

        //console.log(performanceReview);

        res.render('viewPerformance', {PerformanceReviews : performanceReview});

    } catch (error) {
        console.log(error);
    }

}


// Add performance reviews
exports.addPerformanceReviewsForm = async (req, res) => {

    try {
        const employee = await Employee.find();
       // console.log(employee);
        res.render('addPerformance', { employees: employee });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to fetch performance reviews.', error: error.message });
      }

};



// POST: Create a new performance review
exports.createPerformanceReview = async (req, res) => {
  try {
    //console.log(req.body);
    const { employee, title, description } = req.body;
    const newPerformanceReview = new PerformanceReview({ employee, title, description });
    const newReview = await newPerformanceReview.save();

    //console.log(newPerformanceReview);

    res.redirect('/performance');
  } catch (error) {
    res.status(500).json({ message: 'Failed to create performance review.', error: error.message });
  }
};


//for update the performance review
exports.getPerformanceReviewById = async (req, res) => {
    try {
      const performanceReview = await PerformanceReview.findById(req.params.id);
      const employees = await Employee.find();
  
      res.render('updatePerformance', { performanceReview, employees });
    } catch (error) {
      console.log(error);
    }
  };
  
  

// PUT: Update an existing performance review
// PUT: Update an existing performance review
exports.updatePerformanceReview = async (req, res) => {
    try {
      const { employee, title, description } = req.body;
      
      // Update the performance review using findByIdAndUpdate
      const updatedPerformanceReview = await PerformanceReview.findByIdAndUpdate(
        req.params.id,
        {
          employee, 
          title,
          description,
        },
        { new: true } 
      );
     
      res.redirect('/Performance/view');
    } catch (error) {
      res.status(500).json({ message: 'Failed to update performance review.', error: error.message });
    }
  };
  

  

// DELETE: Delete a performance review by ID
exports.deletePerformanceReview = async (req, res) => {
  try {
    const deletedPerformanceReview = await PerformanceReview.findByIdAndDelete(req.params.id);
    
    res.redirect('/performance/view');
  } catch (error) {
   console.log(error);
  }
};



//assign performance to employee
const Result = [];

exports.getAssignEmployeesForm = async (req, res) => {
  try {
    const performanceReview = await PerformanceReview.findByIdAndUpdate(req.params.id);

   // console.log(performanceReview);

    if (!req.session.Result) {
      req.session.Result = [];
    }

    if (!req.session.Result.some(review => review.id === performanceReview.id)) {
      req.session.Result.push(performanceReview);
    }

    //console.log(req.session.Result);

   // console.log('url', req.url);

    res.redirect('/performance/performanceAssign')
    
    } catch (error) {
      console.log(error);
    }
  };




  //get assign form
  
  exports.getAssignForm = async (req, res) => {
    try {
      const Result = req.session.Result || []; 
  
      //console.log(Result);

      
  
      // Pass the Result array to the 'adminAssignEmployee' view for rendering
      res.render('performanceAssign', { Result });
    } catch (error) {
      console.log(error);
      res.status(500).send('Error occurred');
    }
  };



  const performanceSelectedList = [];

exports.assignToTable = async (req, res) => {
  try {
    const selectedEmployees = req.body.selectedEmployees;

    const selectedEmp = await PerformanceReview.findById(selectedEmployees);

    req.session.performanceSelectedList = req.session.performanceSelectedList || [];

    if (selectedEmp && !req.session.performanceSelectedList.includes(selectedEmp._id)) {
      req.session.performanceSelectedList.push(selectedEmp); // Push the relevant data (e.g., selectedEmp._id)
    }
    //console.log(req.session.performanceSelectedList);

    res.redirect('/performance/performanceAssign');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};
