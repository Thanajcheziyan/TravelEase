const mongoose=require('mongoose')

const Schema=mongoose.Schema
const CarSchema=new Schema(
    {
        Departure:{
            type:String,
            required:true

        },
        Destination:{
            type:String,
            required:true
        },
        Date:{
            type:String ,
            required:true
        },
        profileid:{
            type:String,
            required:true
        }
    },{collection:'Car' }
)

module.exports=mongoose.model("car",CarSchema)
