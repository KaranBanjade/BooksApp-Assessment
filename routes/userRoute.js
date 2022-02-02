import dotenv from "dotenv";
dotenv.config();
import express from "express";
const router = express.Router();
import User from "../models/userModel.js"

// Constant for updating totalEarnings
const update_amount = 10;


// Post router to increment the totalEarnings and change isPaymentMade
router.post("/payment-made",async(req,res,next) => {
    try{
        // searching for user using parsed userid
        const userFound = await User.findById({_id : req.body.userid})
        if(userFound){
            if(userFound.isPaymentMade == true){
                console.log("Payment has already been made")
                return res.status(200).json({
                    message:"Payment has already been made",
                    error : ""
                })
            }
            else{
                userFound.isPaymentMade = true;
                userFound.save();
                console.log("Excecution Complete: isPaymentMade Changed");
            }

            if(userFound.referredUser!=null){
                // searching referredUser from the userFound object
                const referredUser = await User.findById({_id : userFound.referredUser})

                if(referredUser){
                    referredUser.totalEarnings += update_amount;
                    referredUser.save();
                    console.log("Excecution Complete: Total Earnings Updated");
                }
                else{
                    console.log("No Referred user found")
                    return res.status(404).json({
                        message:"Referred UserID not found",
                        error : ""
                    })
                }
                return res.status(200).json({
                    message:"Updation Complete",
                    error: ""
                })    
            }
        }
        else{
            return res.status(404).json({
                message:"UserID not found",
                error: ""
            })
        }
    }
    catch(error){
        console.log(error," ERROR IN UPDATION");
        return res.status(500).json({
            message:"Something Went Wrong",
            error
        })
    }
})

export default router; 