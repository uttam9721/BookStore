import jwt from "jsonwebtoken";
import { User } from '../models/UserModel.js'

export const Authenticated = async (req, res, next) => {
  try {
    const token = req.header("Auth");
    if (!token) return res.status(401).json({ message: "Login first" });

    const decoded = jwt.verify(token,"!@#$%^&*()");
    
    const id = decoded.userId;
    const user = await User.findById(id);

    if (!user) return res.status(404).json({ message: "User not exist" });

    req.user = user;
    next();

  } catch (err) {
    return res.status(401).json({ message: "Invalid token", error: err.message });
  }
};