import mongoose from "mongoose";

const gymSchema = new mongoose.Schema({
    workout: {
        type: String,
        required: true
    },
    
    weight: {
        type: Number,
        required: true
    },
    add_count: {
        type: Number,
        default: 0,
        required: true
    },
    update_count: {
        type: Number, 
        default: 0,
        required: true
    }
}, {timestamps: true});  

const Gym = mongoose.model("Gym", gymSchema);
export default Gym;
