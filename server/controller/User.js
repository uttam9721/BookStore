import { User } from "../models/UserModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register=async(req,res)=>{
    let {name,email,password}=req.body;
    try {
      let user=await User.findOne({email}) 
      if (user) return res.json({message:'user already register',success:false});
      let hashPass=await bcrypt.hash(password,10);
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

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'User not found', success: false });
    }

    let validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials', success: false });
    }

    let token =await jwt.sign({ userId: user._id }, "uttammaurya", {
      expiresIn: "365d",
    });

    res.status(200).json({
      message: `Welcome ${user.name}`,
      token,
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
