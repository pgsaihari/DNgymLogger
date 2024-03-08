import express from "express"
import { addData, getData, updateData } from "../controllers/gymControllers.js"
const router=express.Router()

// router.get('/test',(req,res)=>{
//     res.send("test route")
// })
router.get("/get",getData)
router.post('/add',addData)
router.put('/update/:id',updateData)

export {router as GymRouter}