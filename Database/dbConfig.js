import mongoose  from "mongoose";
import dotenv from "dotenv";


dotenv.config();

// const connectDB = async() =>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URL)
//         console.log("MongoDB connected Sucessfully");
//     } catch (error) {
//         console.log(error);
//     }
// };


const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGODB_URL );
};



export default connectDB;