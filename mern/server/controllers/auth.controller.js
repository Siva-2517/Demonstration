const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../modals/User')



//const register = async(req,res)=>{
exports.register=async(req,res)=>{
    const {name,email,password}=req.body
    const exist=await User.findOne({email})
    if(exist){
        res.status(400).send({msg:'User already exists'})
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const newUser=await User.create({
        name,
        email,
        password:hashedPassword
    })
    res.status(201).json({msg:'User registered successfully',user:newUser})
 
}

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email})  
        if(!user){
            return res.status(400).json({msg:'Invalid email or No user found'})
        }
        const isMatch=await bcrypt.compare(password,
           user.password)
        if(!isMatch){
            return res.status(400).json({msg:'Invalid credentials'})
        }
        const token=jwt.sign(
            {Id:user._id},
            process.env.Jwt_Secret,
            {expiresIn:'1h'}
        )
        //res.status(200).json({msg:'Login successful'}
        res.json({token})
        
    }
    catch(err){
        console.error(err)
        res.status(500).json({msg:'Server error'})
    }
}
//module.exports=register;
//It is Overall Exported as a Function.Not Suitable for Multiple Exports.