const jwt=require('jsonwebtoken')

exports.protect=async(req,res,next)=>{
    const token=req.headers.authorization.split(' ')[1];

    if(!token ){
        res.status(401).json({msg:'No token,authorization denied'})
    }
    try{
        const decoded=jwt.verify(token,process.env.Jwt_Secret)
        req.user=decoded
        next()
    }
    catch(err){
        console.error(err)
        res.status(401).json({msg:'Token is not valid'})
    }

}