import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/User.js';

const login = async (req, res) => {
    try{
        const {email, password} = req.body

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({success: false, message:"User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({success: false, message:"Invalid credentials"})
        }
        const token = jwt.sign({userId: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'})
        res.status(200).json({success: true, token, role: user.role})
    }catch(error){
        console.error("Login error", error.message)
        res.status(500).json({success: false, message:"Server error"})
    }
}

export {login};