import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    item_id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
});

const cartSchema = new mongoose.Schema({
    Items: [itemSchema],
    totalItems: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    cartId: { type: String, required: true },
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;