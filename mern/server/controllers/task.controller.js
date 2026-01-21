const Task=require('../modals/Task')

exports.createTask=async(req,res)=>{
    try{
        
    /* const {title,description,status}=req.body
       const userr=req.user.Id; */
    // Both can be used for destructuring.
    // But here we are directly using req.body and req.user.Id

    const newtask=await Task.create({
        title:req.body.title,
        description:req.body.description,
        status:req.body.status||'pending',
        user:req.user.id,
    })
    res.status(201).json({msg:'Task created successfully',task:newtask})
}
catch(err){
    console.error(err)
    res.status(500).json({msg:'Server error'})
}
}