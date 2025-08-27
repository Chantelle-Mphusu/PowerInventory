import mongoose from 'mongoose'
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB is  connected successfully")
  
    }catch(error){
        console.error("Connection failed", error.message)
        process.exit(1)
    }
}

export default connectDB;
