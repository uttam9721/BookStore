
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRouter from './routes/product.js'
// import { fetchData } from "./config/db.js";
import registerRouter from './routes/userRoutes.js'
import cors from 'cors'
// dotenv.config();
const app = express();
// const PORT=process.env.PORT;
const PORT=3000;

app.use(express.json());


app.use(cors({
    origin:true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true
}))

 mongoose.connect('mongodb+srv://um8794907_db_user:uttam262903@cluster0.uo60gvk.mongodb.net/BookStore').then(()=>{
        console.log('Database is connected'); 
    }).catch(err=>console.log(err)
    )

app.get('/',(req,res)=>{
    res.send("hello");
})

// fetchData();

app.use('/api/product',productRouter)
app.use('/api/auth',registerRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})