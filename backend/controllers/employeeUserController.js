const employeeUserModel = require('../models/employeeUser')
const PerformanceReview = require('../models/performanceReview');


        // Sign in
        exports.signIn = async (req, res) => {
            res.render('_employee_signIn');
          };
        
        //verify sign in
        exports.verifySignIn = async (req, res) => {
            try {
              const { email, password } = req.body;

              const performanceSelectedList  = req.session.performanceSelectedList;
          
              const result = await employeeUserModel.findOne({ email: email });
          
              if (result != null) {
                if (result.email === email && result.password === password) {
                          
                  // Pass the 'userId' as an object to the 'employeeDashboard' page
                  res.render('employeeDashboard', {performanceSelectedList});
                } else {
                  console.log(`Email or password not valid`);
                }
              } else {
                console.log('Email not registered');
              }
            } catch (error) {
              console.log(error);
            }
          };
          



        // Sign up
        exports.signUp = async (req, res) => {
            res.render('_employee_signUp');
        }

        exports.signUpDoc = async (req, res) => {
            try {
            const signUp = new employeeUserModel({
                username:req.body.name,
                email:req.body.email,
                password:req.body.password
            });
    
            await signUp.save();
            console.log('running');

            res.redirect('/employee/signIn');

        } catch (error) {
            console.log(error);
        }
    }




    //employee access to table of performance to feedback

    exports.pendingReviewPerformanceTable = async (req, res)=>{

        try {

            const performanceSelectedList  = req.session.performanceSelectedList;

           // console.log(performanceSelectedList);
            
            res.render('tableAssignFeedback', {performanceSelectedList});

        } catch (error) {
            console.log(error);
        }

    }



    //get open employee review page
    exports.employeeReviewPage = async (req, res) =>{

        try {

            //const performanceSelectedList  = req.session.performanceSelectedList;

            const Result = await PerformanceReview.findById(req.params.id);

            //console.log('id',findById);


            //console.log('hello');
            
            res.render('employeeReview', {Result});

        } catch (error) {
            console.log(error);
        }

    }




