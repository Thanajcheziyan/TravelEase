const mongoose=require('mongoose')

const Schema=mongoose.Schema
const HostSchema=new Schema(
    {
        City:{
            type:String,
            required:true

        },
        Location:{
            type:String,
            required:true
        },
        About:{
            type:String ,
            required:true
        },
        profileid:{
            type:String,
            required:true
        }
    },{collection:'Host' }
)

module.exports=mongoose.model("Host",HostSchema)
