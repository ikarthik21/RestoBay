import express from 'express';
import UserController from '../app/controllers/UserController.js';
import CartController from '../app/controllers/CartController.js';
import OrderController from '../app/controllers/OrderController.js';
import Auth from '../app/middlewares/Auth.js';
import TableController from '../app/controllers/TableController.js';
const router = express.Router();


router.get('/', (req, res) => {
     res.send("<h1>Welcome to the Backend Server</h1>");
})

router.post('/register', UserController().register);

router.post('/login', UserController().login);

router.post('/updatecart', CartController().update);

router.post('/getcart', CartController().getCart);

router.get('/getmenu', CartController().getMenu);


router.post('/payment/orders', OrderController().createOrder);


router.post('/payment/success', OrderController().verifyPayment);

router.get('/getallorders', OrderController().getAllOrders);

router.get('/gettables', TableController().getTables);


router.post('/booktable', TableController().bookTable);



export default router;