import express from "express";
import  {createReceipe, getAllReceipes,getReceipeById,updateReceipe,deleteReceipe}  from "../Controllers/receipeController.js";



const router = express.Router();

router.post("/createReceipe", createReceipe)
router.get("/getAllReceipes", getAllReceipes)
router.get("/getReceipeById/:id", getReceipeById)
router.put("/updateReceipe/:id", updateReceipe)
router.delete("/deleteReceipe/:id", deleteReceipe)



export default router;