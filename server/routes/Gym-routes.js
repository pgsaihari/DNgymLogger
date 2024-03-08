import express from "express"
import { addData } from "../controllers/gymControllers.js"
const router=express.Router()

// router.get('/test',(req,res)=>{
//     res.send("test route")
// })

router.post('/add',addData)

export {router as GymRouter}