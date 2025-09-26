import { Products } from "../models/ProductModel.js";

export const addProduct=async(req,res)=>{
    const {title,desc,price,category,img,qty,author}=req.body;
    try {
        const product =await Products.create({
            title,
            desc,
            price,
            category,
            img,
            qty,
            author,
        });
        res.json({message:'Product added successfully',product})
        
    } catch (error) {
        res.json({error:error.message});
    }
}


export const getAllProducts=async(req,res)=>{
    try {
        const products =await Products.find({});
        res.json(products);
    } catch (error) {
        res.json({error:error.message});
    }
}