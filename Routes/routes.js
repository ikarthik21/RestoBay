import express from 'express';
import UserController from '../app/controllers/UserController.js';
import CartController from '../app/controllers/CartController.js';
import OrderController from '../app/controllers/OrderController.js';
import Auth from '../app/middlewares/Auth.js';
const router = express.Router();


router.get('/', (req, res) => {
     res.send("<h1>Welcome to the Backend Server</h1>");
})

router.post('/register', UserController().register);

router.post('/login', UserController().login);

router.post('/update-cart', CartController().update);

router.post('/get-cart', CartController().getCart);

router.get('/getmenu', CartController().getMenu);


router.post('/create-order', OrderController().createOrder);

// Route for creating an order and obtaining a payment ID
// app.post('/create-order', async (req, res) => {
//      try {
//           const { items } = req.body; // Assuming the items are sent from the frontend

//           // Calculate the totalPrice on the backend
//           const totalPrice = calculateTotalPrice(items); // Implement your own logic here

//           // Create an order in Razorpay
//           const razorpayOrder = await razorpay.orders.create({
//                amount: totalPrice * 100, // Razorpay expects amount in paise
//                currency: 'INR', // Change to your desired currency
//           });

//           // Store the order details in MongoDB
//           const order = new Order({
//                orderId: razorpayOrder.id,
//                amount: totalPrice,
//                status: 'created',
//           });
//           await order.save();

//           res.json({
//                orderId: razorpayOrder.id,
//                amount: totalPrice,
//           });
//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ error: 'Something went wrong' });
//      }
// });

export default router;