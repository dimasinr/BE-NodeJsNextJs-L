import express from "express";
import { createCategory, deleteCategory, getAllCategory, getIdCategory, updateCategory } from "../controllers/Category.js";
import Category from "../models/Category.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCategory );

//UPDATE
router.put("/:id", verifyAdmin, updateCategory);

// DELETE
router.delete("/:id", verifyAdmin, deleteCategory);

//GET
router.get("/:id", getIdCategory); 

//GET ALL
router.get("/", getAllCategory); 

export default router;