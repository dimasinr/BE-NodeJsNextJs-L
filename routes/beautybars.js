import express from "express";
import { createBeautyBar, deleteBeautyBar, getAllBeautyBar, getIdBeautyBar, updateBeautyBar } from "../controllers/beautybar.js";
import BeautyBar from "../models/BeautyBar.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createBeautyBar );

//UPDATE
router.put("/:id", verifyAdmin, updateBeautyBar);

// DELETE
router.delete("/:id", verifyAdmin, deleteBeautyBar);

//GET
router.get("/:id", getIdBeautyBar); 

//GET ALL
router.get("/", getAllBeautyBar); 

export default router;