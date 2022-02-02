import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true  
    },
    email:{
        type: String,
        required: true,
        unique: [true, "Email Already present"],
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("Not an Email")
        }
    },
    referredUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "User"
    },
    isPaymentMade: {
        type: Boolean,
        required: true,
        default: false,
    },  
    totalEarnings: {
        type: Number,
        required: true,
        default: 0,
    }
});

const User = new mongoose.model("User", userSchema);
export default User;


