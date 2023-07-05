
import Menu from "../models/MenuSchema.js";
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
dotenv.config()
import Order from "../models/OrderSchema.js";
 
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const OrderController = () => {

    return {
        async createOrder(req, res) {
            const { Items, totalItems } = req.body;

            const MenuList = await Menu.find({});

            let totalPrice = 0;

            for (const cartItem of Items) {
                const menuItem = MenuList.find(item => item.item_id === cartItem.item_id);
                if (menuItem) {
                    totalPrice += menuItem.price * cartItem.quantity;
                }
            }

            // Create an order in Razorpay

            const razorpayOrder = await razorpay.orders.create({
                amount: totalPrice * 100,
                currency: 'INR',
            });

            // Store the order details in MongoDB

            const order = new Order({
                orderId: razorpayOrder.id,
                totalPrice: totalPrice,
                status: 'created',
                totalItems: totalItems,
                Items: Items

            });
            await order.save();

            res.json({
                orderId: razorpayOrder.id,
                amount: totalPrice,
            });




        }
    }

}

export default OrderController