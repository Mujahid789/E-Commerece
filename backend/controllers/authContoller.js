import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken'


export const registerController = async(req,res) =>{    
    try {
        const {name, email, password, phone, address} = req.body;
        if(!name){
            return res.send({message: "user name required"})
        }
        if(!email){
            return res.send({message: "email is required"})
        }
        if(!password){
            return res.send({message: "password is required"})
        }
        if(!phone){
            return res.send({message: "phone is required"})
        }
        if(!address){
            return res.send({message: "address required"})
        }

        // checking whether user record is already available or not ?
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success: true,
                message: "user already exists"
            })
        }
        // replacing original password with hashed password in DB
        let updatedPassword = await hashPassword(password)
        const user = await new userModel({name, email, phone, address, password:updatedPassword}).save();

        res.status(201).send({
            success: true,
            message: "user created successfully",
            user
        })
    
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })

    }

}

// login controller 
export const loginController = async(req,res) =>{
    try {
        
        // Destructure email and password from user
        const {email, password} = req.body;

        // checking if no email and no password is provided by the user
        if(!email || !password){
            return res.send({message: "email or password required"})
        }

        // Check Database on the basis of email address whether a specific user is already available or not 
        const user = await userModel.findOne({email});

        if(!user){            
            return res.send({message: "email not found"})
        }

        // if user is already available, comparing the plaint password with hashedpassword available in user object
        const match = await comparePassword(password,user.password)

        if(!match){
            return res.send({message: "password incorrect"})
        }

        // if email and password is correct, return jwt token
        const token = JWT.sign({_id: user._id}, process.env.JWT_Key,{expiresIn: '7d'})

        res.status(200).send({
            success: true,
            message: "loggined successfully...!",
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            },
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "invalid login detail",
            error
        })
        
    }

}

// ===============================
export const dummyController = (req,res) =>{
    res.send("Access granted to Protected Routes")    
}



