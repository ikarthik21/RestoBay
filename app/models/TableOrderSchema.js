import mongoose from "mongoose";


const TableOrderSchema = new mongoose.Schema({

    orderId: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    tableno: {
        type: Number,
        required: true
    },
    tableId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    starttime: {
        type: String,
        required: true
    },
    endtime: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    userId: {
        type: String
    }

}, { timestamps: true })


const TableOrder = mongoose.model('TableOrder', TableOrderSchema);

export default TableOrder;
