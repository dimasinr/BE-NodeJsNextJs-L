import express from "express";
import { createTreatment, deleteTreatment, getAllTreatment, getIdTreatment, updateTreatment } from "../controllers/treatment.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createTreatment );

//UPDATE
router.put("/:id", verifyAdmin, updateTreatment);

// DELETE
router.delete("/:id", verifyAdmin, deleteTreatment);

//GET
router.get("/:id", getIdTreatment); 

//GET ALL
router.get("/", getAllTreatment); 

export default router