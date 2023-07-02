import express from 'express';
import UserController from '../app/controllers/UserController.js';
import CartController from '../app/controllers/CartController.js';
import Auth from '../app/middlewares/Auth.js';
const router = express.Router();


router.get('/', (req, res) => {
     res.send("<h1>Welcome to the Backend Server</h1>");
})

router.post('/register', UserController().register);

router.post('/login', UserController().login);

router.post('/update-cart', CartController().update);

router.post('/get-cart', CartController().getCart);



export default router;