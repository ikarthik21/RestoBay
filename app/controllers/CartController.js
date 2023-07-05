import Cart from '../models/CartSchema.js';
import Menu from '../models/MenuSchema.js';
const CartController = () => {
    return {
        async update(req, res) {
            const cart = req.body;
            let existingCart = await Cart.findOne({ cartId: cart.cartId });
            if (existingCart) {
                const updatedCart = await Cart.findOneAndUpdate({ cartId: cart.cartId }, cart);
            }
            else {
                try {
                    const newCart = new Cart(cart);
                    await newCart.save();
                }
                catch (err) {
                    console.log(err);
                }
            }
        },
        async getCart(req, res) {

            const { cartid } = req.body;
            let cart = await Cart.findOne({ cartId: cartid });
            if (cart) {
                return res.status(200).json(cart);
            }

        },
        async getBill(req, res) {

            const { cartId, totalPrice } = req.body;
            console.log(cartId, totalPrice)
            let cart = await Cart.findOne({ cartId: cartId });

            if (cart) {
                if (cart.totalPrice === totalPrice) {
                    return res.status(200).json({ message: "proceed" });
                }
                else {
                    return res.status(400).json({ message: "payment failed" });
                }

            }

            return res.status(400).json({ message: "payment failed" });

        },
        async getMenu(req, res) {

            let menu = await Menu.find();

            return res.status(200).json(menu);

        }
    }
}

export default CartController;

