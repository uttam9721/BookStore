// import {User} from '../models/UserModel.js'
import { User } from "../models/UserModel.js";
import bcrypt from 'bcrypt'

export const register=async(req,res)=>{
    const {name,email,password}=req.body;
    try {
      const user=await User.findOne({email}) 
      if (user) return res.json({message:'user already register',success:false});
      const hashPass=await bcrypt.hash(password,10);
        user =await User.create({
        name,
        email,
        password:hashPass,
    })
    res.status(201).json({message:'User register Successfully',success:true,user})
    } catch (error) {
        res.status(404).json({message:'user not found '});
        
    }
}