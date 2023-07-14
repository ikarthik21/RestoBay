import mongoose from "mongoose";

export const itemSchema = new mongoose.Schema({
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

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'customer'
    },
    verified: {
        type: Boolean,
        default: false
    },
    cart: {
        type: Object,
        default: {}
    }

}, { timestamps: true });



















const UserRegister = new mongoose.model("user", UserSchema);

export default UserRegister;