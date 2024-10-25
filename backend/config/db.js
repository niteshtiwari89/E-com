import mongoose from "mongoose";

dotenv.config();
export const connectDB = async()=>{
    await mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'something'}).then(()=>console.log("DB connected"))
    .catch(error => console.log(error))
    
}