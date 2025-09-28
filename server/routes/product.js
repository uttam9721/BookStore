import express from 'express';
import { addProduct, getAllProducts, getProductById, getProductByIdAndUpdate } from '../controller/Product.js';

const router=express.Router();


router.post('/add',addProduct);
router.get('/get',getAllProducts);
router.get('/:id',getProductById);
router.put('/:id',getProductByIdAndUpdate);



export default router;