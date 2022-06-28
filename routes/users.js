import express from "express";
import { deleteUser, getAllUser, getIdUser, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("hello user, you are logged in")
// });

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("hello user, you are logged in and u can deleted account")
// });

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("hello admin, you are logged in and u can deleted all accounts")
// });

//UPDATE
router.put("/:id", verifyUser, updateUser );

//DELETE
router.delete("/:id", verifyUser, deleteUser );

//GET
router.get("/:id", verifyUser, getIdUser ); 

//GET ALL
router.get("/",verifyAdmin, getAllUser ); 

export default router