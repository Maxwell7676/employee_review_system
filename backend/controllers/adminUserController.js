//const userModel = require('../models/user.js');

    const adminUserModel = require('../models/admin.js');
    const employeeManage = require('../models/employeeManage.js');


        // Sign in
        exports.signIn = async (req, res) => {
            res.render('_admin_signIn');
          };
        
        //verify sign in
        exports.verifySignIn = async(req, res)=>{

            try {
            
            const {email, password} = req.body;

            const result = await adminUserModel.findOne({email:email});

                if(result != null){
                    if(result.email == email && result.password == password){
                        
                        res.render('admin_dashboard');
                    }else{
                        console.log(`email or password not valid`);
                    }
                }else{
                    console.log('email not registered');
                }

            } catch (error) {
                console.log(error);
            }

        }



        // Sign up
        exports.signUp = async (req, res) => {
            res.render('_admin_signUp');
        }

        exports.signUpDoc = async (req, res) => {
            try {
            const signUp = new adminUserModel({
                username:req.body.name,
                email:req.body.email,
                password:req.body.password
            });
    
            await signUp.save();
            console.log('running');

            res.redirect('/admin/signIn');

        } catch (error) {
            console.log(error);
        }
    }




    // Sign out
    exports.signOut = async (req, res) => {
    // Destroy the user's session to log them out
    req.session.destroy((err) => {
      if (err) {
        console.log('Error occurred while signing out:', err);
      } else {
        // Redirect the user to the homepage or any other route after sign-out
        res.redirect('/admin/signIn');
      }
    });
  };




//manage employee

exports.employeeManage = async (req, res)=>{

    try {
        
        const body = req.body;

        console.log(body);

        // await body.save();

        const {title, description, employee, comment, rating} = req.body;

        const doc = new employeeManage({

            title: title,
            description: description,
            employee: employee,
            comment : comment,
            rating : rating

        })

        const result = await doc.save();

        res.redirect('/employeeUser/reviewTable')

       // console.log(result);

    } catch (error) {
        console.log(error);
    }
}




  //for manage employeelist
  exports.employeeManageList = async (req, res)=>{

    try {
        
        //console.log('hello');
        const Result = await employeeManage.find(); 

        console.log(Result);

       res.render('employeeManage', {Result});

    } catch (error) {
        console.log(error);
    }

  }


  //delete employee from the list
  
  exports.deleteEmployeeManageList = async (req, res) => {
    try {
     
      const deletedEntry = await employeeManage.findByIdAndDelete(req.params.id);
  
      console.log(deletedEntry);
  
   
      const updatedFeedbackData = await employeeManage.find();
  
    
      res.render('employeeManage', { Result: updatedFeedbackData });
    } catch (error) {
      console.log(error);
    }
  };
  


  