import express from "express"
import cors from "cors"
import mongoose from "mongoose";
// import { connectDB } from "./config/db.js"
import foodRoutes from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoutes.js"




const connectDB = async()=>{
    await mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'something'}).then(()=>console.log("DB connected"))
    .catch(error => console.log(error))
    
    }

//app config
const app = express()
const port = 4000


const corsOptions = {
    origin:['https://e-com-flame.vercel.app/', 'https://e-com-admin-phi.vercel.app/'],
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
//middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use('/upload', express.static(path.join(__dirname, 'upload')));


//endpoint for testing
app.get("/", (req, res) => {
    res.send("hello world")
})


//endpoints
app.use("/api/food", foodRoutes)
app.use("/images", express.static('upload'))
app.use("/api/data", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


//database connection
connectDB();


//port listening
app.listen(port, () => {
    console.log(`successfully running in the port http://localhost:${4000}`)
})
