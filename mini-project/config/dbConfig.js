import mongoose from "mongoose";


const connectDB = async (req, res) =>{
    try{
        await mongoose.connect(process.env.mongoDB_url);
        console.log("MongoDB connected");
    }catch(error){
        console.log("Error: " + error.message);
    }
}

export default connectDB;