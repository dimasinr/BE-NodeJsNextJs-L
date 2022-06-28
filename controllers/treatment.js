import Treatment from "../models/Treatment.js";
import BeautyBar from "../models/BeautyBar.js";
import { createError } from "../utils/error.js";

export const createTreatment = async (req, res, next) => {
    const beautyBarId = req.params.beautybarid;
    const newTreatment = new Treatment(req.body)

    try{
        const savedTreatment = await newTreatment.save()
        try{
            await Treatment.findByIdAndUpdate(beautyBarId, {
                $push: { treatments: savedTreatment._id }
            });
        }catch(err){
            next(err)
        }
        res.status(200).json(savedTreatment)
    }catch(err){
        next(err)
    }
}

export const updateTreatment = async (req, res, next) =>{
    try{
        const updatedTreatment = await Treatment.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true }
            );
        res.status(200).json(updatedTreatment);
    }catch(err){
        next(err);
    }
}

export const deleteTreatment = async (req, res, next) =>{
    try{
        await Treatment.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json("Treatment Has Been Deleted");
    }catch(err){
        next(err);
    }
}

export const getIdTreatment = async (req, res, next) =>{
    try{
        const treatments = await Treatment.findById(
            req.params.id
            );
        res.status(200).json(treatments);
    }catch(err){
        res.status(500).json(err);
    }
}

export const getAllTreatment = async (req, res, next) =>{
    // const failed = true;
    
    // if (failed) return next(createError(401, "You are not authenticated!"));

    try{
        const treatments = await Treatment.find();
        res.status(200).json(treatments);
    }catch(err){
        next(err);
    }
}