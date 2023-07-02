import Cart from '../models/CartSchema.js';

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

        }
    }
}

export default CartController;

