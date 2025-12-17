// import { Cart } from "../models/Cart.js";

// // export const addToCart = async (req, res) => {
// //   const { productId, title, price, qty, img } = req.body;

// //   const userId = req.user;

// //   let cart = await Cart.findOne({ userId });

// //   if (!cart) {
// //     cart = new Cart({ userId, items: [] }); 
// //   }
   
// //   const itemIndex = cart.items.findIndex(
// //     (item) => item.productId.toString() === productId
// //   );
 
// //   if (itemIndex > -1) {
// //     cart.items[itemIndex].qty += 1;
// //     cart.items[itemIndex].price += price * qty; 
// //   } else {
// //     cart.items.push({ productId, title, price, qty, img });
// //   }

// //   await cart.save();
// //   res.json({ message: "Items Added To Cart", cart });
// // };


// // // get User Cart
// // export const userCart = async (req,res) =>{
// //     const userId =  req.user;
    
// //     let cart = await Cart.findOne({userId});
// //     if(!cart) return res.json({message:'Cart not found'})
 
// //      res.json({message:"user cart",cart})
// //  }

// // //  remove product

// // export const removeProductFromCart = async (req,res) =>{
// //   const productId = req.params.productId;
// //   const userId =  req.user;
  
// //   let cart = await Cart.findOne({userId});
// //   if(!cart) return res.json({message:'Cart not found'});

// //   cart.items=cart.items.filter((item)=>item.productId.toString()!==productId)
// //   await cart.save()
// //    res.json({message:"product remove from cart"});
// // }


// // // clear cart

// // export const clearCart = async (req,res) =>{
// //   // const productId = req.params.productId;
// //   const userId =  req.user;
  
// //   let cart = await Cart.findOne({userId});
// //   if(!cart){
// //     cart = new Cart({items:[]})
// //   } else{
// //       cart.items=[];
// //   }

// //   await cart.save()
// //    res.json({message:"cart cleared"});
// // }

// // // decrease qty

// // export const decreaseProductQty = async (req, res) => {
// //   const { productId, qty } = req.body;

// //   const userId = req.user;

// //   let cart = await Cart.findOne({ userId });

// //   if (!cart) {
// //     cart = new Cart({ userId, items: [] }); 
// //   }
   
// //   const itemIndex = cart.items.findIndex(
// //     (item) => item.productId.toString() === productId
// //   );
 
// //   if (itemIndex > -1) {
// //     const item = cart.items[itemIndex]
// //     if(item.qty>qty){
// //       const pricePerUnit = item.price /item.qty
// //       item.qty-=qty
// //       item.price -=pricePerUnit*qty
// //     }else{
// //       cart.items.splice(itemIndex,1)
// //     }

// //   } else {
// //    return res.json({message:"item qty dec ",cart})
// //   }

// //   await cart.save();
// //   res.json({ message: "Items Added To Cart", cart });
// // };








// // import { Cart } from "../Models/Cart.js";

// // add To Cart
// export const addToCart = async (req, res) => {
//   const { productId, title, price, qty, img } = req.body;

//   const userId = req.user;

//   let cart = await Cart.findOne({ userId });

//   if (!cart) {
//     cart = new Cart({ userId, items: [] }); 
//   }
   
//   const itemIndex = cart.items.findIndex(
//     (item) => item.productId.toString() === productId
//   );
 
//   if (itemIndex > -1) {
//     cart.items[itemIndex].qty += 1;
//     cart.items[itemIndex].price += price * qty; 
//   } else {
//     cart.items.push({ productId, title, price, qty, img });
//   }

//   await cart.save();
//   res.json({ message: "Items Added To Cart", cart });
// };


// // get User Cart
// export const userCart = async (req,res) =>{
//     const userId =  req.user;
    
//     let cart = await Cart.findOne({userId});
//     if(!cart) return res.json({message:'Cart not found'})
 
//      res.json({message:"user cart",cart})
//  }

// //  remove product

// export const removeProductFromCart = async (req,res) =>{
//   const productId = req.params.productId;
//   const userId =  req.user;
  
//   let cart = await Cart.findOne({userId});
//   if(!cart) return res.json({message:'Cart not found'});

//   cart.items=cart.items.filter((item)=>item.productId.toString()!==productId)
//   await cart.save()
//    res.json({message:"product remove from cart"});
// }


// // clear cart

// export const clearCart = async (req,res) =>{
//   // const productId = req.params.productId;
//   const userId =  req.user;
  
//   let cart = await Cart.findOne({userId});
//   if(!cart){
//     cart = new Cart({items:[]})
//   } else{
//       cart.items=[];
//   }

//   await cart.save()
//    res.json({message:"cart cleared"});
// }

// // decrease qty

// export const decreaseProductQty = async (req, res) => {
//   const { productId, qty } = req.body;

//   const userId = req.user;

//   let cart = await Cart.findOne({ userId });

//   if (!cart) {
//     cart = new Cart({ userId, items: [] }); 
//   }
   
//   const itemIndex = cart.items.findIndex(
//     (item) => item.productId.toString() === productId
//   );
 
//   if (itemIndex > -1) {
//     const item = cart.items[itemIndex]
//     if(item.qty>qty){
//       const pricePerUnit = item.price /item.qty
//       item.qty-=qty
//       item.price -=pricePerUnit*qty
//     }else{
//       cart.items.splice(itemIndex,1)
//     }

//   } else {
//    return res.json({message:"item qty dec ",cart})
//   }

//   await cart.save();
//   res.json({ message: "Items Added To Cart", cart });
// };





import { Cart } from "../models/Cart.js";

// ADD TO CART
export const addToCart = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Request body missing" });
    }

    const { productId, title, price, qty, img } = req.body;

    if (!productId || !qty) {
      return res.status(400).json({
        message: "productId and qty are required",
      });
    }

    const userId = req.user;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].qty += qty;
      cart.items[itemIndex].price += price * qty;
    } else {
      cart.items.push({ productId, title, price, qty, img });
    }

    await cart.save();
    res.json({ success: true, message: "Item added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER CART
export const userCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user });
  res.json(cart || { items: [] });
};

// REMOVE PRODUCT
export const removeProductFromCart = async (req, res) => {
  const { productId } = req.params;

  let cart = await Cart.findOne({ userId: req.user });
  if (!cart) return res.json({ message: "Cart not found" });

  cart.items = cart.items.filter(
    (item) => item.productId.toString() !== productId
  );

  await cart.save();
  res.json({ message: "Product removed", cart });
};

// CLEAR CART
export const clearCart = async (req, res) => {
  let cart = await Cart.findOne({ userId: req.user });

  if (cart) {
    cart.items = [];
    await cart.save();
  }

  res.json({ message: "Cart cleared" });
};

// DECREASE QTY
export const decreaseProductQty = async (req, res) => {
  const { productId, qty } = req.body;

  let cart = await Cart.findOne({ userId: req.user });
  if (!cart) return res.json({ message: "Cart not found" });

  const itemIndex = cart.items.findIndex(
    (item) => item.productId.toString() === productId
  );

  if (itemIndex > -1) {
    const item = cart.items[itemIndex];

    if (item.qty > qty) {
      const unitPrice = item.price / item.qty;
      item.qty -= qty;
      item.price -= unitPrice * qty;
    } else {
      cart.items.splice(itemIndex, 1);
    }
  }

  await cart.save();
  res.json({ message: "Quantity updated", cart });
};
