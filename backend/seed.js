import bcrypt from 'bcrypt'
import User from './Models/User.js'
import connectDB from './db/connection.js'

const register = async () => {
    try{
        connectDB()
        const hashPassword = await bcrypt.hash('admin',10)
        const newUser = new User({
            name:"admin",
            email:"chantellemphusu@gmail.com",
            password: hashPassword,
            address: "admin address",
            role:"admin"
        })

        await newUser.save();
        console.log("admin user created successfully")
    }catch(error){

    }
}

register();