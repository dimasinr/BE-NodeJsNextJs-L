import express from "express";
import { createCity, deleteCity, getAllCity, getIdCity, updateCity } from "../controllers/city.js";
// import City from "../models/City.js";
// import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCity );

//UPDATE
router.put("/:id", verifyAdmin, updateCity);

// DELETE
router.delete("/:id", verifyAdmin, deleteCity);

//GET
router.get("/:id", getIdCity); 

//GET ALL
router.get("/", getAllCity); 

export default router;