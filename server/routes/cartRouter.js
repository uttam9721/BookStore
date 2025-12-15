import express from 'express'
import { addToCart, clearCart, decreaseProductQty, removeProductFromCart, userCart } from '../controllers/Cart.js';
import { Authenticated } from '../Middlewares/Auth.js';
const router = express.Router();
// add To Cart;
router.post('/add',addToCart)

// get user cart

router.get('/user',userCart)

// remove product from cart
router.delete('/remove/:productId',removeProductFromCart)

// clear cart;
router.delete('/clear',clearCart)

// route decrease
router.post('/--qty',decreaseProductQty)




export default router;