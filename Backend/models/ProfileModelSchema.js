const mongoose=require('mongoose')

const Schema=mongoose.Schema
const ProfileSchema=new Schema(
    {
        Name:{
            type:String,
            required:true

        },
        Email:{
            type:String,
            required:true
        },
        Address:{
            type:String ,
            required:true

        },
        DOB:{
            type:String,
            required:true

        },
        About:{
            type:String,
            required:true

        },
        Gender:{
            type:String,
            required:true

        },
        WhatsappNo:{
            type:String,
            required:true

        },
        Food:{
            type:String,
            required:true

        },
        ProfilePic:{
            type:String,
            required:true

        },
        Country:{
            type:String,
            required:true

        },
        ratings:{
            type:Array,
            default:0
        }


    },{collection:'Profile-data' }
)

module.exports=mongoose.model("Profile",ProfileSchema)
