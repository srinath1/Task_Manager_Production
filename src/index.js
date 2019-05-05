const express=require('express');
require('./db/mongoose');

const userRouter=require('./routers/user')
const TaskRouter=require('./routers/task')

const app=express();
// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('Get request is disabled')
//     }else{
//         next()
//     }

// })
// app.use((req,res,next)=>{

//     res.status(503).send('site is under maintenaNCE MODE')
// })

const port=process.env.PORT ||3000;
app.use(express.json())
app.use(userRouter)
app.use(TaskRouter)



app.listen(port,()=>{
    console.log('Port is listening at 3000')
})
const Task = require('./models/tasks')
const User = require('./models/user')

 const main=async()=>{
// //     // const task=await Task.findById('5ccb33f0cc13130ad817ddbe')
// //     // await task.populate('owner').execPopulate()
// //     // console.log(task.owner)
//     const user=await User.findById('5ccb5054748b8108c059df88')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
 }
 const multer=require('multer');
 const upload=multer({
     dest:'images',
     limits:{
         fileSize:2000000
     },
     fileFilter(req,file,cb){

        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('pls upload word'))
        }
        cb(undefined,true)
     }
 })

 const errorMiddleware=(req,res,next)=>{
     throw new Error('from my middleware')
 }
 app.post( '/upload',upload.single('upload'),(req,res)=>{
    res.send()

 },(error,req,res,next)=>{

    res.status(400).send({error:error.message})
 })


 main()