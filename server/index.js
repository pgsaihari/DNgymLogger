import dotenv from "dotenv"
dotenv.config();
import express from "express"
import mongoose from "mongoose"
// * importing router
import { GymRouter } from "./routes/Gym-routes.js";
const app=express()
const PORT=3000
app.use(express.json())

// router middleware
app.use("/api/DataNeuron",GymRouter)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected to gym database")
    app.listen(PORT,()=>{
        console.log("SERVER CONNECTED TO http://localhost:3000")
    })
}).catch((err)=>{
    console.log("Something went wrong")
    console.log(err.message)
    
})

