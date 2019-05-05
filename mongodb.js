// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient;

// const ObjectID=mongodb.ObjectID;
const {MongoClient,ObjectID} =require('mongodb')
const connectionURL='mongodb://127.0.0.1:27017';
const databaseName='task-manager';
// const id=new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{

    if(error){
        return console.log('unable to connect')
    }
    const db=client.db(databaseName)
//     db.collection('users').insertOne({
//       //  _id:id,
//         name:'srinath 2',
//         age:27
//     },(error,result)  =>{

//         if(error){
//             return console.log('unable to fetch data')
//         }
//         console.log(result.ops)
//     })
// //     db.collection('users').insertMany([
// {
//     name:'sri1',
//     age:10
// },
// {
//     name:'sri2',
//     age:11
// }

// ],(error,result)  =>{

//         if(error){
//             return console.log('unable to fetch data')
//         }
//         console.log(result.ops)
// })



// db.collection('users').findOne({_id:new ObjectID('5cc467dc3f054e352c9ada1d')},(error,user)=>{
//     if(error){
//       return  console.lop(error)
//     }
//     console.log(user)
// })



// db.collection('users').find({age:27}).toArray((error,users)=>{
// console.log(users)
// })
// db.collection('users').find({age:27}).count((error,count)=>{
//     console.log(count)
//     })
// db.collection('users').updateOne({
//     _id:new ObjectID('5cc215042cf55e04180ef088')},{
//         $inc:{
//             age:1
//         }
//     }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// // })
// db.collection('users').updateMany({
//     name:'ravi1'
// },{
//     $set :{
//         name:'ravi2'
//     }
// }).then((data)=>{
//     console.log(data)}).catch((error)=>{
//         console.log(error)
//     })

// db.collection('users').deleteMany({
//     age:28
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })
db.collection('users').deleteOne({
    name:'srinath'
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

})
