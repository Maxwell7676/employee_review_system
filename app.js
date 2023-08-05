const express = require('express');
const mongoose = require('mongoose');
const cookie = require('cookie-parser')
const path = require('path');
const session = require('express-session'); 
//const flash = require('connect-flash');


const app = express();
const PORT = process.env.PORT || 5000;


// mongoose.connect('mongodb://127.0.0.1:27017/employee_review_system', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect('mongodb+srv://ravirathod123413:CTP5ZVOEdP0oBKlB@cluster0.0ixcgfg.mongodb.net/employee_review_system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//static file
app.use(express.static('public'));
app.use(cookie());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views'); // Set the views directory


app.use(session({
  secret: '123', 
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, 
   
  }
}));






// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'frontend/public')));

// Set EJS as the view engine
app.set('views', path.join(__dirname, 'frontend/views'));
app.set('view engine', 'ejs');


 


const employeeRoutes = require('./backend/routes/employeeRoutes');
const feedbackRoutes = require('./backend/routes/feedbackRoutes');
const performanceReviewRoutes = require('./backend/routes/performanceReviewRoutes');

//sign in
const adminUser = require('./backend/routes/adminUserRoutes');
const employeeUser = require('./backend/routes/employeeUserRoutes');



//home page
app.get('/', (req, res)=>{
  res.render('home');
})



app.use('/employees', employeeRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/performance', performanceReviewRoutes);

//sign in
app.use('/admin', adminUser);
app.use('/employeeUser', employeeUser);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
