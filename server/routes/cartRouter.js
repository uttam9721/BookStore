import express from 'express'
// import { addToCart, clearCart, decreaseProductQty, removeProductFromCart, userCart } from '../controller/Cart.js';
import { addToCart,clearCart,decreaseProductQty,removeProductFromCart,userCart } from '../controller/Cart.js';
// import { Authenticated } from '../Middlewares/Auth.js';
import { Authenticated } from '../middleware/Authenticated.js';
const router = express.Router();
// add To Cart;
router.post('/add',addToCart)

// get user cart

router.get('/user',Authenticated,userCart)

// remove product from cart
router.delete('/remove/:productId',Authenticated,removeProductFromCart)

// clear cart;
router.delete('/clear',Authenticated,clearCart)

// route decrease
router.post('/--qty',Authenticated,decreaseProductQty)




export default router;