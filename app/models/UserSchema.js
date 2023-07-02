import mongoose from "mongoose";

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

}, { timestamps: true });
 
const UserRegister = new mongoose.model("user", UserSchema);

export default UserRegister;