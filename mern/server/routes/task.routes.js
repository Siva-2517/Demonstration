const express = require('express')
const router = express.Router()

const {createTask,getTasks,getOneTask,updateTask,deleteTask}=require('../controllers/task.controller')
const {protect}=require('../middlewarre/auth.middleware')


router.post('/task',protect,createTask)
router.get('/getTask',protect,getTasks)
router.get('/getTask/:id',protect,getOneTask)
router.put('/updateTask/:id',protect,updateTask)
router.delete('/deleteTask/:id',protect,deleteTask)

module.exports=router;