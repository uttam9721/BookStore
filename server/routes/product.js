import express from 'express';
import { addProduct, getAllProducts } from '../controller/Product.js';

const router=express.Router();


router.post('/add',addProduct);
router.get('/get',getAllProducts);



export default router;