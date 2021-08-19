const express = require('express');
const mongoose = require('mongoose');
const schema =mongoose.Schema;
const Studentinstituteschema=new schema(
    {
        name: {
            type:String,
            required:true,
            trim:true
        },
        
        email:{
            type: String,
            required:true,
           
        },
        studentId:{
            type:String,
            required: true,
           
    
        },
        
        Studentclass:{
            type:Number,
            required:true,
           
        },
        subject: {
            type: String,
            required:true,
            trim:true
        },
        // offer:{ type:Number},
        
        // productPictures:[
        //     { img: {type: String}}
        // ],
        // name:[
        //     {
        //         userId:{type :mongoose.Schema.Types.ObjectId, ref: 'User'},
        //         review: String
        //     }
        // ],
       // classid:{type:mongoose.Schema.Types.ObjectId,ref :'Catogory' },
       // name:{type:mongoose.Schema.Types.ObjectId,ref :'User' },
        // createBy:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true },
        // updatedAt:Date,
        
        },{ timestamps: true})


const studentforinstitute =mongoose.model("Studentforinstitute",Studentinstituteschema);
module.exports=studentforinstitute;
//module.exports=
// exports.getclassfees=(req,res)=>
// {
//     classfees.find({}).exec((error,classfees)=>
//     {
//         if(error) return res.status(400).json({error});
//         if(classfees){
//             const fees=createCatogories(classfees)
//             return res.status(201).json({fees});
//         }
//     });
// }