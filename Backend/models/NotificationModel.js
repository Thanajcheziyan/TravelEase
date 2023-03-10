const mongoose=require('mongoose')

const Schema=mongoose.Schema
const notSchema=new Schema(
    {
        From:{
            type:String,
            required:true

        },
        To:{
            type:String,
            required:true
        },
        Type:{
            type:String ,
            required:true
        },
        Service:{
            type:String,
            required:true
        }
    },{ timestamps: true }
)

module.exports=mongoose.model("Notification",notSchema)
