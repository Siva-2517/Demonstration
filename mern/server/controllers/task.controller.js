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
        user:req.user.Id,
    })
    res.status(201).json({msg:'Task created successfully',task:newtask})
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
   }
}

exports.getTasks=async(req,res)=>{
    try{
        const tasks=await Task.find({user:req.user.Id})
        return res.status(200).json({
           msg: 'Tasks fetched successfully',
           count: tasks.length,
           tasks
    })   
 }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }   
}

exports.getOneTask=async(req,res)=>{
    try{
        const task=await Task.findById({
            _id:req.params.id,
            user:req.user.Id
        })
        res.status(200).json({msg:'Task fetched successfully',task:task})
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
}

exports.updateTask=async(req,res)=>{
    try{
        const updatedTask=await Task.findByIdAndUpdate(
            {_id:req.params.id,
            user:req.user.Id},
            {
                title:req.body.title,
                description:req.body.description,
                status:req.body.status
            },{new:true}
        )
        if(!updatedTask){
            return res.status(404).json({msg:'Task not found'})
        }
        res.status(200).json({msg:'Task updated successfully',task:updatedTask})
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
}

exports.deleteTask=async(req,res)=>{
    try{
        const deletedTask=await Task.findByIdAndDelete({
            _id:req.params.id,
            user:req.user.Id
        })
        if(!deletedTask){
            return res.status(404).json({msg:'Task not found'})
        }
        res.status(200).json({msg:'Task deleted successfully'})
    }
    catch(err){
        console.error(err)
        res.status(500).json(err)
    }
}

