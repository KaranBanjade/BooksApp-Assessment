import app from "./app.js";
import dotenv from "dotenv"
dotenv.config();

const port = process.env.port||3000
// Starting server
app.listen(port, ()=>{
    console.log(`Server Started at port ${port}`);
})