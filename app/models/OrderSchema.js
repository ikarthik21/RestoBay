import mongoose from "mongoose";

import { itemSchema } from "./CartSchema.js";

const OrderSchema = new mongoose.Schema({

    orderId: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    totalItems: {
        type: Number,
        required: true
    },
    status: {
        type: String
    },
    Items: [itemSchema]

})


const Order = mongoose.model('Order', OrderSchema);

export default Order;
