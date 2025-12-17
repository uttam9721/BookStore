
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRouter from './routes/product.js'
// import { fetchData } from "./config/db.js";
import registerRouter from './routes/userRoutes.js'
// import {connectDB} from './config/db.js'
// import cartRouter from '../server/routes/cartRouter.js'
import cors from 'cors'
// import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
dotenv.config();
const app = express();
// const PORT=process.env.PORT;
const PORT=3000;

app.use(express.json());


// console.log("port" process.env.PORT);



app.use(cors({
    origin:true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true
}))


// connectDB()
mongoose.connect('mongodb+srv://um8794907_db_user:uttam262903@cluster0.uo60gvk.mongodb.net/BookStore').then(()=>console.log('connected')
).catch((err)=>console.log(err)
)


app.get('/',(req,res)=>{
    res.send("hello");
})

// fetchData();

app.use('/api/product',productRouter)
app.use('/api/auth',registerRouter)
// app.use('/api/cart',cartRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})




// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import morgan from "morgan";

// // 🔥 Load environment variables FIRST
// dotenv.config();

// // DB Connection
// import connectDB from "./config/db.js";

// // Routes
// import userRoutes from "./routes/userRoutes.js";
// import productRoutes from "./routes/product.js";
// // import cartRoutes from "./routes/cartRouter.js";

// const app = express();

// /* ------------------ MIDDLEWARE ------------------ */
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Dev logging
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

// /* ------------------ DATABASE ------------------ */
// connectDB();

// /* ------------------ ROUTES ------------------ */
// app.get("/", (req, res) => {
//   res.send("📚 BookStore API is running...");
// });

// app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);
// // app.use("/api/cart", cartRoutes);

// /* ------------------ ENV CHECK (DEBUG) ------------------ */
// console.log("PORT:", process.env.PORT);
// console.log("MONGO_URI:", process.env.MONGO_URI ? "Loaded ✅" : "Not Loaded ❌");

// /* ------------------ SERVER ------------------ */
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(
//     `🚀 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
//   );
// });
