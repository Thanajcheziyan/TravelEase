require('dotenv').config()
//importing packages
const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const cloudinary = require('cloudinary').v2;

//importing models
const Car=require('./models/CarModel')
const Host=require('./models/HostModel')
const User=require('./models/TravelEaseModel')
const Puser=require('./models/ProfileModelSchema')
const Noti=require('./models/NotificationModel')
const jwt=require('jsonwebtoken')

//using imported
app.use(cors())
app.use(express.json())

//making connections
mongoose.connect(process.env.MONGO_URI)

// cloudinary Configuration 
cloudinary.config({
    cloud_name: "dkuuta6c3",
    api_key: "556275498784817",
    api_secret: "-BeFfQa2ser7oNd682AONIkGgQY"
  });


//registration

app.post('/api/Register',async (req,res)=>{
    
    try {
        const user=await User.create({
            Name:req.body.Name,
            Email:req.body.Mobileno,
            Password:req.body.Password})
        
    } catch (error) {
        res.json(error)
        
    }
    res.json({status:'ok'})
})

//login
app.post('/api/Login',async(req,res)=>{
    
    const user= await User.findOne({Email:req.body.Mobileno,Password:req.body.Password})
 if(user){
    return res.json({user});
 }
     
 
})

//profile Creation
app.post('/api/CProfile',async (req,res)=>{
    
    try {
        const user=await Puser.create({
            Name:req.body.name,
            Email:req.body.email,
            Address:req.body.address,
            DOB:req.body.dob,
            About:req.body.about,
            Gender:req.body.gender,
            WhatsappNo:req.body.wno,
            Food:req.body.food,
            ProfilePic:req.body.prourl,
            Country:req.body.country,
            ratings:req.body.rat
        })
        
    } catch (error) {
        res.json(error)
        
    }
    //res.json({status:'ok'})
})
//profile visit
app.post('/api/Profile',async(req,res)=>{
    
    const user= await Puser.findOne({
        Email:req.body.eemail})
 
     
 if(user){
    
     
     return res.send({user})
    
 }else{
     console.log("false")
 }
})

//host
app.post('/api/Host',async (req,res)=>{
    
    try {
        const user=await Host.create({
            City:req.body.city,
            Location:req.body.location,
            About:req.body.about,
        profileid:req.body.Profile})
        
    } catch (error) {
        res.json(error)
        
    } 
    res.json({status:'ok'})
})

//host search
app.post('/api/HostSearch',async(req,res)=>{
    
    const user= await Host.find({City:req.body.city})
    if(user){
        
        
        return res.json({user})
       
    }else{
        console.log("false")
    }
   })
 


//car 
app.post('/api/Car',async (req,res)=>{
    
    try {
        const user=await Car.create({
            Departure:req.body.from,
            Destination:req.body.to,
            Date:req.body.dat,
        profileid:req.body.Profile})
        
    } catch (error) {
        res.json(error)
        
    }
    res.json({status:'ok'})
})

//search car

app.post('/api/CarSearch',async(req,res)=>{
    
    const user= await Car.find({Departure:req.body.from,Destination:req.body.to,date:req.body.dat})
    if(user){
        
        
        return res.json({user})
       
    }else{
        console.log("false")
    }
   })

//notification

app.post('/api/CNotification',async (req,res)=>{
    
    try {
        const user=await Noti.create({
            From:req.body.from,
            To:req.body.to,
            Type:req.body.type,
        Service:req.body.service})
    
    } catch (error) {
        res.json(error)
        
    }
    res.json({status:'ok'})
})
//get notification
app.post('/api/Notification',async(req,res)=>{
    
    const user= await Noti.find({To:req.body.to}).sort({_id:-1})
    if(user){
        
        
        return res.json({user})
       
    }else{
        console.log("false")
    }
   })
//update notification
   app.post('/api/uNotification',async(req,res)=>{
    
    const user =await Noti.findOneAndUpdate({_id:req.body.too},{Type:"4"})
   })

   //delete notification

   app.post('/api/DNotification',async(req,res)=>{
    
    const user =await Noti.findOneAndDelete({_id:req.body.too})
   })
//rating


//starting
app.listen(4000,()=>{
    console.log("Server Started")
})