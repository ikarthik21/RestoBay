import express from 'express';
import UserController from '../app/controllers/UserController.js';
import CartController from '../app/controllers/CartController.js';
import OrderController from '../app/controllers/OrderController.js';
import Auth from '../app/middlewares/Auth.js';
import TableController from '../app/controllers/TableController.js';
import AdminController from '../app/controllers/Admin/AdminController.js'
const router = express.Router();


router.get('/', (req, res) => {
     res.send("<h1>Welcome to the Backend Server</h1>");
})




// User Routes

// Route to register a new user
router.post('/register', UserController().register);

//  Login Route
router.post('/login', UserController().login);

// Route to get the restaurant menu 
router.get('/getmenu', CartController().getMenu);

// get all tables of the restaurant
router.get('/gettables', TableController().getTables);


// Get Cart of a user
router.post('/getcart', CartController().getCart);

// Route to update the cart of a user
router.post('/updatecart', CartController().update);

// Route to  get profile of a user
router.get('/getprofile', UserController().getProfile);



// Route to  edit profile of a user
router.post('/editprofile', UserController().editProfile);

// Route for forget password 
router.post('/forget/password', UserController().forgetPassword);

// Route for reset password 
router.post('/forget/resetPassword', UserController().passwordReset);

// Route for verify email

router.post('/verify/mail', UserController().verifyMail);

// Route for resend verfication email

router.post('/verify/resend', UserController().resendMail);


//  Get all table bookings of a particular user
router.get('/getalltablebooks', TableController().getallTableOrder);

//get all food orders of a particular user
router.get('/getallorders', OrderController().getAllOrders);


// Payment Routes

// Route to intialze a table booking
router.post('/booktable', TableController().bookTable);

// route to intialize a food order
router.post('/payment/orders', OrderController().createOrder);

// User payment  verification for food orders 
router.post('/payment/success', OrderController().verifyPayment);

// User payment  verification for table payments
router.post('/payment/table/success', TableController().verifybookTable);




// admin routes

// route to get the all table orders for admin
router.get('/tableorders', AdminController().tablebooks);

// route to get all the food orders  for admin
router.get('/foodorders', AdminController().foodorders);

// route to get all the users
router.get('/allusers', AdminController().allUsers);




export default router;