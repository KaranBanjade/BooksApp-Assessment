// import libraries
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const app = express();

// Dealing with cors errors
app.use(cors())
app.use(express.json())

// Exposing Routes
import userRoutes from "./routes/userRoute.js";


// Connecting to db
mongoose.connect(process.env.DB_LINK, {
}).then(()=>{
    console.log("Mongoose DB Connected");
});

// Routing requests to apis
app.use("/",userRoutes);
// app.get("/",(req,res)=>{
//     res.send("heelo")
// })

export default app;