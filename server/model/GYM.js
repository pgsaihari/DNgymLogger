import mongoose from "mongoose"
const gymSchema=new mongoose.Schema({
    workout:{
        type:String,
        required
    },
    completed:{
        type:Boolean,
        required,

    },
    weight:{
        type:Float,
        required

    },
    add_count:{
    type:Number,
    default:0,
    required
   },
   update_Count:{
    type:number,
    default:0,
    required
   }

},{timeStamps:true})
const Gym= mongoose.model("Gym",gymSchema)
export default Gym;